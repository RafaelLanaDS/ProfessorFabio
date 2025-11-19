let i = 0

function exibircarinho(){
    document.getElementById("alertMessage") . innerHTML = `Voce possui ${i} quantidade no carrinho`
   document.getElementById("customAlert") .style.display = "block"
}

function hideAlert(){
    document.getElementById("customAlert") .style.display = "none"
}

function adicionarcarrinho(){
    i+=1
    document.getElementById("alertMessage") . innerHTML = `Voce possui ${i} quantidade no carrinho`
    document.getElementById("customAlert") .style.display = "block"
}