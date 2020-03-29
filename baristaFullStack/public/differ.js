//Credit for code from https://stackoverflow.com/questions/45071353/copy-text-string-on-click
const strong = document.querySelectorAll("strong");

strong.forEach((element) => {
  element.onclick = function() {
    document.execCommand("copy");
  }
  element.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", element.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  })

});
