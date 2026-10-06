const dicas = {
    killer: {
        tituloChase: "10 Dicas Para se usar em chase.",
        subTitulo1Chase: "Esconda a 'Luz Vermelha' (Red Stain)",
        texto1Chase: "Vire o corpo de costas ou de lado ao se aproximar de cantos altos em um loop para impedir que o sobrevivente saiba sua direção exata.",
        subTitulo2Chase: "Quebre 'Safe Pallets' imediatamente",
        texto2Chase: "Pallets com estruturas longas nas laterais não permitem mindgame. Quebre-as logo para eliminar zonas seguras do mapa.",
        subTitulo3Chase: "Ignore 'Unsafe Pallets'",
        texto3Chase: "Pallets com estruturas curtas permitem que você contorne e acerte o sobrevivente. Não perca tempo quebrando-as.",
        subTitulo4Chase: "Force o 'Moonwalk' no loop",
        texto4Chase: "Dar passos para trás em volta de uma estrutura esconde sua luz e confunde o tempo de reação de quem está saltando a janela.",
        subTitulo5Chase: "Respeite (ou finja respeitar) Pallets",
        texto5Chase: "Dar um meio-passo para trás antes do ponto de stun força o sobrevivente a gastar a pallet sem te acertar, garantindo o hit em seguida.",
        subTitulo6Chase: "Feche os ângulos (Tight Tracking)",
        texto6Chase: "Assim como os sobreviventes, cole o corpo nas paredes durante as curvas para diminuir a distância rapidamente.",
        subTitulo7Chase: "Corte caminhos na corrida",
        texto7Chase: "Não siga exatamente as marcas de arranhão. Intercepte a rota para a qual o sobrevivente está correndo (como a próxima janela ou cabana).",
        subTitulo8Chase: "Use o ataque carregado (Lunge) com precisão",
        texto8Chase: "Guarde o Lunge (segurar o botão de ataque) para quando o sobrevivente for saltar a janela ou pallet.",
        subTitulo9Chase: "Identifique o elo fraco",
        texto9Chase: "Reconheça rapidamente qual sobrevivente do time tem menor habilidade em chase e force ganchos nele para gerar pânico na equipe.",
        subTitulo10Chase: "Cuidado com o 'Fake Vault'",
        texto10Chase: "Não desferir o ataque no ar se perceber que o sobrevivente está fingindo que vai pular a janela apenas para te fazer errar a animação.",

        tituloPressao: "10 dicas para colocar pressão em Sobreviventes.",
        subTitulo1Pressao: "Interrompa o gerador com maior progresso",
        texto1Pressao: "Não patrulhe o mapa em círculos aleatórios. Priorize os geradores centrais ou aqueles que os sobreviventes tentam finalizar para evitar a divisão do mapa.",
        subTitulo2Pressao: "Crie o '3-Gen' a seu favor",
        texto2Pressao: "Identifique no início do jogo três geradores próximos e proteja esse perímetro. No End-Game, os sobreviventes ficarão sem margem para reparar.",
        subTitulo3Pressao: "Drope chases longos (Regra dos 15-20s)",
        texto3Pressao: "Se não conseguir um hit ou soltar uma pallet forte em até 20 segundos de perseguição, abandone a caça e volte a patrulhar os geradores.",
        subTitulo4Pressao: "Chute estratégico",
        texto4Pressao: "Só chute geradores se tiver perks de regressão ativas. Chutar manualmente sem perks consome tempo valioso de movimentação.",
        subTitulo5Pressao: "Force o 'Slug' momentâneo",
        texto5Pressao: "Se derrubar um sobrevivente e ver outro ao alcance imediato, deixe o primeiro no chão (slugging) e aplique pressão no segundo para tirar duas pessoas do jogo ao mesmo tempo.",
        subTitulo6Pressao: "Gerencie os estágios do gancho",
        texto6Pressao: "Eliminar um sobrevivente precocemente (3 v 1) reduz a velocidade de reparo do time adversário drasticamente.",
        subTitulo7Pressao: "Falsa sensação de ausência",
        texto7Pressao: "Finja que está indo para um gerador longe para forçar sobreviventes a saírem dos esconderijos no gerador atual.",
        subTitulo8Pressao: "Mantenha o mapa ferido",
        texto8Pressao: "Deixar múltiplos sobreviventes machucados obriga o time a gastar tempo se curando em vez de fazer geradores.",
        subTitulo9Pressao: "Use a aura a seu favor",
        texto9Pressao: "Preste atenção na direção para onde as auras de revelação apontam logo após pendurar alguém no gancho.",
        subTitulo10Pressao: "Controle de Portões no End-Game",
        texto10Pressao: "Se a partida chegar ao fim dos geradores, patrulhe a linha de visão entre os dois portões antes de iniciar o temporizador da Collapse.",

        tituloPerks: "10 dicas para escolher as melhores perks pros killers",
        subTitulo1Perks: "Scourge Hook: Pain Resonance",
        texto1Perks: "Transforma ganchos brancos em explosões de regressão instantânea (-20%) no gerador com maior progresso.",
        subTitulo2Perks: "Corrupt Intervention",
        texto2Perks: "Bloqueia os 3 geradores mais distantes no início da partida por 120s, forçando os sobreviventes a virem até você.",
        subTitulo3Perks: "Barbecue & Chili",
        texto3Perks: "Revela a aura de sobreviventes longe do gancho após enganchar alguém. Garante ritmo de caça contínuo.",
        subTitulo4Perks: "Bamboozle",
        texto4Perks: "Aumenta a velocidade de salto de janelas e bloqueia a janela saltada por 16 segundos, destruindo loops fortes.",
        subTitulo5Perks: "Lethal Pursuer",
        texto5Perks: "Revela a aura de todos os sobreviventes nos primeiros segundos do jogo e aumenta a duração de todas as auras reveladas.",
        subTitulo6Perks: "Tinkerer",
        texto6Perks: "Notifica quando um gerador atinge 70% e concede o status Undetectable (sem raio de terror e sem luz vermelha).",
        subTitulo7Perks: "No One Escapes Death (NOED)",
        texto7Perks: "Concede velocidade de movimento e o efeito Exposed (hit único derruba) assim que os portões são energizados.",
        subTitulo8Perks: "Pop Goes the Weasel",
        texto8Perks: "Após enganchar alguém, o próximo chute em gerador reduz o progresso atual em uma grande porcentagem.",
        subTitulo9Perks: "Enduring",
        texto9Perks: "Reduz drasticamente a duração do atordoamento por pallets, permitindo manter o chase agressivo.",
        subTitulo10Perks: "Sloppy Butcher",
        texto10Perks: "Aplica ferimentos profundos e hemorragia, atrasando o tempo de cura da equipe e desacelerando o jogo.",

        tituloOferenda: "10 dicas para escolher as oferendas",
        subTitulo1Oferenda: "Oferendas de Mapa Fechado",
        texto1Oferenda: "Use oferendas para mapas como Léry's Memorial Institute ou Midwich Elementary se estiver jogando com Assassinos de raio de terror reduzido ou focado em controle próximo.",
        subTitulo2Oferenda: "Anule o mapa do Sobrevivente (Sacrificial Ward)",
        texto2Oferenda: "Use a oferenda que cancela outras oferendas de mapa caso desconfie de um grupo focado em te levar para um mapa com muitos recursos.",
        subTitulo3Oferenda: "Oferenda de Porão no Porão Central",
        texto3Oferenda: "Se a sua build focar em Basement Camping/Trapping, queime oferendas que garantem o spawn do porão no edificado principal (Main Building).",
        subTitulo4Oferenda: "Memento Mori Estratégico",
        texto4Oferenda: "Além do fator visual, usar um Cypress ou Ebony Memento Mori economiza a caminhada até o gancho e previne sabotagens ou ataques com lanternas na reta final.",
        subTitulo5Oferenda: "Oferenda de Distanciamento de Spawns",
        texto5Oferenda: "Use oferendas que separam os sobreviventes no início se você joga com Assassinos de caça individual rápida (como Blight ou Wesker).",
        subTitulo6Oferenda: "Oferendas de PONTOS (Bloodpoints)",
        texto6Oferenda: "Acumule Survivor Puddings (+100% BP) para maximizar o ganho de pontos enquanto treina com novos Assassinos.",
        subTitulo7Oferenda: "Ajuste os Add-ons à Oferenda",
        texto7Oferenda: "Se colocar uma oferenda de mapa aberto (como Coldwind Farm), ajuste os add-ons do seu poder para compensar a perda de visão ou distância.",
        subTitulo8Oferenda: "Leia o Lobby (Itens dos Sobreviventes)",
        texto8Oferenda: "Se houver 3 ou 4 lanternas no lobby, considere equipar a perk Lightborn ou usar oferendas defensivas antes de confirmar a partida.",
        subTitulo9Oferenda: "Escuridão e Névoa",
        texto9Oferenda: "Use oferendas que diminuem a névoa do mapa para facilitar o rastreamento visual de longe se você joga com Assassinos de precisão (como Huntress ou Deathslinger).",
        subTitulo10Oferenda: "Foco na Teia de Sangue",
        texto10Oferenda: "Priorize gastar pontos em teias que oferecem oferendas de mapa favoráveis ao seu Assassino principal."
    },

    survivor: {
        tituloChase: "10 Dicas Para se usar em chase.",
        subTitulo1Chase: "Adote o 'Holding W'",
        texto1Chase: "Assim que o Assassino for apontado em sua direção, corra em linha reta para a próxima estrutura antes de iniciar o loop. Ganhar distância inicial é o melhor desperdício de tempo dele.",
        subTitulo2Chase: "Olhe para trás durante o chase",
        texto2Chase: "Correr olhando para frente entrega suas intenções. Mantenha o controle da câmera no Assassino para reagir a mindgames e mudanças de direção.",
        subTitulo3Chase: "Faça o 'Pre-drop' estratégico",
        texto3Chase: "Contra Assassinos com poder de ataque rápido (Ex: Huntress, Blight, Nurse), solte a pallet antes que ele chegue perto em vez de tentar o stun.",
        subTitulo4Chase: "Preserve a 'Pallet da Cabana' (Shack Pallet)",
        texto4Chase: "É a pallet mais forte do jogo. Use-a apenas se for a única opção para evitar ser derrubado.",
        subTitulo5Chase: "Use a técnica do Hug Tech / Tight Loops",
        texto5Chase: "Cole o corpo nas paredes das estruturas ao fazer a curva. Quanto mais fechado o seu raio de curva, mais tempo o Assassino leva para alcançar você.",
        subTitulo6Chase: "Varie os padrões de janela",
        texto6Chase: "Não pule a janela no mesmo tempo/ângulo todas as vezes. Alterne entre pular imediatamente ou fingir que vai pular (fake vault) para forçar o ataque do Assassino no ar.",
        subTitulo7Chase: "Esconda a marca de arranhão (Scratch Marks)",
        texto7Chase: "Ao perder a linha de visão do Assassino por 2 segundos atrás de uma parede, solte o botão de corrida por alguns passos para desorientar o rastreamento dele.",
        subTitulo8Chase: "Use o Bodyblock com bom senso",
        texto8Chase: "Só proteja um aliado ferido se você estiver com a vida cheia e o portão/saída estiver próximo.",
        subTitulo9Chase: "Conheça as 'Safe' e 'Unsafe' Pallets",
        texto9Chase: "Pallets com paredes curtas dos lados são inseguras; derrubá-las não impede o Assassino de te acertar por mindgame. Abandone-as rapidamente.",
        subTitulo10Chase: "Controle de Exaustão no Chase",
        texto10Chase: "Nunca comece um chase já gastando sua perk de exaustão se puder guardar para um momento em que vá realmente tomar um hit.",

        tituloPressao: "10 dicas para aplicar pressão de geradores.",
        subTitulo1Pressao: "Quebre o '3-Gen' no início",
        texto1Pressao: "Identifique os três geradores mais próximos uns dos outros no início da partida e finalize pelo menos um deles primeiro para evitar um final de jogo impossível.",
        subTitulo2Pressao: "Mantenha a regra de 2 por gerador",
        texto2Pressao: "No máximo duas pessoas por gerador. Trabalhar em 3 ou 4 gera penalidade de velocidade e deixa o Assassino livre para patrulhar sem pressão paralela.",
        subTitulo3Pressao: "Troca de gancho eficiente",
        texto3Pressao: "Só saia do gerador para resgatar quando o contador do gancho estiver perto da transição de fase (ou se o Assassino estiver longe). Resgates apressados desperdiçam tempo de reparo.",
        subTitulo4Pressao: "Otimize o Skill Check",
        texto4Pressao: "Acertar Great Skill Checks (a zona branca) não apenas acelera em 1% a barra, mas impede a notificação sonora que entrega sua posição.",
        subTitulo5Pressao: "Não se cure imediatamente após ser resgatado",
        texto5Pressao: "Se o Assassino estiver longe, finalize o gerador próximo primeiro se for seguro. Ficar se curando sob o gancho consome tempo que poderia ser de pressão.",
        subTitulo6Pressao: "Gerador da Cabana (Shack Gen)",
        texto6Pressao: "Geralmente é o gerador mais seguro do mapa devido aos recursos da cabana. Priorize-o se o Assassino estiver ocupado no outro lado do mapa.",
        subTitulo7Pressao: "Divida a pressão espacial",
        texto7Pressao: "Se o Assassino defender uma área forte, repare os geradores das pontas opostas para forçá-lo a percorrer longas distâncias.",
        subTitulo8Pressao: "Gerenciamento de Câmeras",
        texto8Pressao: "Enquanto repara, mantenha a câmera girando 360° constantemente para identificar Assassinos com estado de Stealth (Furtividade) se aproximando.",
        subTitulo9Pressao: "Não pare o reparo ao ouvir o raio de terror",
        texto9Pressao: "Só saia do gerador quando tiver certeza visual de que o Assassino está vindo diretamente para você.",
        subTitulo10Pressao: "Deixe o último gerador '99%'",
        texto10Pressao: "Se a partida exigir coordenação de portões ou resgate, deixar o último gerador a 99% impede que o Assassino ative habilidades de End-Game antes da hora.",

        tituloPerks: "10 dicas para escolher as melhores perks pros Survivors",
        subTitulo1Perks: "Déjà Vu",
        texto1Perks: "Revela os 3 geradores mais próximos e dá +6% de velocidade de reparo neles. A melhor perk para evitar a derrota por 3-gen.",
        subTitulo2Perks: "Lithe",
        texto2Perks: "Concede 150% de velocidade por 3 segundos após um salto rápido em janela/pallet. Fácil de ativar e excelente para criar distância limpa.",
        subTitulo3Perks: "Sprint Burst",
        texto3Perks: "Concede explosão de velocidade ao começar a correr. Requer gerenciamento de caminhada, mas salva de emboscadas de Assassinos furtivos.",
        subTitulo4Perks: "Resilience",
        texto4Perks: "Concede +9% de velocidade em reparos, saltos, resgates e curas enquanto você estiver ferido. Melhora o tempo de reação em janelas.",
        subTitulo5Perks: "Off the Record",
        texto5Perks: "Esconde sua aura, reduz os gemidos de dor em 100% e concede o efeito Endurance por até 80 segundos após sair do gancho (desativa ao fazer ações de objetivo).",
        subTitulo6Perks: "Decisive Strike (DS)",
        texto6Perks: "Garante um Skill Check para escapar das costas do Assassino se ele tentar te derrubar e carregar logo após o resgate do gancho.",
        subTitulo7Perks: "Kindred",
        texto7Perks: "Revela a aura de todos os sobreviventes e do Assassino (se ele estiver perto do gancho) enquanto alguém estiver enganchado. Essencial para partidas Solo.",
        subTitulo8Perks: "Bond",
        texto8Perks: "Revela a aura de aliados em até 36 metros. Útil para encontrar cura rápida, juntar em geradores ou evitar levar o chase para cima de quem está reparando.",
        subTitulo9Perks: "Windows of Opportunity",
        texto9Perks: "Revela a aura de todas as janelas e pallets em um raio próximo. Elimina o tempo de dúvida sobre para onde correr.",
        subTitulo10Perks: "Adrenaline",
        texto10Perks: "Cura um estado de saúde e concede explosão de velocidade assim que o último gerador é concluído. Pode virar partidas perdidas no final.",

        tituloOferenda: "10 dicas para escolher as oferendas",
        subTitulo1Oferenda: "Oferendas de Mapa para Loops",
        texto1Oferenda: "Use oferendas de mapas grandes e estruturados (como MacMillan Estate ou Autohaven Wreckers) se a intenção for praticar ou focar em chase prolongado.",
        subTitulo2Oferenda: "Evite Oferendas de Mapas Fechados",
        texto2Oferenda: "Evite enviar o jogo para mapas como Midwich ou Léry a menos que esteja com uma build específica de furtividade/rastreamento.",
        subTitulo3Oferenda: "Empilhe 'Bloody Party Streamers'",
        texto3Oferenda: "Em partidas com amigos (SWF), combinem de usar oferendas de pontos (+100% Bloodpoints para todos) para maximizar o ganho da partida.",
        subTitulo4Oferenda: "Oferenda de Posição Inicial",
        texto4Oferenda: "Use oferendas que separam os sobreviventes no início se o Assassino for de controle de área (como Nurse ou Trapper), ou que juntam o time se a ideia for rushar o primeiro gerador.",
        subTitulo5Oferenda: "Use oferendas de Porão na Cabana",
        texto5Oferenda: "Se estiver usando builds de resgate ou sabotagem, oferendas para spawnar o porão na cabana principal ajudam no controle do mapa.",
        subTitulo6Oferenda: "Traga a 'Chave' com oferenda de retenção",
        texto6Oferenda: "Se for levar itens raros como Caixas de Ferramentas Roxas ou Chaves com Add-ons fortes, use a oferenda Ward para não perder o item ao morrer.",
        subTitulo7Oferenda: "Alterne a oferenda de acordo com o item",
        texto7Oferenda: "Se usar uma Caixa de Ferramentas, priorize oferendas de mapa com geradores menos expostos.",
        subTitulo8Oferenda: "Oferendas de Portão de Saída",
        texto8Oferenda: "Oferendas que aumentam a velocidade de abertura do portão são trunfos estratégicos contra builds de No One Escapes Death (NOED).",
        subTitulo9Oferenda: "Leve em conta a fumaça/névoa",
        texto9Oferenda: "Oferendas que aumentam a névoa do mapa favorecem sobreviventes furtivos, enquanto oferendas que limpam a névoa ajudam a enxergar o Assassino de longe.",
        subTitulo10Oferenda: "Verifique os consumíveis do time",
        texto10Oferenda: "Na tela de carregamento, observe o que seus aliados usaram para alinhar seu comportamento no início do jogo (ex: se alguém queimou oferenda de separar, não corra para o mesmo lado do seu colega)."
    }
};

