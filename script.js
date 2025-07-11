let expressao = "";

function adicionar(valor) {
  const resultado = document.getElementById("resultado");

  if (valor === "=") {
    try {
      const calculo = eval(expressao);
      resultado.value = calculo;
      expressao = calculo.toString();
    } catch {
      resultado.value = "Erro";
      expressao = "";
    }
    return;
  }
  expressao += valor;
  resultado.value = expressao;
}

function limpar() {
  expressao = ""; //reseta string q tava guardando oq era digitado
  document.getElementById("resultado").value = ""; // limpa o input vicivel da calculadora
}

function inverterSinal() {
  const resultado = document.getElementById("resultado");
  if (!expressao) return; //se estiver vazio n faz nada
  try {
    const valor = parseFloat(expressao); //parseFloat está convertendo a string a um numero
    const invertido = -valor;
    expressao = invertido.toString();
    resultado.value = expressao;
  } catch {
    resultado.value = "Erro";
      expressao = "";
  }
}