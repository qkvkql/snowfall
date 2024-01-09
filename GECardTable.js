document.addEventListener('DOMContentLoaded',function(event){
    //run
    setValue();
});

let sfData = ['1093.64', '372.36', '241.04', '184.46', '101.09', '68.42', '2.46', '0', '5.97', '74.01', '144.65', '158.21', '240.88'];
let snoData = ['543.64', '122.36', '141.04', '84.46', '51.09', '48.42', '2.46', '0.09', '5.97', '7.01', '64.65', '88.21', '150.88'];

let sfDataIdArr = [
    'sf-total',
    'sf-01',
    'sf-02',
    'sf-03',
    'sf-04',
    'sf-05',
    'sf-06',
    'sf-07',
    'sf-08',
    'sf-09',
    'sf-10',
    'sf-11',
    'sf-12'
];
let snoDataIdArr = [
    'sno-total',
    'sno-01',
    'sno-02',
    'sno-03',
    'sno-04',
    'sno-05',
    'sno-06',
    'sno-07',
    'sno-08',
    'sno-09',
    'sno-10',
    'sno-11',
    'sno-12'
];

let valueArr = [
    0,
    50,
    100,
    150,
    200,
    300,
    400,
    500,
    600,
    800,
    1000
]
//color arr length 1 more than value arr!!!
let colorArr = [
    '#ADB5BD',
    '#A6E4F8',
    '#4CC9F0',
    '#4895EF',
    '#4361EE',
    '#3F37C9',
    '#3A0CA3',
    '#480CA8',
    '#560BAD',
    '#7209B7',
    '#B5179E',
    '#F72585'
];

function setValue(){
    for(let i=0; i<sfDataIdArr.length; i++){
        setOneValue(sfDataIdArr[i], sfDataIdArr, sfData);
    }
    for(let i=0; i<snoDataIdArr.length; i++){
        setOneValue(snoDataIdArr[i], snoDataIdArr, snoData);
    }
}

function setOneValue(id, idArr, dataArr){
    let index = idArr.indexOf(id);
    let e = document.getElementById(id);
    let n = Number(dataArr[index].trim());

    //set 1 value
    e.innerText = n;
    
    //set background color of the value
    let l = valueArr.length;
    if(n === 0){
        e.style.backgroundColor = colorArr[0];
        e.style.color = '#1F1F1F';
    }
    for(let i=1; i<l; i++){
        if(n > valueArr[i-1] && n <= valueArr[i]){
            e.style.backgroundColor = colorArr[i];
            if(n <= valueArr[2]){
                e.style.color = '#1F1F1F';
            }
        }
    }
    if(n > valueArr[l - 1]){
        e.style.backgroundColor = colorArr[l];
    }
}