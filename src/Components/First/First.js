import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import './First.css';
class First extends Component{
    constructor(props){
        super(props);
        this.state={
            checked:0
        }
    }
    handClick=(e)=>{
        this.setState({checked:e})
   
    }
    nextClick=()=>{
        if(this.state.checked == 0){
            alert('请选择您的户型！')
            return false
        }else{
            this.props.firstTo(this.state.checked)
            this.props.history.push('Second')
        }
    }
    render(){
        return(
            <div className='First'>
                <img src={require('./c1bg.jpg')} alt='' className='bg'/>
                <div className='center'>
                    <div className='pic'  onClick={this.handClick.bind(this,1)}>
                        <img src={this.state.checked===1?require('./c1c.png'):require('./c1.png')} alt=''/>
                    </div>
                    <div className='pic'  onClick={this.handClick.bind(this,2)}>
                        <img src={this.state.checked===2?require('./c2c.png'):require('./c2.png')} alt=''/>
                    </div>
                    <div className='pic'  onClick={this.handClick.bind(this,3)}>
                        <img src={this.state.checked===3?require('./c3c.png'):require('./c3.png')} alt=''/>
                    </div>
                    <div className='pic'  onClick={this.handClick.bind(this,4)}>
                        <img src={this.state.checked===4?require('./c4c.png'):require('./c4.png')} alt=''/>
                    </div> 
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
  
export default connect(mapStateToProps, mapDispatchToProps)(First);
