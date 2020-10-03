import React, { Component } from 'react'

export class Radio extends Component {
    render() {
        return (
            <div>
                <div class="line">
                </div>
                    <div class="wrapper">
                        <div class="welcome-header">
                            <h2>Hello</h2>
                            <h2 class="nick">Nickname</h2>
                        </div>
                        <div class="content">
                            <div class="categories">
                                <div class="category active">
                                    <h2>Favourites</h2>
                                    <div class="dot"></div>
                                </div>
                                <div class="category">
                                    <h2>New</h2>
                                    <div class=""></div>
                                </div>
                                <div class="category">
                                    <h2>All</h2>
                                    <div class=""></div>
                                </div>
                            </div>

                        <div class="browser">
                                <div class="stationbtn">
                                    <div class="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="bin/img/heart.png"/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div class="visualizer">
                                        <div class="bar bar1"></div>
                                        <div class="bar bar2"></div>
                                        <div class="bar bar3"></div>
                                        <div class="bar bar4"></div>
                                        <div class="bar bar5"></div>
                                        <div class="bar bar6"></div>
                                        <div class="bar bar7"></div>
                                    </div>
                                </div>
                                <div class="stationbtn">
                                    <div class="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="bin/img/heart.png"/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div class="visualizer">
                                        <div class="bar bar1"></div>
                                        <div class="bar bar2"></div>
                                        <div class="bar bar3"></div>
                                        <div class="bar bar4"></div>
                                        <div class="bar bar5"></div>
                                        <div class="bar bar6"></div>
                                        <div class="bar bar7"></div>
                                    </div>
                                </div>
                                <div class="stationbtn">
                                    <div class="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="bin/img/heart.png"/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div class="visualizer">
                                        <div class="bar bar1"></div>
                                        <div class="bar bar2"></div>
                                        <div class="bar bar3"></div>
                                        <div class="bar bar4"></div>
                                        <div class="bar bar5"></div>
                                        <div class="bar bar6"></div>
                                        <div class="bar bar7"></div>
                                    </div>
                                </div>
                                <div class="stationbtn">
                                    <div class="main-line">
                                        <h2>99.1</h2>
                                        <div><img src="bin/img/heart.png"/></div>
                                    </div>
                                    <h3>Something good</h3>
                                    <div class="visualizer">
                                        <div class="bar bar1"></div>
                                        <div class="bar bar2"></div>
                                        <div class="bar bar3"></div>
                                        <div class="bar bar4"></div>
                                        <div class="bar bar5"></div>
                                        <div class="bar bar6"></div>
                                        <div class="bar bar7"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer">
                            <div class="audio">
                                <img src="bin/img/speaker.png"/><input type="range" class="audio-range"/>
                            </div>
                            <div class="btn-menu">
                                <div class="back my-button"><img src="bin/img/previous.png"/></div>
                                <div class="play my-button"><img src="bin/img/play.png"/></div>
                                <div class="next my-button"><img src="bin/img/next.png"/></div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Radio
