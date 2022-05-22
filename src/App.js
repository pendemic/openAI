import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Loading from './loading/Loading';
import 'antd/dist/antd.css';
import { Input, Button, Menu, Dropdown, message } from 'antd';
import {useState, useEffect} from 'react';
import Response from './response/Response';
const { TextArea } = Input;
function App() {
  const [prompt, setPrompt] = useState();
  const onClick = ({ key }) => {
    setPrompt(`${key}`);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Write a poem about food',
          key: 'Write a poem about food',
        },
        {
          label: 'Tell me a joke',
          key: 'Tell me a joke',
        },
        {
          label: 'What is the answer to the universe?',
          key: 'What is the answer to the universe?',
        },
      ]}
    />
  );
  var responseList = {};
  const [list, setList] = useState([]);
  const [reversedList, setReversedList] = useState([]);
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
  setReversedList(list.reverse());
  }
  return loading === false? (
    <div className="App">
        <Header/>
        <div className="title">
          <span className="titleText">
            AI Chat
          </span>
        </div>
        <div className="prompt">
          <span className="promptText">Enter Prompt:</span>
          <Dropdown overlay={menu} >
          <a style={{margin: '5%'}} onClick={e => e.preventDefault()}>
          Hover for options</a>
          </Dropdown>
          <TextArea onChange={v => setPrompt(v.target.value)} value={prompt} rows={8} placeholder="Use the prompt textbox to ask the AI for anything you'd like!"/>
          <Button  onClick={() => fetchResponse()}className="submitBtn" ghost>
          Submit
        </Button>
        </div>
        <div className="response">
          <Response prompt={prompt} reversedList={reversedList}/>
        </div>
    </div>
  ):(
    <Loading/>
  )
}

export default App;
