import React, { Component } from 'react';
import Visor from '../../components/Visor';
import Keyboard from '../../components/Keyboard';
import './style.css'

class Calculator extends Component {

    constructor (props) {
        super(props);
        this.state = this.getInitialState();
        this.handleClick = this.handleClick.bind(this);
    }

    getInitialState() {
        return {expr: '', result: 0};
    }

    handleClick (clickedKey) {
        console.log(clickedKey);
        if (clickedKey === '=') {
            const result = eval(this.state.expr);
            this.setState({...this.state, result: result});
        } else if (clickedKey === 'C') {
            this.setState(this.getInitialState());
        } else {
            const expr = this.state.expr + clickedKey;
            this.setState({...this.state, expr: expr});
        }
    }

    render() {
        return (
            <div class="row justify-content-center">
                <div class="col-4">
                    <div class="calculator">
                        <Visor expr={this.state.expr} result={this.state.result}/>
                        <Keyboard onChange={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;