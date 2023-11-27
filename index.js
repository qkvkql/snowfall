document.addEventListener('DOMContentLoaded',function(event){
    document.getElementById('btn1').onclick = function(){
        document.getElementById('r1').innerText = getLatLon(document.getElementById('lat').value);
    }
    document.getElementById('btn2').onclick = function(){
        document.getElementById('r2').innerText = getLatLon(document.getElementById('lon').value);
    }
    document.getElementById('btn3').onclick = function(){
        let sfArr = getSnowFall(document.getElementById('sf').value);
        document.getElementById('r3').innerText = sfArr[0];
        document.getElementById('x').innerText = sfArr[sfArr.length-3];
        document.getElementById('y').innerText = sfArr[sfArr.length-2];
        document.getElementById('avg').innerText = sfArr[sfArr.length-1];
        for(let i=1; i<sfArr.length-3; i++){
            eval("document.getElementById('rm" + i + "').innerText = sfArr[" + i + "]");
        }
    }
});

function getLatLon(str){
    let arr = str.split(/[°'"]/);
    let d = Number(arr[0].trim());
    let m = Number(arr[1].trim())/60;
    let s = Number(arr[2].trim())/3600;
    let result = arr[3].trim() == "西" || arr[3].trim() == "南" ? (-1) * (d + m + s).toFixed(2) : (d + m + s).toFixed(2);
    return result;
}
function getSnowFall(str){
    let arr = eval(str);
    let newArr = [];
    let avg = null;
    let total = 0;
    let half1 = null;
    let half2 = null;
    for(let i=0; i<arr.length; i++){
        let k = Object.keys(arr[i]);
        let v = Object.values(arr[i]);
        newArr.push(Number(v[3]));
    }
    for(let i=0; i<newArr.length; i++){
        total += newArr[i];
        if(i===5){
            half1 = total.toFixed(2);
        }
        if(i===11){
            half2 = (total - half1).toFixed(2);
        }
    }
    if(newArr.length > 0){
        avg = total/(newArr.length);
    }
    total = total.toFixed(2);
    avg = avg.toFixed(2);
    newArr.splice(0, 0, total);
    newArr.push(half1);
    newArr.push(half2);
    newArr.push(avg);
    return newArr;
}