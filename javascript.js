function myFunction() {
    let text;
    let person = prompt("Please, enter your email");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("button").innerHTML = text;
  }

          function showAlert() {
      document.getElementById("alert").style.display = "block";
      }
      function hideAlert() {
      document.getElementById("alert").style.display = "none";
      }