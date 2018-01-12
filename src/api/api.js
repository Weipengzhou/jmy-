function parseJSON(response) {
    return response.json();
}

function get(url) {
    const defaultOptions = {
        method: 'GET',
    };
    return fetch(url, defaultOptions)
        .then(parseJSON)
        .catch(() => {
            throw new Error('嘿嘿');
        });
}
function post(url,data) {
    const defaultOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body:data,
    };

    return fetch(url, defaultOptions)
    .then((res)=>{return res.json()})
    .catch(() => {
      throw new Error('嘿嘿');
    });
}

export function getCode(text) {
    return post('http://127.0.0.1/SmsDemo.php','phone='+text.phone+'&name='+text.name)
}
export function getImg(text) {
    return post('http://127.0.0.1/.com/xiaoguotu.php','name='+text.name+'&phone='+text.phone)
}
export function getPrice(text) {
    return post('http://127.0.0.1/baojia.php','huxing='+text.huxing+'&phone='+text.phone+'&area='+text.area+'&city='+text.city)
}
export function postCode(text) {
    return post('http://127.0.0.1/choujiang.php','name='+text.name+'&phone='+text.phone+'&code='+text.code)
}
export function endSubmit(text){
    return post('http://127.0.0.1/ceshi.php','city='+text.city+'&phone='+text.phone+'&age='+text.age+'&sex='+text.sex+'&style='+text.style+'&huxing='+text.huxing)
}