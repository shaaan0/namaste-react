import React from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent/HeaderComponent"

const jsxheading = <h1 id="heading">Hey this is my first jsx in React</h1>
console.log(jsxheading)

const heading = React.createElement("h1", {}, "Hello World from React");

const Title = () => {
    return(

        <h1 className="head" tabIndex={5}>
        Namaste React using another Title component
    </h1>
        )
}
const HeadingComponent = () => (
    <div id="heading">
        <HeaderComponent/>
        {Title()}
        <h1>Namaste React div container</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)

