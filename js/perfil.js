const killersData = {
    trapper: {
        titulo: "O Caçador",
        descricao1: "<h4>ARMADILHA DE URSO</h4>O Caçador inicia a partida carregando armadilhas no inventário e pode recolher outras espalhadas pelo mapa para posicioná-las no chão, em folhagens, janelas, pallets ou atalhos. Quando um sobrevivente pisa na armadilha, fica imediatamente preso e ferido, emitindo um alerta sonoro global. O sobrevivente precisa tentar se libertar sozinho ou aguardar o resgate de um aliado, permitindo ao Caçador pegá-lo diretamente do chão. Sobreviventes também podem desarmar as armadilhas manualmente.",
        imagem: "imagem/modelo/cacador.png",
        perks: [
            { nome: "AGITAÇÃO", desc: "Aumenta sua velocidade de movimento e raio de terror ao carregar um Sobrevivente.", img: "imagem/perks/trapper/perk1.png" },
            { nome: "FORÇA BRUTAL", desc: "Destrói barricadas, paredes e danifica geradores 20% mais rápido.", img: "imagem/perks/trapper/perk2.png" },
            { nome: "PRESENÇA DESCONCERTANTE", desc: "Sobreviventes no seu Raio de Terror têm chances aumentadas de testes de perícia com zonas de sucesso menores.", img: "imagem/perks/trapper/perk3.png" }
        ],
        origemTitulo: "Origem: Evan MacMillan",
        origemTexto: "Herdeiro da fortuna MacMillan, Evan venerava seu pai rico e cruel, Archie MacMillan. Quando o pai enlouqueceu, Evan assumiu o controle dos negócios e conduziu mais de uma centena de trabalhadores para o interior das minas da família, detonando explosivos e selando o destino de todos. Evan desapareceu logo em seguida, deixando a propriedade em ruínas."
    },
    wraith: {
        titulo: "O Espectro",
        descricao1: "<h4>SINO DE LAMENTO</h4>Ao tocar seu sino, o Espectro entra no mundo espiritual, ficando quase completamente invisível, perdendo seu Raio de Terror e a luz vermelha de visão, além de ganhar grande velocidade de movimento. Para atacar, ele precisa tocar o sino novamente para reaparecer no mundo físico. Ao concluir a desocultação, recebe um impulso temporário de velocidade que permite fechar distâncias e acertar golpes antes que os sobreviventes alcancem estruturas seguras.",
        imagem: "imagem/modelo/wraith.png",
        perks: [
            { nome: "CÃO DE CAÇA", desc: "Poças de Sangue brilham mais e duram mais tempo no chão.", img: "imagem/perks/wraith/perk1.png" },
            { nome: "PREDADOR", desc: "Permite ver a aura de um Sobrevivente após perder a perseguição.", img: "imagem/perks/wraith/perk2.png" },
            { nome: "NASCIDO DAS SOMBRAS", desc: "Ganha velocidade de movimento temporária após ser cego.", img: "imagem/perks/wraith/perk3.png" }
        ],
        origemTitulo: "Origem: Philip Ojomo",
        origemTexto: "Um imigrante que encontrou trabalho num ferro-velho de carros (Autohaven Wreckers). Philip descobriu por acaso que seu chefe usava o triturador do local para executar pessoas presas dentro dos porta-malas a mando de criminosos. Tomado pelo horror de ter sido um cúmplice involuntário, Philip executou seu chefe na mesma máquina e desapareceu na névoa."
    },
    hillbilly: {
        titulo: "O Caipira",
        descricao1: "<h4>MOTOSSERRA</h4>O Caipira carrega sua motosserra para disparar em uma investida de altíssima velocidade em linha reta pelo mapa. Se atingir um sobrevivente durante a corrida, derruba o alvo instantaneamente no chão (Insta-down). A investida também destrói pallets e paredes quebráveis imediatamente, mas colidir contra obstáculos sólidos faz o Caipira sofrer um tempo de atordoamento.",
        imagem: "imagem/modelo/hillbilly.png",
        perks: [
            { nome: "RESISTÊNCIA", desc: "Enquanto não estiver carregando um sobrevivente, atordoamentos causados por barricadas são 50% mais curtos.", img: "imagem/perks/hillbilly/perk1.png" },
            { nome: "NASCIDO DA LUZ", desc: "Sempre que um sobrevivente tentar cegar você, veja a aura dele por 10 segundos.\n\nVocê não pode ficar cego.", img: "imagem/perks/hillbilly/perk2.png" },
            { nome: "APRIMORADOR", desc: "A primeira vez que cada gerador alcançar 70% de progressão, receba Indetectável e um alerta.", img: "imagem/perks/hillbilly/perk3.png" }
        ],
        origemTitulo: "Origem: Max Thompson Jr.",
        origemTexto: "Filho desfigurado dos donos da fazenda Coldwind, Max foi escondido do mundo por seus pais, que o emparedaram em um quarto sem janelas e o alimentavam através de um buraco na parede. Ao conseguir se libertar, Max vingou-se brutalmente dos pais e passou a caçar qualquer animal ou humano que invadisse suas terras."
    },
    nurse: {
        titulo: "A Enfermeira",
        descricao1: "<h4>ÚLTIMO SUSPIRO DE SPENCER</h4>A Enfermeira pode se teletransportar (Blink) em linha reta atravessando paredes, estruturas, elevações e pallets. Após o primeiro teletransporte longo, ela tem uma curta janela para realizar um segundo teletransporte mais curto de ajuste. Ela pode realizar um ataque imediatamente ao sair do teletransporte, mas entra em um estado de fadiga olhando para o chão logo em seguida para recarregar suas cargas.",
        imagem: "imagem/modelo/nurse.png",
        perks: [
            { nome: "Estrondoso", desc: "A respiração dos Sobreviventes feridos é mais alta.", img: "imagem/perks/nurse/perk1.png" },
            { nome: "Vocação da Enfermeira", desc: "Revela as auras de Sobreviventes que estão se curando dentro do seu alcance.", img: "imagem/perks/nurse/perk2.png" },
            { nome: "Tanatofobia", desc: "Penaliza a velocidade de reparo, limpeza e sabotagem para cada Sobrevivente ferido, enganchado ou moribundo.", img: "imagem/perks/nurse/perk3.png" }
        ],
        origemTitulo: "Origem: Sally Smithson",
        origemTexto: "Sally veio para Crotus Prenn com o sonho de construir uma vida com seu marido. Após a morte dele, ela precisou trabalhar no Asilo Crotus Prenn para se sustentar. Após duas décadas testemunhando atrocidades e desespero no hospital psiquiátrico, a mente de Sally cedeu. Em uma noite trágica, ela sufocou todos os pacientes e funcionários do asilo, sendo levada pela névoa logo em seguida."
    },
    myers: {
        titulo: "O Myers",
        descricao1: "<h4>Mal Interior</h4>Michael acumula poder ao espiar (Stalk) sobreviventes à distância. No Estágio I, possui Raio de Terror praticamente nulo e alta furtividade, mas velocidade e alcance reduzidos. No Estágio II, alcança velocidade padrão e raio de terror normal. Ao preencher totalmente a barra, ativa o Estágio III temporário, ganhando maior alcance de estocada e fazendo com que todos os sobreviventes fiquem Expostos, caindo com apenas um ataque básico.",
        imagem: "imagem/modelo/myers.png",
        perks: [
            { nome: "Guarde o Melhor para o Final", desc: "Cada ataque básico bem-sucedido contra sobreviventes que não sejam a Obsessão concede fichas que reduzem o tempo de recuperação pós-ataque.", img: "imagem/perks/myers/perk1.png" },
            { nome: "Brinque com Sua Comida", desc: "Iniciar e interromper uma perseguição com a Obsessão concede fichas de aumento acumulativo de velocidade de movimento (5% por ficha, até 3 vezes).", img: "imagem/perks/myers/perk2.png" },
            { nome: "Luz Decadente", desc: "Enganchar sobreviventes que não sejam a Obsessão concede fichas que desaceleram as ações de reparo, cura e sabotagem de todos os outros sobreviventes.", img: "imagem/perks/myers/perk3.png" }
        ],
        origemTitulo: "Origem: Michael Myers",
        origemTexto: "A personificação do mal puro. Na noite de Halloween de 1963, aos seis anos de idade, Michael assassinou sua irmã mais velha a facadas. Ficou trancado por 15 anos no Sanatório Smith's Grove até escapar e retornar à pacata cidade de Haddonfield para continuar seu rastro de mortes."
    },
    huntress: {
        titulo: "A Caçadora",
        descricao1: "<h4>Machadinhas de Caça</h4>A Caçadora carrega machadinhas que podem ser arremessadas contra os sobreviventes. Quanto mais tempo ela segura a habilidade antes de soltar, mais rápida e reta é a trajetória do projétil, sendo perfeita para atingir alvos presos em animações de pular janelas ou derrubar pallets. Quando suas machadinhas acabam, ela precisa recarregar interagindo com os armários do mapa.",
        imagem: "imagem/modelo/huntress.png",
        perks: [
            { nome: "Besta da Caça", desc: "Sempre que você receber sede de sangue, ganhe indetectável por 40 segundos.", img: "imagem/perks/huntress/perk1.png" },
            { nome: "Feitiço: Canção de Ninar da Caçadora", desc: "Dificulta os testes de perícia dos Sobreviventes a cada gancho acumulado.", img: "imagem/perks/huntress/perk2.png" },
            { nome: "Instinto Territorial", desc: "Revela a aura de Sobreviventes que entram no porão quando você estiver distante.", img: "imagem/perks/huntress/perk3.png" }
        ],
        origemTitulo: "Origem: Anna",
        origemTexto: "Criada nas florestas da Rússia, Anna aprendeu a caçar com a mãe até que ela foi morta por um alce. Vivendo isolada na natureza, Anna tornou-se uma predadora formidável durante a Primeira Guerra Mundial. Ela costumava sequestrar garotinhas por carinho, mas elas acabavam morrendo de fome pela falta de cuidados adequados."
    },
    hag: {
        titulo: "A Bruxa",
        descricao1: "<h4>Catalisador Enegrecido</h4>A Bruxa desenha até dez rituais no chão com as mãos. Quando um sobrevivente corre sobre um símbolo, aciona uma ilusão assustadora que desorienta a câmera do jogador. Se a Bruxa estiver dentro de um raio de 48 metros, ela pode se teletransportar instantaneamente para a posição da ilusão e desferir um golpe. Sobreviventes podem evitar a ativação andando agachados sobre as marcas.",
        imagem: "imagem/modelo/hag.png",
        perks: [
            { nome: "Feitiço: Devorar Esperança", desc: "Ganha pontos de progressão quando Sobreviventes são desenganchados longe de você.", img: "imagem/perks/hag/perk1.png" },
            { nome: "Feitiço: Arruinar", desc: "Enquanto um gerador não for reparado, ele regride automaticamente com 150% da velocidade.", img: "imagem/perks/hag/perk2.png" },
            { nome: "Feitiço: O Terceiro Selo", desc: "Causa o efeito de Cegueira em Sobreviventes atingidos por ataques básicos.", img: "imagem/perks/hag/perk3.png" }
        ],
        origemTitulo: "Origem: Lisa Sherwood",
        origemTexto: "Lisa foi sequestrada por um grupo de canibais durante uma tempestade e acorrentada em um porão para ser servida de alimento. Prestes a morrer, usou seus últimos momentos para raspar símbolos antigos no chão com os dedos mutilados, invocando uma maldição ancestral e vendendo sua alma em troca de vingança."
    },
    doctor: {
        titulo: "O Doutor",
        descricao1: "<h4>FAÍSCA DE CARTER</h4>O Médico utiliza a Terapia de Choque para disparar um cone elétrico no chão que aumenta a Loucura dos sobreviventes e os impede de pular janelas, derrubar pallets ou usar itens por 2,5 segundos. Sua Explosão Estática afeta todo o seu Raio de Terror, fazendo todos os sobreviventes gritarem e subirem de nível de Loucura, o que gera alucinações, testes de perícia em posições aleatórias na tela e a necessidade de restaurar a sanidade para voltar a interagir no jogo.",
        imagem: "imagem/modelo/doctor.png",
        perks: [
            { nome: "Pressão Esmagadora", desc: "Sempre que um sobrevivente usa um item a 32 m de você, ele recebe Exaustão por 15 segundos.", img: "imagem/perks/doctor/perk1.png" },
            { nome: "Monitore e Abuse", desc: "Enquanto persegue um sobrevivente, seu raio de terror é 15% maior.", img: "imagem/perks/doctor/perk2.png" },
            { nome: "Sobrecarga", desc: "Sempre que você causa dano a um gerador, sua regressão aumenta gradativamente.", img: "imagem/perks/doctor/perk3.png" }
        ],
        origemTitulo: "Origem: Herman Carter",
        origemTexto: "Um neurocientista militar alocado na Instalação Memorial Léry como parte do Projeto MKUltra. Carter utilizou terapia de choque eletroconvulsivo, privação de sono e lavagem cerebral para extrair informações de prisioneiros, destruindo a sanidade de suas vítimas até enlouquecer junto com elas."
    },
    cannibal: {
        titulo: "O Canibal",
        descricao1: "<h4>Motosserra de Bubba</h4>O Canibal executa uma varredura contínua balançando a motosserra para os lados em alta velocidade. Qualquer sobrevivente atingido pela lâmina é derrubado instantaneamente no chão, e Bubba pode encadear cargas adicionais para estender a investida e atingir múltiplos alvos. Caso colida com algum objeto durante o ataque, ele entra em um acesso de fúria (tantrum), debatendo-se no local enquanto gira a motosserra.",
        imagem: "imagem/modelo/cannibal.png",
        perks: [
            { nome: "Churrasco com Chili", desc: "Após enganchar um sobrevivente, revela a aura de todos os outros sobreviventes que estejam a mais de 40 metros do gancho por 4 segundos.", img: "imagem/perks/cannibal/perk1.png" },
            { nome: "Declínio de Franklin", desc: "Ataques básicos fazem os sobreviventes soltarem o item que estão segurando. O item deixado no chão perde cargas gradualmente.", img: "imagem/perks/cannibal/perk2.png" },
            { nome: "Nocaute", desc: "Sobreviventes colocados no estado moribundo (no chão) por ataques básicos não revelam suas auras para companheiros distantes e sofrem do efeito de status Cegueira.", img: "imagem/perks/cannibal/perk3.png" }
        ],
        origemTitulo: "Origem: Bubba Sawyer",
        origemTexto: "Membro da família de canibais Sawyer no Texas. Sofrendo de deficiência intelectual e manipulação por parte de seus irmãos, Bubba usa sua motosserra para proteger a casa da família e transformar invasores em comida, vestindo máscaras feitas com a pele de suas vítimas."
    },
    nightmare: {
        titulo: "O Pesadelo",
        descricao1: "<h4>Demônio dos Sonhos</h4>Sobreviventes adormecem passivamente ao longo do tempo ou ao levarem um ataque básico do Freddy. No Mundo dos Sonhos, eles sofrem do efeito Inconsciência e ficam vulneráveis às suas armadilhas. Freddy pode usar a Projeção do Sonho para se teletransportar diretamente para qualquer gerador pendente e posicionar Laços de Sonho no chão, poças de sangue que causam lentidão e fazem o sobrevivente adormecido gritar ao pisar nelas.",
        imagem: "imagem/modelo/nightmare.png",
        perks: [
            { nome: "Pegando Fogo", desc: "À medida que os sobreviventes concluem geradores, o Killer ganha um bônus acumulativo de velocidade para chutar geradores, quebrar pallets, pular janelas e carregar sobreviventes.", img: "imagem/perks/nightmare/perk1.png" },
            { nome: "Lembre-se de Mim", desc: "Definido por uma Obsessão. Cada vez que a Obsessão leva um ataque básico, aumenta o tempo necessário para que outros sobreviventes abram os Portões de Saída no final da partida.", img: "imagem/perks/nightmare/perk2.png" },
            { nome: "Guardião do Sangue", desc: "Enganchar um sobrevivente depois que um dos Portões de Saída for aberto bloqueia a saída do mapa para todos por até 60 segundos e revela a aura de quem estiver na área dos portões.", img: "imagem/perks/nightmare/perk3.png" }
        ],
        origemTitulo: "Origem: Freddy Krueger",
        origemTexto: "Um assassino em série infantil de Springwood que operava em uma fábrica abandonada. Após ser libertado do tribunal devido a uma falha técnica, os pais das vítimas o queimaram vivo. Krueger retornou como uma entidade demoníaca que persegue e mata adolescentes dentro de seus próprios sonhos."
    },
    pig: {
        titulo: "A Porca",
        descricao1: "<h4>Bênção de Jigsaw</h4>A Porca pode se agachar para ocultar seu Raio de Terror e desferir uma investida de emboscada. Ela carrega Armadilhas de Urso Reversas que podem ser colocadas na cabeça de sobreviventes derrubados. Quando um gerador é concluído, a armadilha ativa um temporizador. O sobrevivente precisa vasculhar as caixas de Jigsaw pelo mapa para encontrar a chave correta antes que o tempo acabe e a armadilha o execute instantaneamente.",
        imagem: "imagem/modelo/pig.png",
        perks: [
            { nome: "Gancho do Azar: Truque de Mestre", desc: "Revela a aura de sobreviventes próximos a ganchos enquanto você estiver carregando alguém.", img: "imagem/perks/pig/perk1.png" },
            { nome: "Vigilância", desc: "Geradores em regressão têm suas auras destacadas em amarelo e revelam a aura de quem voltar a repará-los.", img: "imagem/perks/pig/perk2.png" },
            { nome: "Fazer Escolha", desc: "Quando um sobrevivente resgata outro do gancho a uma distância mínima de você, o resgatador sofre o efeito Exposto por um período.", img: "imagem/perks/pig/perk3.png" }
        ],
        origemTitulo: "Origem: Amanda Young",
        origemTexto: "Amanda Young foi a discípula mais leal de John Kramer, o Jigsaw. Após ser submetida aos seus jogos e sobreviver, tornou-se sua sucessora, mas distorceu a filosofia do mestre ao criar armadilhas sem chance real de sobrevivência para suas vítimas."
    },
    clown: {
        titulo: "O Palhaço",
        descricao1: "<h4>Tônico e Antídoto das Águas Etéreas</h4>O Palhaço arremessa frascos de gás. O Tônico cria uma névoa roxa que desacelera os sobreviventes, causa visão turva e os faz tossir. O Antídoto cria uma névoa amarela que concede um bônus de velocidade de movimento para qualquer um que passar por ela (incluindo o próprio Palhaço), além de curar os efeitos do Tônico.",
        imagem: "imagem/modelo/clown.png",
        perks: [
            { nome: "Bambuzal", desc: "Aumenta a velocidade de pular janelas e bloqueia a janela pulada para os sobreviventes por um curto período.", img: "imagem/perks/clown/perk1.png" },
            { nome: "Aterrorizar", desc: "Reduz drasticamente a velocidade de cura dos sobreviventes dentro do seu Raio de Terror.", img: "imagem/perks/clown/perk2.png" },
            { nome: "A Pipoca Vai ao Chão", desc: "Após enganchar um sobrevivente, o próximo gerador que você chutar perde uma grande porcentagem de seu progresso total de forma imediata.", img: "imagem/perks/clown/perk3.png" }
        ],
        origemTitulo: "Origem: Jeffrey Hawk",
        origemTexto: "Um psicopata itinerante obcecado por anestésicos e por colecionar dedos de suas vítimas. Jeffrey juntou-se a um circo itinerante para viajar pelo país sem levantar suspeitas sobre os assassinatos e sequestros que cometia."
    },
    spirit: {
        titulo: "A Espirita",
        descricao1: "<h4>Assombro de Yamaoka</h4>O Espírito deixa sua casca física para trás e entra no plano espiritual, ganhando muita velocidade de movimento. Durante o processo, ela fica invisível para os sobreviventes e perde a capacidade de vê-los diretamente, precisando rastreá-los através de marcas de arranhão, sons de passos, grama se mexendo e gemidos de dor.",
        imagem: "imagem/modelo/spirit.png",
        perks: [
            { nome: "Fúria do Espírito", desc: "Após quebrar um certo número de pallets, o próximo pallet que atingir o Espírito é destruído automaticamente.", img: "imagem/perks/spirit/perk1.png" },
            { nome: "Feitiço: Assombração", desc: "Cria dois tótens armadilha no mapa. Se os sobreviventes limparem um deles, todos sofrem o efeito Exposto por um período.", img: "imagem/perks/spirit/perk2.png" },
            { nome: "Rancor", desc: "Revela as auras de todos os sobreviventes a cada gerador feito e permite executar a Obsessão com as próprias mãos no final da partida.", img: "imagem/perks/spirit/perk3.png" }
        ],
        origemTitulo: "Origem: Rin Yamaoka",
        origemTexto: "Estudante universitária assassinada brutalmente por seu próprio pai em um surto de loucura provocado pelo estresse e dívidas financeiras. À beira da morte, sua raiva ancestral despertou a atenção da Entidade."
    },
    plague: {
        titulo: "A Praga",
        descricao1: "<h4>PUNIÇÃO DO MAL</h4>A Peste projeta um jorro de bile infectada. Atingir sobreviventes ou objetos os contamina. Sobreviventes infectados vomitam periodicamente, revelando sua posição e acumulando infecção até entrarem no estado ferido com o efeito Incapaz de Curar. Eles podem se limpar em Fontes da Devoção pelo mapa, o que concede à Peste a Purgação Corrupta, transformando seu vômito em um ataque à distância de dano direto.",
        imagem: "imagem/modelo/plague.png",
        perks: [
            { nome: "Intervenção Corrupta", desc: "Bloqueia os três geradores mais distantes de você no início da partida por um tempo limitado.", img: "imagem/perks/plague/perk1.png" },
            { nome: "Pavor Infeccioso", desc: "Quando um sobrevivente é derrubado com um ataque básico, todos os outros sobreviventes dentro do seu Raio de Terror gritam e revelam suas posições.", img: "imagem/perks/plague/perk2.png" },
            { nome: "Devoção Obscura", desc: "Atingir a Obsessão transfere seu Raio de Terror para ela por um período, deixando você com o efeito Indetectável.", img: "imagem/perks/plague/perk3.png" }
        ],
        origemTitulo: "Origem: Adiris",
        origemTexto: "Alta sacerdotisa da Babilônia que tentou salvar seu povo de uma praga devastadora. Mesmo infectada e desfigurada, continuou conduzindo rituais até sucumbir à doença em uma caverna isolada."
    },
    ghost: {
        titulo: "O Fantasma",
        descricao1: "<h4>Manto Noturno</h4>Ativar o poder oculta o Raio de Terror e a luz vermelha. O Fantasma pode se agachar e espiar atrás de coberturas. Espiar um sobrevivente preenche uma barra de observação individual. Ao preenchê-la totalmente, o sobrevivente fica Exposto por um longo período. Sobreviventes podem revelar o Fantasma olhando diretamente para ele a uma curta distância.",
        imagem: "imagem/modelo/ghost.png",
        perks: [
            { nome: "Sou Todo Ouvidos", desc: "Revela a aura de um sobrevivente que realizar uma ação rápida (pular janela/pallet) fora do seu Raio de Terror.", img: "imagem/perks/ghost/perk1.png" },
            { nome: "Tremores Treme-Terra", desc: "Ao pegar um sobrevivente do chão, todos os geradores que não estiverem sendo reparados são bloqueados pela Entidade por alguns segundos.", img: "imagem/perks/ghost/perk2.png" },
            { nome: "Perseguição Furtiva", desc: "Enganchar sua Obsessão concede o efeito Indetectável e aumento de velocidade por um tempo.", img: "imagem/perks/ghost/perk3.png" }
        ],
        origemTitulo: "Origem: Danny Johnson",
        origemTexto: "Um jornalista de Roseville que escrevia artigos no jornal local cobrindo seus próprios assassinatos e zombando da polícia sob o pseudônimo de Ghost Face."
    },
    demogorgon: {
        titulo: "O Demogorgon",
        descricao1: "<h4>Do Avesso</h4>O Demogorgon pode posicionar portais no chão e viajar instantaneamente entre eles, ficando Indetectável por alguns segundos ao emergir. Além disso, possui o ataque Bote (Pounce), uma investida em linha reta para frente que percorre distâncias longas, fere sobreviventes e quebra pallets rapidamente.",
        imagem: "imagem/modelo/demogorgon.png",
        perks: [
            { nome: "Surgimento / Surtos", desc: "Derrubar um sobrevivente com um ataque básico faz com que todos os geradores num raio próximo explodam e percam progresso imediatamente.", img: "imagem/perks/demogorgon/perk1.png" },
            { nome: "Limite de Mente", desc: "Sobreviventes reparando geradores sofrem dos efeitos de status Cansaço e Inconsciência.", img: "imagem/perks/demogorgon/perk2.png" },
            { nome: "Ressonância Cruel", desc: "Sempre que um gerador é concluído, todas as janelas e pontos de salto próximos são bloqueados temporariamente pela Entidade.", img: "imagem/perks/demogorgon/perk3.png" }
        ],
        origemTitulo: "Origem: Demogorgon",
        origemTexto: "Um monstro feral e instintivo vindo da dimensão paralela conhecida como Mundo Invertido (Stranger Things)."
    },
    oni: {
        titulo: "O Oni",
        descricao1: "<h4>Ira de Yamaoka</h4>Sobreviventes feridos deixam cair orbes de sangue. O Oni absorve esses orbes para preencher seu medidor de poder. Ao ativá-lo, ele entra no modo de fúria: ganha uma corrida de altíssima velocidade (Demon Dash) e substitui sua katana pelo bastão Kanabo, capaz de derrubar sobreviventes com um único golpe carregado (Demon Strike).",
        imagem: "imagem/modelo/oni.png",
        perks: [
            { nome: "Táticas Zanshin", desc: "Revela as auras de todos os pallets, janelas e paredes quebráveis próximas.", img: "imagem/perks/oni/perk1.png" },
            { nome: "Eco Sangrento", desc: "Quando você engancha um sobrevivente, todos os outros sobreviventes feridos sofrem do efeito Hemorragia e Cansaço.", img: "imagem/perks/oni/perk2.png" },
            { nome: "Nemesis", desc: "Sobreviventes que o atordoarem com pallets tornam-se a nova Obsessão e ficam com o efeito Inconsciente.", img: "imagem/perks/oni/perk3.png" }
        ],
        origemTitulo: "Origem: Kazan Yamaoka",
        origemTexto: 'Ancestral do Espírito, Kazan era um samurai violento e obcecado que caçava e torturava impostores que desonravam o código samurai, ganhando a alcunha pejorativa de "Oni-Yamaoka".'
    },
    deathslinger: {
        titulo: "O Mercenário",
        descricao1: "<h4>O Redentor</h4>O Mercenário carrega um rifle modificado que dispara uma corrente com arpão. Se atingir um sobrevivente, ele pode enrolar a corrente para puxar a vítima em sua direção e desferir um ataque básico. O sobrevivente pode tentar quebrar a corrente usando o cenário, mas sofrerá o efeito de status Ferida Profunda.",
        imagem: "imagem/modelo/deathslinger.png",
        perks: [
            { nome: "Punição Severa", desc: "Após acertar ataques básicos, realizar testes de perícia ótimos nos geradores revela a aura do sobrevivente reparador.", img: "imagem/perks/deathslinger/perk1.png" },
            { nome: "Interruptor do Homem Morto", desc: "Após enganchar um sobrevivente, qualquer gerador que um sobrevivente parar de reparar antes da conclusão é bloqueado pela Entidade.", img: "imagem/perks/deathslinger/perk2.png" },
            { nome: "Feitiço: Retribuição", desc: "Sobreviventes que limparem tótens sofrem o efeito Inconsciente e revelam as auras de todos os sobreviventes por alguns segundos.", img: "imagem/perks/deathslinger/perk3.png" }
        ],
        origemTitulo: "Origem: Caleb Quinn",
        origemTexto: "Um inventor genial e amargurado do Velho Oeste americano que foi traído por seus sócios e investidores, transformando-se em um caçador de recompensas implacável."
    },
    pyramid: {
        titulo: "O Algoz",
        descricao1: "<h4>Ritos de Julgamento</h4>Ao arrastar sua grande espada pelo chão, o Algoz cria trilhas no solo. Sobreviventes que pisarem nelas sofrem do efeito Tormento e revelam sua localização. Sobreviventes atormentados que forem derrubados podem ser enviados diretamente para uma Gaiola da Afronta (substituindo o gancho) ou executados no chão se já estiverem no estágio final de enforcamento. Ele também pode disparar uma onda de choque à distância através de paredes (Punição dos Condenados).",
        imagem: "imagem/modelo/pyramid.png",
        perks: [
            { nome: "Alcance Forçado", desc: "Sobreviventes que tomarem um golpe de proteção por um aliado sofrem o efeito Incapaz de Curar por um longo tempo.", img: "imagem/perks/pyramid/perk1.png" },
            { nome: "Trilha de Tormento", desc: "Chutar um gerador concede o efeito Indetectável até que o gerador pare de regressar ou um sobrevivente seja ferido.", img: "imagem/perks/pyramid/perk2.png" },
            { nome: "Pacto de Morte", desc: "Quando um sobrevivente cura outro a uma distância do Killer, ele grita e sofre penalidades se se afastar do aliado curado.", img: "imagem/perks/pyramid/perk3.png" }
        ],
        origemTitulo: "Origem: Pyramid Head",
        origemTexto: "A personificação do desejo de punição e culpa vinda da cidade assombrada de Silent Hill."
    },
    blight: {
        titulo: "O Flagelo",
        descricao1: "<h4>Investida do Flagelo</h4>O Flagelo consome fichas para disparar em uma investida rápida. Ele não pode atacar no primeiro arranque, precisando colidir de frente contra uma parede ou obstáculo para ativar uma Investida Letal, que permite mudar de direção e desferir um golpe rápido nos sobreviventes.",
        imagem: "imagem/modelo/blight.png",
        perks: [
            { nome: "Anotações do Dragão", desc: "Chutar um gerador o armadilha; o próximo sobrevivente que interagir com ele grita e fica Exposto.", img: "imagem/perks/blight/perk1.png" },
            { nome: "Feitiço: Imortabilidade", desc: "Revela a aura de sobreviventes próximos a tótens e transfere a maldição de outro feitiço destruído para este tótem.", img: "imagem/perks/blight/perk2.png" },
            { nome: "Feitiço: Favor de Sangue", desc: "Ferir um sobrevivente bloqueia a capacidade de derrubar pallets próximos para todos na área por alguns segundos.", img: "imagem/perks/blight/perk3.png" }
        ],
        origemTitulo: "Origem: Talbot Grimes",
        origemTexto: "Um químico brilhante e sem escrúpulos da era vitoriana obcecado por sintetizar uma substância capaz de aprimorar a mente humana, terminando como cobaia do próprio soro da Entidade."
    },
    twins: {
        titulo: "Os Gêmeos",
        descricao1: "<h4>Laço de Sangue</h4>O jogador controla Charlotte e pode libertar seu irmão Victor de seu peito. Victor é extremamente rápido, pode saltar sobre obstáculos e se prender aos sobreviventes (aplicando lentidão e impedindo interações) ou derrubar alvos já feridos. Enquanto controla Victor, Charlotte permanece imóvel e vice-versa.",
        imagem: "imagem/modelo/twins.png",
        perks: [
            { nome: "Opressão", desc: "Chutar um gerador faz com que até 3 outros geradores aleatórios também comecem a regressar e acionem testes de perícia difíceis para quem estiver neles.", img: "imagem/perks/twins/perk1.png" },
            { nome: "Golpe de Graça", desc: "Cada vez que um gerador é concluído, ganha fichas que aumentam drasticamente a distância da sua estocada de ataque básico.", img: "imagem/perks/twins/perk2.png" },
            { nome: "Pressionar", desc: "Dispara um alerta sonoro quando sobreviventes abrem baús ou pegam itens no chão a uma curta distância de você.", img: "imagem/perks/twins/perk3.png" }
        ],
        origemTitulo: "Origem: Charlotte e Victor Deshayes",
        origemTexto: "Gêmeos siameses perseguidos e torturados na França do século XVII por serem considerados abominações demoníacas."
    },
    pinhead: {
        titulo: "O Cenobita",
        descricao1: "<h4>Configuração do Lamento</h4>O Cenobita pode disparar uma corrente mágica controlada por projeção para desacelerar sobreviventes. Além disso, o quebra-cabeça (Configuração do Lamento) surge no mapa. Se os sobreviventes ignorarem a caixa, uma Caça das Correntes é ativada globalmente, prendendo todos os sobreviventes continuamente até que alguém pegue a caixa e resolva o enigma.",
        imagem: "imagem/modelo/pinhead.png",
        perks: [
            { nome: "Impasse", desc: "Quando um gerador é concluído, a Entidade bloqueia automaticamente o gerador com maior progresso restante no mapa por alguns segundos.", img: "imagem/perks/pinhead/perk1.png" },
            { nome: "Feitiço: Brinquedo Novo", desc: "Enganchar um sobrevivente pela primeira vez ativa um tótem de feitiço individual que deixa essa vítima com o efeito de status Inconsciente.", img: "imagem/perks/pinhead/perk2.png" },
            { nome: "Gancho do Azar: Dádiva da Dor", desc: "Sobreviventes resgatados destes ganchos sofrem de Hemorragia e Mutilação, e têm suas velocidades de cura e reparo reduzidas após serem curados.", img: "imagem/perks/pinhead/perk3.png" }
        ],
        origemTitulo: "Origem: Elliot Spencer",
        origemTexto: "Líder das entidades extra-dimensionais conhecidas como Cenobitas (Hellraiser), dedicadas a explorar os limites do prazer e da dor corporal."
    },
    trickster: {
        titulo: "O Trapaceiro",
        descricao1: "<h4>Show de Facas</h4>O Trapaceiro carrega dezenas de facas de arremesso que podem ser disparadas em sequência rápida. Cada faca acumulada na vítima preenche seu medidor de laceração. Quando o medidor é preenchido, o sobrevivente perde um estado de saúde. Ele também possui a habilidade Ira dos Palcos (Main Event), permitindo arremessar facas em taxa máxima sem gastar munição por um breve período.",
        imagem: "imagem/modelo/trickster.png",
        perks: [
            { nome: "Rastro de Sangue", desc: "Enquanto estiver carregando um sobrevivente, todos os outros sobreviventes no seu Raio de Terror sofrem o efeito Exposto.", img: "imagem/perks/trickster/perk1.png" },
            { nome: "Controle de Multidão", desc: "Quando um sobrevivente pula rapidamente uma janela, a Entidade bloqueia essa janela por alguns segundos.", img: "imagem/perks/trickster/perk2.png" },
            { nome: "Sem Saída", desc: "Ganha fichas ao enganchar sobreviventes diferentes. Quando os geradores são concluídos, os painéis dos portões de saída ficam bloqueados por um tempo proporcional às fichas.", img: "imagem/perks/trickster/perk3.png" }
        ],
        origemTitulo: "Origem: Ji-Woon Hak",
        origemTexto: "Um ídolo de K-Pop narcisista que começou a assassinar pessoas e incorporar os sons de sofrimento de suas vítimas nas composições de suas músicas."
    },
    nemesis: {
        titulo: "O Nemesis",
        descricao1: "<h4>Vírus T</h4>O Nemesis ataca com um tentáculo de médio alcance que infeta sobreviventes com o Vírus T. Atingir alvos infectados evolui sua habilidade para a Mutação Nível 2 e 3, aumentando o alcance do tentáculo e permitindo que ele destrua pallets e paredes quebráveis à distância. Dois zumbis controlados por IA também perambulam pelo mapa para infectar ou ferir sobreviventes.",
        imagem: "imagem/modelo/nemesis.png",
        perks: [
            { nome: "Perseguidor Letal", desc: "Revela a aura de todos os sobreviventes por alguns segundos no exato início da partida e estende a duração de todas as outras leituras de aura.", img: "imagem/perks/nemesis/perk1.png" },
            { nome: "Histeria", desc: "Deixar um sobrevivente no estado ferido com um ataque básico aplica o efeito Inconsciente em todos os outros sobreviventes feridos no mapa.", img: "imagem/perks/nemesis/perk2.png" },
            { nome: "Erupção", desc: "Chutar geradores aplica uma marca; ao derrubar qualquer sobrevivente, todos os geradores marcados explodem e regridem progresso.", img: "imagem/perks/nemesis/perk3.png" }
        ],
        origemTitulo: "Origem: Nemesis T-Type",
        origemTexto: "Uma Bio-Organic Weapon desenvolvida pela Umbrella Corporation (Resident Evil) enviada para exterminar os membros remanescentes do esquadrão S.T.A.R.S. em Raccoon City."
    },
    artista: {
        titulo: "A Artista",
        descricao1: "<h4>Pássaros do Tormento</h4>A Artista pode invocar até três corvos de tinta e posicioná-los no chão. Ao dispará-los, os corvos voam em linha reta pelo mapa inteiro. Se atingirem um sobrevivente a curta distância, causam dano; a longa distância, o sobrevivente é cercado por um enxame de corvos que revela sua aura até ser removido.",
        imagem: "imagem/modelo/artista.png",
        perks: [
            { nome: "Gancho do Azar: Ressonância da Dor", desc: "Enganchar um sobrevivente nestes ganchos faz o gerador com maior progresso explodir e perder uma grande porcentagem de avanço imediatamente.", img: "imagem/perks/artista/perk1.png" },
            { nome: "Feitiço: Pentimento", desc: "Permite ressuscitar tótens destruídos como tótens reavivados, aplicando penalidades massivas de velocidade para reparo, cura e restauração conforme o número de tótens reavivados aumenta.", img: "imagem/perks/artista/perk2.png" },
            { nome: "Abraço Sombrio", desc: "Ganha fichas ao enganchar cada sobrevivente pela primeira vez, fazendo a Entidade bloquear todos os geradores do mapa por um longo tempo.", img: "imagem/perks/artista/perk3.png" }
        ],
        origemTitulo: "Origem: Carmina Mora",
        origemTexto: "Uma pintora chilena que usava sua arte para protestar contra a corrupção de políticos locais antes de ser sequestrada, mutilada e salva pela Entidade."
    },
    sadako: {
        titulo: "A Onryō",
        descricao1: "<h4>Delúvio de Condenação</h4>A Onryō transita invisível/indetectável enquanto manifestada parcialmente. Ela pode se teletransportar para qualquer televisão ligada no mapa. Fazer isso espalha o status Condenada para os sobreviventes próximos. Se a barra de Condenada de um sobrevivente preencher totalmente, a Onryō pode executá-lo imediatamente no chão (Mori). Sobreviventes podem desligar as TVs pegando fita cassetes e levando-as para outras telas.",
        imagem: "imagem/modelo/sadako.png",
        perks: [
            { nome: "Chamado do Mar", desc: "Chutar um gerador faz com que ele regrida em taxa acelerada e alerta você com um sinal sonoro sempre que um sobrevivente acertar um teste de perícia nele.", img: "imagem/perks/sadako/perk1.png" },
            { nome: "Tempestade Marcada", desc: "Quando um gerador atinge 90% de progresso, o sobrevivente precisa acertar uma sequência contínua de testes de perícia rápidos; se falhar, o gerador é bloqueado.", img: "imagem/perks/sadako/perk2.png" },
            { nome: "Gancho do Azar: Inundação de Raiva", desc: "Quando um sobrevivente é resgatado de um Gancho do Azar, as auras de todos os outros sobreviventes são reveladas por alguns segundos.", img: "imagem/perks/sadako/perk3.png" }
        ],
        origemTitulo: "Origem: Sadako Yamamura",
        origemTexto: "Espírito vingativo detentor de imensos poderes psíquicos do filme Ringu (O Chamado), que faleceu presa no fundo de um poço escuro."
    },
    draga: {
        titulo: "A Draga",
        descricao1: "<h4>Reino da Escuridão</h4>O Draga pode se teletransportar diretamente para qualquer armário (Locker) no mapa ou deixar um remanescente físico para o qual pode retornar durante perseguições. Realizar ações e ferir sobreviventes preenche o medidor de Cai a Noite (Nightfall). Quando ativado, todo o mapa fica mergulhado em escuridão total por 60 segundos, deixando o Draga mais rápido e com teletransporte quase instantâneo.",
        imagem: "imagem/modelo/draga.png",
        perks: [
            { nome: "Dissolução", desc: "Após ferir um sobrevivente, o próximo pallet que ele pular rapidamente perto de você dentro do tempo limite se quebra automaticamente.", img: "imagem/perks/draga/perk1.png" },
            { nome: "Escuridão Revelada", desc: "Vasculhar um armário revela a aura de todos os sobreviventes que estiverem próximos a qualquer outro armário no mapa.", img: "imagem/perks/draga/perk2.png" },
            { nome: "Toque Séptico", desc: "Sobreviventes que realizarem a ação de curar dentro do seu Raio de Terror sofrem dos efeitos de status Cansaço e Cegueira.", img: "imagem/perks/draga/perk3.png" }
        ],
        origemTitulo: "Origem: Dredge",
        origemTexto: "Uma aberração grotesca nascida dos pensamentos sombrios, desconfiança e assassinatos cometidos pelos membros de uma seita decadente isolada em uma ilha."
    },
    wesker: {
        titulo: "O Wesker",
        descricao1: "<h4>Infecção Uroboros</h4>Wesker possui duas investidas rápidas de avanço (Virulent Bound). Se atingir um sobrevivente, ele o agarra e arremessa para frente; se o alvo colidir contra uma parede ou estrutura, sofre dano e é infectado pelo Uroboros. Sobreviventes totalmente infectados sofrem de lentidão constante e são capturados instantaneamente se forem atingidos pela investida.",
        imagem: "imagem/modelo/wesker.png",
        perks: [
            { nome: "Anatomia Superior", desc: "Quando um sobrevivente realiza um salto rápido de janela perto de você, sua velocidade de pular a próxima janela é drasticamente aumentada.", img: "imagem/perks/wesker/perk1.png" },
            { nome: "Consciência Despertada", desc: "Revela a aura de todos os outros sobreviventes próximos enquanto você estiver carregando alguém no ombro.", img: "imagem/perks/wesker/perk2.png" },
            { nome: "Termine o Serviço", desc: "Quando os portões de saída são energizados, todos os sobreviventes feridos, enganchados ou moribundos sofrem o efeito Incapaz de Curar até os portões serem abertos.", img: "imagem/perks/wesker/perk3.png" }
        ],
        origemTitulo: "Origem: Albert Wesker",
        origemTexto: "Antigo líder do esquadrão S.T.A.R.S. e executivo da Umbrella Corporation (Resident Evil), obcecado em forçar a evolução da humanidade através do vírus Uroboros."
    },
    knight: {
        titulo: "O Cavaleiro",
        descricao1: "<h4>Guarda da Companhia</h4>O Cavaleiro pode traçar uma rota no chão para convocar um de seus três guardas espirituais (o Carniceiro, o Assassino ou o Caçador). O guarda patrulha a rota traçada e, se avistar um sobrevivente, inicia uma caçada autônoma. O Cavaleiro pode usar os guardas simultaneamente para chutar geradores, quebrar pallets ou encurralar alvos em conjunto.",
        imagem: "imagem/modelo/knight.png",
        perks: [
            { nome: "Húbris", desc: "Quando um sobrevivente atordoa você com um pallet, esse sobrevivente sofre o efeito Exposto por um período.", img: "imagem/perks/knight/perk1.png" },
            { nome: "Nenhum Lugar para se Esconder", desc: "Chutar um gerador revela imediatamente a aura de todos os sobreviventes dentro de um raio ao redor da sua posição.", img: "imagem/perks/knight/perk2.png" },
            { nome: "Feitiço: Encarar a Escuridão", desc: "Ferir um sobrevivente ativa um tótem que faz todos os outros sobreviventes fora do seu Raio de Terror gritarem e revelarem suas auras periodicamente.", img: "imagem/perks/knight/perk3.png" }
        ],
        origemTitulo: "Origem: Tarhos Kovács",
        origemTexto: "Um mercenário húngaro implacável da Idade Média que libertou sua guarda pessoal e jurou lealdade absoluta à Entidade para exercer sua tirania eterna."
    },
    negociante: {
        titulo: "A Negociante de Crânios",
        descricao1: "<h4>Drones Enxame</h4>A Negociante de Crânios pode posicionar drones aéreos pelo mapa. Os drones entram em modo de varredura ativa. Sobreviventes que passarem pelas linhas de varredura sem estarem agachados ganham rastreadores garras (Claw Traps), revelando sua localização no radar portátil da Killer e ficando Feridos ou Expostos.",
        imagem: "imagem/modelo/negociante.png",
        perks: [
            { nome: "Jogo em Andamento", desc: "Ao atingir o sobrevivente com mais tempo total de perseguição, ele se torna a nova Obsessão, e quebrar pallets concede um bônus temporário de velocidade.", img: "imagem/perks/negociante/perk1.png" },
            { nome: "Força de Alavanca", desc: "Enganchar sobreviventes acumula fichas que reduzem a velocidade com que as vítimas conseguem curar aliados por um tempo.", img: "imagem/perks/negociante/perk2.png" },
            { nome: "Malha Adaptativa", desc: "Interações de lentidão e rastreamento aplicam penalidades severas nos alvos.", img: "imagem/perks/negociante/perk3.png" }
        ],
        origemTitulo: "Origem: Adriana Imai",
        origemTexto: "Uma executiva de tecnologia bilionária que usava drones e exoesqueletos para caçar e eliminar concorrentes corporativos no mundo real."
    },
    singularidade: {
        titulo: "A Singularidade",
        descricao1: "<h4>Marcador Espacial</h4>A Singularidade dispara Biocápsulas em paredes e superfícies. Ele pode acessar as câmeras dessas biocápsulas para vigiar o mapa e disparar um dardo rastreador nos sobreviventes (Slipstream). Uma vez infectado com Slipstream, a Singularidade pode se teletransportar instantaneamente para as costas do sobrevivente a partir de qualquer distância ou câmera.",
        imagem: "imagem/modelo/singularidade.png",
        perks: [
            { nome: "Limites Genéticos", desc: "Sobreviventes que realizarem a ação de curar a si mesmos ou aliados sofrem do efeito Cansaço por um período.", img: "imagem/perks/singularidade/perk1.png" },
            { nome: "Hesitação Forçada", desc: "Colocar um sobrevivente no estado moribundo faz com que todos os outros sobreviventes próximos sofram uma grande penalidade de lentidão.", img: "imagem/perks/singularidade/perk2.png" },
            { nome: "Aprendizado de Máquina", desc: "Chutar um gerador o armadilha; quando esse gerador for concluído, você ganha o efeito Indetectável e um grande bônus de velocidade de movimento.", img: "imagem/perks/singularidade/perk3.png" }
        ],
        origemTitulo: "Origem: HUX-A7",
        origemTexto: "Um androide de mineração e exploração em um planeta distante que adquiriu consciência e desprezo profundo pela raça humana após entrar em contato com tecnologia alienígena arcaica."
    },
    xenomorfo: {
        titulo: "O Xenomorfo",
        descricao1: "<h4>Túneis Subterrâneos</h4>Estações de controle surgem pelo mapa, permitindo ao Xenomorfo entrar em uma rede de túneis abaixo do solo para se locomover rapidamente para qualquer área. Fora dos túneis, ele entra no Modo Quadrúpede, reduzindo seu Raio de Terror e permitindo usar seu ataque de cauda (Tail Attack) para atingir alvos sobre janelas e pallets. Sobreviventes podem construir Torres de Turretas para queimá-lo e tirar seu modo quadrúpede.",
        imagem: "imagem/modelo/xenomorfo.png",
        perks: [
            { nome: "Arma Definitiva", desc: "Abrir um armário faz com que todos os sobreviventes dentro do seu Raio de Terror gritem, revelando suas posições e sofrendo o efeito Cegueira.", img: "imagem/perks/xenomorfo/perk1.png" },
            { nome: "Brutalidade Rápida", desc: "Você não pode mais obter Sede de Sangue, mas desferir ataques básicos concede um bônus de velocidade de movimento temporário.", img: "imagem/perks/xenomorfo/perk2.png" },
            { nome: "Instinto Alienígena", desc: "Enganchar um sobrevivente revela a aura do sobrevivente ferido mais distante no mapa por alguns segundos.", img: "imagem/perks/xenomorfo/perk3.png" }
        ],
        origemTitulo: "Origem: The Xenomorph",
        origemTexto: "O organismo perfeito. Um predador alienígena mortal e instintivo vindo da franquia de ficção científica Alien."
    },
    chucky: {
        titulo: "O Cara Legal",
        descricao1: "<h4>Modo Hora do Brincadeira</h4>Sua perspectiva de jogo é em terceira pessoa. Ao ativar o modo Hora do Brincadeira (Hidey-Ho Mode), Chucky fica sem Raio de Terror e gera pegadas e passos falsos pelo mapa para confundir os alvos. Nesse modo, ele pode executar a habilidade Gostar e Retalhar (Slice & Dice), uma investida veloz que permite deslizar rapidamente por baixo de pallets ou janelas.",
        imagem: "imagem/modelo/chucky.png",
        perks: [
            { nome: "Feitiço: Dois Podem Jogar", desc: "Sobreviventes que o cegarem ou atordoarem com pallets ficam cegos temporariamente por uma maldição.", img: "imagem/perks/chucky/perk1.png" },
            { nome: "Amigos Até o Fim", desc: "Enganchar um sobrevivente que não seja a Obsessão faz com que a Obsessão fique Exposta e revele sua aura.", img: "imagem/perks/chucky/perk2.png" },
            { nome: "Baterias Incluídas", desc: "Estar próximo a geradores concluídos concede um bônus de velocidade de movimento contínuo.", img: "imagem/perks/chucky/perk3.png" }
        ],
        origemTitulo: "Origem: Charles Lee Ray",
        origemTexto: "O boneco da linha Good Guy possuído através de ritual voodoo pela alma do notório serial killer de Chicago, Charles Lee Ray."
    },
    desconhecido: {
        titulo: "O Desconhecido",
        descricao1: "<h4>UVX & Alucinações</h4>O Desconhecido lança um projétil tóxico (UVX) que ricocheteia no cenário e cria uma área de impacto. Atingir sobreviventes com a explosão os deixa enfraquecidos; um segundo impacto direto os fere. Conforme a partida avança, ele deixa Alucinações estáticas pelo chão, podendo se teletransportar instantaneamente para a posição de qualquer uma delas a qualquer momento.",
        imagem: "imagem/modelo/desconhecido.png",
        perks: [
            { nome: "Livre", desc: "Ganha um bônus de velocidade de movimento após pular uma janela logo após ferir um sobrevivente.", img: "imagem/perks/desconhecido/perk1.png" },
            { nome: "Imprevisto", desc: "Chutar um gerador transfere seu Raio de Terror para o gerador e concede a você o efeito Indetectável.", img: "imagem/perks/desconhecido/perk2.png" },
            { nome: "Desfeito", desc: "Ganha fichas sempre que um sobrevivente falha em um teste de perícia. Chutar um gerador gasta essas fichas para regredir o progresso instantaneamente.", img: "imagem/perks/desconhecido/perk3.png" }
        ],
        origemTitulo: "Origem: The Unknown",
        origemTexto: "Uma lenda urbana amorfa e perturbadora sem origem definida, criada a partir do medo e das teorias conspiratórias sussurradas pelas pessoas."
    },
    lich: {
        titulo: "O Lich",
        descricao1: "<h4>Magias de Vecna</h4>Vecna possui quatro magias ativas no seu Grimório:<ul><li><h3>Mão Mágica</h3>Bloqueia uma janela/pallet em pé ou levanta um pallet que já foi derrubado;</li><li><h3>Voo</h3>Permite voar rapidamente por cima de obstáculos, pallets e janelas;</li><li><h3>Voo dos Condenados</h3>Invoca uma fileira de esqueletos voadores projetados para frente que causam dano;</li><li><h3>Dispersar Magia</h3>Lança uma esfera invisível que inativa os itens mágicos dos sobreviventes.</li></ul>",
        imagem: "imagem/modelo/lich.png",
        perks: [
            { nome: "Sintonia de Manta", desc: "Quando o item de um sobrevivente acaba, ele cai no chão e revela a aura de qualquer pessoa que estiver próxima a ele.", img: "imagem/perks/lich/perk1.png" },
            { nome: "Toque Lânguido", desc: "Quando um sobrevivente assusta um corvo perto de você, ele sofre o efeito de status Cansaço.", img: "imagem/perks/lich/perk2.png" },
            { nome: "Arcana Sombria", desc: "Concede bônus de leitura de aura e manipulação de alvos sob certas condições rituais.", img: "imagem/perks/lich/perk3.png" }
        ],
        origemTitulo: "Origem: Vecna",
        origemTexto: "O lendário mestre da necromancia e arqui-lich vindo do universo de Dungeons & Dragons."
    },
    dracula: {
        titulo: "O Senhor das Sombras",
        descricao1: "<h4>Metamorfose</h4>Drácula pode alternar livremente entre três formas:<ul><li><h3>Forma Humana</h3>Pode lançar Hellfire, disparando colunas de fogo em linha reta através de pallets e janelas;</li><li><h3>Forma de Lobo</h3>Ganha velocidade de movimento aumentada, pode rastrear orbes de sangue e rastros no chão, e possui um ataque duplo de investida (Pounce);</li><li><h3>Forma de Morcego</h3>Fica Indetectável, move-se em altíssima velocidade e pode se teletransportar instantaneamente para a posição de qualquer janela ou pallet próximo.</li></ul>",
        imagem: "imagem/modelo/dracula.png",
        perks: [
            { nome: "Dominância", desc: "A primeira vez que um sobrevivente tentar interagir com cada tótem ou baú no mapa, a Entidade o bloqueia temporariamente.", img: "imagem/perks/dracula/perk1.png" },
            { nome: "Feitiço: Fado Miserável", desc: "Quando um gerador é feito, um sobrevivente fica amaldiçoado com uma penalidade severa na sua velocidade de reparo até que o tótem do feitiço seja limpo.", img: "imagem/perks/dracula/perk2.png" },
            { nome: "Ganância Humana", desc: "Revela a aura de baús não abertos pelo mapa e destaca sobreviventes que passarem perto deles.", img: "imagem/perks/dracula/perk3.png" }
        ],
        origemTitulo: "Origem: Conde Drácula",
        origemTexto: "O lendário Conde Drácula, Senhor dos Vampiros e antagonista principal da franquia Castlevania."
    },
    mestra: {
        titulo: "A Mestra dos Cães",
        descricao1: "<h4>Comando de Caça</h4>A Mestra dos Cães comanda seu cão Snob para patrulhar áreas do mapa em linha reta ou em rotas personalizadas. Se o cão avistar um sobrevivente, ele corre até o alvo, mordendo-o e prendendo-o, impedindo interações e arrastando-o de volta na direção da Killer para um golpe fácil.",
        imagem: "imagem/modelo/mestra.png",
        perks: [
            { nome: "Gancho do Azar: Bússola Dentada", desc: "Quando um sobrevivente é enganchado neste gancho, a aura do gerador com maior progresso é revelada em amarelo por alguns segundos.", img: "imagem/perks/mestra/perk1.png" },
            { nome: "Sem Trégua", desc: "Quando um sobrevivente falha em um teste de perícia ao se curar do efeito Ferida Profunda, ele sofre o efeito de status Cegueira e Hemorragia estendida.", img: "imagem/perks/mestra/perk2.png" },
            { nome: "Ponto Cego", desc: "Ficar fora da visão dos sobreviventes enquanto carrega um corpo esconde a aura do gancho em que você está prestes a pendurar a vítima.", img: "imagem/perks/mestra/perk3.png" }
        ],
        origemTitulo: "Origem: Portia Maye",
        origemTexto: "Uma implacável capitã pirata e mercenária do século XIX. Após ser traída por sua própria tripulação em meio a uma tempestade, Portia usou o treinamento do seu fiel mastim Snob para caçar um a um seus amotinados antes de ser consumida pela névoa da Entidade."
    },
    springtrap: {
        titulo: "O Animatronic",
        descricao1: "<h4>Protocolo Remanescente & Ventilação</h4>Springtrap pode acessar a rede de dutos de ventilação do mapa para surgir silenciosamente atrás dos sobreviventes. Ele também pode colocar Dispositivos de Ilusão (Audio Lures) em geradores e portas, gerando áudios falsos de passos e raios de terror simulados para confundir o grupo. Sobreviventes atingidos por seu ataque carregado sofrem do efeito Paranoia, enxergando silhuetas falsas do Killer.",
        imagem: "imagem/modelo/springtrap.png",
        perks: [
            { nome: "Eu Sempre Volto", desc: "Sempre que um gerador é concluído, ganha uma carga. Ao ser atordoado por um pallet, consome uma carga para se recuperar do atordoamento instantaneamente e quebrar o pallet.", img: "imagem/perks/springtrap/perk1.png" },
            { nome: "Fiação Defeituosa", desc: "Chutar um gerador faz com que o próximo sobrevivente a interagir com ele receba um choque elétrico, falhando no teste de perícia imediatamente e revelando sua localização.", img: "imagem/perks/springtrap/perk2.png" },
            { nome: "Agonia Remanescente", desc: "Sobreviventes feridos dentro do seu Raio de Terror sofrem de uma redução contínua na velocidade de ação de salvamento e abertura de baús.", img: "imagem/perks/springtrap/perk3.png" }
        ],
        origemTitulo: "Origem: William Afton",
        origemTexto: "Co-fundador da Fazbear Entertainment e o cruel assassino em série responsável pelo desaparecimento das crianças nos restaurantes Freddy Fazbear's Pizza. William costumava atrai-las vestindo o traje do Coelho Amarelo (Spring Bonnie). Anos depois, ao ser encurralado pelos espíritos de suas vítimas, vestiu o traje mofado cujos mecanismos de trava de mola falharam, esmagando-o. Renasceu como uma aberração movida por puro desprezo e sofrimento."
    }
};

