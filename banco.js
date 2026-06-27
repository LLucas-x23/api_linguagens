export const js = [

{
    nome: "console.log()",
    grupo: "Console",
    palavrasChave: ["log", "imprimir", "exibir", "debug", "console", "mostrar", "verificar"],
    descricao: "Mostra qualquer informação no console.",
    sintaxe: "console.log(valor)",
    parametros: [
        "valor: qualquer variável, texto, número, objeto ou array."
    ],
    retorno: "undefined",
    exemplo: `let idade = 18;
console.log(idade);`,
    resultado: "18",
    dica: "Use para verificar se seu código está funcionando."
},

{
    nome: "console.error()",
    grupo: "Console",
    palavrasChave: ["erro", "error", "console", "debug", "vermelho", "alerta"],
    descricao: "Exibe uma mensagem de erro no console, geralmente em vermelho.",
    sintaxe: "console.error(valor)",
    parametros: [
        "valor: mensagem ou objeto de erro."
    ],
    retorno: "undefined",
    exemplo: `console.error("Algo deu errado!");`,
    resultado: "Mensagem em vermelho no console",
    dica: "Útil para sinalizar erros de forma visual durante o desenvolvimento."
},

{
    nome: "console.warn()",
    grupo: "Console",
    palavrasChave: ["aviso", "warn", "console", "debug", "amarelo", "alerta"],
    descricao: "Exibe um aviso no console, geralmente em amarelo.",
    sintaxe: "console.warn(valor)",
    parametros: [
        "valor: mensagem ou dado a ser exibido como aviso."
    ],
    retorno: "undefined",
    exemplo: `console.warn("Atenção: variável não definida.");`,
    resultado: "Mensagem em amarelo no console",
    dica: "Use para alertas que não chegam a ser erros, mas merecem atenção."
},

{
    nome: "console.table()",
    grupo: "Console",
    palavrasChave: ["tabela", "table", "console", "array", "objeto", "visualizar", "debug"],
    descricao: "Exibe arrays ou objetos em formato de tabela no console.",
    sintaxe: "console.table(dados)",
    parametros: [
        "dados: array de objetos ou objeto simples."
    ],
    retorno: "undefined",
    exemplo: `let usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 }
];
console.table(usuarios);`,
    resultado: "Tabela formatada no console com colunas nome e idade",
    dica: "Muito mais legível do que console.log() para listas de objetos."
},

{
    nome: "Math.random()",
    grupo: "Math",
    palavrasChave: ["aleatório", "random", "sorteio", "número", "chance", "dado"],
    descricao: "Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).",
    sintaxe: "Math.random()",
    parametros: [],
    retorno: "Número decimal aleatório.",
    exemplo: `let numero = Math.random();
console.log(numero);`,
    resultado: "0.538429 (valor muda a cada execução)",
    dica: "Para gerar números inteiros normalmente é usado junto com Math.floor()."
},

{
    nome: "Math.floor()",
    grupo: "Math",
    palavrasChave: ["arredondar", "baixo", "inteiro", "floor", "decimal"],
    descricao: "Arredonda um número para baixo.",
    sintaxe: "Math.floor(numero)",
    parametros: [
        "numero: número decimal."
    ],
    retorno: "Número inteiro.",
    exemplo: `Math.floor(8.9)`,
    resultado: "8",
    dica: "Muito usado para índices de arrays e números aleatórios."
},

{
    nome: "Math.ceil()",
    grupo: "Math",
    palavrasChave: ["arredondar", "cima", "inteiro", "ceil", "decimal"],
    descricao: "Arredonda um número para cima.",
    sintaxe: "Math.ceil(numero)",
    parametros: [
        "numero: número decimal."
    ],
    retorno: "Número inteiro.",
    exemplo: `Math.ceil(8.1)`,
    resultado: "9",
    dica: "Sempre aumenta para o próximo inteiro."
},

{
    nome: "Math.round()",
    grupo: "Math",
    palavrasChave: ["arredondar", "round", "inteiro", "decimal", "escola", "normal"],
    descricao: "Arredonda normalmente. Valores menores que .5 descem e maiores ou iguais sobem.",
    sintaxe: "Math.round(numero)",
    parametros: [
        "numero: número decimal."
    ],
    retorno: "Número inteiro.",
    exemplo: `Math.round(4.7)`,
    resultado: "5",
    dica: "É o arredondamento comum que aprendemos na escola."
},

{
    nome: "Math.max()",
    grupo: "Math",
    palavrasChave: ["maior", "máximo", "max", "comparar", "número"],
    descricao: "Retorna o maior número informado.",
    sintaxe: "Math.max(n1, n2, ...)",
    parametros: [
        "Um ou mais números."
    ],
    retorno: "Maior número.",
    exemplo: `Math.max(10,5,8)`,
    resultado: "10",
    dica: "Aceita quantos números você quiser."
},

{
    nome: "Math.min()",
    grupo: "Math",
    palavrasChave: ["menor", "mínimo", "min", "comparar", "número"],
    descricao: "Retorna o menor número informado.",
    sintaxe: "Math.min(n1,n2,...)",
    parametros: [
        "Um ou mais números."
    ],
    retorno: "Menor número.",
    exemplo: `Math.min(10,5,8)`,
    resultado: "5",
    dica: "Funciona igual ao Math.max(), porém encontra o menor."
},

{
    nome: "Math.abs()",
    grupo: "Math",
    palavrasChave: ["absoluto", "positivo", "negativo", "módulo", "diferença"],
    descricao: "Retorna o valor absoluto de um número.",
    sintaxe: "Math.abs(numero)",
    parametros: [
        "numero: positivo ou negativo."
    ],
    retorno: "Número positivo.",
    exemplo: `Math.abs(-25)`,
    resultado: "25",
    dica: "Remove apenas o sinal negativo."
},

{
    nome: "Math.sqrt()",
    grupo: "Math",
    palavrasChave: ["raiz", "quadrada", "sqrt", "cálculo", "potência"],
    descricao: "Calcula a raiz quadrada.",
    sintaxe: "Math.sqrt(numero)",
    parametros: [
        "numero: valor positivo."
    ],
    retorno: "Raiz quadrada.",
    exemplo: `Math.sqrt(81)`,
    resultado: "9",
    dica: "Muito usada em cálculos matemáticos."
},

{
    nome: "Math.pow()",
    grupo: "Math",
    palavrasChave: ["potência", "pow", "expoente", "elevar", "cálculo"],
    descricao: "Eleva um número a uma determinada potência.",
    sintaxe: "Math.pow(base, expoente)",
    parametros: [
        "base: o número que será elevado.",
        "expoente: a potência."
    ],
    retorno: "Resultado da potência.",
    exemplo: `Math.pow(2, 10)`,
    resultado: "1024",
    dica: "Equivalente a usar o operador ** (ex: 2 ** 10), mas mais explícito e legível."
},

{
    nome: "Math.trunc()",
    grupo: "Math",
    palavrasChave: ["truncar", "inteiro", "decimal", "cortar", "remover"],
    descricao: "Remove a parte decimal de um número, sem arredondar.",
    sintaxe: "Math.trunc(numero)",
    parametros: [
        "numero: qualquer número decimal."
    ],
    retorno: "Parte inteira do número.",
    exemplo: `Math.trunc(4.9)`,
    resultado: "4",
    dica: "Diferente do Math.floor(): para negativos, Math.trunc(-4.9) dá -4, enquanto Math.floor daria -5."
},

{
    nome: "Array.push()",
    grupo: "Array",
    palavrasChave: ["adicionar", "inserir", "final", "push", "append", "lista"],
    descricao: "Adiciona um elemento no final do array.",
    sintaxe: "array.push(valor)",
    parametros: [
        "valor: elemento que será adicionado."
    ],
    retorno: "Novo tamanho do array.",
    exemplo: `let frutas = ["Maçã"];
frutas.push("Banana");`,
    resultado: `["Maçã","Banana"]`,
    dica: "É a forma mais comum de adicionar itens."
},

{
    nome: "Array.pop()",
    grupo: "Array",
    palavrasChave: ["remover", "deletar", "último", "pop", "desfazer", "lista"],
    descricao: "Remove o último elemento do array.",
    sintaxe: "array.pop()",
    parametros: [],
    retorno: "Elemento removido.",
    exemplo: `let frutas=["Maçã","Banana"];
frutas.pop();`,
    resultado: `["Maçã"]`,
    dica: "Muito usado para desfazer a última inserção."
},

{
    nome: "Array.filter()",
    grupo: "Array",
    palavrasChave: ["filtrar", "buscar", "condição", "selecionar", "novo array", "where"],
    descricao: "Cria um novo array contendo apenas os elementos que atendem a uma condição.",
    sintaxe: "array.filter(funcao)",
    parametros: [
        "Uma função que retorna true ou false."
    ],
    retorno: "Novo array.",
    exemplo: `let pares = [1,2,3,4].filter(n => n % 2 == 0);`,
    resultado: "[2,4]",
    dica: "Não altera o array original."
},

{
    nome: "Array.map()",
    grupo: "Array",
    palavrasChave: ["transformar", "converter", "modificar", "novo array", "loop", "iterar"],
    descricao: "Cria um novo array modificando cada elemento.",
    sintaxe: "array.map(funcao)",
    parametros: [
        "Função que transforma cada elemento."
    ],
    retorno: "Novo array.",
    exemplo: `let dobro = [1,2,3].map(n => n*2);`,
    resultado: "[2,4,6]",
    dica: "Muito usado para converter listas."
},

{
    nome: "Array.find()",
    grupo: "Array",
    palavrasChave: ["encontrar", "buscar", "procurar", "primeiro", "condição"],
    descricao: "Retorna o primeiro elemento que atende uma condição.",
    sintaxe: "array.find(funcao)",
    parametros: [
        "Função de comparação."
    ],
    retorno: "Elemento encontrado ou undefined.",
    exemplo: `let numero=[3,8,10].find(n=>n>5);`,
    resultado: "8",
    dica: "Para procurar apenas um elemento."
},

{
    nome: "Array.findIndex()",
    grupo: "Array",
    palavrasChave: ["encontrar", "índice", "posição", "buscar", "procurar", "condição"],
    descricao: "Retorna o índice (posição) do primeiro elemento que atende uma condição.",
    sintaxe: "array.findIndex(funcao)",
    parametros: [
        "Função de comparação."
    ],
    retorno: "Número inteiro (índice) ou -1 se não encontrar.",
    exemplo: `let frutas = ["Maçã", "Banana", "Uva"];
let pos = frutas.findIndex(f => f === "Banana");`,
    resultado: "1",
    dica: "Use quando precisar saber em qual posição está o item, não apenas se ele existe."
},

{
    nome: "Array.some()",
    grupo: "Array",
    palavrasChave: ["algum", "existe", "verificar", "condição", "booleano", "tem"],
    descricao: "Verifica se pelo menos um elemento do array atende a uma condição.",
    sintaxe: "array.some(funcao)",
    parametros: [
        "Função que retorna true ou false para cada elemento."
    ],
    retorno: "true ou false.",
    exemplo: `let notas = [6, 4, 8, 3];
let temAprovado = notas.some(n => n >= 7);`,
    resultado: "true",
    dica: "Para na primeira vez que encontra um true. Muito eficiente para listas grandes."
},

{
    nome: "Array.every()",
    grupo: "Array",
    palavrasChave: ["todos", "verificar", "condição", "booleano", "todos passam"],
    descricao: "Verifica se todos os elementos do array atendem a uma condição.",
    sintaxe: "array.every(funcao)",
    parametros: [
        "Função que retorna true ou false para cada elemento."
    ],
    retorno: "true ou false.",
    exemplo: `let notas = [8, 9, 7];
let todosAprovados = notas.every(n => n >= 7);`,
    resultado: "true",
    dica: "Para na primeira vez que encontra um false. O oposto do some()."
},

{
    nome: "Array.reduce()",
    grupo: "Array",
    palavrasChave: ["somar", "acumular", "reduzir", "total", "calcular", "agregar"],
    descricao: "Percorre o array acumulando um resultado único (soma, produto, objeto, etc).",
    sintaxe: "array.reduce(funcao, valorInicial)",
    parametros: [
        "funcao: recebe o acumulador e o item atual.",
        "valorInicial: valor de partida do acumulador."
    ],
    retorno: "Um único valor acumulado.",
    exemplo: `let total = [10, 20, 30].reduce((acc, n) => acc + n, 0);`,
    resultado: "60",
    dica: "Pode intimidar no início, mas é incrivelmente poderoso. Pense: começo com 0, e vou somando cada número."
},

{
    nome: "Array.sort()",
    grupo: "Array",
    palavrasChave: ["ordenar", "sort", "classificar", "ordem", "crescente", "decrescente", "alfabeto"],
    descricao: "Ordena os elementos do array. Por padrão ordena como texto (alfabeticamente).",
    sintaxe: "array.sort(funcaoDeComparacao)",
    parametros: [
        "funcaoDeComparacao (opcional): define a lógica de ordenação."
    ],
    retorno: "O próprio array ordenado (altera o original!).",
    exemplo: `let nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b);`,
    resultado: "[1, 2, 5, 10]",
    dica: "Cuidado: sort() sem função muda números para texto antes de ordenar, causando bugs. Sempre passe (a, b) => a - b para números."
},

{
    nome: "Array.reverse()",
    grupo: "Array",
    palavrasChave: ["inverter", "reverse", "ordem", "virar", "contrário"],
    descricao: "Inverte a ordem dos elementos do array.",
    sintaxe: "array.reverse()",
    parametros: [],
    retorno: "O próprio array invertido (altera o original!).",
    exemplo: `let letras = ["a", "b", "c"];
letras.reverse();`,
    resultado: `["c", "b", "a"]`,
    dica: "Altera o array original. Se não quiser isso, faça uma cópia antes: [...array].reverse()."
},

{
    nome: "Array.flat()",
    grupo: "Array",
    palavrasChave: ["achatar", "flat", "nested", "aninhado", "nível", "matriz"],
    descricao: "Transforma um array com arrays dentro em um array único (achata o nível).",
    sintaxe: "array.flat(profundidade)",
    parametros: [
        "profundidade (opcional): quantos níveis achatar. Padrão é 1. Use Infinity para achatar tudo."
    ],
    retorno: "Novo array achatado.",
    exemplo: `let lista = [1, [2, 3], [4, [5]]];
lista.flat();`,
    resultado: "[1, 2, 3, 4, [5]]",
    dica: "Use flat(Infinity) para não se preocupar com quantos níveis existem."
},

{
    nome: "Array.concat()",
    grupo: "Array",
    palavrasChave: ["juntar", "unir", "concatenar", "combinar", "mesclar", "arrays"],
    descricao: "Junta dois ou mais arrays em um novo array.",
    sintaxe: "array.concat(outroArray)",
    parametros: [
        "outroArray: um ou mais arrays para unir."
    ],
    retorno: "Novo array combinado.",
    exemplo: `let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);`,
    resultado: "[1, 2, 3, 4]",
    dica: "Não altera os arrays originais. Uma alternativa moderna é usar o spread: [...a, ...b]."
},

{
    nome: "Array.splice()",
    grupo: "Array",
    palavrasChave: ["remover", "inserir", "substituir", "splice", "posição", "meio"],
    descricao: "Remove, substitui ou adiciona elementos em qualquer posição do array.",
    sintaxe: "array.splice(inicio, qtdRemover, item1, item2, ...)",
    parametros: [
        "inicio: índice onde começa a operação.",
        "qtdRemover: quantos elementos remover a partir do início.",
        "item1, item2, ... (opcional): elementos a inserir no lugar."
    ],
    retorno: "Array com os elementos removidos.",
    exemplo: `let cores = ["red", "green", "blue"];
cores.splice(1, 1, "yellow");`,
    resultado: `cores vira ["red", "yellow", "blue"]`,
    dica: "É o canivete suíço dos arrays. Diferente do slice(), ele altera o original."
},

{
    nome: "Array.shift()",
    grupo: "Array",
    palavrasChave: ["remover", "primeiro", "começo", "fila", "início"],
    descricao: "Remove o primeiro elemento de um array e o retorna.",
    sintaxe: "array.shift()",
    parametros: [],
    retorno: "Elemento removido.",
    exemplo: `let fila = ["Ana", "Carlos", "Beto"];
let primeiro = fila.shift();`,
    resultado: `primeiro = "Ana" e fila = ["Carlos", "Beto"]`,
    dica: "Pense como o oposto do pop(). Ele mexe no começo da fila."
},

{
    nome: "Array.unshift()",
    grupo: "Array",
    palavrasChave: ["adicionar", "inserir", "começo", "início", "fila", "prepend"],
    descricao: "Adiciona um ou mais elementos no início do array.",
    sintaxe: "array.unshift(valor1, valor2, ...)",
    parametros: [
        "valor: os elementos que você quer colocar no começo."
    ],
    retorno: "Novo tamanho do array.",
    exemplo: `let tarefas = ["Estudar"];
tarefas.unshift("Lavar louça");`,
    resultado: `["Lavar louça", "Estudar"]`,
    dica: "Pense como o oposto do push(). Ele 'fura a fila'."
},

{
    nome: "Array.forEach()",
    grupo: "Array",
    palavrasChave: ["loop", "iterar", "percorrer", "para cada", "cada", "for"],
    descricao: "Executa uma função para cada elemento do array.",
    sintaxe: "array.forEach(funcao)",
    parametros: [
        "Função que recebe o item atual, o índice e o próprio array."
    ],
    retorno: "undefined",
    exemplo: `["Oi", "Tudo bem?"].forEach(texto => console.log(texto));`,
    resultado: "Log no console: 'Oi' seguido de 'Tudo bem?'",
    dica: "Use quando quiser apenas 'passar' por todos os itens para fazer algo (como dar um log), sem gerar uma lista nova."
},

{
    nome: "Array.includes()",
    grupo: "Array",
    palavrasChave: ["contém", "tem", "existe", "verificar", "buscar", "booleano"],
    descricao: "Verifica se um array possui um determinado elemento.",
    sintaxe: "array.includes(elemento)",
    parametros: [
        "elemento: o valor que você está procurando."
    ],
    retorno: "true ou false.",
    exemplo: `let compras = ["leite", "pão"];
let temArroz = compras.includes("arroz");`,
    resultado: "false",
    dica: "Muito mais limpo do que fazer um loop só para ver se o item está na lista."
},

{
    nome: "Array.join()",
    grupo: "Array",
    palavrasChave: ["juntar", "unir", "string", "separador", "formatar", "converter"],
    descricao: "Junta todos os elementos de um array em uma única string, separados por um texto que você escolher.",
    sintaxe: "array.join(separador)",
    parametros: [
        "separador: texto que vai ficar entre os itens (ex: ', ', '-', ' ')."
    ],
    retorno: "Uma string.",
    exemplo: `let data = [2026, "06", 27];
let dataFormatada = data.join("-");`,
    resultado: `"2026-06-27"`,
    dica: "Se você não passar nenhum separador, ele usa a vírgula por padrão."
},

{
    nome: "Array.slice()",
    grupo: "Array",
    palavrasChave: ["fatiar", "cortar", "copiar", "trecho", "parte", "subarray"],
    descricao: "Corta uma fatia do array e retorna uma nova lista, sem alterar o array original.",
    sintaxe: "array.slice(inicio, fim)",
    parametros: [
        "inicio: índice onde começa o corte.",
        "fim (opcional): índice onde para o corte (não inclui este último)."
    ],
    retorno: "Novo array com a fatia cortada.",
    exemplo: `let herois = ["Batman", "Superman", "Flash", "Arqueiro"];
let subLista = herois.slice(1, 3);`,
    resultado: `["Superman", "Flash"]`,
    dica: "Lembre-se: o índice final é exclusivo, ou seja, ele para logo antes dele."
},

{
    nome: "Array.indexOf()",
    grupo: "Array",
    palavrasChave: ["posição", "índice", "encontrar", "onde", "buscar"],
    descricao: "Retorna a posição (índice) da primeira ocorrência de um elemento no array.",
    sintaxe: "array.indexOf(elemento)",
    parametros: [
        "elemento: o valor que você quer localizar."
    ],
    retorno: "Número inteiro (índice) ou -1 se não encontrar.",
    exemplo: `let cores = ["red", "green", "blue"];
cores.indexOf("green");`,
    resultado: "1",
    dica: "Se retornar -1, significa que o elemento não está na lista."
},

{
    nome: "String.toUpperCase()",
    grupo: "String",
    palavrasChave: ["maiúscula", "uppercase", "capitalizar", "caixa alta", "converter"],
    descricao: "Converte todas as letras para maiúsculas.",
    sintaxe: "texto.toUpperCase()",
    parametros: [],
    retorno: "Nova string.",
    exemplo: `"Lucas".toUpperCase()`,
    resultado: "LUCAS",
    dica: "Não altera a string original."
},

{
    nome: "String.toLowerCase()",
    grupo: "String",
    palavrasChave: ["minúscula", "lowercase", "caixa baixa", "converter", "comparação"],
    descricao: "Converte todas as letras para minúsculas.",
    sintaxe: "texto.toLowerCase()",
    parametros: [],
    retorno: "Nova string.",
    exemplo: `"Lucas".toLowerCase()`,
    resultado: "lucas",
    dica: "Muito usado em comparações."
},

{
    nome: "String.split()",
    grupo: "String",
    palavrasChave: ["dividir", "separar", "split", "array", "palavras", "cortar"],
    descricao: "Divide uma string em um array de substrings com base em um separador.",
    sintaxe: "texto.split(separador)",
    parametros: [
        "separador: o caractere ou texto que indica onde cortar."
    ],
    retorno: "Array de strings.",
    exemplo: `let frase = "Aprender JS é daora";
let palavras = frase.split(" ");`,
    resultado: `["Aprender", "JS", "é", "daora"]`,
    dica: "É o exato oposto do Array.join(). Se usar uma string vazia (''), ele separa letra por letra."
},

{
    nome: "String.replace()",
    grupo: "String",
    palavrasChave: ["substituir", "trocar", "replace", "texto", "corrigir", "modificar"],
    descricao: "Substitui a primeira ocorrência de um texto por outro em uma string.",
    sintaxe: "texto.replace(procurarPor, substituirPor)",
    parametros: [
        "procurarPor: o texto antigo.",
        "substituirPor: o novo texto."
    ],
    retorno: "Nova string modificada.",
    exemplo: `let texto = "Eu amo Java";
let corrigido = texto.replace("Java", "JavaScript");`,
    resultado: `"Eu amo JavaScript"`,
    dica: "Atenção: ele só muda a primeira vez que encontra a palavra. Para mudar todas, use texto.replaceAll()."
},

{
    nome: "String.replaceAll()",
    grupo: "String",
    palavrasChave: ["substituir", "trocar", "todas", "replace", "texto", "corrigir"],
    descricao: "Substitui todas as ocorrências de um texto por outro em uma string.",
    sintaxe: "texto.replaceAll(procurarPor, substituirPor)",
    parametros: [
        "procurarPor: o texto antigo.",
        "substituirPor: o novo texto."
    ],
    retorno: "Nova string modificada.",
    exemplo: `let texto = "gato e gato";
let novo = texto.replaceAll("gato", "cachorro");`,
    resultado: `"cachorro e cachorro"`,
    dica: "Diferente do replace(), aqui todas as ocorrências são trocadas de uma vez."
},

{
    nome: "String.includes()",
    grupo: "String",
    palavrasChave: ["contém", "tem", "existe", "verificar", "buscar", "booleano"],
    descricao: "Verifica se uma palavra ou trecho de texto existe dentro da string.",
    sintaxe: "texto.includes(termo)",
    parametros: [
        "termo: o texto que você quer descobrir se está lá dentro."
    ],
    retorno: "true ou false.",
    exemplo: `let email = "usuario@gmail.com";
let ehGmail = email.includes("gmail");`,
    resultado: "true",
    dica: "Ele diferencia maiúsculas de minúsculas (case-sensitive)."
},

{
    nome: "String.trim()",
    grupo: "String",
    palavrasChave: ["espaço", "limpar", "trim", "brancos", "input", "formatar"],
    descricao: "Remove espaços em branco inúteis no começo e no fim de uma string.",
    sintaxe: "texto.trim()",
    parametros: [],
    retorno: "Nova string limpa.",
    exemplo: `let input = "   meu_usuario_   ";
let limpo = input.trim();`,
    resultado: `"meu_usuario_"`,
    dica: "Obrigatório usar antes de salvar senhas ou usernames para evitar que o usuário erre por ter digitado um espaço sem querer."
},

{
    nome: "String.padStart()",
    grupo: "String",
    palavrasChave: ["preencher", "pad", "completar", "formatar", "zeros", "início"],
    descricao: "Preenche o início de uma string com um caractere até atingir um comprimento desejado.",
    sintaxe: "texto.padStart(tamanho, caractere)",
    parametros: [
        "tamanho: o comprimento final desejado.",
        "caractere: o que usar para preencher (padrão é espaço)."
    ],
    retorno: "Nova string preenchida.",
    exemplo: `let hora = "9";
let formatado = hora.padStart(2, "0");`,
    resultado: `"09"`,
    dica: "Perfeito para formatar horas, datas e códigos com zeros à esquerda."
},

{
    nome: "String.padEnd()",
    grupo: "String",
    palavrasChave: ["preencher", "pad", "completar", "formatar", "fim", "final"],
    descricao: "Preenche o final de uma string com um caractere até atingir um comprimento desejado.",
    sintaxe: "texto.padEnd(tamanho, caractere)",
    parametros: [
        "tamanho: o comprimento final desejado.",
        "caractere: o que usar para preencher."
    ],
    retorno: "Nova string preenchida.",
    exemplo: `let codigo = "A";
let formatado = codigo.padEnd(4, "0");`,
    resultado: `"A000"`,
    dica: "Útil para gerar códigos, IDs ou formatação visual em tabelas de texto."
},

{
    nome: "String.startsWith()",
    grupo: "String",
    palavrasChave: ["começa", "início", "verificar", "prefixo", "booleano"],
    descricao: "Verifica se a string começa com um determinado texto.",
    sintaxe: "texto.startsWith(prefixo)",
    parametros: [
        "prefixo: o texto que você quer checar no início."
    ],
    retorno: "true ou false.",
    exemplo: `let url = "https://site.com";
url.startsWith("https");`,
    resultado: "true",
    dica: "Ótimo para validar URLs, protocolos, prefixos de comandos, etc."
},

{
    nome: "String.endsWith()",
    grupo: "String",
    palavrasChave: ["termina", "final", "verificar", "sufixo", "extensão", "booleano"],
    descricao: "Verifica se a string termina com um determinado texto.",
    sintaxe: "texto.endsWith(sufixo)",
    parametros: [
        "sufixo: o texto que você quer checar no final."
    ],
    retorno: "true ou false.",
    exemplo: `let arquivo = "foto.png";
arquivo.endsWith(".png");`,
    resultado: "true",
    dica: "Muito usado para verificar extensões de arquivo."
},

{
    nome: "String.repeat()",
    grupo: "String",
    palavrasChave: ["repetir", "repeat", "duplicar", "vezes", "string"],
    descricao: "Repete a string um determinado número de vezes.",
    sintaxe: "texto.repeat(vezes)",
    parametros: [
        "vezes: quantas vezes repetir."
    ],
    retorno: "Nova string repetida.",
    exemplo: `"ha".repeat(3)`,
    resultado: `"hahaha"`,
    dica: "Útil para criar separadores, barras de progresso em texto, ou só para se divertir."
},

{
    nome: "String.slice()",
    grupo: "String",
    palavrasChave: ["cortar", "fatiar", "trecho", "parte", "extrair", "substring"],
    descricao: "Extrai uma parte da string entre dois índices.",
    sintaxe: "texto.slice(inicio, fim)",
    parametros: [
        "inicio: índice de onde começa.",
        "fim (opcional): índice onde para (não inclui)."
    ],
    retorno: "Nova string com o trecho cortado.",
    exemplo: `let texto = "JavaScript";
texto.slice(0, 4);`,
    resultado: `"Java"`,
    dica: "Aceita valores negativos: slice(-4) pega os últimos 4 caracteres."
},

{
    nome: "String.indexOf()",
    grupo: "String",
    palavrasChave: ["posição", "índice", "onde", "encontrar", "buscar", "caractere"],
    descricao: "Retorna a posição da primeira ocorrência de um texto dentro da string.",
    sintaxe: "texto.indexOf(termo)",
    parametros: [
        "termo: o texto a buscar."
    ],
    retorno: "Número inteiro (posição) ou -1 se não encontrar.",
    exemplo: `"JavaScript".indexOf("Script")`,
    resultado: "4",
    dica: "Se retornar -1, o texto não foi encontrado."
},

{
    nome: "parseInt()",
    grupo: "Global",
    palavrasChave: ["converter", "inteiro", "string para número", "parse", "input", "html"],
    descricao: "Analisa um texto (string) e tenta transformá-lo em um número inteiro.",
    sintaxe: "parseInt(texto)",
    parametros: [
        "texto: a string que você quer converter."
    ],
    retorno: "Número inteiro ou NaN (Not a Number) se falhar.",
    exemplo: `let texto = "42";
let numero = parseInt(texto);`,
    resultado: "42 (tipo Number)",
    dica: "Útil quando você pega dados de inputs do HTML, que sempre vêm como texto."
},

{
    nome: "parseFloat()",
    grupo: "Global",
    palavrasChave: ["converter", "decimal", "float", "string para número", "parse", "preço"],
    descricao: "Analisa um texto e o transforma em um número decimal (com pontos).",
    sintaxe: "parseFloat(texto)",
    parametros: [
        "texto: a string que você quer converter."
    ],
    retorno: "Número decimal ou NaN.",
    exemplo: `let precoTexto = "29.90";
let preco = parseFloat(precoTexto);`,
    resultado: "29.9",
    dica: "Se o texto contiver uma vírgula em vez de ponto (ex: '29,90'), ele vai parar de ler na vírgula. Substitua por ponto primeiro!"
},

{
    nome: "isNaN()",
    grupo: "Global",
    palavrasChave: ["nan", "não é número", "verificar", "validar", "número", "checar"],
    descricao: "Verifica se um valor não é um número válido.",
    sintaxe: "isNaN(valor)",
    parametros: [
        "valor: o dado que você quer verificar."
    ],
    retorno: "true se NÃO for número, false se for.",
    exemplo: `isNaN("hello")`,
    resultado: "true",
    dica: "Muito útil após um parseInt() ou parseFloat() para verificar se a conversão deu certo."
},

{
    nome: "typeof",
    grupo: "Global",
    palavrasChave: ["tipo", "verificar", "typeof", "string", "number", "boolean", "object"],
    descricao: "Retorna uma string indicando o tipo de dado de uma variável.",
    sintaxe: "typeof valor",
    parametros: [
        "valor: qualquer variável ou expressão."
    ],
    retorno: "String com o tipo: 'string', 'number', 'boolean', 'object', 'undefined', 'function'.",
    exemplo: `typeof 42`,
    resultado: `"number"`,
    dica: "Cuidado: typeof null retorna 'object', o que é considerado um bug histórico do JS."
},

{
    nome: "Number.toFixed()",
    grupo: "Number",
    palavrasChave: ["decimal", "casas", "formatar", "dinheiro", "preço", "arredondar"],
    descricao: "Formata um número limitando a quantidade de casas decimais após o ponto.",
    sintaxe: "numero.toFixed(casas)",
    parametros: [
        "casas: quantidade de números que você quer depois da vírgula/ponto."
    ],
    retorno: "Uma string representando o número formatado.",
    exemplo: `let pi = 3.14159;
let piFormatado = pi.toFixed(2);`,
    resultado: `"3.14"`,
    dica: "Cuidado! Ele retorna uma STRING. Se precisar fazer contas depois, vai ter que converter de volta."
},

{
    nome: "Number.isInteger()",
    grupo: "Number",
    palavrasChave: ["inteiro", "verificar", "decimal", "número", "checar", "validar"],
    descricao: "Verifica se um valor é um número inteiro.",
    sintaxe: "Number.isInteger(valor)",
    parametros: [
        "valor: o número a verificar."
    ],
    retorno: "true ou false.",
    exemplo: `Number.isInteger(4)`,
    resultado: "true",
    dica: "Number.isInteger(4.5) retorna false. Ótimo para validações."
},

{
    nome: "Number.isFinite()",
    grupo: "Number",
    palavrasChave: ["finito", "infinito", "verificar", "número", "validar"],
    descricao: "Verifica se um valor é um número finito (não Infinity e não NaN).",
    sintaxe: "Number.isFinite(valor)",
    parametros: [
        "valor: o número a verificar."
    ],
    retorno: "true ou false.",
    exemplo: `Number.isFinite(1 / 0)`,
    resultado: "false",
    dica: "Divisões por zero geram Infinity em JS. Use este método para checar isso."
},

{
    nome: "Object.keys()",
    grupo: "Object",
    palavrasChave: ["chaves", "propriedades", "keys", "objeto", "listar", "campos"],
    descricao: "Retorna um array com o nome de todas as propriedades (chaves) de um objeto.",
    sintaxe: "Object.keys(objeto)",
    parametros: [
        "objeto: o objeto que você quer investigar."
    ],
    retorno: "Array de strings.",
    exemplo: `let user = { nome: "Luffy", profissao: "Pirata" };
let chaves = Object.keys(user);`,
    resultado: `["nome", "profissao"]`,
    dica: "Excelente para descobrir o que tem dentro de um objeto ou descobrir o tamanho dele (usando .length no array retornado)."
},

{
    nome: "Object.values()",
    grupo: "Object",
    palavrasChave: ["valores", "conteúdo", "values", "objeto", "listar"],
    descricao: "Retorna um array com todos os valores guardados dentro das propriedades de um objeto.",
    sintaxe: "Object.values(objeto)",
    parametros: [
        "objeto: o objeto alvo."
    ],
    retorno: "Array com os valores.",
    exemplo: `let user = { nome: "Luffy", profissao: "Pirata" };
let valores = Object.values(user);`,
    resultado: `["Luffy", "Pirata"]`,
    dica: "Faz par com o Object.keys(), mas foca no conteúdo e ignora os nomes das propriedades."
},

{
    nome: "Object.entries()",
    grupo: "Object",
    palavrasChave: ["entradas", "par", "chave valor", "entries", "objeto", "iterar"],
    descricao: "Retorna um array de pares [chave, valor] para cada propriedade do objeto.",
    sintaxe: "Object.entries(objeto)",
    parametros: [
        "objeto: o objeto alvo."
    ],
    retorno: "Array de arrays com [chave, valor].",
    exemplo: `let user = { nome: "Luffy", profissao: "Pirata" };
Object.entries(user);`,
    resultado: `[["nome", "Luffy"], ["profissao", "Pirata"]]`,
    dica: "Muito útil para iterar um objeto com forEach ou for...of sem precisar de Object.keys() + acesso manual."
},

{
    nome: "Object.assign()",
    grupo: "Object",
    palavrasChave: ["copiar", "mesclar", "combinar", "assign", "objeto", "clonar"],
    descricao: "Copia as propriedades de um ou mais objetos para um objeto destino.",
    sintaxe: "Object.assign(destino, origem1, origem2, ...)",
    parametros: [
        "destino: o objeto que vai receber as propriedades.",
        "origem: os objetos dos quais as propriedades serão copiadas."
    ],
    retorno: "O objeto destino modificado.",
    exemplo: `let padrao = { cor: "azul", tamanho: "M" };
let personalizado = { cor: "vermelho" };
let final = Object.assign({}, padrao, personalizado);`,
    resultado: `{ cor: "vermelho", tamanho: "M" }`,
    dica: "Para um clone simples use Object.assign({}, objeto). Mas atenção: é uma cópia rasa (shallow copy)."
},

{
    nome: "JSON.stringify()",
    grupo: "JSON",
    palavrasChave: ["json", "converter", "objeto", "string", "serializar", "api", "salvar"],
    descricao: "Converte um objeto ou array JavaScript em uma string no formato JSON.",
    sintaxe: "JSON.stringify(valor)",
    parametros: [
        "valor: o objeto ou array a converter."
    ],
    retorno: "String JSON.",
    exemplo: `let user = { nome: "Ana", idade: 22 };
let json = JSON.stringify(user);`,
    resultado: `'{"nome":"Ana","idade":22}'`,
    dica: "Indispensável ao enviar dados para uma API ou salvar no localStorage."
},

{
    nome: "JSON.parse()",
    grupo: "JSON",
    palavrasChave: ["json", "converter", "string", "objeto", "deserializar", "api", "receber"],
    descricao: "Converte uma string JSON de volta para um objeto ou array JavaScript.",
    sintaxe: "JSON.parse(texto)",
    parametros: [
        "texto: uma string no formato JSON válido."
    ],
    retorno: "Objeto ou array JavaScript.",
    exemplo: `let json = '{"nome":"Ana","idade":22}';
let user = JSON.parse(json);`,
    resultado: `{ nome: "Ana", idade: 22 }`,
    dica: "Se a string não for um JSON válido, vai lançar um erro. Sempre envolva em try...catch."
},

{
    nome: "setTimeout()",
    grupo: "Timer",
    palavrasChave: ["timer", "atraso", "delay", "esperar", "tempo", "depois", "assíncrono"],
    descricao: "Executa uma função uma única vez após um tempo de espera (em milissegundos).",
    sintaxe: "setTimeout(funcao, tempo)",
    parametros: [
        "funcao: o que executar após o tempo.",
        "tempo: espera em milissegundos (1000 = 1 segundo)."
    ],
    retorno: "ID do timer (pode ser usado para cancelar com clearTimeout).",
    exemplo: `setTimeout(() => {
  console.log("Olá após 2 segundos!");
}, 2000);`,
    resultado: "Mensagem aparece no console 2 segundos depois",
    dica: "Use clearTimeout(id) para cancelar antes de executar."
},

{
    nome: "setInterval()",
    grupo: "Timer",
    palavrasChave: ["timer", "intervalo", "repetir", "loop", "tempo", "assíncrono", "relogio"],
    descricao: "Executa uma função repetidamente em um intervalo de tempo (em milissegundos).",
    sintaxe: "setInterval(funcao, intervalo)",
    parametros: [
        "funcao: o que executar a cada ciclo.",
        "intervalo: tempo entre execuções em milissegundos."
    ],
    retorno: "ID do intervalo (pode ser usado para parar com clearInterval).",
    exemplo: `let count = 0;
let id = setInterval(() => {
  count++;
  if (count === 3) clearInterval(id);
  console.log(count);
}, 1000);`,
    resultado: "Loga 1, 2, 3 com 1 segundo de intervalo e para",
    dica: "Não esqueça de guardar o ID e usar clearInterval() para parar. Senão roda para sempre!"
},

{
    nome: "Promise",
    grupo: "Assíncrono",
    palavrasChave: ["promise", "assíncrono", "then", "catch", "async", "esperar", "api"],
    descricao: "Representa uma operação que vai ser concluída no futuro (sucesso ou falha).",
    sintaxe: "new Promise((resolve, reject) => { })",
    parametros: [
        "resolve: chame quando a operação der certo.",
        "reject: chame quando a operação falhar."
    ],
    retorno: "Um objeto Promise com métodos .then() e .catch().",
    exemplo: `let promessa = new Promise((resolve, reject) => {
  let ok = true;
  if (ok) resolve("Deu certo!");
  else reject("Falhou!");
});
promessa.then(msg => console.log(msg));`,
    resultado: `"Deu certo!"`,
    dica: "Pense em uma Promise como um 'vale': você não tem o resultado agora, mas vai ter. Use .then() para o sucesso e .catch() para o erro."
},

{
    nome: "fetch()",
    grupo: "Assíncrono",
    palavrasChave: ["fetch", "api", "requisição", "http", "get", "request", "servidor", "dados"],
    descricao: "Faz uma requisição HTTP para uma URL e retorna uma Promise com a resposta.",
    sintaxe: "fetch(url)",
    parametros: [
        "url: endereço da API ou recurso desejado.",
        "opcoes (opcional): objeto com method, headers, body, etc."
    ],
    retorno: "Promise que resolve para um objeto Response.",
    exemplo: `fetch("https://api.github.com/users/torvalds")
  .then(res => res.json())
  .then(data => console.log(data.name));`,
    resultado: `"Linus Torvalds"`,
    dica: "A resposta não vem pronta: você precisa chamar .json() (que também é uma Promise) para transformar em objeto JS."
},

];

export const linguagem = {
    js,
    py: 'python',
    c: 'C'
}