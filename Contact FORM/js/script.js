function validarFormulario(event){
    event.preventDefault()

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;
    let ddi = document.getElementById("ddi").value;
    let ddd = document.getElementById("ddd").value;
    let numero = document.getElementById("Numero").value;
    let cep = document.getElementById("Cep").value;
    let rua = document.getElementById("Rua").value;
    let numerocasa = document.getElementById("Bloco").value;
    let estado = document.getElementById("Estado").value;
    let cidade = document.getElementById("Cidade").value;
    let bairro = document.getElementById("Bairro").value;
    let complemento = document.getElementById("Anotaçoes").value;

    let quantidadeErros = 0;

    // Nome
    if(Nome.trim().length == 0) {
        formError("Nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    } else {
        reiniciaBorda("Nome");
    }

    // Sobrenome
    if(Sobrenome.trim().length == 0) {
        formError("Sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    } else {
        reiniciaBorda("Sobrenome");
    }

    // Email
    if(Email.trim().length == 0) {
        formError("Email");
        quantidadeErros++;
        // alert("O campo email é obrigatório!");
    } else {
        reiniciaBorda("Email");
    }

    // DDI
    if(ddi.trim().length == 0) {
        formError("ddi");
        quantidadeErros++;
        // alert("O campo DDI é obrigatório!");
    } else {    
        reiniciaBorda("ddi");
    }

    // DDD
    if(ddd.trim().length == 0) {
        formError("DDD");
        quantidadeErros++;
        // alert("O campo ddd é obrigatório!");
    } else {
        reiniciaBorda("ddd");
    }

    // Numero
    if(Numero.trim().length == 0) {
        formError("numero");
        quantidadeErros++;
        // alert("O campo numero é obrigatório!");
    } else {
        reiniciaBorda("Numero");
    }

    // Cep
    if(Cep.trim().length == 0) {
        formError("Cep");
        quantidadeErros++;
        // alert("O campo cep é obrigatório!");
    } else {
        reiniciaBorda("Cep");
    }

    // Rua
    if(Rua.trim().length == 0) {
        formError("Rua");
        quantidadeErros++;
        // alert("O campo rua é obrigatório!");
    } else {
        reiniciaBorda("Rua");
    }

    // Bloco
    if(Bloco.trim().length == 0) {
        formError("Bloco");
        quantidadeErros++;
        // alert("O campo numerocasa é obrigatório!");
    } else {
        reiniciaBorda("Bloco");
    }

    // Estado
    if(Estado.trim().length == 0) {
        formError("Estado");
        quantidadeErros++;
        // alert("O campo estado é obrigatório!");
    } else {
        reiniciaBorda("Estado");
    }

    // Cidade
    if(Cidade.trim().length == 0) {
        formError("Cidade");
        quantidadeErros++;
        // alert("O campo cidade é obrigatório!");
    } else {
        reiniciaBorda("Cidade");
    }

    // Bairro
    if(Bairro.trim().length == 0) {
        formError("Bairro");
        quantidadeErros++;
        // alert("O campo bairro é obrigatório!");
    } else {
        reiniciaBorda("Bairro");
    }

    // Anotaçoes
    if(Anotaçoes.trim().length == 0) {
        formError("Anotaçoes");
        quantidadeErros++;
        // alert("O campo complemento é obrigatório!");
    } else {
        reiniciaBorda("Anotaçoes");
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário");
        quantidadeErros = 0;
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }

}

function formError(idNome) {
    document.getElementById(idNome).style.border = "2px solid red";
}

function reiniciaBorda(idNome) {
    document.getElementById(idNome).style.border = "transparent";
}

function reiniciaTodasAsBordas(){
    reiniciaBorda("Nome");
    reiniciaBorda("Sobrenome");
    reiniciaBorda("Email");
    reiniciaBorda("ddi");
    reiniciaBorda("DDD");
    reiniciaBorda("Numero");
    reiniciaBorda("Cep");
    reiniciaBorda("Rua");
    reiniciaBorda("Bloco");
    reiniciaBorda("Estado");
    reiniciaBorda("Cidade");
    reiniciaBorda("Bairro");
    reiniciaBorda("Anotaçoes");
}


