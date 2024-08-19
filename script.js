function EnviarFormulario() {
    //Capturar os valores e criar a variável para o Objeto (JSON)
    var contaCliente = new Object();

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.sobrenome = document.getElementById("sobrenome").value;
    contaCliente.cpf = document.getElementById("cpf").value;
    contaCliente.rg = document.getElementById("rg").value;
    contaCliente.escolaridade = document.getElementById("escolaridade").value;
    contaCliente.dataNascimento = document.getElementById("dataNascimento").value;
    contaCliente.email = document.getElementById("email").value;
    contaCliente.telefone = document.getElementById("telefone").value;
    contaCliente.estado = document.getElementById("estado").value;
    contaCliente.cidade = document.getElementById("cidade").value;
    contaCliente.areaInteresse = document.getElementById("area").value;
    
    var json = JSON.stringify(contaCliente)

    console.log(json)
    console.log(contaCliente.valueOf())
    Swal.fire({
        title: "Ótimo",
        text: "Seu cadastro foi Realizado!",
        icon: "success"
      });
}