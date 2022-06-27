let slider = document.querySelector("#slider")
let valor = document.querySelector("#valor")
let senhaGerada = document.querySelector("#container-senhaGerada")
let btnGerar = document.querySelector("#botao-gerar")
let password = document.querySelector("#password")
let txtCopy = document.querySelector("#texto-copiado")
let novaSenha = ""


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@1234567890" 


valor.innerHTML = slider.value
slider.oninput = function(){
    valor.innerHTML = this.value
}

function gerar(){
    

    let pass = ""

        for(let i = 0, n = charset.length; i < slider.value; ++i){
           pass += charset.charAt(Math.floor(Math.random() * n)) //charAt busca um valor dentro da variavel. buscamos valores aleatorios dentro de uma div
           
           
        }
        senhaGerada.classList.add("active")
        password.innerHTML = pass
        novaSenha = pass
        txtCopy.innerHTML = "Clique para copiar sua senha"
        
    }
        
function copy(){
    navigator.clipboard.writeText(novaSenha)
    txtCopy.innerHTML = "Senha copiada com sucesso!"
}
    
