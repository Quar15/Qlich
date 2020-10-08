import React, { Component } from 'react'

export class MainMenu extends Component {


    changePage = (_id)=>{
        this.props.changePageIndex(_id);
    }


    render() {
        return (
            <React.Fragment>
            <div>
                <div className="line"></div>
                <div className="wrapper-middle">
                    <div className="main-menu header">
                        <div className="welcome-header">
                            <h2>Hello</h2>
                            <h2 className="nick">Nickname</h2>
                        </div>
                        <div id="time"></div>
                    </div>
                    <div className="main-menu menu line-border">
                        <button className="my-button" onClick={e => this.changePage(1)}>
                            <div className="image music"><img src="./img/music.png" alt=""/></div>
                            <p>Music</p>
                        </button>
                        <button className="my-button" onClick={e => this.changePage(2)}>
                            <div className="image chat"><img src="./img/chat.png" alt=""/></div>
                            <p>Chat</p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(3)}>
                            <div className="image album"><img src="./img/album.png" alt=""/></div>
                            <p>Images</p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(4)}>
                            <div className="image todolist"><img src="./img/checklist.png" alt=""/></div>
                            <p>ToDo</p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(5)}>
                            <div className="image sudoku"><img src="./img/sudoku.png" alt=""/></div>
                            <p>Sudoku</p>
                        </button>           
                        <button className="my-button" onClick={e => this.changePage(6)}>
                            <div className="image flashcards"><img src="./img/translate.png" alt=""/></div>
                            <p>Flash Cards</p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(7)}>
                            <div className="image settings"><img src="./img/gear.png" alt=""/></div>
                            <p>Settings</p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(8)}>
                            <div className="image spacer"><img src="" alt=""/></div>
                            <p></p>
                        </button>            
                        <button className="my-button" onClick={e => this.changePage(9)}>
                            <div className="image logout"><img src="./img/logout.png" alt=""/></div>
                            <p>Log Out</p>
                        </button>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default MainMenu
