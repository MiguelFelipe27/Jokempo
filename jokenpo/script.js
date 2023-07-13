let partida = 0;
let jogador = 0;
let computador = 0;
let empate = 0;
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const pc = document.querySelector("#pc")

function jogar()
{
    partida++;
    if(document.querySelector("#pedra").checked == false &&
    document.querySelector("#papel").checked == false &&
    document.querySelector("#tesoura").checked == false)
    {
        alert("Escolha uma das Opções!");
    }
    else
    {
        let sorteio = Math.floor(Math.random()*3+1)
        switch(sorteio)
        {
            case 1:  pc.src = "pcpedra.png"; break;
            case 2:  pc.src = "pcpapel.png"; break;
            case 3:  pc.src = "pctesoura.png"; break;
        }
        verificar(sorteio);
    }
}
function verificar(escolha)
{
    if(document.querySelector("#pedra").checked == true && escolha == 2 ||
    document.querySelector("#papel").checked == true && escolha == 3 ||
    document.querySelector("#tesoura").checked == true && escolha == 1)
    { 
    computador++;
    document.querySelector("#resultado").innerText = "VOCÊ PERDEU!"
    document.querySelector("#computador").innerText = "COMPUTADOR:       " + computador
    }
else
if(document.querySelector("#pedra").checked == true && escolha == 3 ||
document.querySelector("#papel").checked == true && escolha == 1 ||
document.querySelector("#tesoura").checked == true && escolha == 2)
{ 
jogador++;
document.querySelector("#resultado").innerText = "VOCÊ GANHOU!"
document.querySelector("#jogador").innerText = "JOGADOR:       " + jogador
}
if(document.querySelector("#pedra").checked == true && escolha == 1 ||
document.querySelector("#papel").checked == true && escolha == 2 ||
document.querySelector("#tesoura").checked == true && escolha == 3)
{ 
empate++
document.querySelector("#resultado").innerText = "EMPATOU!"
}
}