let display = document.querySelector("#userDisplay");
let buttons = document.querySelectorAll("button");
let arrButton = Array.from(buttons);
let string = "";
arrButton.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (btn.value == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (btn.innerHTML == "AC") {
      (string = ""), (display.value = string);
    } else if (btn.innerHTML == "=") {
      string = eval(string);
      if (string == undefined) {
        alert("Please Enter The Number First");
        string = "";
      } else {
        display.value = string;
      }
    } else if (btn.value === "**") {
      string = string ** 2;
      display.value = string;
      string = "";
    } else {
      string += btn.innerHTML;
      switch (string) {
        case ".":
        case "0":
        case "+":
        case "-":
        case "*":
        case "/":
        case "**":
          alert(`You Can't Enter The ${btn.innerHTML} At First`);
          string = "";
          break;
        default:
          display.value = string;
      }
    }
  });
});
