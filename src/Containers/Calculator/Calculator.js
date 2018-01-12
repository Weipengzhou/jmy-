import React,{Component} from 'react';
import Form from '../Form/Form';
import './Calculator.css';

class Calculator extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="Calculator clearfix">
                <h2>装修计算器</h2>
                <span className='border'></span>
                <b></b>
                <div className='jisuan'>
                    <div className='one'>
                        <Form/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;
