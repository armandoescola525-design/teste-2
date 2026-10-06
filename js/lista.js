const videos = document.querySelectorAll('.video-item-Killer_Survivor');
let videoAtual = 0;
const tempoDeEspera = 8000; 
let temporizadorAutoplay = setInterval(avancarVideo, tempoDeEspera);

function atualizarExibicaoVideo(proximoIndex) {
    if (!videos.length) return;
    videos[videoAtual].classList.remove('ativo-Killer_Survivor');
    const videoElementoAtual = videos[videoAtual].querySelector('video');
    if (videoElementoAtual) videoElementoAtual.pause();
    videoAtual = proximoIndex;
    videos[videoAtual].classList.add('ativo-Killer_Survivor');
    const proximoVideoElemento = videos[videoAtual].querySelector('video');
    if (proximoVideoElemento) {
        proximoVideoElemento.currentTime = 0; 
        proximoVideoElemento.play();
    }
}

function avancarVideo() {
    let proximoIndex = (videoAtual + 1) % videos.length;
    atualizarExibicaoVideo(proximoIndex);
}

function mudarVideoManual(direcao) {
    clearInterval(temporizadorAutoplay);

    let proximoIndex = videoAtual + direcao;

    if (proximoIndex < 0) {
        proximoIndex = videos.length - 1;
    } 
    else if (proximoIndex >= videos.length) {
        proximoIndex = 0;
    }
    atualizarExibicaoVideo(proximoIndex);
    temporizadorAutoplay = setInterval(avancarVideo, tempoDeEspera);
}

