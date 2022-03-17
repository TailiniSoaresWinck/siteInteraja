let body = document.querySelector('body')

let section=document.createElement('section')

let h1=document.createElement('h1')
txt=document.createTextNode('Clique no interruptor!')
h1.append(txt)

let divInt=document.createElement('div')

let chave=document.createElement('img')
chave.setAttribute('src','Imagens/interruptor-off.png' )
chave.setAttribute('id','chave')

let divLamp=document.createElement('div')

let lampada=document.createElement('img')
lampada.setAttribute('src', 'Imagens/lampadaDesligada.png')
lampada.setAttribute('id','lampada')

divLamp.append(lampada)
divInt.append(chave)
section.append(h1)
section.append(divLamp)
section.append(divInt)
body.append(section)

document.querySelector('#chave').onclick=function(){
    if(lampada.src.match('Imagens/lampadaDesligada.png')){
        lampada.removeAttribute('src','Imagens/lampadaDesligada.png')
        lampada.setAttribute('src', 'Imagens/lampadaLigada.png')
        chave.removeAttribute('src','Imagens/interruptor-off.png')
        chave.setAttribute('src','Imagens/interruptor-on.png' )
        section.style.backgroundColor='#EED19C'
    }
    else{
        lampada.removeAttribute('src','Imagens/lampadaLigada.png')
        lampada.setAttribute('src', 'Imagens/lampadaDesligada.png')
        chave.removeAttribute('src','Imagens/interruptor-on.png')
        chave.setAttribute('src','Imagens/interruptor-off.png' )
        section.style.backgroundColor='#03010D'
    }
}