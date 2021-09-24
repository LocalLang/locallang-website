import React from 'react';
import './globle.css';

export default class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <main>
                    <h1 className="title">LocalLang</h1>
                    <p className="pera">A simple programming language for students.</p>
                    <p className="come" style={{fontWeight: 300}}>Coming soon...</p>
                </main>
            </React.Fragment>
        );
    }
}