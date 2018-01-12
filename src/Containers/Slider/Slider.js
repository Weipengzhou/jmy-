import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';
import './Slider.css';
import banner0 from './banner0.jpg';
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
class SimpleSlider  extends Component {
    state = {
        data: ['', '', ''],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [banner0,banner1,banner2 ],
          });
        }, 100);
      }
    
    render() {
       return(
        <Carousel
        autoplay={true}
        infinite
        selectedIndex={1}
      >
        {this.state.data.map(ii => (
          <a
            key={ii}
            href=""
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={ii}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      
      </Carousel>
       )
    }
  }

  export default SimpleSlider;