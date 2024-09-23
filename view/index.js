
export function criarImagem() {
    let imagens = document.createElement('imagens')
    imagens.style.backgroundColor = 'red'
    let clebinho = document.createElement('clebinho')
    imagens.innerHTML = 'clebinho'
    imagens.appendChild(clebinho)
}

export function criarBandeira() {

}

let fundo = document.createElement('div')
fundo.style.backgroundColor = 'blue';
fundo.style.width = '100%';
fundo.style.height = '100%';



document.body.appendChild(fundo);

let alemanha = document.createElement('div')
alemanha.style.display = 'flex'
alemanha.style.flexDirection = 'column';
alemanha.style.width = '30vw'
alemanha.style.height = '30vh'

let pretoalemanha = document.createElement('div')
pretoalemanha.style.backgroundColor ='black'
pretoalemanha.style.width = '20vw'
pretoalemanha.style.height = '100%'

let vermelhoalemanha = document.createElement('div')
vermelhoalemanha.style.backgroundColor = 'red' 
vermelhoalemanha.style.width = '20vw' 
vermelhoalemanha.style.height = '100%' 

let amareloalemanha = document.createElement('div') 
amareloalemanha.style.backgroundColor ='yellow'
amareloalemanha.style.width ='20vw'
amareloalemanha.style.height ='100%'


alemanha.appendChild(pretoalemanha)
alemanha.appendChild(vermelhoalemanha)
alemanha.appendChild(amareloalemanha)


let bodyDiv = document.getElementById('body')
bodyDiv.appendChild(alemanha)
alemanha.style.position = 'absolute'
alemanha.style.top = '32vh'
alemanha.style.left = '25vw'


