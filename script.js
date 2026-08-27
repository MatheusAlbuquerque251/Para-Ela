// =========================
// ARQUIVO: script.js
// =========================

// ==========================
// MENU HAMBURGUER (mobile)
// ==========================

const btnHamburguer = document.getElementById("btnHamburguer");
const menuMobile    = document.getElementById("menuMobile");
const overlayMenu   = document.getElementById("overlayMenu");

function abrirMenuMobile(){
  btnHamburguer.classList.toggle("ativo");
  menuMobile.classList.toggle("aberto");
  overlayMenu.classList.toggle("ativo");
}

function fecharMenuMobile(){
  btnHamburguer.classList.remove("ativo");
  menuMobile.classList.remove("aberto");
  overlayMenu.classList.remove("ativo");
}

if(btnHamburguer){
  btnHamburguer.addEventListener("click", abrirMenuMobile);
}

if(overlayMenu){
  overlayMenu.addEventListener("click", fecharMenuMobile);
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu-mobile a").forEach(link => {
  link.addEventListener("click", fecharMenuMobile);
});

// DATA DO NAMORO
// ALTERE AQUI:
const dataNamoro = new Date("2025-09-05 00:00:00").getTime();

function atualizarContador(){

  const agora = new Date().getTime();

  const diferenca = agora - dataNamoro;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutos = Math.floor(
    (diferenca % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const segundos = Math.floor(
    (diferenca % (1000 * 60))
    / 1000
  );

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

}

setInterval(atualizarContador,1000);

// MODAL CARTINHA

function abrirCarta(){
  document.getElementById("modal").style.display = "flex";
}

function fecharCarta(){
  document.getElementById("modal").style.display = "none";
}

// MODAL ROMÂNTICO

let etapaAmor = 0;

function mostrarMensagem(){

  document
    .getElementById("modalAmor")
    .classList.add("mostrar");

  etapaAmor = 0;

  document
    .getElementById("textoAmor")
    .innerHTML =
    "Antes de continuar... ❤️";

}

function proximaMensagem(){

  const texto =
    document.getElementById("textoAmor");

  const botao =
    document.getElementById("btnContinuar");

  etapaAmor++;

  if(etapaAmor === 1){

    texto.innerHTML =
    `
    Feche os olhos por 5 segundos...<br>
    🥺❤️
    `;
  }

  else if(etapaAmor === 2){

    texto.innerHTML =
    "Agora imagine a pessoa que mais te ama nesse mundo...";

  }

  else if(etapaAmor === 3){

    texto.innerHTML =
    "Pensou? ❤️";

  }

  else if(etapaAmor === 4){

    texto.innerHTML =
    `
      Sou eu, né?! Eu sei. 🥱❤️<br><br>

      Eu te amo mais do que consigo
      colocar em palavras.<br><br>

      Obrigado por fazer esse último ano
      ser tão especial. 🌹<br><br>

      Te amo daqui até a lua!💘🌙
    `;

    botao.innerHTML =
    "Aaaawn 🥺";

  }

  else{

    document
      .getElementById("modalAmor")
      .classList.remove("mostrar");

    // Reseta o botão para uso futuro
    botao.innerHTML = "Continuar";

  }

}

// MOMENTOS — GALERIA INFINITA

const galeria = document.getElementById("galeria");

let posicao = 0;

function animar(){

    posicao += 0.5;

    if(posicao >= galeria.scrollWidth / 2){
        posicao = 0;
    }

    galeria.style.transform =
        `translateX(-${posicao}px)`;

    requestAnimationFrame(animar);
}

animar();

let startX = 0;
let currentX = 0;

galeria.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

galeria.addEventListener("touchmove", e => {

    currentX = e.touches[0].clientX;

    let distancia = startX - currentX;

    posicao += distancia * 0.03;

    startX = currentX;
});

function destacarCentro(){

    const cards = document.querySelectorAll(".card_gal");

    cards.forEach(card => {

        const rect = card.getBoundingClientRect();

        const centroTela = window.innerWidth / 2;

        const centroCard =
            rect.left + rect.width / 2;

        const distancia =
            Math.abs(centroTela - centroCard);

        card.classList.remove("ativa");

        if(distancia < 120){
            card.classList.add("ativa");
        }

    });

}

setInterval(destacarCentro, 100);

// PLAYLIST DE MÚSICAS

const musicas = [
    {
        nome: "1. ALMAR - Escolhi Você",
        arquivo: "musicas/ALMAR - Escolhi Você.mp3"
    },
    {
        nome: "2. ANAVITÓRIA - Trevo (Tu) ft. Tiago Iorc",
        arquivo: "musicas/ANAVITÓRIA - Trevo (Tu) ft. Tiago Iorc.mp3"
    },
    {
        nome: "3. Cheiro de Mar - José Jr",
        arquivo: "musicas/Cheiro de Mar - José Jr.mp3"
    },
    {
        nome: "4. Coldplay - Yellow",
        arquivo: "musicas/Coldplay - Yellow.mp3"
    },
    {
        nome: "5. Ed Sheeran - Perfect",
        arquivo: "musicas/Ed Sheeran - Perfect.mp3"
    },
    {
        nome: "6. Ed Sheeran - Photograph",
        arquivo: "musicas/Ed Sheeran - Photograph.mp3"
    },
    {
        nome: "7. John Legend - All of Me",
        arquivo: "musicas/John Legend - All of Me.mp3"
    },
    {
        nome: "8. Jorge & Mateus - Contrato",
        arquivo: "musicas/Jorge & Mateus - Contrato.mp3"
    },
    {
        // FIX: corrigido "Ckari Jobe" → "Kari Jobe"
        nome: "9. Kari Jobe - The Blessing (feat Cody Carnes)",
        arquivo: "musicas/kari Jobe - The Blessing (feat Cody Carnes).mp3"
    },
    {
        nome: "10. Lourena e Sant - Dizeres",
        arquivo: "musicas/Lourena e Sant - Dizeres.mp3"
    },
    {
        nome: "11. Marcelo Sissá & CARTAMOR - Salmos 231-2",
        arquivo: "musicas/Marcelo Sissá & CARTAMOR - Salmos 231-2.mp3"
    },
    {
        nome: "12. Melim - Meu Abrigo",
        arquivo: "musicas/Melim - Meu Abrigo.mp3"
    },
    {
        nome: "13. Melim - Ouvi Dizer",
        arquivo: "musicas/Melim - Ouvi Dizer.mp3"
    },
    {
        nome: "14. Mitski - My Love Mine All Mine",
        arquivo: "musicas/Mitski - My Love Mine All Mine.mp3"
    },
    {
        nome: "15. Nando Reis, Ana Cañas - Pra Você Guardei O Amor",
        arquivo: "musicas/Nando Reis, Ana Cañas - Pra Você Guardei O Amor.mp3"
    },
    {
        nome: "16. Parte do Luiz Lins Poesia acústica 15",
        arquivo: "musicas/Parte do Luiz Lins Poesia acústica 15.mp3"
    },
    {
        nome: "17. Passarinhos - Ototh",
        arquivo: "musicas/Passarinhos - Ototh.mp3"
    },
    {
        nome: "18. Rubel, ANAVITÓRIA - Partilhar",
        arquivo: "musicas/Rubel, ANAVITÓRIA - Partilhar.mp3"
    },
    {
        nome: "19. Sparkle - Your Name",
        arquivo: "musicas/Sparkle - Your Name.mp3"
    },
    {
        nome: "20. Stephen Sanchez - Until I Found You",
        arquivo: "musicas/Stephen Sanchez - Until I Found You.mp3"
    }
];

let indiceAtual = 0;

const player = document.getElementById("player");
const musicName = document.getElementById("musicName");

function carregarMusica(){
    player.src = musicas[indiceAtual].arquivo;
    musicName.textContent = "🎵 " + musicas[indiceAtual].nome;
}

function nextMusic(){
    indiceAtual++;

    if(indiceAtual >= musicas.length){
        indiceAtual = 0;
    }

    carregarMusica();
    player.play();
}

carregarMusica();

function toggleMusic() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

// EXPLODIR AMOR (foto de mãos dadas)

function explodirAmor(){

    const container =
    document.querySelector(".foto-container");

    const frase =
    document.querySelector(".frase-secreta");

    container.classList.remove("ativo");
    frase.classList.remove("mostrar");

    void container.offsetWidth;

    container.classList.add("ativo");

    // FIX: removida a chamada duplicada de frase.classList.add("mostrar")
    // Agora só existe um ponto de ativação, dentro do setTimeout
    setTimeout(() => {
        frase.classList.add("mostrar");
    }, 700);

    gerarCoracoesFoto();

    // Remove as classes depois da animação
    setTimeout(() => {
        container.classList.remove("ativo");
        frase.classList.remove("mostrar");
    }, 5000);

}

// FIX: função renomeada de "gerarCoracoes" para "gerarCoracoesFoto"
// para não conflitar com a função de mesma finalidade da seção de motivos
function gerarCoracoesFoto(){

    const container =
    document.querySelector(".foto-container");

    for(let i = 0; i < 20; i++){

        setTimeout(() => {

            const coracao =
            document.createElement("div");

            coracao.classList.add("coracao-subindo");

            coracao.innerHTML =
            Math.random() > 0.5 ? "❤️" : "🤍";

            coracao.style.left =
            Math.random() * 100 + "%";

            coracao.style.fontSize =
            (20 + Math.random()*20) + "px";

            container.appendChild(coracao);

            setTimeout(() => {

                coracao.remove();

            }, 4000);

        }, i * 150);

    }

}

// ==========================
// MOTIVOS
// ==========================

const motivos = [

"😊 Seu sorriso ilumina meus dias",

"🌸 Você é a mulher mais delicada do mundo",

"✨ Você me faz querer ser melhor e Fazer melhor",

"💖 Seu jeitinho me completa",

"🥰 Seu carinho me faz sentir em casa",

"🌹 Seu olhar tem o poder de acalmar meu coração",

"🤗 Seu abraço é o meu lugar favorito",

"💫 Você torna os meus dias mais comuns especiais",

"✉️ Você é minha mensagem favorita",

"🎵 Eu amo ouvir sua voz",

"☀️ Você ilumina até os meus dias difíceis",

"💌 Conversar com você melhora qualquer dia",

"🌈 Você trouxe mais cor para a minha vida",

"💖 Seu coração é tão lindo quanto seu sorriso",

"🦋 Você faz meu coração acelerar",

"⭐ Você inspira a melhor versão de mim",

"🌷 Seu jeito doce me encanta todos os dias",

"💕 Com você, tudo faz mais sentido",

"🎀 Você é o detalhe mais bonito dos meus dias",

"💝 Seu amor é um presente na minha vida",

"❤️ Porque amar você é a coisa mais fácil do mundo",

"😍 Buchinhuuuuuuuuuuuu...",

"💘 Amo você pelo o que já vivemos e pelo o que ainda viveremos",

"💋 Amo você porque ainda continua sendo você",

"🥱 Amo seu colinho",

"🌞 Não começo bem o meu dia sem o seu bom dia",

"🌚 Não durmo bem sem o seu boa noite",

"🙆‍♂️ Quando você está bem, eu fico bem",

"💤 Amo sonhar com você",

"💭 Amo pansar em você",

"🙃 Amo seu tom de pele que brilha na luz do sol e se destaca na luz da lua",

"💖 A forma como você me ama aquece meu coração",

"🦶 Meu pezinho favorito",

"🤤 Sou viciado no seu suvaquinho",

"🥱 Minhas pernas exclusivas pra ficar babando",

"😙 Fico bobinho apaixonado quando você fica emburradinha",

"🤫 Totozaaaaaaaa",

"💞 Sua voz soa como um soneto puro que me acalma",

"🤭 Amo me perder nos pensamentos quando lembro de você",

"🧁 Sua doce mensagem adoça mesmo o meu dia mais amargo e azedo",

"♾️ Porque, se eu pudesse escolher de novo, escolheria você em todas as vidas",

"❣️ Porque cada versão sua me faz te amar ainda mais",

"🏍️ Amo você, porque mesmo dirigir por 1 hora de moto no sol se tornou um prazer",

"😇 Amo o seu cafuné",

"📸 Amo quando você me manda fotos",

"🌠 Não consigo imaginar um futuro que não seja com você",

"👄 Amo sua boca e da sensação dela na minha",

"💍 Foi por você que eu sempre esperei",

"🤏 Porque você consegue ser fofa até brigando comigo",

];

let restantes = [...motivos];

let contador = 0;

let escrevendo = false;


// ABRIR PRESENTE

function abrirPresente(){

    if(escrevendo) return;

    const presente =
        document.getElementById("presente");

    presente.classList.add("balancar");

    gerarParticulas();

    setTimeout(()=>{

        presente.classList.remove("balancar");

        mostrarMotivo();

    },700);

}


// MOSTRAR MOTIVO

function mostrarMotivo(){

    if(restantes.length === 0){

        finalizarMotivos();

        return;

    }

    escrevendo = true;

    const papel =
        document.getElementById("papel");

    const texto =
        document.getElementById("textoMotivo");

    const contadorMotivo =
        document.getElementById("contadorMotivo");

    // Sorteia um motivo aleatório
    const indice =
        Math.floor(Math.random()*restantes.length);

    const motivo =
        restantes.splice(indice,1)[0];

    contador++;

    contadorMotivo.innerHTML =
        "Motivo #" + String(contador).padStart(2,"0");

    papel.classList.remove("fechando");
    papel.classList.remove("aberto");

    texto.innerHTML="";
    texto.classList.remove("escrevendo");

    void papel.offsetWidth;

    papel.classList.add("aberto");

    setTimeout(()=>{

        maquinaDeEscrever(texto,motivo);

    },850);
}


// MÁQUINA DE ESCREVER

function maquinaDeEscrever(elemento,texto){

    let i = 0;

    elemento.innerHTML = "";
    elemento.classList.add("escrevendo");

    const intervalo = setInterval(()=>{

        elemento.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

            elemento.classList.remove("escrevendo");

            escrevendo = false;

            gerarCoracoesMotivos();

            gerarParticulas();

        }

    },45);

}


// PRÓXIMO MOTIVO

function proximoMotivo(){

    if(escrevendo) return;

    const papel =
        document.getElementById("papel");

    const presente =
        document.getElementById("presente");

    papel.classList.remove("aberto");
    papel.classList.add("fechando");

    setTimeout(()=>{

        papel.classList.remove("fechando");

        presente.classList.add("balancar");

        gerarParticulas();

    },700);

    setTimeout(()=>{

        presente.classList.remove("balancar");

    },1300);

    setTimeout(()=>{

        mostrarMotivo();

    },1450);

}


// FIX: renomeada de "gerarCoracoes" para "gerarCoracoesMotivos"
// para não conflitar com gerarCoracoesFoto
function gerarCoracoesMotivos(){

    const container =
        document.getElementById("coracoesContainer");

    for(let i=0;i<12;i++){

        setTimeout(()=>{

            const coracao =
                document.createElement("div");

            coracao.className = "coracao";

            coracao.innerHTML =
                Math.random()>0.5 ? "❤️" : "🤍";

            coracao.style.left =
                Math.random()*100 + "%";

            coracao.style.setProperty(

                "--x",

                (Math.random()*200-100)+"px"

            );

            container.appendChild(coracao);

            setTimeout(()=>{

                coracao.remove();

            },4000);

        },i*120);

    }

}


// PARTÍCULAS

function gerarParticulas(){

    const area =
        document.querySelector(".particulas");

    for(let i=0;i<20;i++){

        const p =
            document.createElement("div");

        p.className = "particula";

        p.style.left =
            (45+Math.random()*10)+"%";

        p.style.top =
            "42%";

        p.style.setProperty(

            "--dx",

            (Math.random()*220-110)+"px"

        );

        p.style.setProperty(

            "--dy",

            (Math.random()*220-110)+"px"

        );

        area.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },1600);

    }

}


// FINAL

function finalizarMotivos(){

    document
        .getElementById("papel")
        .classList.remove("aberto");

    setTimeout(()=>{

        document
            .getElementById("mensagemFinal")
            .classList.add("mostrar");

        gerarCoracoesMotivos();

    },600);

}