
const pergunta = document.querySelector('#perguntas p')
const lugalOpcao = document.querySelector('#ondeFicarAsOpcoes')

const ondeTaODinheiro = document.querySelector('#opcoesDeparar')
let respotaCerta = document.querySelector("div[data-correto='true']")

// import questoes from './questao.js';
const quantidade = 7, maximo = 18;
const todos = [];
for (let minimo = 0; minimo <= maximo; minimo++) {
    todos.push(minimo);
   
}

const questoesFaceis = [
    {
        questao: 'QUE FRUTA É RESSECADA PARA SE TORNAR UMA AMEIXA SECA?',
        respostas: [
            { opcao: `<b>1</b> <p>AMEIXA</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>UVA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>PÊSSEGO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MELÃO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    }, // 0
    {
        questao: 'UM SÉCULO TEM QUANTOS ANOS?',
        respostas: [
            { opcao: `<b>1</b> <p>50</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>100</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>1000</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>1500</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    }, // 1
    {
        questao: 'QUANTAS FOLHAS TEM UM TREVO DA SORTE?',
        respostas: [
            { opcao: `<b>1</b> <p>TRÊS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>QUATRO</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>CINCO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>SEIS</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 3],
        placas: [1, 2, 3, 2]
    }, // 2

    {
        questao: 'O QUE É A VIA LÁCTEA?',
        respostas: [
            { opcao: `<b>1</b> <p>MARCA DE LEITE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CIVILIZAÇÃO ANTIGA</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>MARCA DE CARRO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>GALÁXIA</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 1, 4],
        placas: [2, 4, 4, 1]
    }, // 3
    {
        questao: 'QUE PERSONAGEM DA TURMA DO CHAVES VIVE COBRANDO O ALUGUEL DO SEU MADRUGA?',
        respostas: [
            { opcao: `<b>1</b> <p>KIKO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CHAVES</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>PROFESSOR GIRAFALES</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>SEU BARRIGA</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    }, // 4
    {
        questao: 'QUEM É O PAI DA CHIQUINHA',
        respostas: [
            { opcao: `<b>1</b> <p> GIRAFALES</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SEU BARRIGA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>SEU MADRUGA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>NHONHO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 2, 3],
        placas: [1, 3, 3, 3]
    }, // 5
    {
        questao: 'QUE PERSONAGEM DOS QUADRINHOS USA UM COELHO COMO ARMA E TEM DENTES GRANDES?',
        respostas: [
            { opcao: `<b>1</b> <p>HOMEM ARANHA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>BATMAN</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>NARUTO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MÔNICA</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 4],
        placas: [4, 4, 4, 2]
    }, // 6
    {
        questao: 'QUE OBJETO USADO NA CHUVA O PINGUIM DO BATMAN USA COMO ARMA?',
        respostas: [
            { opcao: `<b>1</b> <p>GUARDA-CHUVA</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>CHAPÉU</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>GALOCHA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>CAPA</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    }, // 7
    {
        questao: 'QUAL A PROFISSÃO DOS SETE ANÕES?',
        respostas: [
            { opcao: `<b>1</b> <p>MINEIROS</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>LENHADORES</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>AGRICULTORES</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>PASTORES</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 1, 1],
        placas: [1, 1, 2, 1]
    }, // 8
    {
        questao: 'QUANTOS CENTAVOS TEM UM REAL?',
        respostas: [
            { opcao: `<b>1</b> <p>DEZ</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MIL</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>CEM</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>CINQUENTA</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    }, // 9
    {
        questao: 'QUAL A CAPITAL DOS ESTADOS UNIDOS?',
        respostas: [
            { opcao: `<b>1</b> <p>NOVA YORK</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MIAMI</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>CHICAGO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>WASHINGTON</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 4],
        placas: [4, 1, 1, 3]
    }, // 10
    {
        questao: 'DE ONDE AS ABELHAS EXTRAEM O MEL?',
        respostas: [
            { opcao: `<b>1</b> <p>DAS ROCHAS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>DAS FLORES</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>DA TERRA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>DA ÁGUA</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 11
    {
        questao: 'QUAL É O ANIMAL QUE REPRESENTA O SIGNO DE TOURO?',
        respostas: [
            { opcao: `<b>1</b> <p>HIPOPÓTAMO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CAVALO</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>TOURO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>GALO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [4, 3, 4, 3]
    }, // 12
    {
        questao: 'QUEM É A MULHER DO TARZAN?',
        respostas: [
            { opcao: `<b>1</b> <p>DIANA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>LOUIS LAINE</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>JANE</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>CHITA</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 3, 4, 3]
    }, // 13
    {
        questao: 'VIOLONCELO É UM INSTRUMENTO DE:',
        respostas: [
            { opcao: `<b>1</b> <p>SOPRO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CORDAS</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>PERCUSSÃO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>REPERCUSSÃO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 14
    {
        questao: 'QUAL DESSES SÍMBOLOS SIGNIFICA QUILÔMENTRO',
        respostas: [
            { opcao: `<b>1</b> <p>KO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>KM</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>KK</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>KG</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 15
    {
        questao: 'COMO É CHAMADA A DOENÇAS QUE ESTÁ CLAREANDO A PELE DE MICHAEL JACKSON?',
        respostas: [
            { opcao: `<b>1</b> <p>ASTIGMATISMO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>PEDOFILIA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>VITILIGO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>BRUXISMO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 4, 4, 3]
    }, // 16
    {
        questao: 'QUEM É O PARCEIRO DE AVENTURAS DE DOM QUIXOTE?',
        respostas: [
            { opcao: `<b>1</b> <p>SANCHO PANÇA</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>GUILHERME TELL</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>SIGMUND FREUD</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>LANCELOT</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 4, 4, 1]
    }, // 17
    {
        questao: 'O QUE TÉM EM COMUM ROSA LILÁS E AZUL?',
        respostas: [
            { opcao: `<b>1</b> <p>SÂO VINHOS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SÂO FLORES</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>SÂO CORES</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>SÂO ILHAS</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 3, 2],
        placas: [2, 2, 3, 3]
    }, // 18
]

const questoesMedias = [
    {
        questao: 'QUAL É O ELEMENTO QUÍMICO MAIS ABUNDANTE NA CROSTA ',
        respostas: [
            { opcao: `<b>1</b> <p> OXIGÊNIO</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>CARBONO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>FERRO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>SILÍCIO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    }, // 0
    {
        questao: 'QUEM FOI O PRIMEIRO PRESIDENTE DOS ESTADOS UNIDOS?',
        respostas: [
            { opcao: `<b>1</b> <p>THOMAS JEFFERSON</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> GEORGE WASHINGTON</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>ABRAHAM LINCOLN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p> JOHN ADAMS</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 3, 3, 1]
    }, // 1
    {
        questao: 'QUAL É A CAPITAL DA AUSTRÁLIA?',
        respostas: [
            { opcao: `<b>1</b> <p>SYDNEY</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MELBOURNE</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p> BRISBANE</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>CANBERRA</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    }, // 2

    {
        questao: 'QUAL É O NOME DA MONTANHA MAIS ALTA DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p>MONTE MCKINLEY</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> MONTE K2</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>MONTE KILIMANJARO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MONTE EVEREST</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 1, 4],
        placas: [2, 4, 4, 1]
    }, // 3
    {
        questao: 'QUAL É O MAIOR PLANETA DO SISTEMA SOLAR?',
        respostas: [
            { opcao: `<b>1</b> <p>TERRA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>NETUNO</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>SATURNO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>JÚPITER</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    }, // 4
    {
        questao: 'QUEM ESCREVEU "DOM QUIXOTE"?',
        respostas: [
            { opcao: `<b>1</b> <p> WILLIAM SHAKESPEARE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>DANTE ALIGHIERI</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>MIGUEL DE CERVANTES</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>VICTOR HUGO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 2, 3],
        placas: [1, 3, 3, 3]
    }, // 5
    {
        questao: 'QUAL É O NOME DO PRIMEIRO SER HUMANO A VIAJAR PARA O ESPAÇO?',
        respostas: [
            { opcao: `<b>1</b> <p>YURI GAGARIN</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>NEIL ARMSTRONG</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p> BUZZ ALDRIN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p> ALAN SHEPARD</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    }, // 6
    {
        questao: 'QUAL É O MAIOR RIO DO MUNDO EM VOLUME DE ÁGUA?',
        respostas: [
            { opcao: `<b>1</b> <p>RIO AMAZONAS</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>RIO NILO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>RIO MISSISSIPI</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>RIO YANGTZÉ</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    }, // 7
    {
        questao: 'QUAL É O METAL MAIS CARO DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p>OURO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>PLATINA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>RÓDIO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>PALÁDIO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    }, // 8
    {
        questao: 'EM QUE ANO A PRIMEIRA GUERRA MUNDIAL COMEÇOU?',
        respostas: [
            { opcao: `<b>1</b> <p>1918</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>1920</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>1914</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>1916</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    }, // 9 
    {
        questao: 'QUAL É A CAPITAL DO CANADÁ?',
        respostas: [
            { opcao: `<b>1</b> <p>VANCOUVER</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>TORONTO</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>MONTREAL</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>OTTAWA</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 4],
        placas: [4, 1, 1, 3]
    }, // 10
    {
        questao: 'QUEM PINTOU A MONA LISA?',
        respostas: [
            { opcao: `<b>1</b> <p>MICHELANGELO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> LEONARDO DA VINCI</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>VINCENT VAN GOGH</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>PABLO PICASSO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 11
    {
        questao: 'QUAL É O SÍMBOLO QUÍMICO DO FERRO?',
        respostas: [
            { opcao: `<b>1</b> <p>FU</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> FI</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>FE</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>FR</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [4, 3, 4, 3]
    }, // 12
    {
        questao: 'QUAL É O PAÍS MAIS POPULOSO DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p>ESTADOS UNIDOS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>ÍNDIA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>CHINA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>INDONÉSIA</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 3, 4, 3]
    }, // 13
    {
        questao: 'QUEM FOI O PRIMEIRO HOMEM A PISAR NA LUA?',
        respostas: [
            { opcao: `<b>1</b> <p>BUZZ ALDRIN</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>NEIL ARMSTRONG</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>YURI GAGARIN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>ALAN SHEPARD</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 14
    {
        questao: 'QUAL É O MAIOR OCEANO DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p>OCEANO ATLÂNTICO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>OCEANO PACÍFICO</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>OCEANO ÁRTICO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>OCEANO ÍNDICO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 15
    {
        questao: 'QUEM ESCREVEU "O SENHOR DOS ANÉIS"?',
        respostas: [
            { opcao: `<b>1</b> <p>GEORGE R.R. MARTIN</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> C.S. LEWIS</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>J.R.R. TOLKIEN</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p> J.K. ROWLING</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 4, 4, 3]
    }, // 16
    {
        questao: 'QUAL É O MAIOR DESERTO DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p> DESERTO DO SAARA</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p> DESERTO DE GOBI</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>DESERTO DA ARÁBIA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>DESERTO DE ATACAMA</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 4, 4, 1]
    }, // 17
    {
        questao: 'QUAL É O QUARTO PLANETA A PARTIR DO SOL?',
        respostas: [
            { opcao: `<b>1</b> <p>JÚPITER</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MARTE</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>VÊNUS</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MERCÚRIO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 3, 2],
        placas: [2, 2, 3, 3]
    }, // 18
]

const questoesDificeis = [
    {
        questao: 'EM QUE ANO FOI PUBLICADA A PRIMEIRA EDIÇÃO DO "DICIONÁRIO AURÉLIO"? ',
        respostas: [
            { opcao: `<b>1</b> <p> 1971</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>1975</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>1980</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>1968</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    }, // 0
    {
        questao: 'QUAL A VELOCIDADE DA LUZ NO VÁCUO, EM KM/S?',
        respostas: [
            { opcao: `<b>1</b> <p>300.000</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> 299.792</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>300.000.000</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>150.000</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    }, // 1
    {
        questao: 'QUEM FOI O PRIMEIRO BRASILEIRO A GANHAR O PRÊMIO NOBEL?',
        respostas: [
            { opcao: `<b>1</b> <p> PEDRO II</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>PAULO COELHO</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>  OSWALD DE ANDRADE</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>NINGUÉM</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    }, // 2

    {
        questao: 'QUEM PINTOU "GUERNICA"?',
        respostas: [
            { opcao: `<b>1</b> <p>CLAUDE MONET</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> VINCENT VAN GOGH</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>SALVADOR DALÍ</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>PABLO PICASSO</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 1, 4],
        placas: [2, 4, 4, 1]
    }, // 3
    {
        questao: 'EM QUE ANO OCORREU A REVOLUÇÃO RUSSA?',
        respostas: [
            { opcao: `<b>1</b> <p>1914</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>1905</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>1920</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>1917</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    }, // 4
    {
        questao: 'QUEM É O AUTOR DO LIVRO "DOM CASMURRO"?',
        respostas: [
            { opcao: `<b>1</b> <p> JOSÉ DE ALENCAR</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>GRACILIANO RAMOS</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>MACHADO DE ASSIS</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>LIMA BARRETO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 2, 3],
        placas: [1, 3, 3, 3]
    }, // 5
    {
        questao: 'QUANTOS ELEMENTOS QUÍMICOS A TABELA PERIÓDICA POSSUI ATUALMENTE?',
        respostas: [
            { opcao: `<b>1</b> <p>118</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>120</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>114</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>116</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    }, // 6
    {
        questao: 'QUEM FOI A PRIMEIRA MULHER A GANHAR UM PRÊMIO NOBEL?',
        respostas: [
            { opcao: `<b>1</b> <p>MARIE CURIE</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>ADA LOVELACE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>ROSALIND FRANKLIN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>JANE GOODALL</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    }, // 7
    {
        questao: 'EM QUE ANO FOI INAUGURADA A TORRE EIFFEL?',
        respostas: [
            { opcao: `<b>1</b> <p>1893</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> 1887</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>1889</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>1891</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    }, // 8
    {
        questao: 'EM QUE ANO A PRIMEIRA GUERRA MUNDIAL COMEÇOU?',
        respostas: [
            { opcao: `<b>1</b> <p>1918</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>1920</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>1914</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>1916</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    }, // 9
    {
        questao: 'QUAL É O NOME DA MENOR UNIDADE DE INFORMAÇÃO NO COMPUTADOR?',
        respostas: [
            { opcao: `<b>1</b> <p>BYTE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MEGABYTE</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>KILOBYTE</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>BIT</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 4],
        placas: [4, 1, 1, 3]
    }, // 10
    {
        questao: 'QUEM ESCREVEU "O PEQUENO PRÍNCIPE"?',
        respostas: [
            { opcao: `<b>1</b> <p>MARCEL PROUST</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>ANTOINE DE SAINT-EXUPÉRY</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>JULES VERNE</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>VICTOR HUGO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 11
    {
        questao: 'EM QUE ANO O HOMEM PISOU NA LUA PELA PRIMEIRA VEZ?',
        respostas: [
            { opcao: `<b>1</b> <p>1965</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> 1973</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>1969</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>1971</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [4, 3, 4, 3]
    }, // 12
    {
        questao: 'QUAL A LÍNGUA OFICIAL DA ETIÓPIA?',
        respostas: [
            { opcao: `<b>1</b> <p>SUAÍLI</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>INGLÊS</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>AMÁRICO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>ÁRABE</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 3, 4, 3]
    }, // 13
    {
        questao: 'QUEM FOI O PRIMEIRO PRESIDENTE DO BRASIL?',
        respostas: [
            { opcao: `<b>1</b> <p>FLORIANO PEIXOTO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>DEODORO DA FONSECA</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>PRUDENTE DE MORAIS</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p> CAMPOS SALES</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 14
    {
        questao: 'QUAL ERA O NOME DA BOMBA ATÔMICA LANÇADA SOBRE HIROSHIMA EM 1945?',
        respostas: [
            { opcao: `<b>1</b> <p>FAT MAN</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>LITTLE BOY</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p> ENOLA GAY</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>THIN MAN</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 15
    {
        questao: 'QUAL É O ÚNICO PAÍS QUE FAZ FRONTEIRA COM O REINO UNIDO?',
        respostas: [
            { opcao: `<b>1</b> <p> IRLANDA DO NORTE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> FRANÇA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>IRLANDA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>  PAÍS DE GALES</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 4, 4, 3]
    }, // 16
    {
        questao: 'QUAL É O LIVRO MAIS VENDIDO DE TODOS OS TEMPOS (EXCLUINDO A BÍBLIA E O ALCORÃO)?',
        respostas: [
            { opcao: `<b>1</b> <p>  DON QUIXOTE</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p> O SENHOR DOS ANÉIS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>HARRY POTTER E A PEDRA FILOSOFAL</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>O PEQUENO PRÍNCIPE</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 4, 4, 1]
    }, // 17
    {
        questao: 'QUAL É O ELEMENTO QUÍMICO MAIS ABUNDANTE NA CROSTA TERRESTRE?',
        respostas: [
            { opcao: `<b>1</b> <p>SILÍCIO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>OXIGÊNIO</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>FERRO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>ALUMÍNIO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 3, 2],
        placas: [2, 2, 3, 3]
    }, // 18
]

const questoesMaisDificeis = [
    {
        questao: 'QUAL É O NOME DO PRIMEIRO SATÉLITE ARTIFICIAL LANÇADO PELA UNIÃO SOVIÉTICA EM 1957? ',
        respostas: [
            { opcao: `<b>1</b> <p>  SPUTNIK 1</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>VOSTOK 1</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p> LUNA 1</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MIR</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 1, 3, 1]
    },
    {
        questao: 'QUEM COMPÔS A MARCHA NUPCIAL, USADA TRADICIONALMENTE EM CASAMENTOS?',
        respostas: [
            { opcao: `<b>1</b> <p>LUDWIG VAN BEETHOVEN</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>  FELIX MENDELSSOHN</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>  JOHANN SEBASTIAN BACH</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>RICHARD WAGNER</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 1],
        placas: [1, 2, 3, 2]
    },
    {
        questao: 'QUAL A RAÇA DE CACHORRO MAIS ANTIGA DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p> AKITA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SHIH TZU</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p> GREYHOUND</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>BASENJI</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    },

    {
        questao: 'QUAL É O ÚNICO METAL QUE PERMANECE LÍQUIDO À TEMPERATURA AMBIENTE?',
        respostas: [
            { opcao: `<b>1</b> <p>BISMUTO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CÉSIO</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>GÁLIO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MERCÚRIO</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 1, 4],
        placas: [2, 4, 4, 1]
    },
    {
        questao: 'QUEM FOI O PRIMEIRO CINEASTA A USAR O RECURSO DA CÂMERA LENTA EM SEUS FILMES?',
        respostas: [
            { opcao: `<b>1</b> <p> ALFRED HITCHCOCK</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SERGEI EISENSTEIN</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>D.W. GRIFFITH</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>GEORGES MÉLIÈS</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 3],
        placas: [4, 4, 4, 2]
    },
    {
        questao: 'QUAL O PAÍS COM O MAIOR NÚMERO DE PATRIMÔNIOS MUNDIAIS DA UNESCO?',
        respostas: [
            { opcao: `<b>1</b> <p>CHINA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>ESPANHA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>ITÁLIA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>FRANÇA</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 2, 3],
        placas: [1, 3, 3, 3]
    },
    {
        questao: 'QUAL FOI O PRIMEIRO ELEMENTO QUÍMICO A SER PRODUZIDO ARTIFICIALMENTE?',
        respostas: [
            { opcao: `<b>1</b> <p>TECNÉCIO</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>PLUTÔNIO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>NEPTÚNIO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>POLÔNIO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    },
    {
        questao: 'QUAL O NOME DO PAI DA COMPUTAÇÃO MODERNA?',
        respostas: [
            { opcao: `<b>1</b> <p> ALAN TURING</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>CHARLES BABBAGE</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p> JOHN VON NEUMANN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>ADA LOVELACE</p>`, correto: false, id: 'false3' }
        ],
        universitario: [3, 1, 1],
        placas: [1, 1, 4, 1]
    },
    {
        questao: 'QUEM INVENTOU A IMPRENSA?',
        respostas: [
            { opcao: `<b>1</b> <p>GALILEU GALILEI</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> NICOLAU COPÉRNICO</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p> JOHANNES GUTENBERG</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>LEONARDO DA VINCI</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    },
    {
        questao: 'QUAL A MAIOR ILHA DO MEDITERRÂNEO?',
        respostas: [
            { opcao: `<b>1</b> <p>SARDENHA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>CHIPRE</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>SICÍLIA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>CRETA</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [2, 3, 3, 3]
    },
    {
        questao: 'QUAL A PRIMEIRA MULHER A GANHAR UM OSCAR DE DIREÇÃO?',
        respostas: [
            { opcao: `<b>1</b> <p> SOFIA COPPOLA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>JANE CAMPION</p>`, correto: false, id: 'false3' },
            { opcao: `<b>3</b> <p>GRETA GERWIG</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>KATHRYN BIGELOW</p>`, correto: true, id: 'true' }
        ],
        universitario: [4, 4, 4],
        placas: [4, 1, 1, 3]
    },
    {
        questao: 'QUEM ESCREVEU "CRIME E CASTIGO"?',
        respostas: [
            { opcao: `<b>1</b> <p>LEO TOLSTOY</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>FYODOR DOSTOIEVSKY</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>ANTON CHEKHOV</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p> IVAN TURGENEV</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    }, // 12
    {
        questao: 'QUAL A CIDADE MAIS FRIA DO MUNDO?',
        respostas: [
            { opcao: `<b>1</b> <p>NOVOSIBIRSK</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p> REYKJAVIK</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>YAKUTSK</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>ANCHORAGE</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 3, 3],
        placas: [4, 3, 4, 3]
    },
    {
        questao: 'QUAL A MONTANHA MAIS ALTA FORA DA ÁSIA?',
        respostas: [
            { opcao: `<b>1</b> <p> MONTE KILIMANJARO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MONTE ELBRUS</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>MONTE ACONCÁGUA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>MONTE DENALI</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 3, 4, 3]
    }, // 14
    {
        questao: 'QUAL FOI O PRIMEIRO JOGO DE VIDEOGAME COMERCIALIZADO?',
        respostas: [
            { opcao: `<b>1</b> <p> SPACE INVADERS</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>PONG</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>PAC-MAN</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>TENNIS FOR TWO</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    },
    {
        questao: 'QUAL O COMPOSITOR QUE PERDEU A AUDIÇÃO, MAS CONTINUOU A COMPOR?',
        respostas: [
            { opcao: `<b>1</b> <p>JOHANN SEBASTIAN BACH</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>LUDWIG VAN BEETHOVEN</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p> FRANZ SCHUBERT</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p> WOLFGANG AMADEUS MOZART</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 2, 2],
        placas: [2, 2, 3, 2]
    },
    {
        questao: 'QUAL O ELEMENTO QUÍMICO QUE TEM O SÍMBOLO "K"?',
        respostas: [
            { opcao: `<b>1</b> <p> CÁLCIO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>COBALTO</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>POTÁSSIO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>CRÔMIO</p>`, correto: false, id: 'false3' }
        ],

        universitario: [3, 4, 3],
        placas: [4, 4, 4, 3]
    }, // 17
    {
        questao: 'QUAL A MENOR NAÇÃO DO MUNDO EM ÁREA?',
        respostas: [
            { opcao: `<b>1</b> <p>VATICANO</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>NAURU</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>MÔNACO</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>TUVALU</p>`, correto: false, id: 'false3' }
        ],
        universitario: [4, 1, 1],
        placas: [1, 4, 4, 1]
    },
    {
        questao: 'QUAL O ÚNICO MAMÍFERO CAPAZ DE VOAR?',
        respostas: [
            { opcao: `<b>1</b> <p> PETÁURO-DO-AÇÚCAR</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>MORCEGO</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p> ESQUILO-VOADOR</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>LEMURE-VOADOR</p>`, correto: false, id: 'false3' }
        ],
        universitario: [2, 3, 2],
        placas: [2, 2, 3, 3]
    },
]

const questoes = [
    {
        questao: 'QUEM É O PAI DA CHIQUINHA',
        respostas: [
            { opcao: `<b>1</b> <p> GIRAFALES</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SEU BARRIGA</p> `, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>SEU MADRUGA</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>NHONHO</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '0',
            parar: '0',
            acertar: '1MIL'
        },
        universitario: [3, 2, 3],
        placas: [1, 3, 3, 3]
    },

    {
        questao: 'NARUTO FICOU COM QUEM NO FINAL DO ANIME',
        respostas: [
            { opcao: `<b>1</b> <p>HINATA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>SAKURA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>TENTEN</p>`, correto: false, id: 'false3' },
            { opcao: `<b>4</b> <p>SASUKE</p>`, correto: true, id: 'true' }
        ],
        dinheiro: {
            errar: '500',
            parar: '1MIL',
            acertar: '2MIL'
        },
        universitario: [4, 4, 3],
        placas: [1, 1, 4, 4]
    },

    {
        questao: 'QUAL BICHO TRANSMITE DOENÇA DE CHAGAS?',
        respostas: [
            { opcao: `<b>1</b> <p>ABELHA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>BARATA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>BARBEIRO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>PULGA</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '1MIL',
            parar: '2MIL',
            acertar: '3MIL'
        },
        universitario: [3, 3, 3],
        placas: [1, 4, 4, 3]
    },

    {
        questao: 'QUAL FRUTO É CONHECIDO NO NORTE E NORDESTE COMO "JERIMUM"?',
        respostas: [
            { opcao: `<b>1</b> <p>CAJU</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>ABÓBORA</p>`, correto: true, id: 'true' },
            { opcao: `<b>3</b> <p>CHUCHU</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>CÔCO</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '1.5MIL',
            parar: '3MIL',
            acertar: '4MIl'
        },
        universitario: [2, 2, 2],
        placas: [2, 2, 1, 3]
    },
    {
        questao: 'QUAL É O COLETIVO DE CÃES?',
        respostas: [
            { opcao: `<b>1</b> <p>MATILHA</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>REBANHO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>ALCATEIA</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>MANADA</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '2MIL',
            parar: '4MIL',
            acertar: '5MIl'
        },
        universitario: [1, 2, 1],
        placas: [1, 3, 4, 1]
    },

    {
        questao: 'QUAL É O TRIÂNGULO QUE TEM TODOS OS LADOS DIFERENTES?',
        respostas: [
            { opcao: `<b>1</b> <p>EQUILÁTERO</p>`, correto: false, id: 'false1' },
            { opcao: `<b>2</b> <p>ISÓCELES</p>`, correto: false, id: 'false2' },
            { opcao: `<b>3</b> <p>ESCALENO</p>`, correto: true, id: 'true' },
            { opcao: `<b>4</b> <p>TRAPÉZIO</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '2.5MIL',
            parar: '5MIL',
            acertar: '10MIl'
        },
        universitario: [3, 4, 3],
        placas: [1, 3, 4, 3]
    },

    {
        questao: 'QUEM COMPÔS O HINO DA INDEPENDÊNCIA?',
        respostas: [
            { opcao: `<b>1</b> <p>DOM PEDRO I.</p>`, correto: true, id: 'true' },
            { opcao: `<b>2</b> <p>MANUEL BANDEIRA</p>`, correto: false, id: 'false1' },
            { opcao: `<b>3</b> <p>CASTRO ALVEZ</p>`, correto: false, id: 'false2' },
            { opcao: `<b>4</b> <p>CARLOS GOMES</p>`, correto: false, id: 'false3' }
        ],
        dinheiro: {
            errar: '2.5MIL',
            parar: '5MIL',
            acertar: '10MIl'
        },
        universitario: [4, 1, 1],
        placas: [1, 3, 3, 3]
    },


]

const dinheiro = [

    {
        errar: '0',
        parar: '0',
        acertar: '1MIL'
    }, {
        errar: '500',
        parar: '1MIL',
        acertar: '2MIL'
    }, {
        errar: '1MIL',
        parar: '2MIL',
        acertar: '3MIL'
    }, {
        errar: '1.5MIL',
        parar: '3MIL',
        acertar: '4MIL'
    }, {
        errar: '2MIL',
        parar: '4MIL',
        acertar: '5MIL'
    }, {
        errar: '2.5MIL',
        parar: '5MIL',
        acertar: '10MIL'
    },
    {
        errar: '5MIL',
        parar: '10MIL',
        acertar: '20MIL'
    },
    {
        errar: '5MIL',
        parar: '20MIL',
        acertar: '30MIL'
    },
    {
        errar: '5MIL',
        parar: '30MIL',
        acertar: '40MIL'
    },
    {
        errar: '5MIL',
        parar: '40MIL',
        acertar: '50MIL'
    },
    {
        errar: '5MIL',
        parar: '50MIL',
        acertar: '100MIL'
    },
    
    {
        errar: '50MIL',
        parar: '100MIL',
        acertar: '200MIL'
    },
    {
        errar: '50MIL',
        parar: '200MIL',
        acertar: '300MIL'
    },
    {
        errar: '50MIL',
        parar: '300MIL',
        acertar: '400MIL'
    },
    {
        errar: '50MIL',
        parar: '400MIL',
        acertar: '500MIL'
    },
    {
        errar: '50MIL',
        parar: '500MIL',
        acertar: '1M'
    },

]
let audio = 0;

function jogar() {
    document.querySelector('#audioDaRepostaCertaEErrada').setAttribute('src', 'src/musica/vai-comear-o-show-do-milhao.mp3')
    document.querySelector('#audioDaRepostaCertaEErrada').setAttribute('autoplay', "")
    document.querySelector("button[onclick='jogar()']").removeAttribute('onclick')
    proximoPergunta()
    setTimeout(() => {
        document.getElementById('parteInicial').style.display = 'none'
        document.querySelector("button[name='jogar']").setAttribute('onclick', 'jogar()')
    }, 2300); // 2300

}




let indexAtualizado = 0;


let c = 0
let numeroMusica = 0
function confirma(e) {
    if (c == 0) {
        const musicaDeCerteza = ['src/musica/voce-tem-certeza.mp3', 'src/musica/POSSO PERGUNTAR SILVIO SANTOS.mp3', 'src/musica/ESTÁ CERTO DISSO SILVIO SANTOS.mp3',
            'VOCÊ TEM CERTEZA?', 'POSSO PERGUNTAR?', 'ESTÁ CERTO DISSO?']
        document.getElementById('confirmacao').style.display = 'flex'
        document.querySelector('#audioDaRepostaCertaEErrada').setAttribute('src', musicaDeCerteza[numeroMusica])
        document.querySelector('#audioDaRepostaCertaEErrada').setAttribute('autoplay', "")
        document.querySelector('#caixaDaConfirmacao h2').innerHTML = musicaDeCerteza[numeroMusica + 3]
        document.getElementById('buttonDEConfirmacao').setAttribute('onclick', `proximoPergunta('${e}')`)
        numeroMusica = numeroMusica +1
        c = 1
        if (numeroMusica == 3){
            numeroMusica = 0
        }
    } else {
        document.getElementById('confirmacao').style.display = 'none'
        c = 0
    }
}

let restanteFacil
let restanteMedio
let restanteDificil
let restanteMaisDificil
let itens
function proximoPergunta(e) {
    document.getElementById('confirmacao').style.display = 'none'
    if (e == 'true') {

        c = 0

        let musicaRepostaCerta = document.querySelector('#audioDaRepostaCertaEErrada');
        musicaRepostaCerta.volume = 0.8;
        musicaRepostaCerta.setAttribute('src', 'src/musica/Certa resposta.mp3');
        musicaRepostaCerta.setAttribute('autoplay', "");

        respotaCerta = document.querySelector("div[data-correto='true']");
        respotaCerta.classList.add('mudarCorVerde');
        respotaCerta.classList.remove('hoverNeles');
        respotaCerta.removeAttribute('onclick');

        document.querySelectorAll("div[data-correto='false']").forEach((falso) => {
            falso.classList.remove('hoverNeles');
            falso.removeAttribute('onclick');
        })





        let desligar = setInterval(() => {
            respotaCerta.classList.remove('mudarCorVerde');
        }, 100);
        let ligar = setInterval(() => {
            respotaCerta.classList.add('mudarCorVerde');
        }, 250);


        setTimeout(() => {

            clearInterval(ligar)
            clearInterval(desligar)
            indexAtualizado = indexAtualizado + 1;

            if (indexAtualizado == 16) {
                indexAtualizado = 0;
                document.querySelector('#audioDaRepostaCertaEErrada').setAttribute('src', 'src/musica/VOCÊ ACABA DE GANHAR 1 MILHÃO DE REAIS SILVIO SANTOS.mp3')
                document.getElementById('parabens').style.display = 'flex';

            } else {
                
                if (indexAtualizado < 4) {


                    itens = questoesFaceis[restanteFacil[indexAtualizado]];
                   

                } else if (indexAtualizado < 8) {
                    itens = questoesMedias[restanteMedio[indexAtualizado - 4]];
                   
                } else if (indexAtualizado < 12) {
                    itens = questoesDificeis[restanteDificil[indexAtualizado - 8]];
                  
                } else if (indexAtualizado < 16) {
                    itens = questoesMaisDificeis[restanteMaisDificil[indexAtualizado - 12]];
           
                }

                pergunta.innerHTML = itens.questao;

                lugalOpcao.innerHTML = '';


                itens.respostas.forEach((resposta) => {
                    lugalOpcao.innerHTML += `<div class="opcoes hoverNeles" onclick="confirma('${resposta.id}')" id='${resposta.id}' data-correto="${resposta.correto}">${resposta.opcao}</div>`;

                });

                ondeTaODinheiro.innerHTML = `<p><span>${dinheiro[indexAtualizado].errar}</span>ERRAR</p>
                <p class="cursorNoParar"  onclick="parar()"><span>${dinheiro[indexAtualizado].parar}</span> PARAR</p>
                <p><span>${dinheiro[indexAtualizado].acertar}</span> ACERTAR</p>`;
       
            }

        }, 1000);

    } else {

        for (let randomizador = 0; randomizador < 19; randomizador++) {

            const aleatorio = Math.floor(Math.random() * (todos.length - 1));
            const salvar = todos[aleatorio];
            todos[aleatorio] = todos[randomizador];
            todos[randomizador] = salvar;
        }

        restanteFacil = todos.slice(0, 7)
        
        

        restanteMedio = todos.slice(6, 13)
        

        

        restanteDificil = todos.slice(11, 18);
        

        

        restanteMaisDificil = todos.slice(3, 10);
        




      /*
        const cartaPosicoes = [`<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">`, `<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">`,
            `<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">`, `<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">`];
        
        
            for (let posicoes = 0; posicoes < 4; posicoes++) {
            const j = Math.floor(Math.random() * cartaPosicoes.length);
            const salvar = cartaPosicoes[j];
            cartaPosicoes[j] = cartaPosicoes[posicoes];
            cartaPosicoes[posicoes] = salvar;
        } */
        const cartaPosicoes = [`<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">`,

        `<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">`,
    
        `<img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">`,
    
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        `,
        `
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('as')" name="as" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('3 de copas')" name="3 de copas" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('reis')" name="reis" alt="parte de tras da carta">
        <img src="src/img/parte de tras da carta.png" class="imagemCarta" onclick="cartas('dois de copas')" name="dois de copas" alt="parte de tras da carta">
        `];

        const k = Math.floor(Math.random() * cartaPosicoes.length)
        document.getElementById('parteDasCartas').innerHTML = cartaPosicoes[k]
        let desligar
        let ligar
        c = 0

        if (e == 'false1' || e == 'false2' || e == 'false3') {
            respotaCerta = document.querySelector("div[data-correto='true']");
            respotaCerta.removeAttribute('onclick');
            respotaCerta.classList.remove('hoverNeles');
            respotaCerta.classList.remove('mudarCorVerde');

            let musicaRepostaErrado = document.querySelector('#audioDaRepostaCertaEErrada');
            musicaRepostaErrado.volume = 0.8;
            musicaRepostaErrado.setAttribute('src', 'src/musica/nao consegue.mp3');
            musicaRepostaErrado.setAttribute('autoplay', "");

            document.querySelectorAll("div[data-correto='false']").forEach((falso) => {
                falso.classList.remove('hoverNeles');;
                falso.removeAttribute('onclick');
            })

            document.querySelector(`div[id='${e}']`).classList.add('mudarCorVermelho')

        


         desligar = setInterval(() => {
            document.querySelector(`div[id='${e}']`).classList.remove('mudarCorVermelho')
        }, 100);
        ligar = setInterval(() => {
            document.querySelector(`div[id='${e}']`).classList.add('mudarCorVermelho')
        }, 250);
};
        setTimeout(() => {
            if (document.getElementById('parteInicial').style.display != 'flex'){
                document.getElementById('parteInicial').style.display = 'flex'
            }
            
            clearInterval(desligar)
            clearInterval(ligar)

            indexAtualizado = 0;

             itens = questoesFaceis[restanteFacil[0]];

     
            pergunta.innerHTML = questoesFaceis[restanteFacil[0]].questao;
            lugalOpcao.innerHTML = '';
            itens.respostas.forEach((resposta) => {
                lugalOpcao.innerHTML += `<div class="opcoes hoverNeles" onclick="confirma('${resposta.id}')" id='${resposta.id}' data-correto="${resposta.correto}">${resposta.opcao}</div>`;

            });

            ondeTaODinheiro.innerHTML = `<p><span>${dinheiro[indexAtualizado].errar}</span>ERRAR</p>
            <p class="cursorNoParar"  onclick="parar()"><span>${dinheiro[indexAtualizado].parar}</span> PARAR</p>
            <p><span>${dinheiro[indexAtualizado].acertar}</span> ACERTAR</p>`;


            document.getElementById('parar').style.display = 'none';
            document.getElementById('parabens').style.display = 'none';
            document.getElementById('pular1').setAttribute('onclick', "pular('pular1')");
            document.getElementById('pular2').setAttribute('onclick', "pular('pular2')");
            document.getElementById('pular3').setAttribute('onclick', "pular('pular3')");
            document.getElementById('pular1').style.cursor = 'pointer';
            document.getElementById('pular2').style.cursor = 'pointer';
            document.getElementById('pular3').style.cursor = 'pointer';
            document.querySelector('#pular1 img').setAttribute('src', 'src/img/10574.png');
            document.querySelector('#pular2 img').setAttribute('src', 'src/img/10574.png');
            document.querySelector('#pular3 img').setAttribute('src', 'src/img/10574.png');
            document.getElementById('uni').setAttribute('onclick', "universitario('sabidos')");
            document.querySelector(`#uni img`).setAttribute('src', 'src/img/book-glasses_icon-icons.com_56355.png')
            document.getElementById('pla').setAttribute('onclick', "universitario('placas')");
            document.querySelector(`#pla img`).setAttribute('src', 'src/img/Placa-Branca-PNG.png')
            document.querySelector('#cart img').setAttribute('src', 'src/img/card_genre_category_gaming_game_icon_225928.png')

            uni = 0
            cart = 0

        }, 1500);
        /*
        for (let i = 0; i < 4; i++) {
            document.querySelector(`#${itens.respostas[i].id}`).addEventListener('click', proximoPergunta(`${itens.respostas[i].correto}`))
        }
        */
    }

}


function trilha() {
    if (audio == 0) {
        document.querySelector('#audioDeFundo').setAttribute('src', 'src/musica/trilha sonora principal.mp3');

        document.querySelector('#audioDeFundo').volume = 0.08;
        document.querySelector('#iconSom').setAttribute('src', 'src/img/sound_PNG20.png')
        audio = 1;
    } else if (audio == 1) {
        document.querySelector('#audioDeFundo').setAttribute('src', '');

        document.querySelector('#audioDeFundo').volume = 0.08;
        document.querySelector('#iconSom').setAttribute('src', 'src/img/27150.png')
        audio = 0;
    }
};



function parar() {
    document.getElementById('parar').style.display = "flex"
    document.querySelector('#parar h2').innerHTML = `VOCÊ PAROU COM ${dinheiro[indexAtualizado].parar}`
}

function pular(r) {

    let pular = document.getElementById(r);
    document.querySelector(`#${r} img`).setAttribute('src', 'src/img/x.png');
    pular.style.cursor = 'default';
    pular.removeAttribute('onclick');
    let itens;
    let respostasPuladas;
    if (r == 'pular1') {
        respostasPuladas = 4;
    } else if (r == 'pular2') {
        respostasPuladas = 5;
    } else if (r == 'pular3') {
        respostasPuladas = 6;
    };

    if (indexAtualizado < 4) {


        itens = questoesFaceis[restanteFacil[respostasPuladas]];
  

    } else if (indexAtualizado < 8) {
        itens = questoesMedias[restanteMedio[respostasPuladas]];
      
    } else if (indexAtualizado < 12) {
        itens = questoesDificeis[restanteDificil[respostasPuladas]];
 
    } else if (indexAtualizado < 16) {
        itens = questoesMaisDificeis[restanteMaisDificil[respostasPuladas]];

    }


    pergunta.innerHTML = itens.questao;

    lugalOpcao.innerHTML = '';


    itens.respostas.forEach((resposta) => {
        lugalOpcao.innerHTML += `<div class="opcoes hoverNeles" onclick="confirma('${resposta.id}')" id='${resposta.id}' data-correto="${resposta.correto}">${resposta.opcao}</div>`;

    });


}

let uni = 0

function universitario(t) {


    if (uni == 0 && t == 'sabidos') {
        
        document.querySelector('#universitario h2').innerHTML = 'UNIVERSITÁRIOS'
        document.querySelector('#respostaDosUniversitarios').innerHTML = `<div>
        <img class="imagensDasDicas" src="src/img/book-glasses_icon-icons.com_56355.png"
            alt="UNIVERSITÁRIOS">
        <p>${itens.universitario[0]}</p>
    </div>
    <div>
        <img class="imagensDasDicas" src="src/img/book-glasses_icon-icons.com_56355.png"
            alt="UNIVERSITÁRIOS">
        <p>${itens.universitario[1]}</p>
    </div>
    <div>
        <img class="imagensDasDicas" src="src/img/book-glasses_icon-icons.com_56355.png"
            alt="UNIVERSITÁRIOS">
        <p>${itens.universitario[2]}</p>
    </div>`;

        document.getElementById('universitario').style.display = 'flex';
        let universitario = document.getElementById('uni');
        universitario.removeAttribute('onclick');
        universitario.style.color = 'black';
        document.querySelector('#uni img').setAttribute('src', 'src/img/x.png')
        uni = uni + 1;
    } else if (uni == 0 && t == 'placas') {
        document.querySelector('#universitario h2').innerHTML = 'PLACAS'
        document.querySelector('#respostaDosUniversitarios').innerHTML = `
        <div><p>${itens.placas[0]}</p></div>
        <div><p>${itens.placas[1]}</p></div>
        <div><p>${itens.placas[2]}</p></div>
        <div><p>${itens.placas[3]}</p></div>`

        document.getElementById('universitario').style.display = 'flex';
        let placas = document.getElementById('pla');
        placas.removeAttribute('onclick');
        placas.style.color = 'black';
        document.querySelector('#pla img').setAttribute('src', 'src/img/x.png')
        uni = uni + 1;
        
    } else {
        document.getElementById('universitario').style.display = 'none';
        uni = 0
    }
}
let cart = 0;
function localCarta() {
    if (cart == 0) {
        document.getElementById('cartas').style.display = 'flex'
        document.querySelector('#cart img').setAttribute('src', 'src/img/x.png')
        cart = cart + 1
    } else {
        document.getElementById('cartas').style.display = 'none'
    }
};


function cartas(baralho) {

    document.querySelector(`img[name="${baralho}"]`).setAttribute('src', `src/img/${baralho}.png`)
    document.querySelectorAll('.imagemCarta').forEach((carta) => {
        carta.removeAttribute('onclick')

    })
    if (baralho == 'as') {
        
        document.querySelector('#false2 p').innerHTML = '         '
    } else if (baralho == 'dois de copas') {
        document.querySelector('#false3 p').innerHTML = '         '
        document.querySelector('#false1 p').innerHTML = '         '
    } else if (baralho == '3 de copas') {
        document.querySelector('#false2 p').innerHTML = '         '
        document.querySelector('#false1 p').innerHTML = '         '
        document.querySelector('#false3 p').innerHTML = '         '
    }
}