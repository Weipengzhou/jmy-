import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import './Second.css';
class Second extends Component{
    constructor(props){
        super(props);
        this.state={
            sex:0,
            age:0
        }
    }
    sexClick=(e)=>{
        this.setState({sex:e})
    }
    ageClick=(e)=>{
        this.setState({age:e})
    }
    preClick=(e)=>{
        this.props.history.push('First')
    }
    nextClick=(e)=>{
        if(this.state.age==0){
            alert('请选择您的年龄范围！')
            return false
        }else if(this.state.sex == 0){
            alert('请选择您的性别！')
            return false
        }else{
            this.props.secondTo({sex:this.state.sex,age:this.state.age})
            this.props.history.push('Third')
        }
    }
    render(){
        return(
            <div className='Second '>
                 <img src={require('./sbg.jpg')} alt='' className='bg'/>
                 <div className='center clearfix'>
                        <div className='sex' onClick={this.sexClick.bind(this,1)}>
                        <img src={this.state.sex===1?require('./boy1.png'):require('./boy.png')} alt=''/>
                        </div>
                        <div className='sex' onClick={this.sexClick.bind(this,2)}>
                        <img src={this.state.sex===2?require('./gir1.png'):require('./gir.png')} alt=''/>
                        </div>
                        <div className='xiao' onClick={this.ageClick.bind(this,1)}>
                        <img src={this.state.age===1?require('./xiao1.png'):require('./xiao.png')} alt=''/>
                        </div>
                        <div className='zhong' onClick={this.ageClick.bind(this,2)}>
                        <img src={this.state.age===2?require('./zhong1.png'):require('./zhong.png')} alt=''/>
                        </div>
                        <div className='da' onClick={this.ageClick.bind(this,3)}>
                        <img src={this.state.age===3?require('./da1.png'):require('./da.png')} alt=''/>
                        </div>

                        <div className='bottom'>
                            <button  className='pre' onClick={this.preClick.bind(this)}></button>
                            <button  className='next' onClick={this.nextClick.bind(this)}></button>
                        </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Second);