import { QuestionCircleOutlined } from '@ant-design/icons';
import '@umijs/max';
import {Popover} from "antd";
export type SiderTheme = 'light' | 'dark';
export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        //打开文档
        window.open('https://kmakise123.github.io/Bi-Platform-Doc/code-roadmap-template/');
      }}
    >
      <Popover content="开发文档">
        <QuestionCircleOutlined/>
      </Popover>
    </div>
  );
};
