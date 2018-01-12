import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import './Picture.css';

class Picture extends Component{
    constructor(props){
        super(props);
        this.state={
            ismodel:false,
            name:'',
            phone:''
        }
    }
    handleClick=()=>{
        this.setState({ismodel:true});
    }
    closeClick=()=>{
        this.setState({ismodel:false});
    }
    writeChange=(e)=>{
        var data= e.currentTarget.getAttribute("data-name")
         switch (data){
                 case 'name':
                
                 this.setState({name:e.target.value})
                 break;
                 case 'phone':
                
                 this.setState({phone:e.target.value})
                 break;
        
                 default:
         }
     }
     submitClick=()=>{
         if(!this.state.phone.match(/^1[0-9]{10}$/)){
             alert('请输入正确的手机号')
             return false;
         }else if(this.state.name === ''){
             alert('请输入您的姓名');
             return false;
         }else{
             this.props.getImg({name:this.state.name,phone:this.state.phone})
             this.setState({ismodel:false})
             alert('预约成功，请耐心等待客服与您联系')
         }
     }
    render(){
        return(
            <div className='Picture'>
                <h2>精品效果图</h2>
                <span className='border'></span>
                <b></b>
                <div className='pic clearfix'>
                    <h3> 现代简约</h3>
                    <p>Modern minimalism</p>
                    <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_03.jpg')} alt='现代简约'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_05.jpg')} alt='现代简约'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_10.jpg')} alt='现代简约'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_12.jpg')} alt='现代简约'/>
                </div>
                </div>
                
                <div className='pic clearfix'>
                    <h3>美式田园</h3>
                    <p>American pastoral</p>
                    <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_16.jpg')} alt='美式田园'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_18.jpg')} alt='美式田园'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_21.jpg')} alt='美式田园'/>
                </div>
                <div className='img' onClick={this.handleClick.bind(this)}>
                    <img src={require('./1.3_23.jpg')} alt='美式田园'/>
                </div>
                </div>
               
          
             <div className='pic clearfix'>
             <h3>局部装修</h3>
             <p>Partial decoration</p>
             <div className='img' onClick={this.handleClick.bind(this)}>
             <img src={require('./1.3_27.jpg')} alt='局部装修'/>
         </div>
         <div className='img' onClick={this.handleClick.bind(this)}>
             <img src={require('./1.3_29.jpg')} alt='局部装修'/>
         </div>
         <div className='img' onClick={this.handleClick.bind(this)}>
             <img src={require('./1.3_32.jpg')} alt='局部装修'/>
         </div>
         <div className='img' onClick={this.handleClick.bind(this)}>
             <img src={require('./1.3_34.jpg')} alt='局部装修'/>
         </div>
            </div>
            <div className={this.state.ismodel?'on lingqu':'lingqu'}>
                         <div className="mask" onClick={this.closeClick.bind(this)}></div>
                        <div className="to">
                        <i  onClick={this.closeClick.bind(this)}>✖️</i>
                        <h2>领取三套设计方案<span>(提交后我们会尽快联系您)</span></h2>
                        <div><input type="text" placeholder="请输入您的称呼" onChange={this.writeChange.bind(this)} className="name" data-name='name'/></div>
                        <div><input type="phone" placeholder="请输入您的联系电话" onChange={this.writeChange.bind(this)} className="phone" data-name='phone'/></div>
                        <button className="excal" onClick={this.submitClick.bind(this)}>立即预约</button>
                    </div>
        </div>
     </div>
        )
    }
}
function mapStateToProps(state) {
    return { }
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Picture);
