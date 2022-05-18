import React, {useState, useEffect} from 'react';
import './response.css';
import ResponseList from './ResponseList';
import { Button, Card, List } from 'antd';
export default function Response({prompt}) {
    var responseList = {};
    const [list, setList] = useState([]);
    const data = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
    function fetchResponse(){
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data),
   }).then(response => response.json()
   ).then(data => responseList['response'] = data.choices[0].text).then(data => responseList['prompt'] = prompt);
    setList(list => [...list, responseList]);
    console.log(list);
    }
           
  return (
      <>
        <Button  onClick={() => fetchResponse()}className="submitBtn" ghost>
          Submit
        </Button>
     <List
      header={<h2 className="responseTitle">Responses</h2>}
      dataSource={list}
      size="small"
      style={{width: '60%'}}
      renderItem={item => (
        <List.Item>
            <ResponseList item={item}/>
        </List.Item>
      )}
    />
    </>
  )
}
