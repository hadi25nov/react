import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Welcome from './welcome'
import HelloComponent from "./component/HelloComponent.jsx"
import PropClass from './component/PropClass.jsx'
import Counter from './component/Counter.jsx'
import CounterPojok from './component/CounterPojok.jsx'
import EmployeeComponent from './component/Employee.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Welcome name="new project"/>
    <hr/>
    <HelloComponent firstName="good" lastName="morning"/>
    <hr/>
    <PropClass name="hallo how are u ?"/>
    <Counter/>
    <CounterPojok/>
    <EmployeeComponent/>

  </React.StrictMode>,
)
