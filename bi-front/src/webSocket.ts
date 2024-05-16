
let lockReconnect = false; //避免ws重复连接
let isReconnect = true; //是否重连
let ws = null; // 判断当前浏览器是否支持WebSocket
let token = localStorage.getItem('token')
const wsUrl = WS_URL +token;


export const createWebSocket = (wsUrl) => {

  lockReconnect = false; //避免ws重复连接
  isReconnect = true; //是否重连
  try {
    if ('WebSocket' in window) {
      ws = new WebSocket(wsUrl);
    }
    initEventHandle();
  } catch (e) {
    if (isReconnect) {
      reconnect(wsUrl);
    }
    console.log(e);
  }
}

//处理消息
let handleMsg = () => {

}

export const setHandleMsg = (newFunction:()=>void) => {
  handleMsg = newFunction;
}

const initEventHandle = () => {

  ws.onclose = function () {
    // console.log("连接关闭!" + new Date().toLocaleTimeString());
    if (isReconnect) {
      reconnect(wsUrl);
    }
  };

  ws.onerror = function () {
    //主动关闭连接
    websocketClose();
    if (isReconnect) {
      reconnect(wsUrl);
    }
  };

  ws.onopen = function () {
    heartCheck.reset().start(); //心跳检测重置
    // console.log("连接成功!" + new Date().toLocaleTimeString());
  };

  ws.onmessage = function (event) { //如果获取到消息，心跳检测重置
    heartCheck.reset().start(); //拿到任何消息都说明当前连接是正常的
    let eventData = event.data;
    if(eventData !== 'check'){
      handleMsg()
    }
  };
}

//重连
const reconnect = (wsUrl) => {
  if (lockReconnect) return;
  lockReconnect = true;
  setTimeout(function () { //没连接上会一直重连，设置延迟避免请求过多
    createWebSocket(wsUrl);
    lockReconnect = false;
  }, 2000);
}

//心跳检测
const heartCheck = {
  timeout: 5000, //1分钟发一次心跳
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function () {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function () {
    let self = this;
    this.timeoutObj = setTimeout(function () {
      //在连接状态下才通信
      if(ws?.readyState===1) {
        ws?.send("check")
        self.serverTimeoutObj = setTimeout(function () {
          ws?.close()
        }, self.timeout)
      }
    }, this.timeout)
  }
}


//数据发送
export const websocketSend = (agentData) => {
  if(ws?.readyState === 1) {
    ws?.send(agentData);
  }
}

//主动关闭连接
export const websocketClose = () => {
  // console.log("主动关闭连接!");
  isReconnect = false
  ws?.close()
  ws = null
  lockReconnect = false
}

// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
// 但onbeforeunload是关闭窗口或刷新的时候就会触发，所以要对这两种行为进行区分
//通过判断窗口的大小进行区分，但不好用，换一种方法
//浏览器特性performance.navigation
window.onbeforeunload = function (event) {
  //无论关闭窗口和刷新都要关闭连接
  ws.close();
}

// 刷新就重连，不刷新就是关闭窗口
if (window.performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  // 刷新页面后需要重连
  let currentUrl = location.href;
  let pathname = new URL(currentUrl).pathname
  if (isReconnect && pathname == '/myChart' && localStorage.getItem('token') && localStorage.getItem('userInfo')) {
    reconnect(wsUrl);
  }
}else{
  //关闭窗口
  localStorage.clear()
}


