document.addEventListener('DOMContentLoaded',function(event){
    let btn = document.getElementById('btn');
    btn.onclick = function(){
        document.getElementById('output').innerText = transform(document.getElementById('input').value);
    }
});

function transform(str){
    let newStr = '';
    let patt = /\n/i;
    let arr = str.split(patt);
    for(let i=0; i<arr.length; i++){
        newStr += transformLocation(arr[i]) + '\n';
    }
    return newStr;
}

function transformLocation(str){
    let newStr = '';
    let patt = /[\t ]/i;
    let arr = str.split(patt);
    if(arr.length !== 2){
        return '输入格式错误';
    }
    if(arr[0].indexOf('-') !== -1){
        arr[0] = arr[0].replace(/\-/i, '');
        arr[0] = arr[0].trim() + '°S';
    }else{
        arr[0] = arr[0].trim() + '°N';
    }
    if(arr[1].indexOf('-') !== -1){
        arr[1] = arr[1].replace(/\-/i, '');
        arr[1] = arr[1].trim() + '°W';
    }else{
        arr[1] = arr[1].trim() + '°E';
    }
    newStr = arr[0] + ' ' + arr[1];
    return newStr;
}