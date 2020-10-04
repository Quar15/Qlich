import React, { Component } from 'react'

export class FlashCards extends Component {

    state = {
        words: [["vocational school","szkoła zawodowa"],
        ["(BA) dissertation","praca licencjacka"],
        ["research paper","publikacja naukowa"],
        ["sabbatical (leave)","urlop naukowy "],
        ["term paper","praca semestralna"],
        ["thesis","praca magisterska/doktorska"],
        ["compulsory","obowiązkowy"],
        ["deputy head/assistant principal","wicedyrektor/ka"],
        ["extracurricular activities","zajęcia dodatkowe/pozalekcyjne"],
        ["follow the curriculum","realizować program nauczania"],
        ["mixed-ability class","klasa złożona z uczniów o różnym poziomie umiejętności"],
        ["state education","szkolnictwo publiczne"],
        ["file/ring binder","segregator"],
        ["fountain pen","pióro wieczne"],
        ["hole punch","dziurkacz"],
        ["set square","ekierka"],
        ["stapler","zszywacz"],
        ["run/carry out experiments","przeprowadzać eksperymenty"],
        ["test tube","probówka"],
        ["write up an experiment","opisać doświadczenie"],
        ["academic results/achievements","wyniki w nauce"],
        ["academic standards","poziom nauczania"],
        ["all-round development","wszechstronny rozwój"],
        ["distinguished","wybitny, znakomity"],
        ["give feedback on/go over/ discuss homework","omawiać pracę domową"],
        ["know-it-all","mądrala"],
        ["memorise/learn by heart","uczyć się na pamięć"],
        ["outstanding grades","znakomite oceny"],
        ["pay attention to","słuchać uważnie kogoś/czegoś"],
        ["set targets","wyznaczać cele"],
        ["swot","kujon"],
        ["ADHD","Attention-Deficit Hyperactivity Disorder"],
        ["be off school","nie chodzić do szkoły (np. z powodu choroby)"],
        ["get poor results","mieć słabe wyniki"],
        ["have a hard time","mieć problemy/trudności"],
        ["hopeless at (Maths)","beznadziejny z (matematyki)"],
        ["overcome problems","pokonywać problemy"],
        ["remedial classes","zajęcia wyrównawcze"],
        ["skip lessons/classes/school","chodzić na wagary"],
        ["A-levels","brytyjski odpowiednik matury"],
        ["assesment","ocena, ocenianie"],
        ["GCSEs","brytyjski odpowiednik egzaminu gimnazjalnego"],
        ["mock exam","egzamin próbny"],
        ["past papers","arkusze egzaminacyjne z poprzednich lat"],
        ["school-leaving exam","egzamin po ukończeniu nauki w szkole"],
        ["school report","świadectwo szkolne"],
        ["set an exam","przygotować egzamin"],
        ["sit/take an exam","podejśc do egzaminu"],
        ["take a test","pisać sprawdzian"],
        ["afterschool club","świetlica szkolna, kółko zainteresowań"],
        ["develop leadership/interpersonal skills","rozwijać umiejętności przywódcze/interpersonalne"],
        ["voluntary","dobrowolny"],
        ["fall behind with school work","mieć zaległości w nauce"],
        ["get down to work","zabrać się do pracy"],
        ["take in (information)","przyswajać (informacje)"],
        ["turn up late","spóźnić się"],
        ["burn the midnight oil","pracować do późna w nocy"],
        ["feel out of your depth","całkowicie się pogubić"],
        ["know sth inside out","znać coś na wylot"],
        ["pass (an exam) with flying colours","zdać (egzamin) śpiewając"],
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

    render() {
        return (
            <div>
                <div className="line"></div>
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
