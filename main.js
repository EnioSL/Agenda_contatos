const form = document.getElementById('form-valida');
const imgCadastrado = '<img src="./imagens/2705.png" alt="Emoji check sim" />';
const imgRecusado = '<img src="./imagens/2705.png" alt="Emoji check não" />';
let linhas = '';
const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(nomes.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi cadastrado.`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(parseFloat(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputTelefoneContato.value}</td>`;
        linha += `<td> ${inputTelefoneContato.value !=''? imgCadastrado : imgRecusado }</td>`; /* Operador ternário "if=? / else=:" */
        linha += '</tr>';

        linhas += linha;    
    
    };

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
