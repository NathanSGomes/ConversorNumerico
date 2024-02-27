//Conversor de Numeros
function converterNumero() {
    const inputDecimal = document.getElementById("decimalInput").value;
    const numeroDecimal = parseInt(inputDecimal, 10);

    const baseSelect = document.getElementById("baseSelect");
    const baseSelecionada = baseSelect.options[baseSelect.selectedIndex].value;

    let resultado;

    switch (baseSelecionada) {
        case "binario":
            resultado = numeroDecimal.toString(2);
            break;
        case "octal":
            resultado = numeroDecimal.toString(8);
            break;
        case "hexadecimal":
            resultado = numeroDecimal.toString(16).toUpperCase();
            break;
        default:
            resultado = "Escolha uma base válida";
    }

    document.getElementById("resultado").innerText = "Resultado em " + baseSelecionada + ": \n" + resultado;
}

//Modo Noturno
const inputCheck = document.querySelector('#modoNoturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})

//Ano Atual
const anoAtual = document.getElementById("anoAtual");
const atualizaAno = new Date().getFullYear();

anoAtual.innerHTML = `${atualizaAno} <i class="bi bi-c-circle"></i> Desenvolvido por <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://github.com/NathanSGomes">Nathan Gomes</a> | Projeto fictício sem fins comerciais.`;