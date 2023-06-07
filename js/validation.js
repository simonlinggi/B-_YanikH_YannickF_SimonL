document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das automatische Absenden des Formulars

    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var adresseInput = document.getElementById("adresse").value;
    var plzInput = document.getElementById("plz").value;

    if (nameInput === "") {
      alert("Bitte geben Sie Ihren Namen ein.");
      return;
    }

    if (emailInput === "") {
      alert("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }

    // Überprüfung der E-Mail-Adresse mit einem einfachen Muster
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (phoneInput === "") {
      alert("Bitte geben Sie Ihre Telefonnummer ein.");
      return;
    }

    if (adresseInput === "") {
      alert("Bitte geben Sie Ihre Adresse ein.");
      return;
    }

    if (plzInput === "") {
      alert("Bitte geben Sie Ihre PLZ/Ort ein.");
      return;
    }

    // Wenn alle Überprüfungen erfolgreich sind, können Sie das Formular absenden
    alert("Formular erfolgreich abgesendet!");
    document.getElementById("myForm").reset();
  });
