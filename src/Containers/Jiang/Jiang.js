import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import './Jiang.css';
import {lottery,handClick} from './Choujiang';
import $ from 'jquery'

class Jiang extends Component{
    constructor(props){
        super(props);
        this.state={
            clickState:false,
            count: 60,
            liked: true,
            phone:'',
            name:'',
            code:''
        }
    }
   
    componentDidMount(){
        $('.close').click( function() {
            $('.info1').fadeOut()
        })
        lottery.init('draw');   
    }
    codeClick=()=>{
        var _this = this;
            if(!this.state.phone.match(/^1[0-9]{10}$/)){
                alert('请输入正确的手机号')
                return false;
            }else if(this.state.name === ''){
                alert('请输入您的姓名');
                return false;
            }else{
                if(this.state.liked){
                    _this.setState({liked:false});
                    this.props.getCode({phone:_this.state.phone,name:_this.state.name});
                  this.timer = setInterval(function () {
                    var count = _this.state.count;   
                    count -= 1;
                    if (count < 1) {
                      _this.setState({
                        liked: true
                      });
                      count = 60;
        　　　　　　　　clearInterval(_this.timer);
                    }
                    _this.setState({
                      count: count
                    });
                  }, 1000);
                }
              

            }
             
    }
    chouClick(){
        if(this.state.clickState){
            handClick(this.props.jiang);
        }else{
            this.props.trueModel()
        }

    }
    handleClick=()=>{
        this.props.trueModel()
    }
    closeClick=()=>{
        this.props.falseModel()
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
                case 'code':
             
                this.setState({code:e.target.value})
                break;
                default:
        }
    }
    submitClick=()=>{
        if(this.state.code==''){
            alert('请输入验证码')
        }else if(this.state.code!=this.props.sms_code){
            alert('请输入正确的验证码')
        }else{     
             this.setState({clickState:true})
             this.props.falseModel()
            
             handClick(this.props.jiang)
        }
    }
    render(){
        var text = this.state.liked ? '获取验证码' : this.state.count + '秒后重发';
         const {ismodel,jiang} =this.props
        return(
            <div className="Rotarytable">
                <div className='title'>
                    <img src={require('./title.png') } alt=''/>
                </div>
                    <div className="draw" id="draw">

                    <div className="item aaa">
                        <div className="lottery-unit item-0"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-1"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-2"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-7"></div>
                    </div>
                    <div className="item" onClick={this.chouClick.bind(this)}>
                        <div className="lottery-unit" id="draw-btn"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-3"></div>
                    </div>
                    <div className="item  aaa">
                        <div className="lottery-unit item-6"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-5"></div>
                    </div>
                    <div className="item aaa">
                        <div className="lottery-unit item-4"></div>
                    </div>

                </div>
         
                <div className={ismodel?'on lingqu':'lingqu'}>
                         <div className="mask" onClick={this.closeClick.bind(this)} ></div>
                        <div className="to">
                        <i  onClick={this.closeClick.bind(this)}>✖️</i>
                        <h2>请填写领奖信息<span>(中奖后凭手机号获取奖品)</span></h2>
                        <div><input type="text" placeholder="请输入您的称呼" className="name" data-name='name' onChange={this.writeChange.bind(this)}/></div>
                        <div><input type="phone" placeholder="请输入您的联系电话"  onChange={this.writeChange.bind(this)} data-name='phone' className="phone"/></div>
                        <div>
                            <input type="number" placeholder="请输入验证码" className="code" data-name='code' onChange={this.writeChange.bind(this)} />
                            <p onClick={this.codeClick.bind(this)} className='time'>{text}</p> 
                        </div>
                        <button className="excal" onClick={this.submitClick.bind(this)}>立即抽奖</button>
                 </div>
                
                </div>
                <div className="info1" >
                             <div className="main">
                                <div className ='page_rain'>
                                    
                                </div>
                            <div className="jiang1">
                                <img src={require('./4999.png')} alt=""/>
                            </div>
                            <div className="jiang2">
                                <img src={require('./8888.png')} alt="" />
                            </div>
                           
                            </div>
                            <div className="close">

                            </div>
                        </div>
       
</div>
         
        )
    }
} 
function mapStateToProps(state) {
    return {ismodel:state.ismodel,sms_code:state.sms_code,jiang:state.jiang}
  }
  
  function mapDispatchToProps(dispatch) {
     return {
       ...bindActionCreators(action, dispatch)
     }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Jiang);
