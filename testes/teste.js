const quantidade = 6, minimo = 1, maximo = 60;
const todos = [];
for (let i = minimo; i <= maximo; i++) { // gera um array com todos os números
    todos.push(i);
}
// embaralha as 6 primeiras posições
for (let i = 0; i < quantidade; i++) {
    // pega uma posição aleatória do array e troca com a posição atual
    const j = Math.floor(Math.random() * todos.length );
    const tmp = todos[j];
    todos[j] = todos[i];
    todos[i] = tmp;
    console.log('todos =', todos, 'j=', j, 'tmp =', tmp)
}
// pega os 6 primeiros elementos
const result = todos.slice(0, quantidade);

