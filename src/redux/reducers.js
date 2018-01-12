import * as  types  from './types';
let initState={
    ismodel:false,
}

const reducer = (state=initState,action)=>  {
    switch(action.type){
        case types.GET_CODE:
        return Object.assign({}, state, {
          'sms':{
              name:action.text.name,
              phone:action.text.phone,
          }
        });
        case types.SMS_CODE:
        console.log(action.text)
        return Object.assign({}, state, {
            'sms_code':action.text.yan,
            'jiang':action.text.jiang
          });
        case types.GET_IMG:
        return Object.assign({},state,{
          'img':{
              name:action.text.name,
              phone:action.text.phone,
          }
        })
        case types.GET_PRICE:
        return Object.assign({},state,{
          'price':{
              city:action.text.city,
              phone:action.text.phone,
              huxing:action.text.huxing,
              area:action.text.area,
          }
        })
        case types.SUR_JIANG:
       
        return Object.assign({},state,{
            'jiang':action.text,
            ismodel:false,
          })
        case types.TRUE_MODEL:
       
         return Object.assign({},state,{
              ismodel:true,
            })
        case types.FALSE_MODEL:
       
        return Object.assign({},state,{
                ismodel:false,
              })  
        case types.FIRST_TO:
       
        return Object.assign({},state,{
           
              'ceshi_one': action.text
           
                }) 
                    
        case types.SECOND_TO:
                console.log(action.text)
        return Object.assign({},state,{
            'ceshi_two':action.text
               })  
        case types.THIRD_TO:
       
        return Object.assign({},state,{
              'ceshi_three':action.text
              })  
          
        default:
        return state 
    }

}

export default reducer;