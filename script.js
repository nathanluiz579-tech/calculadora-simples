const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");

document.getElementById("calcular").addEventListener("click", () => {
  if (numero1.value.trim() === "" || numero2.value.trim() === "") {
    resultado.textContent = "Preencha os dois números";
    return;
  }

  const a = Number(numero1.value);
  const b = Number(numero2.value);
  let valor;

  switch (operacao.value) {
    case "somar":
      valor = a + b;
      break;
    case "subtrair":
      valor = a - b;
      break;
    case "multiplicar":
      valor = a * b;
      break;
    case "dividir":
      if (b === 0) {
        resultado.textContent = "Não é possível dividir por zero";
        return;
      }
      valor = a / b;
      break;
  }

  resultado.textContent = Number.isFinite(valor)
    ? String(Number(valor.toPrecision(10)))
    : "Resultado inválido";
});

document.getElementById("limpar").addEventListener("click", () => {
  numero1.value = "";
  numero2.value = "";
  operacao.value = "somar";
  resultado.textContent = "—";
  numero1.focus();
});
