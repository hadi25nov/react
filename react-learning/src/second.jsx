import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './app2';



ReactDOM.createRoot(document.getElementById('second')).render(
    <React.StrictMode>
        <h1>second page</h1>
       <App2/>
       <hr/>
    </React.StrictMode>,
);