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
                <div class="wrapper-middle wrapper-middle-chat">
                    <div class="chat-grid">
                        <div class="chat-topics">
                            <button class="chat-topic active-chat-topic">
                                <h2>Programming</h2>
                            </button>
                            <button class="chat-topic">
                                <h2>Python</h2>
                            </button>
                            <button class="chat-topic">
                                <h2>C++</h2>
                            </button>
                            <button class="chat-topic">
                                <h2>C#</h2>
                            </button>
                            <button class="chat-topic">
                                <h2>C</h2>
                            </button>
                            <button class="chat-topic">
                                <h2>Java</h2>
                            </button>
                        </div>
                        <div class="chat-messages-box">
                            <div class="my-message message">Hi!</div>
                            <div class="info">Brad joined the chat.</div>
                            <div class="other-message message">Nick: Hi Brad!</div>
                            <div class="other-message message">Nick: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perferendis odit id rem facere sapiente magnam non mollitia, at harum facilis fugiat qui temporibus voluptate, quam laborum? Rem, odio nihil?</div>
                            <div class="my-message message">What?</div>
                        </div>
    
                        <div class="send-box">
                            <input type="text" id="message-input" autocomplete="off"/>
                            <button class="send-message">
                                <img src="./img/send.png" alt=""/>
                            </button>
                        </div>
                    </div>
                    
                </div>
        </div>
        )
    }
}

export default Chat
