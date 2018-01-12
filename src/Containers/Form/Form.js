import React,{Component} from 'react';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../redux/actions';
import district  from '../City/City';
import './Form.css';

// 如果不是使用 List.Item 作为 children

const seasons = [
    [
      {
        label: '1室',
        value: '1室',
      },
      {
        label: '2室',
        value: '2室',
      },
      {
        label: '3室',
        value: '3室',
      },
      {
        label: '4室',
        value: '4室',
      },
      {
        label: '5室',
        value: '5室',
      },
    ],
    [
        {
          label: '1厅',
          value: '1厅',
        },
        {
          label: '2厅',
          value: '2厅',
        },
        {
          label: '3厅',
          value: '3厅',
        },
        {
          label: '4厅',
          value: '4厅',
        },
        {
          label: '5厅',
          value: '5厅',
        },
      ],
      [
        {
          label: '1厨',
          value: '1厨',
        },
        {
          label: '2厨',
          value: '2厨',
        },
        {
          label: '3厨',
          value: '3厨',
        },
        {
          label: '4厨',
          value: '4厨',
        },
        {
          label: '5厨',
          value: '5厨',
        },
      ],
      [
        {
          label: '1卫',
          value: '1卫',
        },
        {
          label: '2卫',
          value: '2卫',
        },
        {
          label: '3卫',
          value: '3卫',
        },
        {
          label: '4卫',
          value: '4卫',
        },
        {
          label: '5卫',
          value: '5卫',
        },
      ],
      [
        {
          label: '1阳台',
          value: '1阳台',
        },
        {
          label: '2阳台',
          value: '2阳台',
        },
        {
          label: '3阳台',
          value: '3阳台',
        },
        {
          label: '4阳台',
          value: '4阳台',
        },
        {
          label: '5阳台',
          value: '5阳台',
        },
      ],
  ];
  
class Test extends Component {
        constructor(props){
            super(props);
            this.state={
                value: null,
                city:'',
                huxing:'',
                phone:'',
                area:0
            }
        }
       
        writeChange=(e)=>{
          var data= e.currentTarget.getAttribute("data-name")
           switch (data){
                   case 'area':
                  
                   this.setState({area:e.target.value})
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
               return false
           }else if(this.state.area ==''){
               alert('请输入您的房屋面积')
               return false
           }else if(this.state.huxing==''){
            alert('请选择您的户型')
           }else if(this.state.city==''){
            alert('请选择您的所在城市')
           }else{
               this.props.getPrice({city:this.state.city,phone:this.state.phone,
                huxing:this.state.huxing,
                area:this.state.area,})
               this.setState({ismodel:false})
               alert('报价成功，请耐心等待客服与您联系')
           }
       }
    render() {
        const { getFieldProps } = this.props.form;
      
        return (
        <div className='Form'>
            <WhiteSpace size="lg" />
            <List style={{ backgroundColor: '#19a0d8' }} className="picker-list">
                <Picker extra="请选择(可选)"
                    data={district}
                    title="选择地区"
                    {...getFieldProps('district', {
                        initialValue:['0','0','0'],
                    }) }
                    onOk={e => this.setState({city:e})}
                    onDismiss={e => this.setState({city:e})}
                >
                    <List.Item arrow="horizontal">选择地区</List.Item>
                </Picker>

                
            </List>
            <Picker
          data={seasons}
          title="选择房型"
          cascade={false}
          extra="请选择(可选)"
          value={this.state.huxing}
          onChange={v => this.setState({ huxing: v })}
          onOk={v => this.setState({ huxing: v })}
        >
          <List.Item arrow="horizontal">选择房型配置</List.Item>
        </Picker>
        <div className='am-list-item am-list-item-middle'>
              <div className="am-list-line">
                <div className="am-list-content">房屋面积</div>
                
                <div className="am-list-extra">
                <input type="number" placeholder='0' onChange={this.writeChange.bind(this)} data-name='area' />㎡
                </div>
                       
                    </div>
        </div>
        <div className='am-list-item am-list-item-middle'>
              <div className="am-list-line">
                <div className="am-list-content">手机号码</div>
                
                <div className="am-list-extra">
                <input type="number" placeholder='填写手机号码' onChange={this.writeChange.bind(this)} data-name='phone'/>    
                </div>
                       
                 </div>
         </div>
         <button className='subclick' onClick={this.submitClick.bind(this)}>开始计算</button>
         <p>*该报价为毛坯半包价，实际装修报价以量房实测为准</p>
         <p>*30分钟内装修管家将给您回电，免费提供装修咨询服务</p>
        </div>);
    }
}

const Form= createForm()(Test);




function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
   return {
     ...bindActionCreators(action, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);