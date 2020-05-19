var userInput; // A more restrictive any
var userName;
userInput = 5;
userInput = "Pepe";
if (typeof userInput === "string") {
    userName = userInput; // without this check unknown wont let you assing this
}
// This function never produces a value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error ocurred", 500);
