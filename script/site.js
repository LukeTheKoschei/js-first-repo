
//Luke
const now = (new Date()).getSeconds()

const p =  document.querySelector('p')
const h1 = document.querySelector('h1')
console.log(h1);



setTimeout(() => {

p.textContent = 'Genral Kenobi!' + seconds
}, 2000)

setTimeout(()=> {
    if (second % 2 ==1)
    {
    p.style.color = '#990000'
    }
    else
    {
        p.style.color = '#00CC00'
    }
},3000)