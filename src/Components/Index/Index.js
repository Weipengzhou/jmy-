import React, { Component } from 'react';
import SimpleSlider  from '../../Containers/Slider/Slider';
import {Link} from 'react-router-dom';
import Winning  from '../../Containers/Winning/Winning';
import Picture from '../../Containers/Picture/Picture';
import Calculator from '../../Containers/Calculator/Calculator';

import './Index.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    handleClick = () => {
        fetch('http://127.0.0.1/test', {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'name=wang&phone=123'
        }).then((res) => (res.json())).then(data => (console.log(data)))
       
    }

    render() {
       
        return (
            <div className='Index'>
                    <SimpleSlider/>
                   
                    <Winning/>
                    <div className='whatstyle'>
                        <Link to='First' className='button'></Link>
                    </div>
                    <Picture/>
                    <Calculator/>
                    <footer>
                        <img src={require('./footer.jpg')} alt='金蚂蚁装修网'/> 
                    </footer>
                    <a className='nb-icon-wrap-base' href='http://p.qiao.baidu.com/cps/chatIndex?reqParam=%7B%22from%22%3A1%2C%22sessionid%22%3A%22-100%22%2C%22siteId%22%3A%2211196096%22%2C%22tid%22%3A%22-1%22%2C%22userId%22%3A%2224485447%22%2C%22ttype%22%3A1%2C%22pageId%22%3A0%7D'>

                    </a>
            </div>
        );
    }
}

export default Index;