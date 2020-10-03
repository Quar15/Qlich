import React, { Component } from 'react'
import Index from "./Index";
import Chat from "./Chat";
import Radio from "./Radio";

export class Main extends Component {

    render() {
        switch (page) {
            case "Index":
                return <Index/>

            case "Chat":
                return <Chat/>

            case "Radio":
                return <Radio/>
        
            default:
                return (
                    <div>
                        
                    </div>
                )
        }

    }
}

const pages = ["Index", "Chat", "Radio", "Todo", "Settings", "Logout"];
const page = pages[0];

export default Main
