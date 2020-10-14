import React, { Component } from 'react'

export class WorkInProgress extends Component {

    goHome = ()=>{
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <button className="home-button" onClick={e => this.goHome()}>
                    <img src="./img/home.png" alt=""/>
                </button>
                <div class="settings-bar">
                    <button className="settings-button">
                        <img src="./img/gear.png" alt=""/>
                    </button>
                    <button className="logout-button">
                        <img src="./img/logout.png" alt=""/>
                    </button>
                </div>
                <div className="work-in-progress">
                    <h3>Work In Progress</h3>
                </div>
            </div>
        )
    }
}

export default WorkInProgress
