// 17. Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guest. 
// _ Start with your program from Exercise 16. Add a new line print a message saying that you can invite only two people for dinner.
// _ Remove guest from your list ona at a time until only two names remain in your FileList. Each time you pop a name from your list , print a message to that person letting them know you're sorry you can't invite them to dinner.
// _ Print a message to each of the two people still on your list, letting them know they're still invited.
// _ Remove the last two names from your list , so you have aan empty list . Print your list to make sure you actually have an empty list at the end of your Program .
var guestArr = ["Aliza", "Tooba", "Mishal", "Zimal"];
while (guestArr.length > 2) {
    var removeGuest = guestArr.pop();
    console.log("Dear ".concat(removeGuest, ", you are not invited to the dinner"));
}
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are still invited to the dinner"));
});
guestArr.pop;
console.log(guestArr);
