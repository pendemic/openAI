import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import {useState} from 'react';
import Response from './response/Response';
const { TextArea } = Input;
function App() {
  const [prompt, setPrompt] = useState();
  return (
    <div className="App">
        <Header/>
        <div className="prompt">
          <span className="promptText">Enter Prompt:</span>
          <TextArea onChange={v => setPrompt(v.target.value)} rows={8}/>
        </div>
        <div className="response">
          <Response prompt={prompt}/>
        </div>
    </div>
  );
}

export default App;
