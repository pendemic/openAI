import React, {useState} from 'react';
import './response.css';
import { Button, Card } from 'antd';
import { Configuration, OpenAIApi } from "openai";
export default function Response({prompt}) {
    const [response, setResponse] = useState('');
    console.log(response);
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
   ).then(data => setResponse(data.choices[0].text));
    }       
  return (
      <>
        <Button  onClick={() => fetchResponse()}className="submitBtn" ghost>
          Submit
        </Button>
    <h2 className="responseTitle">Responses</h2>
    <div className='responses'>
    <Card title={prompt} style={{ width: '60%' }}>
      <p>{response}</p>
    </Card>
    </div>
    </>
  )
}
