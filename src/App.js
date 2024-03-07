import React from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import '../index.css'

const AppLayout = () => (
    <div>
        <HeaderComponent/>
        <MainComponent/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

