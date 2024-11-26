class Cidade {
    constructor(nome, x, y) {
        this.nome = nome;
        this.x = x;
        this.y = y;
    }
}

let listaCoordenadas = [];

//Apenas para testar com valores que nao sao fixos

/*

let x = parseInt(prompt("Digite a coordenada X do Caixeiro"));
let y = parseInt(prompt("Digite a coordenada Y do Caixeiro"));
console.log("Caixeiro:", "(" + x + "," + y +")");
listaCoordenadas.push(new Cidade("Caixeiro", x, y));

for (let i = 0; i < 3; i++) {
    let nomeCidade = prompt("Digite o nome da cidade");
    let x = parseInt(prompt("Digite a coordenada X da cidade", nomeCidade));
    let y = parseInt(prompt("Digite a coordenada Y da cidade", nomeCidade));
    console.log(nomeCidade + ":", "(" + x + "," + y +")");
    listaCoordenadas.push(new Cidade(nomeCidade, x, y));
    
}

*/

listaCoordenadas.push(new Cidade("Caixeiro", 0, 1));
listaCoordenadas.push(new Cidade("A", 1, 0));
listaCoordenadas.push(new Cidade("B", 1, 1));
listaCoordenadas.push(new Cidade("C", 0, 2));
listaCoordenadas.push(new Cidade("D", 1, 2));
listaCoordenadas.push(new Cidade("E", 2, 0));
listaCoordenadas.push(new Cidade("F", 2, 1));
listaCoordenadas.push(new Cidade("G", 0, 3));
listaCoordenadas.push(new Cidade("H", 1, 3));
listaCoordenadas.push(new Cidade("I", 2, 3));

let permutacoesDistancias = []; 
let permutacoesRotas = [];      

function calcularEuclides(l1, l2) {
    let dx = Math.pow(l1.x - l2.x, 2);
    let dy = Math.pow(l1.y - l2.y, 2);
    return dx + dy;
}

function permutacao(arr) {
    if (arr.length === 0)
        {
           return;
        }

    if (arr.length === 1)
        {
           return [arr];
        }
    else
    {
        let permutacoes = [];
        for (let i = 0; i < arr.length; i++) {
            const atual = arr[i];
            const elementosRestantes = arr.slice(0, i).concat(arr.slice(i + 1));
            const permutacoesFaltantes = permutacao(elementosRestantes);
            for (const perm of permutacoesFaltantes) {
                permutacoes.push([atual, ...perm]);
            }
        }
        return permutacoes;
    }
    
}

function calcularCombinacoesPossiveis(arr) {
    permutacoesRotas = permutacao(arr); 

    permutacoesRotas.forEach(rota => {
        let distanciaTotal = 0;

        for (let i = 0; i < rota.length - 1; i++) {
            distanciaTotal += calcularEuclides(rota[i], rota[i + 1]);
        }

        permutacoesDistancias.push(distanciaTotal);
    });

    return permutacoesDistancias;
}

function calcularMelhorRota() {
    let distanciaOtimizada = Infinity;
    let melhorRota = null;

    for (let i = 0; i < permutacoesDistancias.length; i++) {
        if (permutacoesDistancias[i] < distanciaOtimizada) {
            distanciaOtimizada = permutacoesDistancias[i];
            melhorRota = permutacoesRotas[i]; 
        }
    }

    console.log("A melhor rota é:");
    melhorRota.forEach(cidade => console.log(cidade.nome + ":", "(" + cidade.x + "," + cidade.y +")"));
    console.log("Com distância total de:", distanciaOtimizada);
}


// main aqui
calcularCombinacoesPossiveis(listaCoordenadas);
calcularMelhorRota();
