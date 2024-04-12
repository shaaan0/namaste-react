import React , { Component } from "react";

class User extends Component{
    constructor(props){
        super(props)

        this.state ={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photom.com"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()

        this.setState({
            userInfo:json
        },()=> console.log(this.state.userInfo))
        // console.log(json)
    }

    render(){
        return (
            <div>
                <h1>count = {this.state.count1}
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1+2,

                    })
                }}>Increment count</button>
                </h1>
                <div>{this.state.name}</div>
                <div>{this.state.age}</div>
            </div>
        )
    }
}

export default User