const dadosLista = {
    killer: {
        tituloPagina: "Killers - Dead by Daylight",
        tituloDescricao: "Dicas para melhorar o seu estilo de jogo como Killer",
        tituloLista: "Lista de Killers",
        
        videoPerseguicao: "video/killer/perseguicao.mp4",
        spanPerseguicao: "Persegui-os",
        videoDerrubar: "video/killer/derrubar.mp4",
        spanDerrubar: "Derruba-os",
        videoEnganchar: "video/killer/enganchar.mp4",
        spanEnganchar: "Enganche-os",

        paragrafoChase: "Se a perseguição estiver muito estendida, desista e procure outro sobrevivente.",
        paragrafoPressao: "Para manter a pressão na partida, fique focado nos geradores e tente sempre manter a maior parte dos sobreviventes feridos ou/e enganchados.",
        paragrafoPerks: "Como cada killer tem suas habilidades especiais, você deve escolher perks que combinem com o killer que você escolheu.",
        paragrafoOferenda: "Existem vários tipos de oferenda. Tem as oferendas pra ganhar ponto de sangue, oferenda de mapa, oferenda de evento, etc.",

        personagens: [
            { nome: "O Caçador", img: "imagem/icon1/killer/traper.png", link: "trapper" },
            { nome: "O Espectro", img: "imagem/icon1/killer/wraith.png", link: "wraith" },
            { nome: "O Caipira", img: "imagem/icon1/killer/hillbilly.png", link: "hillbilly" },
            { nome: "A Enfermeira", img: "imagem/icon1/killer/nurse.png", link: "nurse" },
            { nome: "O Myers", img: "", link: "myers"},
            { nome: "A Caçadora", img: "imagem/icon1/killer/huntress.png", link: "huntress"  },
            { nome: "A Bruxa", img: "imagem/icon1/killer/hag.png", link: "hag" },
            { nome: "O Médico", img: "imagem/icon1/killer/doctor.png", link: "doctor" },
            { nome: "O Canibal", img: "", link: "cannibal" },
            { nome: "O Pesadelo", img: "", link: "nightmare" },
            { nome: "A Porca", img: "", link: "pig" },
            { nome: "O Palhaço", img: "", link: "clown" },
            { nome: "A Espirita", img: "", link: "spirit" },
            { nome: "A Praga", img: "imagem/icon1/killer/plague.png", link: "plague" },
            { nome: "O Ghost Face", img: "", link: "ghost"},
            { nome: "O Demorgorgon", img: "", link: "demogorgon"  },
            { nome: "O Oni", img: "", link: "oni" },
            { nome: "O Mercenário", img: "", link: "deathslinger" },
            { nome: "O Pyramid Head", img: "", link: "pyramid" },
            { nome: "O Flagelo", img: "", link: "blight" },
            { nome: "Os Gêmeos", img: "imagem/icon1/killer/twins.png", link: "twins" },
            { nome: "O Pinhead", img: "", link: "pinhead" },
            { nome: "O Trapaceiro", img: "", link: "trickster" },
            { nome: "O Nemesis", img: "", link: "nemesis" },
            { nome: "A Artista", img: "", link: "artista"},
            { nome: "A Onryō", img: "", link: "sadako"  },
            { nome: "A Draga", img: "", link: "draga" },
            { nome: "O Wesker", img: "", link: "wesker" },
            { nome: "O Cavaleiro", img: "imagem/icon1/killer/knight.png", link: "knight" },
            { nome: "A Negociante de Crânios", img: "", link: "negociante" },
            { nome: "A Singularidade", img: "", link: "singularidade" },
            { nome: "O Xenomorfo", img: "", link: "xenomorfo" },
            { nome: "O Cara Legal", img: "", link: "chucky" },
            { nome: "O Desconhecido", img: "", link: "desconhecido" },
            { nome: "O Lich", img: "", link: "lich"},
            { nome: "O Senhor das Sombras", img: "", link: "dracula"  },
            { nome: "A Mestra dos Cães", img: "", link: "mestra" },
            { nome: "O Animatronic", img: "", link: "springtrap" },
        ]
    },

    survivor: {
        tituloPagina: "Survivors - Dead by Daylight",
        tituloDescricao: "Dicas para melhorar o seu estilo de jogo como Survivor",
        tituloLista: "Lista de Survivors",

        videoPerseguicao: "video/survivor/gerador.mp4",
        spanPerseguicao: "Faça gerador",
        videoDerrubar: "video/survivor/fuga.mp4",
        spanDerrubar: "Fuja do killer",
        videoEnganchar: "video/survivor/ajuda.mp4",
        spanEnganchar: "Ajude a equipe",

        paragrafoChase: "Mantenha-se em lugares estratégicos para a chase durar mais tempo e pro seu time conseguir trabalhar em gerador.",
        paragrafoPressao: "Para manter a pressão na partida, faça geradores um distante do outro e no máximo 2 pessoas.",
        paragrafoPerks: "Como cada jogador tem seu próprio estilo de jogo, é necessário saber como você joga para definir as perks que serão usadas.",
        paragrafoOferenda: "Existem vários tipos de oferenda. Tem as oferendas pra ganhar ponto de sangue, oferenda de mapa, oferenda de evento, etc.",

        personagens: [
            { nome: "Dwight", img: "imagem/icon1/survivor/dwight.png", link: "dwight" },
            { nome: "Meg", img: "imagem/icon1/survivor/meg.png", link: "meg" },
            { nome: "Claudette", img: "imagem/icon1/survivor/claudette.png", link: "claudette" },
            { nome: "Jake", img: "imagem/icon1/survivor/jake.png", link: "jake" },
            { nome: "Nea Karlsson", img: "imagem/icon1/survivor/nea.png", link: "nea" },
            { nome: "Laurie Strode", img: "imagem/icon1/survivor/bill.png", link: "laurie" },
            { nome: "Ace Visconti", img: "imagem/icon1/survivor/david.png", link: "ace" },
            { nome: "William 'Bill' Overbeck", img: "imagem/icon1/survivor/feng.png", link: "bill" },
            { nome: "Feng Min", img: "imagem/icon1/survivor/kate.png", link: "feng" },
            { nome: "David King", img: "imagem/icon1/survivor/adam.png", link: "david" },
            { nome: "Quentin Smith", img: "imagem/icon1/survivor/dwight.png", link: "quentin" },
            { nome: "David Tapp", img: "imagem/icon1/survivor/meg.png", link: "tapp" },
            { nome: "Kate Denson", img: "imagem/icon1/survivor/claudette.png", link: "kate" },
            { nome: "Adam Francis", img: "imagem/icon1/survivor/jake.png", link: "adam" },
            { nome: "Jeff Johansen", img: "imagem/icon1/survivor/nea.png", link: "jeff" },
            { nome: "Jane Romero", img: "imagem/icon1/survivor/bill.png", link: "jane" },
            { nome: "Ashley J. Williams", img: "imagem/icon1/survivor/david.png", link: "ash" },
            { nome: "Yui Kimura", img: "imagem/icon1/survivor/feng.png", link: "yui" },
            { nome: "Zarina Kassir", img: "imagem/icon1/survivor/kate.png", link: "zarina" },
            { nome: "Cheryl Mason", img: "imagem/icon1/survivor/adam.png", link: "cheryl" },
            { nome: "Felix Richter", img: "imagem/icon1/survivor/dwight.png", link: "felix" },
            { nome: "Élodie Rakoto", img: "imagem/icon1/survivor/meg.png", link: "elodie" },
            { nome: "Yun-Jin Lee", img: "imagem/icon1/survivor/claudette.png", link: "yunjin" },
            { nome: "Jill Valentine", img: "imagem/icon1/survivor/jake.png", link: "jill" },
            { nome: "Leon S. Kennedy", img: "imagem/icon1/survivor/nea.png", link: "leon" },
            { nome: "Mikaela Reid", img: "imagem/icon1/survivor/bill.png", link: "mikaela" },
            { nome: "Jonah Vasquez", img: "imagem/icon1/survivor/david.png", link: "jonah" },
            { nome: "Yoichi Asakawa", img: "imagem/icon1/survivor/feng.png", link: "yoichi" },
            { nome: "Haddie Kaur", img: "imagem/icon1/survivor/kate.png", link: "haddie" },
            { nome: "Ada Wong", img: "imagem/icon1/survivor/adam.png", link: "ada" },
            { nome: "Rebecca Chambers", img: "imagem/icon1/survivor/dwight.png", link: "rebecca" },
            { nome: "Vittorio Toscano", img: "imagem/icon1/survivor/meg.png", link: "vittorio" },
            { nome: "Thalita Lyra", img: "imagem/icon1/survivor/claudette.png", link: "thalita" },
            { nome: "Renato Lyra", img: "imagem/icon1/survivor/jake.png", link: "renato" },
            { nome: "Gabriel Soma", img: "imagem/icon1/survivor/nea.png", link: "gabriel" },
            { nome: "Nicolas Cage", img: "imagem/icon1/survivor/bill.png", link: "nicolascage" },
            { nome: "Ellen Ripley", img: "imagem/icon1/survivor/david.png", link: "ripley" },
            { nome: "Alan Wake", img: "imagem/icon1/survivor/feng.png", link: "alan" },
            { nome: "Sable Ward", img: "imagem/icon1/survivor/kate.png", link: "sable" },
            { nome: "Aestri Yazar", img: "imagem/icon1/survivor/adam.png", link: "aestri" },
            { nome: "Lara Croft", img: "imagem/icon1/survivor/kate.png", link: "lara" },
            { nome: "Trevor Belmont", img: "imagem/icon1/survivor/adam.png", link: "trevor" }

        ]
    }
};

