import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import Index from './Components/Index/Index';
import First from './Components/First/First';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third';
import Fourth from './Components/Fourth/Fourth';
import configureStore from './redux/store'
let store = configureStore();// , 
export default class Navrouter extends Component {
    render() {
        return (
        
                <Provider store={store}>
                    <Router>
                        <div>
                           
                            <Switch> {/*职匹配一次*/}
                                <Route exact path="/" component={Index} />
                                <Route exact path="/First" component={First} />
                                <Route exact path="/Second" component={Second} />
                                <Route exact path="/Third" component={Third} />
                                <Route exact path="/Fourth" component={Fourth} />
                                
                            </Switch>
                        </div>
                    </Router>
                </Provider>
            
        )
    }
}