import React, {useEffect, useState} from 'react';
import {deleteChartUsingPost, listMyChartByPageUsingPost} from "@/services/biPlatform/chartController";
import {Avatar, Button, Card, Divider, List, message, Result} from "antd";
import ReactECharts from "echarts-for-react";
import {useModel} from "@@/exports";
import Search from "antd/es/input/Search";
import {SmileOutlined} from "@ant-design/icons";
import {setHandleMsg} from "@/webSocket"


/**
 * 添加图表页面
 * @constructor
 */
const MyChart: React.FC = () => {

  const initPage = {
    currentPage:1,
    pageSize:20,
  }
  const [page,setPage] = useState<API.ChartQueryRequest>({...initPage});
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {};
  const [loading,setLoading] = useState<boolean>(true);
  const [total,setTotal] = useState<number>(0);
  const [list,setList] = useState<API.Chart[]>();
  const [hide,setHide] = useState<boolean>(true);

  //加载数据
  const loadData = async () => {
    setLoading(true)
    try {
      const res = await listMyChartByPageUsingPost(page);
      if(res.data){
        setList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        if(res.data.records){
          res.data.records.forEach(data => {
            const chartOption = JSON.parse(data.genChart ?? '{}');
            chartOption.title = undefined;
            data.genChart = JSON.stringify(chartOption);
            data.createTime = new Date(data.createTime).toLocaleString();
          })
          res.data.records?.reverse();
        }else{
          message.error('获取图表失败')
        }
      }
    } catch (e:any) {
      message.error("获取我的图表失败" + e.message)
    }
    setLoading(false)
  }

  //删除图表
  const deleteChart = async (id:number)=>{
    let deleteRequest:API.DeleteRequest = {id: id};
    try {
      const res = await deleteChartUsingPost(deleteRequest);
      if(res.data === true){
        loadData()
      }else{
        message.error("删除图表失败，请重试！")
      }
    } catch (e) {
      message.error("删除图表失败" + e.message)
    }
  }

  //加载数据
  useEffect(()=>{
    loadData()
  },[page])

  //创建websocket连接后
  useEffect(()=>{
    //决定数据处理
    setHandleMsg(()=>{
      loadData()
    })
  },[])

  return (
    <div className="my-chart-page">
      <div>
        <Search
          placeholder="请输入图表名称"
          enterButton
          loading={loading}
          onSearch={(value)=>{
            setPage({
              ...initPage,
              name:value
            })
          }}
        />
      </div>
      <div className="margin-16"/>
      {
        <div style={{display:"flex",justifyContent:"right",opacity:0.5}}>
          共计: {total}个图表，最多20个图表
        </div>
      }
      <div className="margin-16"/>
      <List
        grid={{
          gutter:16,
          xs:1,
          sm:1,
          md:1,
          lg:2,
          xl:2,
          xxl:2
        }}
        // pagination={{
        //   onChange: (page,pageSize) => {
        //     setPage({
        //       ...initPage,
        //       currentPage:page,
        //       pageSize
        //     })
        //   },
        //   pageSize: 20,
        // }}
        loading={loading}
        dataSource={list}
        renderItem= { (item) => (
          <List.Item key={item.id}>
            <Card style={{width:'100%',minHeight:'434px'}}>
              <List.Item.Meta
                avatar={<Avatar src={currentUser && currentUser.avatarUrl} />}
                title={<a href={item.href}>{item.title}</a>}
                description={
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>{item.chartType ? '图表类型' + item.chartType:undefined}</div>
                  <div>{item.createTime}</div>
                  <div><Button type="primary" onClick={()=>{deleteChart(item.id)}}>删除</Button></div>
                </div>
              }
              />
              <>
                {
                  item.status==='success' &&
                  <>
                    <div style={{marginBottom:16}} />
                    <p>{'分析目标：' + item.goal}</p>
                    <div style={{marginBottom:16}}/>
                    <ReactECharts option={item.genChart && JSON.parse(item.genChart)} />
                    <Divider>结论</Divider>
                    <div>{item.genResult}</div>
                  </>
                }
                {
                  item.status==='wait' && <>
                    <Result
                      status="warning"
                      title="请稍微等待一下"
                    />
                  </>
                }
                {
                  item.status==='failed' && <>
                    <Result
                      status="error"
                      title="生成失败，请重试"
                    />
                  </>
                }
                {
                  item.status==='running' && <>
                    <Result
                      icon={<SmileOutlined />}
                      title="正在生成中"
                    />
                  </>
                }
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyChart;
