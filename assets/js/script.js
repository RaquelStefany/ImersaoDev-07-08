const cartas1 = {
    nome: "Ahri",
    imagem : "assets/img/cartas/ahri.png",
    atributos: {
        ataque: 6,
        defesa: 5,
        magia: 8
    }
};

const cartas2 = {
    nome: "Evelynn",
    imagem : "assets/img/cartas/evelynn.png",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 4
    }
};

const cartas3 = {
    nome: "Kai'Sa",
    imagem : "assets/img/cartas/kaisa.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 4
    }
};

const cartas4 = {
    nome: "Akali",
    imagem : "assets/img/cartas/akali.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 3
    }
};

var cartas = [cartas1, cartas2, cartas3, cartas4];

var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var randomMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[randomMaquina];
    
    var randomJogador = parseInt(Math.random() * 4);

    while (randomJogador == randomMaquina){
        randomJogador = parseInt(Math.random() * 4);
    }

    cartaJogador = cartas[randomJogador];

    document.querySelector("#btnSortear").disabled = true;
    document.querySelector("#btnJogar").disabled = false;    

    //exibirOpcoes();
    exibirCartaJogador();
}

function exibirOpcoes(){
    var opcoes = document.querySelector("#opcoes");
    var opcoesTexto = "";
    var op = 1;

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += `<div>
                            <input type="radio" name="atributo" id="op${op++}" value="${atributo}"> ${atributo.toLocaleUpperCase()}
                        </div>`;
    }

    opcoes.innerHTML = opcoesTexto;
}

function obtAtributos(){
    var radioAtributos = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

function jogar(){
    var atributoSelecionado = obtAtributos();

    /* var radio1 = document.querySelector("#op1");
    var radio2 = document.querySelector("#op2");
    var radio3 = document.querySelector("#op3");
    radio1.disabled = true;
    radio2.disabled = true;
    radio3.disabled = true; */

    var elementoResultado = document.querySelector("#resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = `<p class="resultado-final">
                                            Vitória
                                        </p>`;
        elementoResultado.style.color = "green";
    }
    else if(valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = `<p class="resultado-final">
                                            Derrota
                                        </p>`;
        elementoResultado.style.color = "red";
    }
    else{
        elementoResultado.innerHTML = `<p class="resultado-final">
                                            Empate
                                        </p>`;
        elementoResultado.style.color = "orange";
    }
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    var divCartajogador = document.querySelector("#carta-jogador");
    divCartajogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = `<img src="assets/img/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    var tagHTML = `<div id="opcoes" class="carta-status">`;

    var opcoesTexto = "";
    var op = 1;

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += `<input type="radio" name="atributo" id="op${op++}" value="${atributo}"> ${atributo.toLocaleUpperCase()}: ${cartaJogador.atributos[atributo]}<br>`;
    }

    var nome = `<p class="carta-subtitle">
                    ${cartaJogador.nome}
                </p>`;

    divCartajogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = `<img src="assets/img/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    var tagHTML = `<div id="opcoes" class="carta-status">`;

    var opcoesTexto = "";
    var op = 1;

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += `<p name="atributo">
                            ${atributo.toLocaleUpperCase()}: ${cartaMaquina.atributos[atributo]}
                        </p>`;
    }

    var nome = `<p class="carta-subtitle">
                    ${cartaMaquina.nome}
                </p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}