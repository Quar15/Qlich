import React, { Component } from 'react';
const fs = require("fs");

export class FlashCards extends Component {

    state = {
        words: [["employ","zatrudniać"],
        ["employee","pracownik/ca"],
        ["employer","pracodawca"],
        ["employment","zatrudnienie"],
        ["get on with your work","kontynuować pracę"],
        ["work for (a company)","pracować w (firmie)"],
        ["workplace","miejsce pracy"],
        ["apply for the position of","ubiegać się o pracę na stanowisku"],
        ["candidate","kandydat/ka"],
        ["career choice","wybór zawodu"],
        ["career in","kariera zawodowa w (jakiejś dziedzinie)"],
        ["contract","umowa"],
        ["employment agency","agencja pośrednictwa pracy"],
        ["employment prospects","perspektywy zatrudnienia"],
        ["enter the job/labour market","wejść na rynek pracy"],
        ["job centre","urząd pracy"],
        ["job interview","rozmowa kwalifikacyjna"],
        ["job offer","oferta pracy"],
        ["position/post","posada"],
        ["reference","referencje"],
        ["recruitment process","process rekrutacji"],
        ["requirements","wymagania"],
        ["take on/hire","zatrudnić"],
        ["the job/work involves","praca polega na"],
        ["vacancy","wakat"],
        ["achievement","osiągnięcie"],
        ["be fluent in (English)","posługiwać się biegle (językiem angielskim)"],
        ["commited","zaangażowany, oddany"],
        ["communication skills","zdolności komunikacyjne"],
        ["conscientious","skrupulatny, sumienny"],
        ["efficient","wydajny"],
        ["expierience in a field","doświadczenie w jakiejś dziedzinie"],
        ["flexibility","umiejętność dostosowania się do nowych sytuacji"],
        ["goal-oriented","zorientowany na cele"],
        ["highly skilled/qualified/motivated","o wysokich umiejętnościach / kwalifikacjach / silnej motywacji"],
        ["industrious","przedsiębiorczy"],
        ["initiative","inicjatywa"],
        ["(previous) professional/job experience","(dotychczasowe) doświadczenie zawodowe"],
        ["proactive","aktywny, pełen inicjatywy"],
        ["qualifications","kwalifikacje"],
        ["reliable","solidny, niezawodny"],
        ["well-organised","zorganizowany"],
        ["well-trained","dobrze wyszkolony"],
        ["work well under pressure","umieć pracować pod presją"],
        ["working knowledge of sth","praktyczna znajomość czegoś"],
        ["administrastive work","kierowanie, zarządzanie"],
        ["be in charge","nadzorować, być szefem"],
        ["deal with","zajmować się"],
        ["delegate","rozdzielać obowiązki"],
        ["go away on business","wyjeżdżać służbowo"],
        ["keep the books","prowadzić księgowość"],
        ["lead a team","stać na czele zespołu"],
        ["management","zarządzanie"],
        ["meet deadlines","dotrzymać terminów"],
        ["perform job duties","wykonywać obowiązki służbowe"],
        ["review sb’s performance","ocenić wyniki czyjejś pracy"],
        ["supervise","nadzorować"],
        ["take calls","odbierać telefony"],
        ["work in a team/on your own","pracować w zespole/samodzielnie"],
        ["work to tight deadlines","dotrzymując napiętych terminów"],
        ["work/do overtime","pracować w nadgodzinach"],
        ["learn on the job","uczyć się zawodu w praktyce"],
        ["professional development","rozwój zawodowy"],
        ["retrain","przekwalifikować się"],
        ["training course","szkolenie"],
        ["workshops","warsztaty"],
        ["ASAP (as soon as possible)","jak najszybciej"],
        ["FYEO (for your eyes only)","poufne, do rąk własnych"],
        ["FYI (for you information)","do Twojej/Pani/Pana wiadomości"],
        ["be promoted","awansować, dostać awans"],
        ["company car","samochód służbowy"],
        ["flexible working hours/ flexi-time","elastyczne godziny pracy"],
        ["(go on) leave","(pójść na) zwolnienie/urlop"],
        ["holiday pay","wynagrodzenie za czas urlopu"],
        ["job satisfaction","zadowolenie z pracy"],
        ["job security","pewność stałego zatrudnienia"],
        ["lunch hour","przerwa na launch"],
        ["maternity/paternity leave","urlop macierzyński/ojcowski"],
        ["perks/fringe benefits","dodatkowe świadczenia ze strony pracodawcy"],
        ["prospects of promotion","perspektywy awansu"],
        ["sick leave","zwolnienie lekarskie"],
        ["sick pay","wynagrodzenie za czas choroby"],
        ["take time/a day off","brać wolne/wolny dzień"],
        ["work-life balance","równowaga między życiem prywatnym a zawodowym"],
        ["be self-employed","pracować na własny rachunek"],
        ["build up your own business","stworzyć własną firmę"],
        ["do freelance work","pracować jako wolny strzelec/na zlecenia"],
        ["do odd jobs","pracować dorywczo, wykonywać drobne prace"],
        ["run your own business","prowadzić firmę"],
        ["set up (a company)","założyć (firmę)"],
        ["work from home","pracować zdalnie (z domu)"],
        ["(early) retirement","(wcześniejsza) emerytura"],
        ["hand in your resingation/notice","złożyć wymówienie"],
        ["job loss","utrata pracy"],
        ["lay off/dismiss","zwolnić z pracy"],
        ["make redundant","zwolnić, zredukować"],
        ["quit/resign","zwolnić się, zrezygnować z pracy"],
        ["redundancy","redukcja etatów"],
        ["retire","przejść na emeryturę"],
        ["sack/give the sack/fire","wyrzucić z pracy"],
        ["voluntary redundancy","dobrowolne odejście z pracy"],
        ["cheap labour","tania siła robocza"],
        ["exploit","wyzyskiwać"],
        ["jobless/unemployed","bezrobotny"],
        ["joblessness/unemployment","bezrobocie"],
        ["labour costs","koszty pracy"],
        ["outsource","przekazywać pracę/produkcję innym firmom"],
        ["overworked","przepracowany"],
        ["sit-in","strajk okupacyjny"],
        ["strike","strajk"],
        ["the unemployed","bezrobotni"],
        ["trade union","związek zawodowy"],
        ["big fish","gruba ryba"],
        ["call it a day","zakończyć pracę (na dany dzień)"],
        ["climb the corporate ladder","wspinać się po szczeblach kariery"],
        ["learn the ropes","nauczyć się fachu"],
        ["pull a few strings","wykorzystać nieformalne kontakty (żeby coś załatwić)"],
        ["pull your weight","przyłożyć się"],
        ["red tape","biurokracja"],
        ["think on your feet","podejmować szybkie decyzj"],        
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

    readFile = ()=>{
        fs.readFile('./temp/test.txt', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            console.log(data);
            var newWords = [["banana", "banan"]]
            this.setState({
                wordIndex: 0,
                words: newWords
            })
          });
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
                <button className="" onClick={this.readFile}></button>
            </div>
        )
    }
}

export default FlashCards
