console.log('The client script is sourced');
    //
    // var guests = require('./guests.json');
    // console.log('guests', guests);
    // var companies = require('./companies.json');
    // console.log('companies', companies);


 function Customer(firstName, lastName, roomNumber, startTimestamp, endTimestamp) { //Class
  this.firstName = firstName; ////property of customer
  this.lastName = lastName; /////property of customer
  this.reservation = {   /// property of customer
    roomNumber,
    startTimestamp,
    endTimestamp
  };
  this.greeting = function() {
    ('Good morning, ' + this.firstName);
    console.log('greeting')
  };
}
  var customer1 = new Customer('Joe', 'Schmoe', '403', '12345', '55432');
  customer1.greeting();
console.log( 'customer1', customer1);


// customer1.greeting = function() {
//   alert('Good morning ' + this.firstName + ', and welcome to ' + this.company + 'Room ' + this.roomNumber + 'is now ready for you. Enjoy your stay, and let us know if you need anything.');
// };



//  function Reservation() {
//   this.company = company;
//   this.roomNumber = roomNumber;
//   this.startTimestamp = startTimestamp;
//   this.endTimestamp = endTimestamp;
//   this.spot = function(){
//     alert('staying in room ' + this.roomNumber + 'beginning at '+ this.startTimestamp + 'and ending at ' + this.endTimestamp);
//   };
// }



// document.write(customer.speak() + "<br />");