function carregarDadosPagina(tipoKey) {
    const data = dadosLista[tipoKey] || dadosLista["killer"];

    document.title = data.tituloPagina;
    
    const descElemento = document.getElementById("descricao-Killer_Survivor");
    if (descElemento) descElemento.innerText = data.tituloDescricao;

    const tituloListaElemento = document.getElementById("tituloKiller-Killer_Survivor");
    if (tituloListaElemento) tituloListaElemento.innerText = data.tituloLista;

    const btnAlternar = document.getElementById("btn-alternar-lado");
    if (btnAlternar) {
        if (tipoKey === "survivor") {
            btnAlternar.href = "lista.html?tipo=killer";
            btnAlternar.innerText = "Mudar para Killers";
        } else {
            btnAlternar.href = "lista.html?tipo=survivor";
            btnAlternar.innerText = "Mudar para Survivors";
        }
    }

    if (videos.length >= 3) {
        const dadosVideos = [
            { src: data.videoPerseguicao, span: data.spanPerseguicao },
            { src: data.videoDerrubar, span: data.spanDerrubar },
            { src: data.videoEnganchar, span: data.spanEnganchar }
        ];

        videos.forEach((videoCard, i) => {
            if (i < dadosVideos.length) {
                const v = videoCard.querySelector("video");
                const s = videoCard.querySelector("span");
                
                if (v) v.src = dadosVideos[i].src;
                if (s) s.innerText = dadosVideos[i].span;

                let linkPerso = videoCard.querySelector(".link-video-personagem");
                if (!linkPerso) {
                    linkPerso = document.createElement("a");
                    linkPerso.className = "link-video-personagem";
                    videoCard.appendChild(linkPerso);
                }

                if (data.personagens[i]) {
                    const item = data.personagens[i];
                    linkPerso.href = `perfil.html?${tipoKey}=${item.link}`;
                    linkPerso.innerText = `Ver detalhes de ${item.nome}`;
                }
            }
        });
    }

    const paragrafos = document.querySelectorAll(".blocoParagrafo-Killer_Survivor");
    if (paragrafos.length >= 4) {
        paragrafos[0].innerText = data.paragrafoChase;
        paragrafos[1].innerText = data.paragrafoPressao;
        paragrafos[2].innerText = data.paragrafoPerks;
        paragrafos[3].innerText = data.paragrafoOferenda;
    }

    const ancorasDicas = document.querySelectorAll(".container-dicas-Killer_Survivor a");
    const secoes = ["chase", "pressao", "perks", "oferenda"];
    ancorasDicas.forEach((link, index) => {
        if (secoes[index]) {
            link.href = `dicas.html?tipo=${tipoKey}#${secoes[index]}`;
        }
    });

    const cards = document.querySelectorAll(".card-killer-Killer_Survivor");
    cards.forEach((card, index) => {
        if (data.personagens[index]) {
            const item = data.personagens[index];
            const img = card.querySelector("img");
            const h3 = card.querySelector("h3");
            const a = card.querySelector("a");

            if (img) {
                img.src = item.img;
                img.alt = item.nome;
            }
            if (h3) h3.innerText = item.nome;
            if (a) a.href = `perfil.html?${tipoKey}=${item.link}`;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const parametros = new URLSearchParams(window.location.search);
    const tipoParam = (parametros.get('tipo') || 'killer').toLowerCase();
    carregarDadosPagina(tipoParam);
});