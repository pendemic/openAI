import React from 'react'
import './header.css';
import {GithubOutlined, GlobalOutlined, UserOutlined} from '@ant-design/icons';
export default function Header() {
  return (
    <div className="header">
        <div className="icons">
            <a href="https://github.com/pendemic/openAI" style={{marginRight: '5%'}} target="_blank" ><GithubOutlined style={{color: 'white', fontSize: '40px'}} /></a>
            <a href="https://www.mikeoskinner.com" style={{marginRight: '5%'}} target="_blank"><GlobalOutlined style={{color: 'white', fontSize: '40px'}} /></a>
            <a href="https://www.linkedin.com/in/mikeo-skinner-3866051a5/" style={{marginRight: '20%'}} target="_blank"><UserOutlined style={{color: 'white', fontSize: '40px'}}/></a>
            </div>
    </div>
  )
}
