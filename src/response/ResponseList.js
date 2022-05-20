import React, {useState} from 'react';
import './response.css';
import { Button, Card, List } from 'antd';
import Typist from "react-typist";
export default function ResponseList({item}) { 
    console.log(item);
  return (
      <>
      <List.Item>
      <Card title={`Prompt: ${item.prompt == null? 'Please try again': item.prompt}`} style={{ width: '100%' }}>
                <Typist><Typist.Delay ms={500} />
                  {`Response: ${item.response == null? 'Please try again': item.response}`}</Typist>
              </Card>
      </List.Item>

    </>
  )
}
