

const cheese = {'good':'cheese','quant':1,'price':200}
const butter = {'good':'butter','quant':2,'price':250}
const braed = {'good':'braed ','quant':3,'price':100}

let out= document.getElementById ('out')
let out2= document.getElementById ('out2')
let print= document.getElementById ('print')

const check =  [cheese,butter,braed]
console.log(check)

let sum=0

function total(){
    for (i in check){
        sum+=check[i]['quant'] * check[i]['price']
    }
    console.log(sum)
}

function present(){
    let stroka=''
    stroka+='продукт 1 -- '+cheese.good+' -- количество -- '+cheese.quant+' -- цена -- '+cheese.price+'<br>'
    stroka+='продукт 2 -- '+butter.good+' -- количество -- '+butter.quant+' -- цена -- '+butter.price+'<br>'
    stroka+='продукт 3 -- '+braed.good+' -- количество -- '+braed.quant+' -- цена -- '+braed.price+'<br>'
    stroka+='сумма покупки --'+sum+'<br>'
    out.innerHTML=stroka
}
function rich(){
    let n1=cheese.quant * cheese.price
    let n2=butter.quant * butter.price
    let n3=braed.quant * braed.price
    if (n1>n2&&n1>n3){
        out2.innerText = 'самая дорогая покупка '+'cheese'
    }
    else if (n2>n1&&n2>n3){
        out2.innerText = 'самая дорогая покупка '+'butter'
    }
    else{
        out2.innerText = 'самая дорогая покупка '+'bread'
    }
}
print.onclick = function (){
    total()
    present()
    rich()
}





     
