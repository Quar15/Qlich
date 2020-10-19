import React, { Component } from 'react';

export class FlashCards extends Component {

    state = {
        words: [["employ","zatrudniać"],
        ["employee","pracownik/ca"],
        ["employer","pracodawca"],
        ["employment","zatrudnienie"],
        ["get on with your work","kontynuować pracę"],
        ["work for (a company)","pracować w (firmie)"],   
        ],
        wordIndex: 0,
    }

    nextWord = ()=>{
        const { wordIndex } = this.state;
        if(wordIndex < this.state.words.length-1)
        {
            this.setState({
                wordIndex: wordIndex+1
            })
        }
        else
        {
            this.setState({
                wordIndex: 0
            })
        }
    }


    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
          const text = (e.target.result);

          /* Splitting data for flash cards */
          var newWords = [];
          var data = text.split('\n');
          for(var i=0; i<data.length; i++){
              let word = data[i].split(" – ");
              newWords.push(word);
              console.log(word);
          }

          /* Setting up data on site */
          this.setState({
              words: newWords,
              wordIndex: 0
          })
        };

        // Read from file as text coded in "ISO-8859-2"
        reader.readAsText(e.target.files[0], "utf-8");
      }

    goHome = ()=>{
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <div className="line"></div>
                <button className="home-button" onClick={e => this.goHome()}>
                    <img src="./img/home.png" alt=""/>
                </button>
                <div className="wrapper-middle">
                    <button className="flash-card" onClick={this.nextWord}>
                        <div className="card wrapper-middle">
                            <div className="front line-border">
                                <h2>English</h2>
                                <p>{this.state.words[this.state.wordIndex][0]}</p>
                            </div>
                            <div className="back line-border">
                                <h2>Polski</h2>
                                <p>{this.state.words[this.state.wordIndex][1]}</p>
                            </div>
                        </div>
                    </button>
                    <input className="flash-card-input" type="file" accept=".txt" onChange={(e) => this.showFile(e)}/>
                </div>
            </div>
        )
    }
}

export default FlashCards
