import {applyMiddleware,createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(init){
    const store = createStore(reducers,applyMiddleware(sagaMiddleware))
    //,,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    sagaMiddleware.run(sagas);
    return store ;
}