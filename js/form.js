// (1) Variablen initialisieren
const firstNameField = document.getElementById("firstnameField");
const lastNameField = document.getElementById("lastnameField");
const emailField = document.getElementById("emailField");
const phoneField = document.getElementById("phoneField");
const addressField = document.getElementById("addressField");
const plzField = document.getElementById("plzField");
const submitButton = document.getElementById("submitButton");
submitButton.disabled = true;

const errorContainer = document.querySelector('.error');

// (2) Interaktionen festlegen
firstNameField.addEventListener("keyup", () => {
  validateForm();
});

lastNameField.addEventListener("keyup", () => {
  validateForm();
});

emailField.addEventListener("keyup", () => {
  validateForm();
});

phoneField.addEventListener("keyup", () => {
  validateForm();
});

addressField.addEventListener("keyup", () => {
  validateForm();
});

plzField.addEventListener("keyup", () => {
  validateForm();
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const validateForm = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberPattern = /^[\d+]+$/;

  if (
    firstNameField.value === "" ||
    lastNameField.value === "" ||
    emailField.value === "" ||
      !emailPattern.test(emailField.value) || // E-Mail-Validierung
    phoneField.value === "" ||
      !numberPattern.test(phoneField.value) ||
    addressField.value === "" ||
    plzField.value === "" ||
      !numberPattern.test(plzField.value) 
  ) {
   submitButton.disabled = true;
    submitButton.value = "Formular vermutlich falsch ausgefüllt";
  } else {
    submitButton.disabled = false;
    submitButton.value = "Am Gewinnspiel teilnehmen";
    errorContainer.textContent = "";
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
      firstname: firstNameField.value,
      lastname: lastNameField.value,
      email: emailField.value,
      phone: phoneField.value,
      address: addressField.value,
      plz: plzField.value
    },
  };

  try {
    // Speichert die Daten in der Datenbank
    await databaseClient.insertInto(data);

    // Formular absenden
    const form = document.querySelector('.form');
    form.submit();

  } catch (error) {
    console.error("Fehler bei der Datenbank: ", error);
  }
};