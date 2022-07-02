// função para fazer o cálculo e respostas conforme pontuação //
function calculo() {
            resp_pontuacao.value = (parseInt(res1.value) + parseInt(res2.value) + parseInt(res3.value))
            if (resp_pontuacao.value >= 13){
                conduta.value = "Lesão Leve. Dispensa cuidados.";
            }else if (resp_pontuacao.value >= 9){
            	conduta.value = "Lesão Moderada. Sem necessidade de proteção da via aérea, porém é necessária avaliação seriada para acompanhamento da evolução do paciente.";
            }else if (resp_pontuacao.value <= 8 && resp_pontuacao.value > 3) {
            	conduta.value = "Lesão Grave. Caso crítico nas alterações dos níveis de consciência. Indicada a intubação orotraqueal para proteção da via aérea.";
            }else{
            	conduta.value = "Estado de Coma. Indicação de intubação orotraqueal."
            }
            }
            
// função para quando selecionar um item no botão, o valor ir para o campo do resultado //
function pontua() {
    var botao = document.getElementsByName('ocular');
    var res = document.getElementById('res1')
    for (i = 0; i < botao.length; i++) {
        if (botao[i].checked)
        res.value = (botao[i].value)
    }

}

function pontua2() {
    var botao2 = document.getElementsByName('verbal');
    var res2 = document.getElementById('res2')
    for (i = 0; i < botao2.length; i++) {
        if (botao2[i].checked)
        res2.value = (botao2[i].value)
    }

}

function pontua3() {
    var botao3 = document.getElementsByName('motora');
    var res3 = document.getElementById('res3')
    for (i = 0; i < botao3.length; i++) {
        if (botao3[i].checked)
        res3.value = (botao3[i].value)
    }

}

function showAlerta1() {
    document.getElementById('alerta1').style.visibility = 'visible';

}

function hideAlerta1() {
    document.getElementById('alerta1').style.visibility = "hidden"; 

}

function showAlerta2() {
    document.getElementById('alerta2').style.visibility = 'visible';

}

function hideAlerta2() {
    document.getElementById('alerta2').style.visibility = "hidden"; 

}

function showAlerta3() {
    document.getElementById('alerta3').style.visibility = 'visible';

}

function hideAlerta3() {
    document.getElementById('alerta3').style.visibility = "hidden"; 

}

function showAlerta4() {
    document.getElementById('alerta4').style.visibility = 'visible';

}

function hideAlerta4() {
    document.getElementById('alerta4').style.visibility = "hidden"; 

}

function showAlerta5() {
    document.getElementById('alerta5').style.visibility = 'visible';

}

function hideAlerta5() {
    document.getElementById('alerta5').style.visibility = "hidden"; 

}

function showAlerta6() {
    document.getElementById('alerta6').style.visibility = 'visible';

}

function hideAlerta6() {
    document.getElementById('alerta6').style.visibility = "hidden"; 

}

function showAlerta7() {
    document.getElementById('alerta7').style.visibility = 'visible';

}

function hideAlerta7() {
    document.getElementById('alerta7').style.visibility = "hidden"; 

}

function showAlerta8() {
    document.getElementById('alerta8').style.visibility = 'visible';

}

function hideAlerta8() {
    document.getElementById('alerta8').style.visibility = "hidden"; 

}

function showAlerta9() {
    document.getElementById('alerta9').style.visibility = 'visible';

}

function hideAlerta9() {
    document.getElementById('alerta9').style.visibility = "hidden"; 

}

function showAlerta10() {
    document.getElementById('alerta10').style.visibility = 'visible';

}

function hideAlerta10() {
    document.getElementById('alerta10').style.visibility = "hidden"; 

}

function showAlerta11() {
    document.getElementById('alerta11').style.visibility = 'visible';

}

function hideAlerta11() {
    document.getElementById('alerta11').style.visibility = "hidden"; 

}

function showAlerta12() {
    document.getElementById('alerta12').style.visibility = 'visible';

}

function hideAlerta12() {
    document.getElementById('alerta12').style.visibility = "hidden"; 

}

function showAlerta13() {
    document.getElementById('alerta13').style.visibility = 'visible';

}

function hideAlerta13() {
    document.getElementById('alerta13').style.visibility = "hidden"; 

}

function showAlerta14() {
    document.getElementById('alerta14').style.visibility = 'visible';

}

function hideAlerta14() {
    document.getElementById('alerta14').style.visibility = "hidden"; 

}

function showAlerta15() {
    document.getElementById('alerta15').style.visibility = 'visible';

}

function hideAlerta15() {
    document.getElementById('alerta15').style.visibility = "hidden"; 

}




