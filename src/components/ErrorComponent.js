import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default ErrorComponent