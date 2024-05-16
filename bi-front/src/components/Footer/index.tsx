import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: '智能数据分析平台',
          title: '智能数据分析平台',
          href: 'https://github.com/KMakise123/bi-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/KMakise123/bi-backend',
          blankTarget: true,
        },
        {
          key: 'bi-platform',
          title: 'bi-platform',
          href: 'https://github.com/KMakise123/bi-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
