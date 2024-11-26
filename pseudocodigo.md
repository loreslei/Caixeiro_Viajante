
Classe Cidade:
    Atributos:
        nome
        x
        y
    Método Construtor(nome, x, y):
        Inicializar nome, x e y com os valores fornecidos

Função calcularEuclides(cidade1, cidade2):
    dx ← (cidade1.x - cidade2.x)²
    dy ← (cidade1.y - cidade2.y)²
    Retornar dx + dy

Função permutacao(lista):
    Se lista estiver vazia:
        Retornar
    Se lista tiver um único elemento:
        Retornar [lista]
    Caso contrário:
        permutacoes ← lista vazia
        Para cada elemento da lista:
            atual ← elemento atual
            elementosRestantes ← lista sem o atual
            permutacoesFaltantes ← permutacao(elementosRestantes)
            Para cada permutação faltante em permutacoesFaltantes:
                Adicionar [atual] + permutacao faltante em permutacoes
        Retornar permutacoes

Função calcularCombinacoesPossiveis(listaCidades):
    permutacoesRotas ← permutacao(listaCidades)
    Para cada rota em permutacoesRotas:
        distanciaTotal ← 0
        Para i de 0 até tamanho de rota - 2:
            distanciaTotal ← distanciaTotal + calcularEuclides(rota[i], rota[i+1])
        Adicionar distanciaTotal em permutacoesDistancias
    Retornar permutacoesDistancias

Função calcularMelhorRota():
    distanciaOtimizada ← infinito
    melhorRota ← nulo
    Para i de 0 até tamanho de permutacoesDistancias - 1:
        Se permutacoesDistancias[i] < distanciaOtimizada:
            distanciaOtimizada ← permutacoesDistancias[i]
            melhorRota ← permutacoesRotas[i]
    Imprimir "A melhor rota é:"
    Para cada cidade em melhorRota:
        Imprimir cidade.nome, cidade.x, cidade.y
    Imprimir "Com distância total de:", distanciaOtimizada

Início:
    listaCoordenadas ← [cidade inicial e outras cidades com suas coordenadas]
    permutacoesDistancias ← lista vazia
    permutacoesRotas ← lista vazia

    calcularCombinacoesPossiveis(listaCoordenadas)
    calcularMelhorRota()

