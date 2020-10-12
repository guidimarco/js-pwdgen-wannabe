// VARIABILI

var UserFirstName
var FirstNameParagraph

var UserLastName
var LastNameParagraph

var UserFavouriteColor
var FavouriteColorParagraph

var PasswordParagraph

// FIRST NAME

var UserFirstName = prompt("Come ti chiami?");
console.log("Nome: " + UserFirstName);

var FirstNameParagraph = document.getElementById("FirstName").innerHTML;
console.log("Contenuto del paragrafo \"FirstName\": " + FirstNameParagraph);

// LAST NAME

var UserLastName = prompt("Qual'è il tuo cognome?");
console.log("Cognome: " + UserLastName);

var LastNameParagraph = document.getElementById("LastName").innerHTML;
console.log("Contenuto del paragrafo \"LastName\": " + LastNameParagraph);

// FAVOURITE COLOR

var UserFavouriteColor = prompt("Qual'è il tuo colore preferito?");
console.log("Colore preferito: " + UserFavouriteColor);

var FavouriteColorParagraph = document.getElementById("FavouriteColor").innerHTML;
console.log("Contenuto del paragrafo \"FavouriteColor\": " + FavouriteColorParagraph);

// PASSWORD

var PasswordParagraph = document.getElementById("Password").innerHTML;
console.log("Contenuto del paragrafo \"Password\": " + PasswordParagraph);
