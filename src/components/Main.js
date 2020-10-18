import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import Chat from "./Chat";
import Radio from "./Radio";
import Error from "./Error";
import Album from "./Album";
import FlashCards from './FlashCards';
import ToDo from "./ToDo";
import Sudoku from "./Sudoku";
import WorkInProgress from "./WorkInProgress";

export class Main extends Component {

    state = {
        pageIndex: 0, // holds current page
    }

    /* Change page index to specified index */
    changePageIndex = id =>{
        this.setState({
            pageIndex: id
        })
    }

    /* Route for home (pageIndex == 0) */
    returnHome = ()=>{
        this.setState({
            pageIndex: 0
        })
    }

    render() {
        const { pageIndex } = this.state;

        switch (pageIndex) {
            case 0:
                return (
                    <MainMenu changePageIndex={this.changePageIndex}/>
                )

            case 1:
                return <Radio returnHome = {this.returnHome}/>

            case 2:
                return <Chat returnHome = {this.returnHome}/>

            case 3:
                return <Album returnHome = {this.returnHome}/>

            case 4:
                return <ToDo returnHome = {this.returnHome}/>
    
            case 5:
                return <Sudoku returnHome = {this.returnHome}/>
    
            case 6:
                return <FlashCards returnHome = {this.returnHome}/>

            case 7:
                return <WorkInProgress returnHome = {this.returnHome}/>

            case 8:
                return (
                    <MainMenu changePageIndex={this.changePageIndex}/>
                )
        
            case 9:
                return <WorkInProgress returnHome = {this.returnHome}/>
        
            default:
                return <Error returnHome = {this.returnHome}/>
        }

    }
}

export default Main
