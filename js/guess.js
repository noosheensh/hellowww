// const apple=document.getElementById('apple');
// const sumsung=document.getElementById('sumsung');
// const option=["apple","sumsung"];
// var player=0;
// var computer=0;
// var pPoint=document.getElementById('pPoint');
// var cPoint=document.getElementById('cPoint');
// const cChoise=function (){
//     let choise=parseInt(Math.random()*option.length);
//     return option[choise];
// }
// apple.addEventListener('click',function(){

//     if(cChoise()==="apple"){
// player++
//     }
// else{
//     computer++;
// }
// cPoint.innerHTML=computer;
// pPoint.innerHTML=player;
// })
// sumsung.addEventListener('click',function(){
  
//     if(cChoise()==="sumsung"){
//         player++
//     }
// else{
//     computer++;
// }
// cPoint.innerHTML=computer;
// pPoint.innerHTML=player;
// })
const option=["apple","sumsung"];
const buttons=document.querySelectorAll('.btn');
const point=[0,0];
var pPoint=document.getElementById('pPoint');
var cPoint=document.getElementById('cPoint');
buttons.forEach(function(btn){
btn.addEventListener("click",guess)
})
function guess(e){
let playerguess=e.target.innerText;
let comguess=option[parseInt(Math.random()*option.length)];
if(playerguess===comguess){
point[0]++
}
else{
    point[1]++
}
pPoint.innerHTML=point[0];
cPoint.innerHTML=point[1];
}