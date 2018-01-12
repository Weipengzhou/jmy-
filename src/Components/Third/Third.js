import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';

import './Third.css';

class Third extends Component{
    constructor(props){
        super(props);
        this.state={
            style:0,
        }
    }
    styleClick=(e)=>{
        this.setState({style:e})
    }
    preClick=(e)=>{
        this.props.history.push('Second')
    }
    nextClick=(e)=>{
        if(this.state.style==0){
            alert('请选择您喜欢的风格！')
            return false
        }else{
            this.props.thirdTo(this.state.style)
            this.props.history.push('Fourth')
        }
    }
    render(){
        return(
            <div className='Third'>
                  <img src={require('./c3bg.jpg')} alt='' className='bg'/>
                  <div className='center clearfix'>
                        <div className='pic' onClick={this.styleClick.bind(this,1)}>
                        <img src={this.state.style===1?require('./c1c.png'):require('./c1.png')} alt=''/>
                        </div>
                        <div className='pic' onClick={this.styleClick.bind(this,2)}>
                        <img src={this.state.style===2?require('./c2c.png'):require('./c2.png')} alt=''/>
                        </div>
                        <div className='pic' onClick={this.styleClick.bind(this,3)}>
                        <img src={this.state.style===3?require('./c3c.png'):require('./c3.png')} alt=''/>
                        </div>
                        <div className='pic' onClick={this.styleClick.bind(this,4)}>
                        <img src={this.state.style===4?require('./c4c.png'):require('./c4.png')} alt=''/>
                        </div>
                        <div className='pic' onClick={this.styleClick.bind(this,5)}>
                        <img src={this.state.style===5?require('./c5c.png'):require('./c5.png')} alt=''/>
                        </div>
                     
                  </div>
                  <div className='bottom'>
                  <button  className='pre' onClick={this.preClick.bind(this)}></button>
                  <button  className='next' onClick={this.nextClick.bind(this)}></button>
            
                  </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Third);

