let body = document.querySelector('body')

let section=document.createElement('section')

let divInt=document.createElement('div')

let chave=document.createElement('img')
chave.setAttribute('src','Imagens/interruptor.png' )
chave.setAttribute('id','chave')

let divLamp=document.createElement('div')

let lampOn=document.createElement('img')
lampOn.setAttribute('src', 'Imagens/lampadaLigada.png')
lampOn.setAttribute('id','ligada')

let lampOff;

divLamp.append(lampOn)
divInt.append(chave)
section.append(divLamp)
section.append(divInt)
body.append(section)

document.querySelector('#chave').onclick=function(){
    if(divLamp=='Imagens/lampadaLigada.png'){
    divLamp.innerHTML='imagens/lampadaDesligada.png'
    section.append(divLamp)
    body.append(section)
    }
    else{
        divLamp.append(lampOn)
        section.append(divLamp)
        body.append(section)
    }
}