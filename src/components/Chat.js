import React, { Component } from 'react'

export class Chat extends Component {

    goHome = ()=>{
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <div class="line"></div>
                <button className="home-button" onClick={e => this.goHome()}>
                    <img src="./img/home.png" alt=""/>
                </button>
                    <div class="wrapper-middle">
                        <div>
                            <div class="my-message message">Hi!</div>
                            <div class="info">Brad joined the chat.</div>
                            <div class="other-message message">Nick: Hi Brad!</div>
                        </div>
                        <div class="send-box">
                            <input type="text" id="message-input" autocomplete="off"/>
                            <div class="send-message"></div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Chat
