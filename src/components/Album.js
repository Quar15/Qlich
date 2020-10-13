import React, { Component } from 'react'

export class Album extends Component {
    render() {
        return (
            <div>
                    <div className="album">
                        <div className="row">
                            <div className="column">
                                <img src="./bin/img/o1.jpg" alt=""/>
                                <img src="./bin/img/o2.jpg" alt=""/>
                                <img src="./bin/img/o3.jpg" alt=""/>
                            </div>

                            <div className="column">
                                <img src="./bin/img/o4.jpg" alt=""/>
                                <img src="./bin/img/o5.jpg" alt=""/>
                                <img src="./bin/img/o6.jpg" alt=""/>
                            </div>

                            <div className="column">
                                <img src="./bin/img/o7.jpg" alt=""/>
                                <img src="./bin/img/o8.jpg" alt=""/>
                                <img src="./bin/img/o9.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Album
