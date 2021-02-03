// "use strict";
// console.timeLog("Hello from an external JS file. ')");
//
// var name = "Brandon";
// console.log("hello, " + name);
//
// // alert
// // alert("Welcome to my Page");
//
// //confirm
// // var confirmLeave = confirm(" are you sure you want to leave? ");
// // console.log("confirmLeave " + confirmLeave);
//
// //prompt
//
// var rentalDays = prompt("How long did you enjoy you rental for?");
//
// alert("You enjoyed your rental for "+rentalDays + " days");
//
//
// console.log(" Hello for external Javascript");
// alert("Welcome to my WebPage!!");
//
// var usersFavoriteColor = prompt("what is ypur favrorite color?");
//
// alert("Cool! " +usersFavoriteColor + " is my favorite color too!");
//
// var littleMermaid = parseInt(prompt("how many nights did ypou rent the Little Mermaid?"));
// var brotherBear = parseInt(prompt("How many nights did ypu rent Brother Bear?"));
// var hercules = parseInt(prompt("how many nights did you rent Hercules?"));
// var ppd = parseInt(prompt("what was the rental rate?"));
//
// var totalCost = (ppd * (littleMermaid + brotherBear + hercules));
//
// alert("You owe Sunland Video $" + totalCost);
//
// var HoursworkedForGoogle = Number (prompt("how many hours did you work for Google?"));
//
// var HoursworkedForAmazon = Number (prompt("how many hours did you work for Amazon?"));
//
// var HoursworkedForFaceook = Number (prompt("how many hours did you work for Facebook?"));
//
//
//
//
// var totalFromGoogle = HoursworkedForGoogle *400;
//
// var totalFromAmazom = HoursworkedForAmazon *380;
//
// var totalFromFacebook = HoursworkedForFaceook *350;
//
// alert("You have made a total of $" + (totalFromGoogle + totalFromAmazom + totalFromFacebook) + " this week!");
//
//
// var classIsFull = confirm("is the class you are trying to join full?");
//
// var hasScheduleConflicts = confirm{"Do you have a class at 2:30 today?"};
//
// alert("you can join the class is " + (!classIsFull && hasScheduleConflicts ) +" statement." );
//

var hasMoreThanTwoItems = confirm("Do you have more than two items in your cart?");

var isOfferStillValid = confirm("Is the offer still valid?");

var isPremiumMember = confirm("Are you a Premium Member?");

var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferStillValid;

alert("You can usse this offer is a " + canUserUseOffer + " Statemant")


// you can also do this
//
// var hasEnojughItems = hasMoreThanTwoItems || isPremiumMember;
//
//var canUserUseOffer = hasMoreThanTwoItems && isOfferStillValid;