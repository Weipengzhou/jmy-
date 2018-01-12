import React,{Component} from 'react';
import './Fourth.css';
import {Link} from 'react-router-dom';
import { Picker, List } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import { createForm } from 'rc-form';
import district  from '../../Containers/City/City';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            city:0,
            phone:''
        }
    }
    preClick=(e)=>{
        this.props.history.push('Third')
    }
    nextClick=(e)=>{
        if(this.state.city==0){
            alert('请选择您的所在地区！')
            return false
        }else if(!this.state.phone.match(/^1[0-9]{10}$/)){
            alert('请输入正确的手机号！')
            return false
        }else{
            console.log(this.props.ceshi_one,this.props.ceshi_three,'啊啊啊啊')
            this.props.fourthTo({city:this.state.city,phone:this.state.phone,style:this.props.ceshi_three,huxing:this.props.ceshi_one,sex:this.props.ceshi_two.sex,age:this.props.ceshi_two.age})
         
            this.props.history.push('/')
        }
    }
    writeChange=(e)=>{
        this.setState({phone:e.target.value})
    }
    render(){
        const { getFieldProps } = this.props.form;
        const {ceshi_one,ceshi_two,ceshi_three} =this.props
        return(
        <div className='Fourth'>
              <img src={require('./c4bg.jpg')} alt='' className='bg'/>
              <div className='center'>
              <List style={{ backgroundColor: '#19a0d8' }} className="picker-list">
                <Picker extra="请选择(可选)"
                    data={district}
                    title="选择地区"
                    {...getFieldProps('district', {
                        initialValue: ['0', '0', '0'],
                    }) }
                    onOk={e =>this.setState({city:e})}
                   
                >
                    <List.Item arrow="horizontal">选择地区</List.Item>
                </Picker>

                
            </List>
            <div className="am-list-item am-list-item-middle">
                <div className="am-list-line">
                    <div className="am-list-content">手机号码</div>
                    <div className="am-list-extra">
                    <input type="number" placeholder="填写手机号码" onChange={this.writeChange.bind(this)}/>
                    </div>
                    </div>
                    </div>
                    <p>*请输入手机号，我们将测试结果发送到您的手机</p>
                    <div className='bottom'>
                    <button  className='pre' onClick={this.preClick.bind(this)}></button>
                    <button  className='next' onClick={this.nextClick.bind(this)}></button>
              
              </div>
              </div>
           
        </div>)
    }
}
const Fourth= createForm()(Form);
function mapStateToProps(state) {
    return {ceshi_one:state.ceshi_one,ceshi_two:state.ceshi_two,ceshi_three:state.ceshi_three}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Fourth);

