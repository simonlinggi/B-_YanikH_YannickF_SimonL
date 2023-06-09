// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const gameContainer = document.getElementById("game-container");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const adresseField = document.getElementById("adresse");
const plzField = document.getElementById("plz");
const answerField = document.getElementById("answer");

// (2) Interaktionen festlegen
nameField.addEventListener("keyup", () => {
  validateForm();
});

emailField.addEventListener("keyup", () => {
  validateForm();
});

phoneField.addEventListener("keyup", () => {
  validateForm();
});

adresseField.addEventListener("keyup", () => {
  validateForm();
});

plzField.addEventListener("keyup", () => {
  validateForm();
});

answerField.addEventListener("keyup", () => {
  validateForm();
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const validateForm = () => {
  if (nameField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};


const onClickSubmit = async () => {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b7", // SQL Gruppen Namen
    pw: "2a781718", // SQL Passwort
    tableName: "user", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      name: nameField.value,
      email: emailField.value,
      telefon: phoneField.value,
      adresse: adresseField.value,
      plz: plzField.value,
      kommentar: answerField.value
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
};
