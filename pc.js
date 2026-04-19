const leftCanvas=document.getElementById("left-canvas")
const ctx=leftCanvas.getContext("2d")

leftCanvas.width=window.innerWidth/4
leftCanvas.height=window.innerHeight

const displayName="RETHABILELIPHALANE".split("")
const  fontSize=20
const coloumn=leftCanvas.width/fontSize

const array=[
]
for(let i=0;i<coloumn;i++){
    array[i]=1
}

function matrix(){
    ctx.fillStyle="rgba(0,0,0,0.05)"
    ctx.fillRect(0,0,leftCanvas.width,leftCanvas.height)
    const random=Math.floor(Math.random()*displayName.length)
for(let i=0;i<array.length;i++){
const text=displayName[random]
ctx.fillStyle="#0f0"
ctx.fillText(text,i*fontSize,array[i]*fontSize)
array[i]++
if(array[i]*fontSize> leftCanvas.height && Math.random()>.95){
    array[i]=0
}
}
}
setInterval(matrix,50)


const rightCanvas=document.getElementById("right-canvas")
rightCanvas.width=window.innerWidth/4
rightCanvas.height=window.innerHeight

const array2=[
]
for(let i=0;i<coloumn;i++){
    array2[i]=rightCanvas.height/fontSize
}

function upMatrix(){
    ctx.fillStyle="rgba(0,0,0,0.05)"
    ctx.fillRect(0,0,rightCanvas.width,rightCanvas.height)
    /*const random=Math.floor(Math.random()*displayName.length)*/
for(let i=0;i<array.length;i++){
const text=displayName
ctx.fillStyle="#0f0"
ctx.fillText(text,i*fontSize,array[i]*fontSize)
array[i]--
if(array[i]*fontSize> rightCanvas.height && Math.random()>.95){
    array[i]=0
}
}
}