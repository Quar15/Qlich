import React, { Component } from 'react'

export class Radio extends Component {

    goHome = ()=>{
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <div className="line">
                </div>
                <button className="home-button" onClick={e => this.goHome()}>
                    <img src="./img/home.png" alt=""/>
                </button>
                    <div className="wrapper">
                        <div className="welcome-header">
                            <h2>Hello</h2>
                            <h2 className="nick">Nickname</h2>
                        </div>
                        <div className="content">
                            <div className="categories">
                                <div className="category active">
                                    <h2>Favourites</h2>
                                    <div className="dot"></div>
                                </div>
                                <div className="category">
                                    <h2>New</h2>
                                    <div className=""></div>
                                </div>
                                <div className="category">
                                    <h2>All</h2>
                                    <div className=""></div>
                                </div>
                            </div>

                        <div className="browser">
                                <div className="stationbtn">
                                    <div className="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="./img/heart.png" alt=""/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div className="visualizer">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                        <div className="bar bar3"></div>
                                        <div className="bar bar4"></div>
                                        <div className="bar bar5"></div>
                                        <div className="bar bar6"></div>
                                        <div className="bar bar7"></div>
                                    </div>
                                </div>
                                <div className="stationbtn">
                                    <div className="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="./img/heart.png"  alt=""/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div className="visualizer">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                        <div className="bar bar3"></div>
                                        <div className="bar bar4"></div>
                                        <div className="bar bar5"></div>
                                        <div className="bar bar6"></div>
                                        <div className="bar bar7"></div>
                                    </div>
                                </div>
                                <div className="stationbtn">
                                    <div className="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="./img/heart.png" alt=""/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div className="visualizer">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                        <div className="bar bar3"></div>
                                        <div className="bar bar4"></div>
                                        <div className="bar bar5"></div>
                                        <div className="bar bar6"></div>
                                        <div className="bar bar7"></div>
                                    </div>
                                </div>
                                <div className="stationbtn">
                                    <div className="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="./img/heart.png" alt=""/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div className="visualizer">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                        <div className="bar bar3"></div>
                                        <div className="bar bar4"></div>
                                        <div className="bar bar5"></div>
                                        <div className="bar bar6"></div>
                                        <div className="bar bar7"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="audio">
                                <img src="./img/speaker.png" alt=""/><input type="range" className="audio-range"/>
                            </div>
                            <div className="btn-menu">
                                <div className="back my-button"><img src="./img/previous.png" alt=""/></div>
                                <div className="play my-button"><img src="./img/play.png" alt=""/></div>
                                <div className="next my-button"><img src="./img/next.png" alt=""/></div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Radio
