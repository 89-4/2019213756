"use strict"

function random(x) {
    return Math.floor(Math.random()*x)
}

for( let i = 0; i < 20; i++){
    console.log(random(255));
}


document.getElementById('win').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = 'Windows程序设计';
    document.getElementById('teacher').innerHTML = '赵卫中';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@217';
})
document.getElementById('win').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('web').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = 'WEB程序设计';
    document.getElementById('teacher').innerHTML = '涂新辉';
    document.getElementById('time').innerHTML = '2-18周（双）';
    document.getElementById('loc').innerHTML = '@108';
})
document.getElementById('ai').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '人工智能';
    document.getElementById('teacher').innerHTML = '戴上平';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@113';
})
document.getElementById('os').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '操作系统原理';
    document.getElementById('teacher').innerHTML = '李源';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@520';
})

document.getElementById('micro').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '微机原理';
    document.getElementById('teacher').innerHTML = '陈怡';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@535';
})
document.getElementById('os1').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '操作系统原理';
    document.getElementById('teacher').innerHTML = '李源';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@520';
})
document.getElementById('xi').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '习近平';
    document.getElementById('teacher').innerHTML = '张艳斌';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@215';
})

document.getElementById('web1').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = 'WEB程序设计';
    document.getElementById('teacher').innerHTML = '涂新辉';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@108';
})
document.getElementById('eng').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = '专业英语';
    document.getElementById('teacher').innerHTML = '李增阳';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@112';
})
document.getElementById('win1').addEventListener('mouseover', function (){
    document.getElementById('name').innerHTML = 'Windows程序设计';
    document.getElementById('teacher').innerHTML = '赵卫中';
    document.getElementById('time').innerHTML = '1-19周';
    document.getElementById('loc').innerHTML = '@217';
})
document.getElementById('web').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('ai').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('os').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('micro').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})

document.getElementById('os1').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('xi').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('web1').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('eng').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})
document.getElementById('win1').addEventListener('mouseout', function (){
    document.getElementById('name').innerHTML = '';
    document.getElementById('teacher').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('loc').innerHTML = '';
})

let date = new Date();
let org = new Date();
org.setFullYear(2021);

org.setMonth(11);
org.setDate(12);


let w = Math.floor((date.getTime()-org.getTime())/86400000/7);
w += 16;


document.getElementById('week').innerHTML = `WEEK ${w}`
/*
let date = new Date();
let org = new Date(2021,11,15,0,0,0);
let w = Math.floor((org.getTime()-date.getTime())/(7*604800000) );
w +=12;
document.getElementById('week').innerHTML = `WEEK ${w}`
*/



let t = document.querySelectorAll('.loc')

/*
let color = [`rgb(${random(255)},${random(255)},${random(255)})`,
    `rgb(${random(255)},${random(255)},${random(255)})`,
    `rgb(${random(255)},${random(255)},${random(255)})`,`
    rgb(${random(255)},${random(255)},${random(255)})`]


 */
let color = ['lightpink','cadetblue','mediumpurple']



for (let x = 0; x < t.length; x++) {
    t[x].parentNode.style.backgroundColor = color[random(3)];
}









/*
var tableObj = document.getElementById('table');

let nodes = tableObj.childNodes;


for(let x = 0; x < nodes.length; x ++) {
    let a =random(255);
    if(nodes[x].nodeType === 1 ){
        console.log(nodes[x].nodeName);
        nodes[x].style.backgroundColor = `rgb(${random(255)},${a},${random(255)})`;
    }
}

 */





























/*
document.getElementById('web').addEventListener('mouseover', function (){
    document.getElementById('image').src = 'email.jpg';
})

let array = ['win','win1','web','web1','ai','os','os1','eng','micro','xi']

/*
for(let x in array) {
    if(x==='win') {
        document.getElementById(x).addEventListener('mouseover', function () {
            document.getElementById('name').innerHTML = 0;

        })
    }
}

 */
