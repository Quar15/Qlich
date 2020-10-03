import React, { Component } from 'react'

export class Index extends Component {
    render() {
        return (
            <div>
                <div class="line"></div>
                <div class="wrapper-middle">
                    <div class="main-menu">
                        <button class="my-button">
                            <div class="image music"><img src="./img/music.png" alt=""/></div>
                            <p>Music</p>
                        </button>
                        <button class="my-button">
                            <div class="image chat"><img src="./img/chat.png" alt=""/></div>
                            <p>Chat</p>
                        </button>            
                        <button class="my-button">
                            <div class="image album"><img src="./img/album.png" alt=""/></div>
                            <p>Images</p>
                        </button>            
                        <button class="my-button">
                            <div class="image todolist"><img src="./img/checklist.png" alt=""/></div>
                            <p>ToDo</p>
                        </button>            
                        <button class="my-button">
                            <div class="image"><img src="" alt=""/></div>
                            <p></p>
                        </button>           
                        <button class="my-button">
                            <div class="image"><img src="" alt=""/></div>
                            <p></p>
                        </button>            
                        <button class="my-button">
                            <div class="image settings"><img src="./img/gear.png" alt=""/></div>
                            <p>Settings</p>
                        </button>            
                        <button class="my-button">
                            <div class="image spacer"><img src="" alt=""/></div>
                            <p></p>
                        </button>            
                        <button class="my-button">
                            <div class="image logout"><img src="./img/logout.png" alt=""/></div>
                            <p>Log Out</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
