let violet = document.getElementById('violet')
let rose = document.getElementById('rose')
let rouge = document.getElementById('rouge')
let bleu = document.getElementById('bleu')

violet.setAttribute('class','off')
rose.setAttribute('class','off')
rouge.setAttribute('class','off')
bleu.setAttribute('class','off')


violet.addEventListener('click', allumerViolet)
rose.addEventListener('click', allumerRose)
rouge.addEventListener('click', allumerRouge )
bleu.addEventListener('click', allumerBleu )

const etape = 4
let sequence =[]

function allumerViolet() {
    violet.setAttribute('class','on')
    setTimeout(eteindreViolet,1000)
}
function allumerRose() {
    rose.setAttribute('class','on')
    setTimeout(eteindreRose,1000)
}
function allumerRouge() {
    rouge.setAttribute('class','on')
    setTimeout(eteindreRouge,1000)
}
function allumerBleu() {
    bleu.setAttribute('class','on')
    setTimeout(eteindreBleu,1000)
}

function eteindreViolet(){
    violet.setAttribute('class','off')
}
function eteindreRose(){
    rose.setAttribute('class','off')
}
function eteindreRouge(){
    rouge.setAttribute('class','off')
}
function eteindreBleu(){
    bleu.setAttribute('class','off')
}
function genererSequence(){
    for(let i=0; i < etape; i++)
    sequence[i]=Math.floor(Math.random()*4)
    console.table(sequence);
    return sequence
}