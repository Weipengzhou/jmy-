import React,{Component} from 'react';
import {Carousel} from 'antd-mobile';
import './Winning.css';
import Title from './title.png';
import Jiang from '../Jiang/Jiang';
class Winning extends Component{
    
    render(){
        return(
            <div className='Winning'>
             <Jiang/>
            <div className='lastnew'>
            <p className='new'>最新</p>
            <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
        
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  135****4632  </p>    <p className='three'>  王**  </p>            <p className='four'>  抽中了 </p>   <h2>海尔洗衣机</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****6632  </p>    <p className='three'>  赵**  </p>            <p className='four'>  抽中了 </p>   <h2> 格力柜式空调</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  177****4611  </p>    <p className='three'>  孙**  </p>            <p className='four'>  抽中了 </p>   <h2>8888现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'> 155****4362 </p>    <p className='three'>  李**  </p>   <p className='four'>  抽中了 </p>   <h2>西门子变频冰箱</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  135****7758  </p>    <p className='three'>  钱**  </p>   <p className='four'>  抽中了 </p>   <h2>三星平板电视</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****4693   </p>    <p className='three'>  孙**  </p>   <p className='four'>  抽中了 </p>   <h2>8888现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  131****7901  </p>    <p className='three'>  周**  </p>   <p className='four'>  抽中了 </p>   <h2>五折装修</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  131****4966   </p>    <p className='three'>  王**  </p>   <p className='four'>  抽中了 </p>   <h2>8888现金券</h2></div>
        </Carousel>
        </div>
        <div className='list'>
            <div className='title'>
              <img src={Title} alt='中奖名单'/>
            </div>
            <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
        
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  136****1339 </p>    <p className='three'>  王**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  176****1459  </p>    <p className='three'>  吴**  </p>            <p className='four'>  抽中了 </p>   <h2>海尔洗衣机</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  176****2251 </p>    <p className='three'>  孙**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  136****1422   </p>    <p className='three'>  钱**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  185****5656  </p>    <p className='three'>  李**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  134****1123  </p>    <p className='three'>  王**  </p>            <p className='four'>  抽中了 </p>   <h2>海尔洗衣机</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****1326  </p>    <p className='three'>  王**  </p>            <p className='four'>  抽中了 </p>   <h2>海尔洗衣机</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****5116  </p>    <p className='three'>  卫**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  172****8905  </p>    <p className='three'>  张**  </p>            <p className='four'>  抽中了 </p>   <h2>西门子变频冰箱</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  138****8562  </p>    <p className='three'>  毕**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  137****3883  </p>    <p className='three'>  吕**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  139****8962  </p>    <p className='three'>  黄**  </p>            <p className='four'>  抽中了 </p>   <h2>海尔洗衣机</h2></div>

          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  135****5226  </p>    <p className='three'>  谭**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****1190  </p>    <p className='three'>   流**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  176****0600  </p>    <p className='three'>  吕**  </p>            <p className='four'>  抽中了 </p>   <h2>西门子变频冰箱</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  132****1414  </p>    <p className='three'>  王**  </p>            <p className='four'>  抽中了 </p>   <h2>五折装修</h2></div>
          <div className="v-item"><p className='one'>恭喜</p>      <p className='two'>  176****8901  </p>    <p className='three'>  赵**  </p>            <p className='four'>  抽中了 </p>   <h2>4999现金券</h2></div>
        </Carousel>
        </div>
        <div className='about'>
            <h2>活动说明</h2>
            <div className='text'>
                
            <p> 一. 活动时间：2017年12月1日-2018年1月31日。</p>
            <p> 二. 活动期间内用户每月可免费抽奖一次。活动设置免费装修名额10个，五折装修名额30个，三等奖:格力2匹臻净爽一级能效变频智能微联冷暖圆柱空调柜机一台，四等奖:8888元装修现金券，五等奖:三星55英寸4k超高清量子点智能平板电视一台，六等奖:西门子变频对开门冰箱一台，七等奖：4999元装修现金券，八等奖:海尔十公斤变频斐雪派克全自动滚筒洗衣机一台。</p>
            <p> 三. 免费装修和五折装修，需提供本人真实购房凭证。装修费用以实际花费为准，报销上限不得超过1200元/平米，不包含家具家电。</p>
          
            <p> 四. 本次活动只针对有装修需求的业主。最终解释权归金蚂蚁装修网所有。</p>
               
            </div>
        </div>
        </div>
        )
    }
}
export default Winning;