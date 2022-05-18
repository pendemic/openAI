import React, {useState} from 'react';
import './response.css';
import { Button, Card, List } from 'antd';
export default function ResponseList({item}) { 
    console.log(item);
  return (
      <>
              <Card title={item} style={{ width: '100%' }}>
                <p>{item}</p>
              </Card>
    </>
  )
}
