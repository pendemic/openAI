import React, {useState, useEffect} from 'react';
import './response.css';
import ResponseList from './ResponseList';
import { Button, Card, List } from 'antd';
export default function Response({prompt, reversedList}) {    
  return (
      <>
     <List
      header={<h2 className="responseTitle">Responses</h2>}
      dataSource={reversedList}
      size="small"
      style={{width: '90%'}}
      renderItem={item => (
            <ResponseList item={item}/>
      )}
    />
    </>
  )
}
