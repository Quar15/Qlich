import React, { Component } from 'react'

export class Sudoku extends Component {

    goHome = ()=>{
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <button className="home-button" onClick={e => this.goHome()}>
                    <img src="./img/home.png" alt=""/>
                </button>
            </div>
        )
    }
}

export default Sudoku
