import React, { Component } from 'react'

export class FlashCards extends Component {

    state = {
        words: [["vocational school","szkoła zawodowa"],
        ["(BA) dissertation","praca licencjacka"],
        ["sabbatical (leave)","urlop naukowy "],
        ["compulsory","obowiązkowy"],
        ["deputy head/assistant principal","wicedyrektor/ka"],
        ["extracurricular activities","zajęcia dodatkowe/pozalekcyjne"],
        ["file/ring binder","segregator"],
        ["stapler","zszywacz"],
        ["test tube","probówka"],
        ["write up an experiment","opisać doświadczenie"],
        ["academic standards","poziom nauczania"],
        ["distinguished","wybitny, znakomity"],
        ["outstanding grades","znakomite oceny"],
        ["ADHD","Attention-Deficit Hyperactivity Disorder"],
        ["be off school","nie chodzić do szkoły (np. z powodu choroby)"],
        ["get poor results","mieć słabe wyniki"],
        ["have a hard time","mieć problemy/trudności"],
        ["remedial classes","zajęcia wyrównawcze"],
        ["school report","świadectwo szkolne"],
        ["set an exam","przygotować egzamin"],
        ["sit/take an exam","podejśc do egzaminu"],
        ["take a test","pisać sprawdzian"],
        ["afterschool club","świetlica szkolna, kółko zainteresowań"],
        ["fall behind with school work","mieć zaległości w nauce"],
        ["burn the midnight oil","pracować do późna w nocy"],
        ["feel out of your depth","całkowicie się pogubić"],
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
                </div>
            </div>
        )
    }
}

export default FlashCards