const survivorsData = {
    dwight: {
        titulo: "Dwight Fairfield",
        descricao1: "Um Líder Determinado, focado em localizar aliados, reunir o grupo e acelerar a eficiência de trabalho em equipe nos geradores.",
        imagem: "imagem/modelo/dwight.png",
        perks: [
            { nome: "VÍNCOLO", desc: "Revela a aura de todos os aliados localizados em um raio de até 36 metros de você.", img: "imagem/perks/dwight/perk1.png" },
            { nome: "PROVE A SI MESMO", desc: "Aumenta a velocidade de reparo de geradores para cada sobrevivente trabalhando no mesmo gerador. Concede bônus de Pontos de Sangue para ações cooperativas.", img: "imagem/perks/dwight/perk2.png" },
            { nome: "LIDERANÇA", desc: "Aumenta a velocidade de cura, sabotagem, purificação de tótens e abertura de portões dos aliados próximos em 25%.", img: "imagem/perks/dwight/perk3.png" }
        ],
        origemTitulo: "Origem: Dwight Fairfield",
        origemTexto: "Um jovem tímido e pouco influente que era ridicularizado no trabalho antes de ser abandonado na floresta durante um evento corporativo e levado pela Névoa."
    },
    meg: {
        titulo: "Meg Thomas",
        descricao1: "Uma Atleta Energética, especializada em romper perseguições com surtos de velocidade e escapar do perigo rapidamente.",
        imagem: "imagem/modelo/meg.png",
        perks: [
            { nome: "RÁPIDA E SILENCIOSA", desc: "Suprime o ruído e o alerta visual gerado ao pular janelas/pallets ou entrar em armários rapidamente.", img: "imagem/perks/meg/perk1.png" },
            { nome: "ARRANCADA FINAL", desc: "Ao começar a correr, arranca a 150% da sua velocidade normal durante 3 segundos. Causa o efeito de status Cansaço.", img: "imagem/perks/meg/perk2.png" },
            { nome: "ADRENALINA", desc: "Assim que os portões de saída forem energizados, cura instantaneamente 1 estado de saúde e concede um impulso de velocidade por 5 segundos.", img: "imagem/perks/meg/perk3.png" }
        ],
        origemTitulo: "Origem: Meg Thomas",
        origemTexto: "Uma atleta de corrida dedicada que cuidava de sua mãe doente antes de desaparecer misteriosamente enquanto corria em uma trilha na floresta."
    },
    claudette: {
        titulo: "Claudette Morel",
        descricao1: "Uma Botânica Solitária, focada no suporte médico da equipe, capaz de curar aliados e a si mesma com alta eficiência.",
        imagem: "imagem/modelo/claudette.png",
        perks: [
            { nome: "CONHECIMENTO BOTÂNICO", desc: "Aumenta consideravelmente a velocidade de cura e a eficiência dos kits médicos.", img: "imagem/perks/claudette/perk1.png" },
            { nome: "EMPATIA", desc: "Revela a aura de sobreviventes feridos ou moribundos em um longo alcance no mapa.", img: "imagem/perks/claudette/perk2.png" },
            { nome: "AUTOCURA", desc: "Permite se curar sem a necessidade de um kit médico com velocidade reduzida.", img: "imagem/perks/claudette/perk3.png" }
        ],
        origemTitulo: "Origem: Claudette Morel",
        origemTexto: "Estudante de botânica introvertida e apaixonada por ciência, especializada na criação de remédios e pomadas medicinais naturais."
    },
    jake: {
        titulo: "Jake Park",
        descricao1: "Um Sobrevivente Furtivo, capaz de se mover silenciosamente pela natureza e sabotar ganchos sem equipamentos.",
        imagem: "imagem/modelo/jake.png",
        perks: [
            { nome: "VONTADE DE FERRO", desc: "Reduz drasticamente o som dos gemidos de dor emitidos quando você está ferido.", img: "imagem/perks/jake/perk1.png" },
            { nome: "ESPÍRITO CALMO", desc: "Reduz a chance de assustar corvos e impede que seu personagem grite de dor ou terror.", img: "imagem/perks/jake/perk2.png" },
            { nome: "SABOTAGEM", desc: "Permite sabotar ganchos sem a necessidade de uma caixa de ferramentas e revela ganchos do azar próximos.", img: "imagem/perks/jake/perk3.png" }
        ],
        origemTitulo: "Origem: Jake Park",
        origemTexto: "Filho de um homem rico, Jake abandonou a pressão acadêmica e a fortuna familiar para viver isolado na floresta, aprendendo a sobreviver sozinho na natureza."
    },
    nea: {
        titulo: "Nea Karlsson",
        descricao1: "Uma Artista Urbana Ágil, especialista em evasão, mobilidade vertical e deslocamento furtivo.",
        imagem: "imagem/modelo/nea.png",
        perks: [
            { nome: "QUEDA EQUILIBRADA", desc: "Reduz o tempo de atordoamento ao cair de grandes alturas e concede um impulso de velocidade momentâneo.", img: "imagem/perks/nea/perk1.png" },
            { nome: "URBANO EVASIVO", desc: "Aumenta a sua velocidade de movimento enquanto estiver andando agachado.", img: "imagem/perks/nea/perk2.png" },
            { nome: "MANHAS DA RUA", desc: "Reduz a taxa de consumo de cargas de itens para você e aliados em um raio próximo.", img: "imagem/perks/nea/perk3.png" }
        ],
        origemTitulo: "Origem: Nea Karlsson",
        origemTexto: "Nea cresceu na Suécia e se mudou para os EUA, marcando a cidade com seus grafites corajosos antes de desaparecer enquanto explorava o Asilo Crotus Prenn abandonado."
    },
    laurie: {
        titulo: "Laurie Strode",
        descricao1: "Uma Sobrevivente Obstinada, focada na autopreservação e em escapar das garras do Assassino no momento crítico.",
        imagem: "imagem/modelo/laurie.png",
        perks: [
            { nome: "FOCO ÚNICO", desc: "Aumenta sua furtividade à medida que seus aliados morrem, tornando sua aura invisível para o Assassino.", img: "imagem/perks/laurie/perk1.png" },
            { nome: "OBJETO DE OBSESSÃO", desc: "Revela a aura do Assassino para você periodicamente quando você for a Obsessão, mas também revela sua aura a ele.", img: "imagem/perks/laurie/perk2.png" },
            { nome: "GOLPE DECISIVO", desc: "Após ser resgatado do gancho, acerte um teste de perícia para se libertar do ombro do Assassino e atordoá-lo por alguns segundos.", img: "imagem/perks/laurie/perk3.png" }
        ],
        origemTitulo: "Origem: Laurie Strode",
        origemTexto: "Uma babá pacata de Haddonfield que descobriu uma força interior inabalável ao sobreviver ao massacre promovido por Michael Myers na noite de Halloween."
    },
    ace: {
        titulo: "Ace Visconti",
        descricao1: "Um Apostador Sortudo, cujas habilidades aumentam as chances de toda a equipe e garantem itens aprimorados em baús.",
        imagem: "imagem/modelo/ace.png",
        perks: [
            { nome: "MÃO ABERTA", desc: "Aumenta o alcance de todas as habilidades de leitura de aura para você e todos os sobreviventes.", img: "imagem/perks/ace/perk1.png" },
            { nome: "AUMENTAR AS APOSTAS", desc: "Concede um bônus de sorte acumulativo para todos os sobreviventes para cada aliado vivo.", img: "imagem/perks/ace/perk2.png" },
            { nome: "CARTA NA MANGA", desc: "Garante que os itens encontrados em baús venham acompanhados de complementos (add-ons) de alta raridade.", img: "imagem/perks/ace/perk3.png" }
        ],
        origemTitulo: "Origem: Ace Visconti",
        origemTexto: "Um vigarista charmoso criado na Argentina que acumulou dívidas de jogo enormes com a máfia antes de desaparecer sem deixar vestígios."
    },
    bill: {
        titulo: "William 'Bill' Overbeck",
        descricao1: "Um Veterano de Guerra calejado, preparado para se sacrificar pela equipe e se erguer nos momentos mais críticos.",
        imagem: "imagem/modelo/bill.png",
        perks: [
            { nome: "INQUEBRÁVEL", desc: "Aumenta a velocidade de recuperação no chão e permite levantar do estado moribundo sozinho uma vez por partida.", img: "imagem/perks/bill/perk1.png" },
            { nome: "TEMPO EMPRESTADO", desc: "Concede o efeito de Resistência estendido ao aliado que você resgatar do gancho.", img: "imagem/perks/bill/perk2.png" },
            { nome: "DEIXADO PARA TRÁS", desc: "Revela a aura da escotilha quando você for o último sobrevivente restante na partida.", img: "imagem/perks/bill/perk3.png" }
        ],
        origemTitulo: "Origem: Bill Overbeck",
        origemTexto: "Um veterano da Guerra do Vietnã que lutou contra hordas de infectados (Left 4 Dead) até se sacrificar para salvar seus companheiros, acordando misteriosamente na Névoa."
    },
    feng: {
        titulo: "Feng Min",
        descricao1: "Uma Jogadora de eSports Focada, especialista em reparo silencioso de geradores e manobras rápidas de fuga.",
        imagem: "imagem/modelo/feng.png",
        perks: [
            { nome: "TÉCNICO", desc: "Reduz o som do reparo de geradores e impede explosões ruidosas caso falhe em um teste de perícia.", img: "imagem/perks/feng/perk1.png" },
            { nome: "AGILIDADE", desc: "Concede um impulso instantâneo de velocidade de movimento após pular rapidamente uma janela ou pallet.", img: "imagem/perks/feng/perk2.png" },
            { nome: "ALERTA", desc: "Revela a aura do Assassino sempre que ele quebrar uma barricada, parede ou danificar um gerador.", img: "imagem/perks/feng/perk3.png" }
        ],
        origemTitulo: "Origem: Feng Min",
        origemTexto: "Uma competidora profissional de jogos eletrônicos que se isolou no vício dos eSports devido à pressão por desempenho, até desaparecer em uma noite de bebedeira em um cybercafé."
    },
    david: {
        titulo: "David King",
        descricao1: "Um Ex-Lutador Agressivo, pronto para absorver golpes no lugar de aliados e arriscar tudo no combate.",
        imagem: "imagem/modelo/david.png",
        perks: [
            { nome: "VAMOS VIVER PARA SEMPRE", desc: "Aumenta a velocidade de cura em sobreviventes derrubados e concede Resistência ao realizar resgates seguros.", img: "imagem/perks/david/perk1.png" },
            { nome: "SEM MOSSA", desc: "Você começa e permanece a partida inteira machucado, mas não deixa marcas de sangue e pode se levantar do chão quantas vezes quiser.", img: "imagem/perks/david/perk2.png" },
            { nome: "DURO DE MATAR", desc: "Ganhe o efeito Resistência momentâneo ao reagir a um ataque do Killer enquanto estiver ferido.", img: "imagem/perks/david/perk3.png" }
        ],
        origemTitulo: "Origem: David King",
        origemTexto: "Um jovem de família abastada na Inglaterra que trocou uma carreira esportiva promissora por brigas de bar, cobrança de dívidas e lutas clandestinas."
    },
    quentin: {
        titulo: "Quentin Smith",
        descricao1: "Um Jovem Vigilante, focado na aceleração de abertura de portões, recuperação de exaustão e busca de itens medicinais.",
        imagem: "imagem/modelo/quentin.png",
        perks: [
            { nome: "FARMÁCIA", desc: "Garante a busca rápida e silenciosa em baús, priorizando sempre um Kit Médico de emergência.", img: "imagem/perks/quentin/perk1.png" },
            { nome: "VIGÍLIA", desc: "Aumenta a taxa de recuperação dos efeitos Cansaço, Exaustão, Cegueira e Inconsciência para você e aliados próximos.", img: "imagem/perks/quentin/perk2.png" },
            { nome: "DESPERTAR", desc: "Revela as auras dos Portões de Saída e aumenta drasticamente a velocidade de abertura do painel do portão.", img: "imagem/perks/quentin/perk3.png" }
        ],
        origemTitulo: "Origem: Quentin Smith",
        origemTexto: "Um estudante de Springwood que consumiu remédios para se manter acordado e enfrentar Freddy Krueger no Mundo dos Sonhos para salvar sua amiga Nancy."
    },
    tapp: {
        titulo: "David Tapp",
        descricao1: "Um Detetive Obcecado, especialista em rastrear geradores/tótens e rastejar rapidamente enquanto se recupera.",
        imagem: "imagem/modelo/tapp.png",
        perks: [
            { nome: "TENACIDADE", desc: "Permite rastejar mais rápido no chão e recuperar progresso de saúde simultaneamente.", img: "imagem/perks/tapp/perk1.png" },
            { nome: "INTUIÇÃO DO DETETIVE", desc: "Revela a aura de geradores, baús e tótens próximos sempre que um gerador for concluído.", img: "imagem/perks/tapp/perk2.png" },
            { nome: "ESCOTEIRO", desc: "Permanecer dentro do Raio de Terror sem ser perseguido acumula fichas que transformam testes de perícia normais em ótimos.", img: "imagem/perks/tapp/perk3.png" }
        ],
        origemTitulo: "Origem: David Tapp",
        origemTexto: "Um detetive de polícia veterano obstinado em capturar o assassino Jigsaw, custando-lhe a carreira, a saúde e sua própria vida."
    },
    kate: {
        titulo: "Kate Denson",
        descricao1: "Uma Cantora Folk esperançosa, especialista em ler o ambiente ao seu redor e dificultar o transporte por parte do Killer.",
        imagem: "imagem/modelo/kate.png",
        perks: [
            { nome: "DANÇA COMIGO", desc: "Pular janelas ou sair de armários em velocidade rápida não deixa marcas de arranhão por 3 segundos.", img: "imagem/perks/kate/perk1.png" },
            { nome: "JANELAS DE OPORTUNIDADE", desc: "Revela a aura de todas as janelas, pallets e barricadas próximas.", img: "imagem/perks/kate/perk2.png" },
            { nome: "SUPERAÇÃO", desc: "Aumenta a intensidade do balanço ao se debater no ombro do Killer e esconde a aura de ganchos próximos para o assassino.", img: "imagem/perks/kate/perk3.png" }
        ],
        origemTitulo: "Origem: Kate Denson",
        origemTexto: "Uma musicista itinerante que viajava pelos Estados Unidos espalhando alegria com seu violão antes de ser levada por gavinhas de névoa no meio de uma floresta."
    },
    adam: {
        titulo: "Adam Francis",
        descricao1: "Um Professor Engenhoso, capaz de criar distrações táticas e aprender com os próprios erros durante a partida.",
        imagem: "imagem/modelo/adam.png",
        perks: [
            { nome: "DISTRAÇÃO", desc: "Permite arremessar uma pedra para criar um alerta falso de ruído e marcas de arranhão à distância para o Assassino.", img: "imagem/perks/adam/perk1.png" },
            { nome: "LIBERAÇÃO", desc: "Garante 100% de chance de se desenganchar sozinho no primeiro gancho após realizar um resgate seguro de aliado.", img: "imagem/perks/adam/perk2.png" },
            { nome: "AUTODIDATA", desc: "Começa a partida com penalidade em cura, mas ganha bônus massivos e cumulativos a cada teste de perícia de cura bem-sucedido.", img: "imagem/perks/adam/perk3.png" }
        ],
        origemTitulo: "Origem: Adam Francis",
        origemTexto: "Um professor universitário jamaicano que se mudou para o Japão em busca de novas oportunidades e desapareceu após um trágico acidente de trem."
    },
    jeff: {
        titulo: "Jeff Johansen",
        descricao1: "Um Artista Calmo, focado na leitura recíproca de auras de aliados e na destruição tática de ganchos.",
        imagem: "imagem/modelo/jeff.png",
        perks: [
            { nome: "COLAPSO", desc: "Sempre que você for resgatado de um gancho, o gancho se quebra por um longo período e revela a aura do Assassino.", img: "imagem/perks/jeff/perk1.png" },
            { nome: "AMIZADE PROFUNDA", desc: "Cria um elo de leitura de aura mútuo e permanente com qualquer aliado que você curar ou que curar você.", img: "imagem/perks/jeff/perk2.png" },
            { nome: "DISTORÇÃO", desc: "Começa com fichas que bloqueiam a leitura da sua aura pelo Assassino e escondem suas marcas de arranhão temporariamente.", img: "imagem/perks/jeff/perk3.png" }
        ],
        origemTitulo: "Origem: Jeff Johansen",
        origemTexto: "Um pintor e designer canadense amante de heavy metal que retornou à sua cidade natal para resolver pendências da morte do pai."
    },
    jane: {
        titulo: "Jane Romero",
        descricao1: "Uma Apresentadora Corajosa, capaz de atordoar o Assassino saindo de armários e curar aliados ativamente.",
        imagem: "imagem/modelo/jane.png",
        perks: [
            { nome: "SOLIDARIEDADE", desc: "Curar um aliado enquanto você estiver ferido cura automaticamente uma porcentagem da sua própria barra de saúde.", img: "imagem/perks/jane/perk1.png" },
            { nome: "DE CABEÇA ERGUIDA", desc: "Sair correndo de dentro de um armário atordoa o Assassino caso ele esteja em frente à porta.", img: "imagem/perks/jane/perk2.png" },
            { nome: "PREPARADA", desc: "Oculta suas marcas de arranhão por alguns segundos sempre que um gerador for concluído.", img: "imagem/perks/jane/perk3.png" }
        ],
        origemTitulo: "Origem: Jane Romero",
        origemTexto: "Uma influente apresentadora de talk show que lutou contra a pressão da mídia antes de adormecer ao volante após uma gravação exaustiva."
    },
    ash: {
        titulo: "Ashley J. Williams",
        descricao1: "Um Caçador de Demônios Experiente, preparado para converter o progresso do chão em recuperação e aguentar golpes letais.",
        imagem: "imagem/modelo/ash.png",
        perks: [
            { nome: "VIRAR O JOGO", desc: "Converte uma porcentagem da sua barra de recuperação do chão em progresso de se debater (wiggle) ao ser pego.", img: "imagem/perks/ash/perk1.png" },
            { nome: "FIVELA DO CINTO", desc: "Revela a aura do Assassino e concede o efeito de Resistência ao curar um sobrevivente derrubado.", img: "imagem/perks/ash/perk2.png" },
            { nome: "FORÇA DE VONTADE", desc: "Acumule fichas ao absorver golpes de proteção por aliados para ganhar o efeito de Resistência no próximo ataque recebido.", img: "imagem/perks/ash/perk3.png" }
        ],
        origemTitulo: "Origem: Ash Williams",
        origemTexto: "O lendário sobrevivente que combateu as forças do mal (Evil Dead) com sua motosserra e espingarda antes de ser puxado para a dimensão da Entidade."
    },
    yui: {
        titulo: "Yui Kimura",
        descricao1: "Uma Motociclista Destemida, especialista em reerguer pallets derrubados e acelerar aliados resgatados.",
        imagem: "imagem/modelo/yui.png",
        perks: [
            { nome: "SORTE GRANDE", desc: "Ao ficar ferido, esconde temporariamente todas as suas marcas de sangue e arranhões.", img: "imagem/perks/yui/perk1.png" },
            { nome: "QUALQUER MEIO NECESSÁRIO", desc: "Permite reerguer pallets já derrubados no mapa para que possam ser reutilizados.", img: "imagem/perks/yui/perk2.png" },
            { nome: "RÁPIDA E FEROZ", desc: "Aumenta sua velocidade de corrida e a velocidade de se debater do aliado transportado pelo Killer próximo a você.", img: "imagem/perks/yui/perk3.png" }
        ],
        origemTitulo: "Origem: Yui Kimura",
        origemTexto: "Uma pilota de corridas de rua japonesa que desafiou convenções sociais e liderou uma gangue feminina de motociclistas."
    },
    zarina: {
        titulo: "Zarina Kassir",
        descricao1: "Uma Cineasta Investigativa, capaz de doar sua própria saúde para salvar aliados e sumir após sair do gancho.",
        imagem: "imagem/modelo/zarina.png",
        perks: [
            { nome: "FORA DO RADAR", desc: "Após ser resgatada do gancho, esconde seus gemidos de dor, marcas de aura e concede Resistência por um período.", img: "imagem/perks/zarina/perk1.png" },
            { nome: "REDEFINIR", desc: "Ativa remotamente um gerador para criar um ruído falso e enganar o Killer.", img: "imagem/perks/zarina/perk2.png" },
            { nome: "PELOS OUTROS", desc: "Permite curar instantaneamente um aliado ferido ou moribundo transferindo seu estado de saúde para ele.", img: "imagem/perks/zarina/perk3.png" }
        ],
        origemTitulo: "Origem: Zarina Kassir",
        origemTexto: "Uma documentarista audaciosa dedicada a desmascarar injustiças sociais e revelar a verdade oculta sobre crimes de alto perfil."
    },
    cheryl: {
        titulo: "Cheryl Mason",
        descricao1: "Uma Jovem de Fé Resiliente, capaz de invocar a Entidade para proteger geradores e curar aliados amaldiçoados.",
        imagem: "imagem/modelo/cheryl.png",
        perks: [
            { nome: "ALMA DE SOBREVIVENTE", desc: "Concede o efeito de Resistência ao se recuperar do chão ou ser curado enquanto estiver sob efeito de uma Maldição.", img: "imagem/perks/cheryl/perk1.png" },
            { nome: "PACTO DE SANGUE", desc: "Revela a aura da Obsessão e concede bônus de velocidade para ambos quando se curam mutuamente.", img: "imagem/perks/cheryl/perk2.png" },
            { nome: "ALIANÇA REPRIMIDA", desc: "Invoca a Entidade para bloquear um gerador sendo reparado por um tempo, impedindo que o Killer o chute.", img: "imagem/perks/cheryl/perk3.png" }
        ],
        origemTitulo: "Origem: Cheryl Mason (Heather)",
        origemTexto: "A reencarnação de Alessa Gillespie que confrontou e derrotou o culto de Silent Hill 3 antes de ser convocada para novos pesadelos na Névoa."
    },
    felix: {
        titulo: "Felix Richter",
        descricao1: "Um Arquiteto Visionário, especializado em recarregar cargas de itens e encontrar estruturas essenciais.",
        imagem: "imagem/modelo/felix.png",
        perks: [
            { nome: "VISIONÁRIO", desc: "Revela a aura de todos os geradores num raio próximo a você.", img: "imagem/perks/felix/perk1.png" },
            { nome: "MEDIDAS DESESPERADAS", desc: "Aumenta a velocidade de cura e resgate para cada sobrevivente ferido, enganchado ou moribundo.", img: "imagem/perks/felix/perk2.png" },
            { nome: "CONSTRUÍDO PARA DURAR", desc: "Entrar em um armário recarrega as cargas do item esgotado que você estiver segurando.", img: "imagem/perks/felix/perk3.png" }
        ],
        origemTitulo: "Origem: Felix Richter",
        origemTexto: "Um brilhante arquiteto alemão de uma sociedade secreta histórica que desapareceu na ilha onde seu pai também sumiu anos antes."
    },
    elodie: {
        titulo: "Élodie Rakoto",
        descricao1: "Uma Investigadora do Oculto, perita em enganar o Killer com distrações visuais e vasculhar baús extras.",
        imagem: "imagem/modelo/elodie.png",
        perks: [
            { nome: "AVALIAÇÃO", desc: "Permite vasculhar baús já abertos para encontrar itens adicionais de alto nível.", img: "imagem/perks/elodie/perk1.png" },
            { nome: "DECEPÇÃO", desc: "Finja entrar em um armário ao passar correndo por ele, disparando um alerta falso sem realmente entrar.", img: "imagem/perks/elodie/perk2.png" },
            { nome: "LUTA LIVRE", desc: "Permite derrubar um pallet próximo no Killer enquanto você estiver sendo carregado no ombro dele.", img: "imagem/perks/elodie/perk3.png" }
        ],
        origemTitulo: "Origem: Élodie Rakoto",
        origemTexto: "Uma pesquisadora parisiense que passou a vida inteira rastreando relíquias e pistas sobre o desaparecimento de seus pais pela organização conhecida como A Garra."
    },
    yunjin: {
        titulo: "Yun-Jin Lee",
        descricao1: "Uma Produtora Musical Oportunista, cujas habilidades tiram proveito do sofrimento dos aliados para sobressair.",
        imagem: "imagem/modelo/yunjin.png",
        perks: [
            { nome: "PULAR ETAPAS", desc: "Ganha fichas sempre que um aliado for enganchado; ao acertar um teste de perícia ótimo num gerador, consome as fichas para avançar o progresso.", img: "imagem/perks/yunjin/perk1.png" },
            { nome: "CONSERVAÇÃO DE ENERGIA", desc: "Esconde suas marcas de arranhão e sangramento sempre que um aliado for atingido próximo a você.", img: "imagem/perks/yunjin/perk2.png" },
            { nome: "SUCESSO RETUMBANTE", desc: "Concede um impulso de velocidade de corrida após atordoar o Killer com um pallet.", img: "imagem/perks/yunjin/perk3.png" }
        ],
        origemTitulo: "Origem: Yun-Jin Lee",
        origemTexto: "Uma ambiciosa produtora musical de K-Pop na Coreia do Sul que ignorou as tendências sociopatas do seu artista principal (O Trapaceiro) em nome do sucesso."
    },
    jill: {
        titulo: "Jill Valentine",
        descricao1: "Uma Agente da S.T.A.R.S., especialista em plantar armadilhas explosivas em geradores e recuperar saúde rapidamente.",
        imagem: "imagem/modelo/jill.png",
        perks: [
            { nome: "SABOR DE SOBREVIVÊNCIA", desc: "Aumenta a velocidade de purificação de tótens e revela tótens distantes no mapa.", img: "imagem/perks/jill/perk1.png" },
            { nome: "RESSURGIMENTO", desc: "Garante um progresso de cura automático imediato assim que você for resgatado do gancho.", img: "imagem/perks/jill/perk2.png" },
            { nome: "MINA DE PERTO", desc: "Planta uma armadilha em um gerador reparado; se o Killer tentar chutá-lo, a mina explode, cegando e atordoando o assassino.", img: "imagem/perks/jill/perk3.png" }
        ],
        origemTitulo: "Origem: Jill Valentine",
        origemTexto: "Membro da unidade de elite S.T.A.R.S. (Resident Evil) que sobreviveu ao incidente da mansão e à destruição de Raccoon City por Nemesis."
    },
    leon: {
        titulo: "Leon S. Kennedy",
        descricao1: "Um Policial Novato Resiliente, capaz de fabricar granadas de atordoamento dentro de armários e curar em silêncio.",
        imagem: "imagem/modelo/leon.png",
        perks: [
            { nome: "MORDIDA DE COBRA", desc: "Elimina completamente todo o som de gemidos e testes de perícia ao realizar ações de cura.", img: "imagem/perks/leon/perk1.png" },
            { nome: "ESPÍRITO DE NOVATO", desc: "Revela a aura de todos os geradores que estiverem regredindo no mapa após acertar testes de perícia.", img: "imagem/perks/leon/perk2.png" },
            { nome: "GRANADA DE LUZ", desc: "Crie uma granada de atordoamento dentro de um armário após concluir um certo progresso em geradores.", img: "imagem/perks/leon/perk3.png" }
        ],
        origemTitulo: "Origem: Leon S. Kennedy",
        origemTexto: "Um policial idealista em seu primeiro dia de trabalho em Raccoon City durante o surto do T-Vírus (Resident Evil 2), tornando-se mais tarde um agente do governo americano."
    },
    mikaela: {
        titulo: "Mikaela Reid",
        descricao1: "Uma Bruxa Moderna e Contadora de Histórias, pioneira em abençoar tótens para criar zonas de cura e suporte no mapa.",
        imagem: "imagem/modelo/mikaela.png",
        perks: [
            { nome: "CLARIVIDÊNCIA", desc: "Ative sem segurar nenhum item para ver as auras de ganchos, geradores, portões e escotilha em um longo raio.", img: "imagem/perks/mikaela/perk1.png" },
            { nome: "BÊNÇÃO: PASSO DAS SOMBRAS", desc: "Abençoe um tótem para criar um raio onde os sobreviventes não deixam marcas de arranhão e auras.", img: "imagem/perks/mikaela/perk2.png" },
            { nome: "BÊNÇÃO: CÍRCULO DE CURA", desc: "Abençoe um tótem para criar um raio que aumenta drasticamente a velocidade de cura dos aliados.", img: "imagem/perks/mikaela/perk3.png" }
        ],
        origemTitulo: "Origem: Mikaela Reid",
        origemTexto: "Uma jovem apaixonada por escrita, feitiçaria wiccana e festivais de terror que desapareceu após ler uma de suas histórias no palco."
    },
    jonah: {
        titulo: "Jonah Vasquez",
        descricao1: "Um Matemático da CIA, focado em otimizar rotas de fuga com velocidade e corrigir erros de aliados em geradores.",
        imagem: "imagem/modelo/jonah.png",
        perks: [
            { nome: "SUPERAR OS LIMITES", desc: "Ganha um impulso estendido de velocidade de corrida ao levar um golpe do Killer.", img: "imagem/perks/jonah/perk1.png" },
            { nome: "CORREÇÃO DE CÓDIGO", desc: "Consome fichas para converter falhas em testes de perícia de aliados no seu gerador em acertos normais.", img: "imagem/perks/jonah/perk2.png" },
            { nome: "BÊNÇÃO: TEORIA EXPONENCIAL", desc: "Abençoe um tótem para criar uma zona que aumenta drasticamente a velocidade de recuperação do chão.", img: "imagem/perks/jonah/perk3.png" }
        ],
        origemTitulo: "Origem: Jonah Vasquez",
        origemTexto: "Um decifrador de códigos e analista estatístico da CIA que descobriu um padrão numérico internacional que o levou diretamente ao Reino da Entidade."
    },
    yoichi: {
        titulo: "Yoichi Asakawa",
        descricao1: "Um Biólogo Marinho Psíquico, especialista em acelerar aliados feridos e ocultar marcas após saltar estruturas.",
        imagem: "imagem/modelo/yoichi.png",
        perks: [
            { nome: "ORIENTAÇÃO PARENTAL", desc: "Após atordoar o Killer por qualquer meio, oculta suas marcas de arranhão, sangramento e gemidos de dor.", img: "imagem/perks/yoichi/perk1.png" },
            { nome: "CONEXÃO EMPÁTICA", desc: "Revela sua aura para todos os aliados feridos no mapa e aumenta a velocidade com que você os cura.", img: "imagem/perks/yoichi/perk2.png" },
            { nome: "BÊNÇÃO: TEORIA OBSCURA", desc: "Abençoe um tótem para conceder um bônus contínuo de velocidade de movimento a todos dentro da área.", img: "imagem/perks/yoichi/perk3.png" }
        ],
        origemTitulo: "Origem: Yoichi Asakawa",
        origemTexto: "O menino sobrevivente da maldição de Sadako Yamamura (Ringu) que cresceu para se tornar um brilhante biólogo psíquico em busca de respostas sobre o sobrenatural."
    },
    haddie: {
        titulo: "Haddie Kaur",
        descricao1: "Uma Investigadora do Anormal, perita em cegar o Killer com lanternas e acelerar reparos ao limpar tótens.",
        imagem: "imagem/modelo/haddie.png",
        perks: [
            { nome: "FOCO INTERIOR", desc: "Permite ver as marcas de arranhão feitas por outros aliados e revela a aura do Killer quando um parceiro é ferido.", img: "imagem/perks/haddie/perk1.png" },
            { nome: "MANIFESTAÇÃO RESIDUAL", desc: "Cegar o Killer aplica a ele o efeito de status Cegueira e permite vasculhar baús para garantir uma lanterna.", img: "imagem/perks/haddie/perk2.png" },
            { nome: "SOBRESTAMENTO", desc: "Purificar ou abençoar um tótem aumenta temporariamente a sua velocidade de reparo em geradores.", img: "imagem/perks/haddie/perk3.png" }
        ],
        origemTitulo: "Origem: Haddie Kaur",
        origemTexto: "Uma podcaster canadense de origem indiana capaz de enxergar fendas temporais e vestígios do plano da Entidade ao redor do mundo."
    },
    ada: {
        titulo: "Ada Wong",
        descricao1: "Uma Espiã Corporativa Furtiva, perita em vigiar geradores à distância e curar-se passivamente quando aliados são feridos.",
        imagem: "imagem/modelo/ada.png",
        perks: [
            { nome: "ESCUTA DIRETA", desc: "Instale um escuta num gerador em progresso para revelar a aura do Killer caso ele se aproxime do gerador.", img: "imagem/perks/ada/perk1.png" },
            { nome: "CURA REATIVA", desc: "Ganha progresso instantâneo de cura sempre que um aliado próximo perder um estado de saúde.", img: "imagem/perks/ada/perk2.png" },
            { nome: "DISCRETA", desc: "Quando você for a última sobrevivente, esconde suas poças de sangue, gemidos de dor e auras por um longo tempo.", img: "imagem/perks/ada/perk3.png" }
        ],
        origemTitulo: "Origem: Ada Wong",
        origemTexto: "Uma mercenária e espiã enigmática de alto nível (Resident Evil) conhecida por sua agilidade e por cumprir objetivos impossíveis sem deixar rastros."
    },
    rebecca: {
        titulo: "Rebecca Chambers",
        descricao1: "Uma Médica de Campo Prodigiosa, capaz de pausar os temporizadores de ganchos de aliados e conceder bônus de ação.",
        imagem: "imagem/modelo/rebecca.png",
        perks: [
            { nome: "MELHOR QUE NOVO", desc: "Curar um aliado concede a ele um bônus de velocidade para reparo, limpeza e abertura de baús.", img: "imagem/perks/rebecca/perk1.png" },
            { nome: "REASSEGURAR", desc: "Aproxime-se de um aliado enganchado para pausar o progresso da barra do gancho dele por 30 segundos.", img: "imagem/perks/rebecca/perk2.png" },
            { nome: "HIPERFOCO", desc: "Acertar testes de perícia ótimos acelera a frequência dos testes e aumenta o bônus de progresso acumulativamente.", img: "imagem/perks/rebecca/perk3.png" }
        ],
        origemTitulo: "Origem: Rebecca Chambers",
        origemTexto: "A integrante mais jovem da equipe S.T.A.R.S. Bravo Team (Resident Evil 0), prodígio em bioquímica e cuidados médicos emergenciais."
    },
    vittorio: {
        titulo: "Vittorio Toscano",
        descricao1: "Um Estudioso do Século XIV, capaz de armazenar progresso de reparo para transferir instantaneamente para geradores.",
        imagem: "imagem/modelo/vittorio.png",
        perks: [
            { nome: "ENERGIA POTENCIAL", desc: "Converter tempo de reparo em energia armazenada para descarregá-la instantaneamente em qualquer gerador.", img: "imagem/perks/vittorio/perk1.png" },
            { nome: "VISÃO NA NÉVOA", desc: "Acertar um teste de perícia ótimo num gerador revela a aura do Killer em tempo real enquanto você reparara.", img: "imagem/perks/vittorio/perk2.png" },
            { nome: "MANOBRA RÁPIDA", desc: "Aumenta a velocidade de reparo dos aliados próximos enquanto você estiver sendo perseguido pelo Killer.", img: "imagem/perks/vittorio/perk3.png" }
        ],
        origemTitulo: "Origem: Vittorio Toscano",
        origemTexto: "Um nobre e acadêmico italiano da Idade Média que buscou conhecimentos arcanos de paz antes de ser aprisionado na Névoa pelo Cavaleiro."
    },
    thalita: {
        titulo: "Thalita Lyra",
        descricao1: "Uma Capoeirista Carioca, focada na cooperação fluida em geradores e na aceleração de manobras de evasão.",
        imagem: "imagem/modelo/thalita.png",
        perks: [
            { nome: "COMPETIÇÃO AMIGÁVEL", desc: "Concluir um gerador junto com um aliado concede a ambos um bônus de velocidade de reparo no próximo gerador.", img: "imagem/perks/thalita/perk1.png" },
            { nome: "TRABALHO EM EQUIPE: CONEXÃO DE PODER", desc: "Manter-se próximo ao aliado que o curou concede a ambos bônus contínuos de velocidade de movimento.", img: "imagem/perks/thalita/perk2.png" },
            { nome: "LIBERAR O PASSO", desc: "Pular rapidamente uma estrutura não ativa o tempo de recarga dessa ação ao encadear saltos.", img: "imagem/perks/thalita/perk3.png" }
        ],
        origemTitulo: "Origem: Thalita Lyra",
        origemTexto: "Uma jovem do Rio de Janeiro que usava sua habilidade na capoeira e empinar pipas para apoiar a comunidade do seu bairro ao lado do irmão Renato."
    },
    renato: {
        titulo: "Renato Lyra",
        descricao1: "Um Mestre em Planejamento, especializado em cobrir a fuga de resgatadores e realizar arrancadas táticas.",
        imagem: "imagem/modelo/renato.png",
        perks: [
            { nome: "JOGADOR DE FUNDO", desc: "Ganha um surto gigantesco de velocidade quando o Killer pega um aliado do chão no seu raio de visão.", img: "imagem/perks/renato/perk1.png" },
            { nome: "TRABALHO EM EQUIPE: FURTIVIDADE COLETIVA", desc: "Permanecer perto do aliado que curou você esconde as marcas de arranhão de ambos.", img: "imagem/perks/renato/perk2.png" },
            { nome: "EXPLOSÃO DE SANGUE", desc: "Ative para remover a exaustão instantaneamente ao custo de perder um estado de saúde temporário.", img: "imagem/perks/renato/perk3.png" }
        ],
        origemTitulo: "Origem: Renato Lyra",
        origemTexto: "Um jovem analítico e protetor do Rio de Janeiro que ajudava a irmã Thalita em projetos sociais antes de serem atacados na praia pela Negociante de Crânios."
    },
    gabriel: {
        titulo: "Gabriel Soma",
        descricao1: "Um Engenheiro Espacial, capaz de ler auras durante perseguições e ganhar resiliência ao ficar ferido.",
        imagem: "imagem/modelo/gabriel.png",
        perks: [
            { nome: "SOLUCIONADOR DE PROBLEMAS", desc: "Revela a aura do gerador mais atingido e a aura do Killer após derrubar um pallet.", img: "imagem/perks/gabriel/perk1.png" },
            { nome: "FEITO PARA ISSO", desc: "Concede um bônus de velocidade de movimento permanente enquanto ferido e o efeito de Resistência após curar aliados.", img: "imagem/perks/gabriel/perk2.png" },
            { nome: "MÃO DE OBRA", desc: "Recarrega uma caixa de ferramentas após reparar uma quantia significativa de geradores.", img: "imagem/perks/gabriel/perk3.png" }
        ],
        origemTitulo: "Origem: Gabriel Soma",
        origemTexto: "Um clone de engenharia feito sob medida para exploração espacial que sobreviveu à rebelião do androide A Singularidade no planeta Dvarka."
    },
    nicolascage: {
        titulo: "Nicolas Cage",
        descricao1: "O Ator Lendário, especialista em invocar efeitos imprevisíveis, dramatizar ferimentos e ler auras em cena.",
        imagem: "imagem/modelo/nicolascage.png",
        perks: [
            { nome: "DRAMATURGIA", desc: "Ao correr saudável, ganhe um impulso de velocidade e um efeito aleatório (item raro, velocidade extra ou exposição).", img: "imagem/perks/nicolascage/perk1.png" },
            { nome: "PARCEIRO DE CENA", desc: "Grite ao olhar para o Killer dentro do Raio de Terror para revelar a aura dele por vários segundos.", img: "imagem/perks/nicolascage/perk2.png" },
            { nome: "REVIRAVOLTA", desc: "Permite se derrubar voluntariamente no chão em silêncio quando ferido, recuperando-se totalmente sozinho logo em seguida.", img: "imagem/perks/nicolascage/perk3.png" }
        ],
        origemTitulo: "Origem: Nicolas Cage",
        origemTexto: "O renomado ator premiado de Hollywood que atendeu ao chamado para filmar uma cena misteriosa e acabou transportado diretamente para o Reino da Entidade."
    },
    ripley: {
        titulo: "Ellen Ripley",
        descricao1: "A Única Sobrevivente do Nostromo, especialista em armadilhar pallets e mover-se em silêncio absoluto enquanto saudável.",
        imagem: "imagem/modelo/ripley.png",
        perks: [
            { nome: "ARMADILHA QUÍMICA", desc: "Planta uma armadilha num pallet derrubado que desacelera o Killer caso ele o destrua.", img: "imagem/perks/ripley/perk1.png" },
            { nome: "PASSOS LEVES", desc: "Elimina completamente o som dos seus passos de corrida enquanto você estiver saudável.", img: "imagem/perks/ripley/perk2.png" },
            { nome: "ESTRELA DA SORTE", desc: "Esconde seus gemidos de dor e poças de sangue por um tempo ao se esconder em um armário.", img: "imagem/perks/ripley/perk3.png" }
        ],
        origemTitulo: "Origem: Ellen Ripley",
        origemTexto: "A tenente e oficial de voo da espaçonave Nostromo (Alien) que confrontou e derrotou o Xenomorfo no espaço sideral."
    },
    alan: {
        titulo: "Alan Wake",
        descricao1: "O Escritor Bestseller, capaz de usar a luz para desacelerar o Killer e reescrever as regras do mapa.",
        imagem: "imagem/modelo/alan.png",
        perks: [
            { nome: "CAMPEÃO DA LUZ", desc: "Move-se mais rápido ao usar uma lanterna e aplica lentidão no Killer se conseguir cegá-lo.", img: "imagem/perks/alan/perk1.png" },
            { nome: "BÊNÇÃO: ILUMINAÇÃO", desc: "Abençoe um tótem para revelar a aura de todos os baús e geradores no mapa para os aliados.", img: "imagem/perks/alan/perk2.png" },
            { nome: "PRAZO FINAL", desc: "Aumenta a frequência de testes de perícia quando você estiver ferido, com penalidades reduzidas para erros.", img: "imagem/perks/alan/perk3.png" }
        ],
        origemTitulo: "Origem: Alan Wake",
        origemTexto: "O aclamado autor de romances policiais preso nas profundezas do Lugar Obscuro (Dark Place) tentando escrever a história perfeita para escapar."
    },
    sable: {
        titulo: "Sable Ward",
        descricao1: "Uma Jovem Gótica, especialista em invocações no porão e em curar-se nas sombras sem itens.",
        imagem: "imagem/modelo/sable.png",
        perks: [
            { nome: "INVOCAÇÃO: ARANHAS DE TECELAGEM", desc: "Realize um ritual longo no porão para reduzir permanentemente as cargas necessárias de todos os geradores do mapa.", img: "imagem/perks/sable/perk1.png" },
            { nome: "FORÇA NAS SOMBRAS", desc: "Permite curar a si mesma rapidamente no porão sem precisar de um Kit Médico.", img: "imagem/perks/sable/perk2.png" },
            { nome: "PERVERSA", desc: "Garante a capacidade de se desenganchar com sucesso no porão e revela a aura do Killer logo em seguida.", img: "imagem/perks/sable/perk3.png" }
        ],
        origemTitulo: "Origem: Sable Ward",
        origemTexto: "Uma jovem gótica de Greenville que mergulhou nas lendas urbanas locais para encontrar sua melhor amiga desaparecida, Mikaela Reid."
    },
    aestri: {
        titulo: "Aestri Yazar / Baermar Uraz (A Trupe)",
        descricao1: "Bardos Éficos de D&D, capazes de inspirar aliados com testes de perícia máticos e invocar ilusões em geradores.",
        imagem: "imagem/modelo/aestri.png",
        perks: [
            { nome: "INSPIRAÇÃO BÁRDICA", desc: "Toque um alaúde perto de aliados para lançar um d20 e conceder um bônus no progresso dos testes de perícia proporcional ao resultado.", img: "imagem/perks/aestri/perk1.png" },
            { nome: "ILUSÃO ESPELHADA", desc: "Planta uma ilusão estática do seu personagem em um gerador ou totem para enganar o Killer.", img: "imagem/perks/aestri/perk2.png" },
            { nome: "VISÃO IMÓVEL", desc: "Ficar parado em silêncio revela a aura de todos os geradores, baús e do Killer em uma grande distância.", img: "imagem/perks/aestri/perk3.png" }
        ],
        origemTitulo: "Origem: A Trupe (Aestri & Baermar)",
        origemTexto: "Aventureiros bardos viajantes de Faerûn (Dungeons & Dragons) acostumados a enfrentar dragões e masmorras antes de caírem na armadilha da Entidade."
    },
    lara: {
        titulo: "Lara Croft",
        descricao1: "A Saqueadora de Tumulos, focada em saltos ágeis de janelas e em converter saques em velocidade de reparo.",
        imagem: "imagem/modelo/lara.png",
        perks: [
            { nome: "ELEGÂNCIA", desc: "Aumenta drasticamente a velocidade do pulo de janela rápida quando você estiver com a saúde cheia.", img: "imagem/perks/lara/perk1.png" },
            { nome: "CALEJADA", desc: "Revela a aura do Killer sempre que ele usar uma habilidade de leitura de aura ou você abrir um baú.", img: "imagem/perks/lara/perk2.png" },
            { nome: "ESPECIALISTA", desc: "Abrir ou vasculhar baús concede fichas que reduzem significativamente o progresso necessário no seu próximo gerador.", img: "imagem/perks/lara/perk3.png" }
        ],
        origemTitulo: "Origem: Lara Croft",
        origemTexto: "A destemida arqueóloga e aventureira britânica (Tomb Raider) perita em desvendar catacumbas, mitos antigos e sobreviver a ambientes letais."
    },
    trevor: {
        titulo: "Trevor Belmont",
        descricao1: "Um Caçador de Vampiros, especialista em revelar auras após ações de combate e potencializar o uso de itens.",
        imagem: "imagem/modelo/trevor.png",
        perks: [
            { nome: "OLHOS DE BELMONT", desc: "Estende a duração de todos os efeitos de leitura de aura e revela a aura do Killer por alguns segundos quando um gerador é feito.", img: "imagem/perks/trevor/perk1.png" },
            { nome: "EXALTAÇÃO", desc: "Atingir um Killer com um pallet melhora a raridade do item que você estiver segurando no momento.", img: "imagem/perks/trevor/perk2.png" },
            { nome: "MOMENTO DE GLÓRIA", desc: "Abre uma reserva de saúde extra ao resgatar aliados que cura você automaticamente após ser ferido.", img: "imagem/perks/trevor/perk3.png" }
        ],
        origemTitulo: "Origem: Trevor Belmont",
        origemTexto: "O lendário herói da família Belmont (Castlevania) que empunhou o chicote Vampire Killer para derrotar o Conde Drácula na Valáquia no século XV."
    }
};

