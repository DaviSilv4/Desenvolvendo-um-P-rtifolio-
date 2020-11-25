document.querySelector('.hamburger').addEventListener('click', () =>{
    document.querySelector('.container').classList.toggle('show-menu') 
})

document.querySelector('#qtde').addEventListener('click' , atualizarPreco)
document.querySelector('#js').addEventListener('click' , atualizarPreco)
document.querySelector('#layout-sim').addEventListener('click' , atualizarPreco)
document.querySelector('#layout-nao').addEventListener('click' , atualizarPreco)
document.querySelector('#prazo').addEventListener('click' , function(){
    const prazo = document.querySelector('#prazo').value
    document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco (){
    const qtde = document.querySelector('#qtde').value
    const  temJs = document.querySelector('#js').checked
    const incluirLayout = document.querySelector('#layout-sim').checked 
    const prazo = document.querySelector('#prazo').value
    let preco = qtde * 100

    if(temJs) preco *=  1.1 
    if(incluirLayout) preco += 500
    let taxaUrgencia = 1  - prazo * 0.1
    preco *= 1 + taxaUrgencia
    
    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}
