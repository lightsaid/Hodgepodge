import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import BasicExample from "./views/home"
import Core from "./views/core"
import Native from "./views/native"

import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact={true} component={BasicExample}></Route>
          <Route path="/home/core" component={Core}></Route>
          <Route path="/home/native" component={Native}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App