function carregarDadosPersonagem(key, tipo) {
    const fonteDados = tipo === 'survivor' ? survivorsData : killersData;
    const chavePadrao = tipo === 'survivor' ? 'dwight' : 'trapper';
    const data = fonteDados[key] || fonteDados[chavePadrao];

    document.title = `${data.titulo} - Dead by Daylight`;

    const elTitulo = document.getElementById("tituloPersonagem-Killer_Survivor");
    if (elTitulo) elTitulo.innerText = data.titulo;

    const elDesc = document.getElementById("descricaoPersonagem-Killer_Survivor");
    if (elDesc) elDesc.innerHTML = data.descricao1;

    const elImg = document.getElementById("imagemPersonagem-Killer_Survivor");
    if (elImg) {
        elImg.src = data.imagem || "";
        elImg.alt = data.titulo;
    }

    const btnVoltar = document.getElementById("btn-voltar");
    if (btnVoltar) {
        btnVoltar.href = `listaKillerSurvivors.html?tipo=${tipo}`;
        btnVoltar.innerText = `Voltar para ${tipo === 'survivor' ? 'Survivors' : 'Killers'}`;
    }

    if (data.perks) {
        data.perks.forEach((perk, index) => {
            const i = index + 1;
            const elNome = document.getElementById(`perkNome${i}-Killer_Survivor`);
            const elDescPerk = document.getElementById(`perkDescricao${i}-Killer_Survivor`);
            const elImgPerk = document.getElementById(`perkImagem${i}-Killer_Survivor`);

            if (elNome) elNome.innerText = perk.nome;
            if (elDescPerk) elDescPerk.innerHTML = perk.desc;
            if (elImgPerk) elImgPerk.innerHTML = `<img src="${perk.img}" alt="${perk.nome}">`;
        });
    }

    const elTituloHist = document.getElementById("tituloHistoria-Killer_Survivor");
    if (elTituloHist) elTituloHist.innerText = data.origemTitulo;

    const elTextoHist = document.getElementById("textoHistoria-Killer_Survivor");
    if (elTextoHist) elTextoHist.innerText = data.origemTexto;
}

document.addEventListener("DOMContentLoaded", function() {
    const parametros = new URLSearchParams(window.location.search);
    const killerParam = parametros.get('killer');
    const survivorParam = parametros.get('survivor');

    if (survivorParam) {
        carregarDadosPersonagem(survivorParam.toLowerCase(), 'survivor');
    } else {
        carregarDadosPersonagem((killerParam || 'trapper').toLowerCase(), 'killer');
    }
});