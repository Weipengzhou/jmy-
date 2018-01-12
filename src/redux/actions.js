import * as types from './types';

export function getCode(text){
    return {
        type:types.GET_CODE,
        text
    }
};
export function putPhone(text) {
    return {
        type: types.SMS_CODE,
        text
    }
};
export function getImg(text){
    return{
        type: types.GET_IMG ,
        text
    }
}
export function getPrice(text){
    return{
        type: types.GET_PRICE ,
        text
    }
}
export function postCode(text){
    return{
        type:types.POST_CODE,
        text
    }
}
export function surJiang(text){
    return{
        type:types.SUR_JIANG,
        text
    }
}
export function trueModel(text){
    return{
        type:types.TRUE_MODEL,
        text
    }
}
export function falseModel(text){
    return{
        type:types.FALSE_MODEL,
        text
    }
}
export function firstTo(text){
    return{
        type:types.FIRST_TO,
        text
    }
}
export function secondTo(text){
    return{
        type:types.SECOND_TO,
        text
    }
}
export function thirdTo(text){
    return{
        type:types.THIRD_TO,
        text
    }
}
export function fourthTo(text){
    return{
        type:types.FOURTH_TO,
        text
    }
}