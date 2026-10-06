function verificarIdade(event) {
    // Evita que o formulário recarregue a página
    if (event) event.preventDefault();
    const campoData = document.getElementById("dataNascimento");
    const aviso = document.getElementById("aviso");
    if (!campoData || !campoData.value) {
        aviso.textContent = "O campo de data está vazio.";
        aviso.style.color = "red";
        return;
    }
    const nascimento = new Date(campoData.value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    if (idade < 18) {
        aviso.textContent = "Idade não apropriada. Acesso negado.";
        aviso.style.color = "red";
    } else {
        window.location.href = "decisao.html";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const formIdade = document.getElementById("form-idade");
    const campoData = document.getElementById("dataNascimento");
    const aviso = document.getElementById("aviso");
    if (formIdade) {
        formIdade.addEventListener("submit", verificarIdade);
    }
    if (campoData && aviso) {
        campoData.addEventListener("focus", function () {
            aviso.textContent = "Digite sua data de nascimento.";
            aviso.style.color = "gray";
        });
        campoData.addEventListener("blur", function () {
            if (!campoData.value) {
                aviso.textContent = "O campo de data está vazio.";
                aviso.style.color = "red";
            }
        });
    }
});