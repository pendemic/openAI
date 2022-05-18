import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import 'antd/dist/antd.css';
import { Input, Button, Menu, Dropdown, message } from 'antd';
import {useState} from 'react';
import Response from './response/Response';
const { TextArea } = Input;
function App() {
  const [prompt, setPrompt] = useState();
  const onClick = ({ key }) => {
    setPrompt(`${key}`);
  };
  console.log(prompt);
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
  return (
    <div className="App">
        <Header/>
        <div className="prompt">
          <span className="promptText">Enter Prompt:</span>
          <Dropdown overlay={menu} >
          <a style={{margin: '5%'}} onClick={e => e.preventDefault()}>
          Hover for options</a>
          </Dropdown>
          <TextArea onChange={v => setPrompt(v.target.value)} value={prompt} rows={8}/>
        </div>
        <div className="response">
          <Response prompt={prompt}/>
        </div>
    </div>
  );
}

export default App;
