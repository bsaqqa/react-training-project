import React from 'react';

import { Typography, Button } from 'antd';

const { Title } = Typography;

export default function SideMenu({title, children, onClose}) {
  return (
    <div className="sideMenu">
        <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
            {title && <Title level={2}>{title} </Title>}
            <Button onClick={onClose} className="ant-rounded-full btn-close">X</Button>
        </div>
        <div style={{flex:1}}>
            {children}
        </div>
    </div>
  );
}
