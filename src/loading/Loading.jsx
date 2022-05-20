import React from 'react'
import Typist from "react-typist";
import './loading.css';
export default function Loading() {
  return (
      <div className="loading">
          <Typist>
              <div className='loadingTitle'>
              <p>Open AI</p>
              </div>
              </Typist>
      </div>
    
  )
}
