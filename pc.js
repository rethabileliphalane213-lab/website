const leftCanvas=document.getElementById("left-canvas")
const ctx=leftCanvas.getContext("2d")

leftCanvas.width=windwow.innerWidth/4
leftCanvas.height=window.innerHeight

const displayName="RETHABILELIPHALANE".split("")
const  fontSize=10
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
ctx.fillSyle="#0f0"
ctx.fillText(text,i*fontSize,array[i]*fontSize)
array[i]++
if(array[i]*fontSize> leftCanvas.height && Math.random()>.95){
    array[i]=0
}
}
}
setInterval(matrix,50)