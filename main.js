const display = document.getElementById("display");
const buttons = document.querySelectorAll(".items");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (!value) return;

    // پاک کردن
    if (value === "C") {
      expression = "";
     display.textContent = value;
      return;
    }

    // حذف آخر
    if (value === "CE") {
      expression = expression.slice(0, -1);
      display.textContent = expression || "0";
      return;
    }

    // مساوی
    if (value === "=") {
      try {
        expression = String(Function("return " + expression)());
        display.textContent = expression;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
      return;
    }

    // تبدیل علامت‌های خاص به JS
    if (value === "±") {
    expression = String(Number(expression) * -1);
    display.textContent = expression;
    return;
}
if (value === "÷") {
    expression += "/";
}
if (value === "Backspace") {
    expression = expression.slice(0, -1);
    display.textContent = expression || "0";
    return;
}
    if (value === "x²") {
    expression = String(Math.pow(Number(expression), 2));
    display.textContent = expression;
    return;
}
   if (value === "%") {
    expression = String(Number(expression) / 100);
    display.textContent = expression;
    return;
}
   if (value === "x²") {
    expression = String(Math.pow(Number(expression), 2));
    display.textContent = expression;
    return;
}
if (value === "1/x") {
    expression = String(1 / Number(expression));
    display.textContent = expression;
    return;
}
    else if (value === "²") expression += "**2";
    else expression += value;

    display.textContent = expression;
  });
});
