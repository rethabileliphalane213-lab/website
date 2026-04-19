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
upMatrix()
}



const rightCanvas=document.getElementById("right-canvas")

rightCanvas.width=window.innerWidth/4
rightCanvas.height=window.innerHeight

const array2=[
]
for(let i=0;i<coloumn;i++){
    array2[i]=rightCanvas.height/fontSize
}

const ctxRight = rightCanvas.getContext("2d")

function upMatrix(){
    ctxRight.fillStyle = "rgba(0,0,0,0.05)"
    ctxRight.fillRect(0, 0, rightCanvas.width, rightCanvas.height)

    for(let i=0; i<array2.length; i++){
        const random = Math.floor(Math.random() * displayName.length)
        const text = displayName[random]

        ctxRight.fillStyle = "#0f0"
        ctxRight.fillText(text, i*fontSize, array2[i]*fontSize)

        array2[i]--
        if(array2[i]*fontSize < 0 && Math.random() > 0.95){
            array2[i] = rightCanvas.height / fontSize
        }
    }
}

setInterval(matrix,50)