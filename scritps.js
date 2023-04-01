const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  const name = prompt("Qual é o seu nome?");
  const operation = prompt("Quais operações matemáticas você deseja fazer? (+, -, * ou /)");

  let result;
  let num1;
  let num2;

  do {
    num1 = Number(prompt("Digite o primeiro número:"));
    num2 = Number(prompt("Digite o segundo número:"));

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        alert("Operação inválida. Por favor, escolha uma operação válida (+, -, * ou /).");
    }
  } while (isNaN(result));

  alert("O resultado da operação " + num1 + " " + operation + " " + num2 + " é " + result + ".");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<h2>Olá, " + name + "!</h2><p>O resultado da operação " + num1 + " " + operation + " " +  num2 + " é " + result + "adicionei mais um final aqui.</p>";
  document.body.appendChild(newDiv);
});
