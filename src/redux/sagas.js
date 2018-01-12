import { call, put, takeLatest} from 'redux-saga/effects';
import * as apis from '../api/api';
import * as types from './types';
import * as actions from './actions';

function* addSaga(e) {
    try {
        const result = yield call(apis.getCode,e.text);
        if(result.code ==0){
            alert('每个手机号码只有一次抽奖机会！')
            yield put(actions.putPhone({sms_code:'0000'}));
        }else if(result.code == 1){
            yield put(actions.putPhone(result));
        }
      
    } catch (err) {
        console.log(err);
    }
}
function* getImg(e){
    try {
        const result = yield call(apis.getImg,e.text);
       
    } catch (err) {
        console.log(err);
    }
}
function* getPrice(e){
    try {
        const result = yield call(apis.getPrice,e.text);
       
    } catch (err) {
        console.log(err);
    }
}
// function* postCode(e){
//     try {
//         const result = yield call(apis.postCode,e.text);
//        if(result.code ==2){
//         alert('请输入正确的验证码！')
//        }else if(result.code==0){
//        alert('每个手机号只有一次抽奖机会')
//        }else if(result.code==1){
       
//         yield put(actions.surJiang(result))
//         handClick(result.jiang)
//        }
//     } catch (err) {
//         console.log(err);
//     }
// }
function* endSubmit(e){
    try {
        console.log(e)
        const result = yield call(apis.endSubmit,e.text);
        yield put(actions.surJiang(result.jiang))
      
    } catch (err) {
        console.log(err);
    }
}

export default function* defaultSaga() {
    yield [
        takeLatest(types.GET_CODE, addSaga),
        takeLatest(types.GET_IMG, getImg),
        takeLatest(types.GET_PRICE, getPrice),
        // takeLatest(types.POST_CODE,postCode),
        takeLatest(types.FOURTH_TO,endSubmit),
    ];
}