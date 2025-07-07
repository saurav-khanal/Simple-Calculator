const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      const replacedOutput = output.replace(/%/g, "/100");
      let result = eval(replacedOutput);
  
      if (result === -Infinity || isNaN(result)) {
        output = "Math Error";
      } else {

        if (typeof result === "number" && !Number.isInteger(result)) {
          output = result.toFixed(6).replace(/\.?0+$/, ""); 
        } else {
          output = result.toString();
        }
      }
    } catch (err) {
      output = "Math Error";
    }
  }
   else if (btnValue === "AC") {
    output = "";
  } 
  
  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  }
  
   else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