function carregarDica(tipoKey) {
    const data = dicas[tipoKey] || dicas["killer"];
    
    const linkVoltar = document.querySelector("#voltar a");
    if (linkVoltar) {
        linkVoltar.setAttribute("href", `listaKillerSurvivors.html?tipo=${tipoKey}`);
        linkVoltar.innerText = tipoKey === 'survivor' ? 'Survivors' : 'Killers';
    }

    if (data.tituloChase) {
        document.getElementById("TituloChase").innerText = data.tituloChase;
        for (let i = 1; i <= 10; i++) {
            const sub = document.getElementById(`subTitulo${i}Chase`);
            const txt = document.getElementById(`texto${i}Chase`);
            if (sub && data[`subTitulo${i}Chase`]) sub.innerText = data[`subTitulo${i}Chase`];
            if (txt && data[`texto${i}Chase`]) txt.innerText = data[`texto${i}Chase`];
        }
    }

    if (data.tituloPressao) {
        document.getElementById("TituloPressao").innerText = data.tituloPressao;
        for (let i = 1; i <= 10; i++) {
            const sub = document.getElementById(`subTitulo${i}Pressao`);
            const txt = document.getElementById(`texto${i}Pressao`);
            if (sub && data[`subTitulo${i}Pressao`]) sub.innerText = data[`subTitulo${i}Pressao`];
            if (txt && data[`texto${i}Pressao`]) txt.innerText = data[`texto${i}Pressao`];
        }
    }

    if (data.tituloPerks) {
        document.getElementById("TituloPerks").innerText = data.tituloPerks;
        for (let i = 1; i <= 10; i++) {
            const sub = document.getElementById(`subTitulo${i}Perks`);
            const txt = document.getElementById(`texto${i}Perks`);
            if (sub && data[`subTitulo${i}Perks`]) sub.innerText = data[`subTitulo${i}Perks`];
            if (txt && data[`texto${i}Perks`]) txt.innerText = data[`texto${i}Perks`];
        }
    }

    if (data.tituloOferenda) {
        document.getElementById("TituloOferendas").innerText = data.tituloOferenda;
        for (let i = 1; i <= 10; i++) {
            const sub = document.getElementById(`subTitulo${i}Oferendas`);
            const txt = document.getElementById(`texto${i}Oferendas`);
            if (sub && data[`subTitulo${i}Oferenda`]) sub.innerText = data[`subTitulo${i}Oferenda`];
            if (txt && data[`texto${i}Oferenda`]) txt.innerText = data[`texto${i}Oferenda`];
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const parametros = new URLSearchParams(window.location.search);
    const tipoParam = (parametros.get('tipo') || 'killer').toLowerCase();
    carregarDica(tipoParam);
});