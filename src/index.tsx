import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"

// mo
const DATA = [
  { id: "todo-1b1a8ca4-5324-4347-8b97-1dd474388691", name: "吃饭", completed: true },
  { id: "todo-1b1a8ca4-5324-4347-8b97-1dd4748883", name: "睡觉", completed: false },
  { id: "todo-1b1a8ca4-5324-4347-8b97-1dd4743886933", name: "打豆豆", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
