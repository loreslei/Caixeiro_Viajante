
Classe Cidade: <br>
    Atributos:<br>
        nome<br>
        x<br>
        y<br>
    Método Construtor(nome, x, y):<br>
        Inicializar nome, x e y com os valores fornecidos<br>
<br>
Função calcularEuclides(cidade1, cidade2):<br>
    dx ← (cidade1.x - cidade2.x)²<br>
    dy ← (cidade1.y - cidade2.y)²<br>
    Retornar dx + dy<br>
<br>
Função permutacao(lista):<br>
    Se lista estiver vazia:<br>
        Retornar<br>
    Se lista tiver um único elemento:<br>
        Retornar [lista]<br>
    Caso contrário:<br>
        permutacoes ← lista vazia<br>
        Para cada elemento da lista:<br>
            atual ← elemento atual<br>
            elementosRestantes ← lista sem o atual<br>
            permutacoesFaltantes ← permutacao(elementosRestantes)<br>
            Para cada permutação faltante em permutacoesFaltantes:<br>
                Adicionar [atual] + permutacao faltante em permutacoes<br>
        Retornar permutacoes<br>
<br>
Função calcularCombinacoesPossiveis(listaCidades):<br>
    permutacoesRotas ← permutacao(listaCidades)<br>
    Para cada rota em permutacoesRotas:<br>
        distanciaTotal ← 0<br>
        Para i de 0 até tamanho de rota - 2:<br>
            distanciaTotal ← distanciaTotal + calcularEuclides(rota[i], rota[i+1])<br>
        Adicionar distanciaTotal em permutacoesDistancias<br>
    Retornar permutacoesDistancias<br>
<br>
Função calcularMelhorRota():<br>
    distanciaOtimizada ← infinito<br>
    melhorRota ← nulo<br>
    Para i de 0 até tamanho de permutacoesDistancias - 1:<br>
        Se permutacoesDistancias[i] < distanciaOtimizada:<br>
            distanciaOtimizada ← permutacoesDistancias[i]<br>
            melhorRota ← permutacoesRotas[i]<br>
    Imprimir "A melhor rota é:"<br>
    Para cada cidade em melhorRota:<br>
        Imprimir cidade.nome, cidade.x, cidade.y<br>
    Imprimir "Com distância total de:", distanciaOtimizada<br>
<br>
Início:<br>
    listaCoordenadas ← [cidade inicial e outras cidades com suas coordenadas]<br>
    permutacoesDistancias ← lista vazia<br>
    permutacoesRotas ← lista vazia<br>
<br>
    calcularCombinacoesPossiveis(listaCoordenadas)<br>
    calcularMelhorRota()<br>

