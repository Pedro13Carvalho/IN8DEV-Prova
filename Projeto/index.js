
var n=2;

function addRow()
{
        
    let nome = document.querySelector('#fnome')
    let email = document.querySelector('#femail')
    let data = document.querySelector('#fdata')
    let telefone = document.querySelector('#ftelefone')

    var addRow= document.getElementById('tabela')
    let template =
    '<tr>'+
    '<th class="line2 num">'+ n +'</th>'+
    '<th class="line2 info">'+ nome.value +'</th>'+
    '<th class="line2 info">'+ email.value +'</th>'+
    '<th class="line2 info">'+ data.value +'</th>'+
    '<th class="line4 info">'+ telefone.value +'</th>'+
    '</tr>'

    addRow.innerHTML += template;
    n++
}

function goToTop()
{
    document.getElementById("top").scrollIntoView();
}
function goToCadastro()
{
    document.getElementById("cadastro").scrollIntoView();
}
function goToLista()
{
    document.getElementById("lista").scrollIntoView();
}
function goToSobre()
{
    document.getElementById("sobre").scrollIntoView();
}