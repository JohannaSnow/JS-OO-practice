console.log('The client script is sourced');
var myDate = new Date();
    //
    // var guests = require('./guests.json');
    // console.log('guests', guests);
    // var companies = require('./companies.json');
    // console.log('companies', companies);


 function Customer(firstName, lastName, roomNumber, startTimestamp, endTimestamp) { //Class
  this.firstName = firstName; ////property of customer
  this.lastName = lastName; /////property of customer
  this.reservation = {   /// property of customer
    company,
    roomNumber,
    startTimestamp,
    endTimestamp
  };
  this.greeting = function() {
    /*hour is before noon */
    if ( myDate.getHours() < 12 )
{
    document.write('Good Morning ' + this.firstName + ', and welcome to ' + this.reservation.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
}
    else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
    if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
    document.write('Good Afternoon, ' + this.firstName + ', and welcome to ' + this.reservation.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
}
    else  /* the hour is after 5pm, so it is between 6pm and midnight */
    if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
    document.write('Good Evening, ' + this.firstName + ', and welcome to ' + this.reservation.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
}
    else  /* the hour is not between 0 and 24, so something is wrong */
{
    document.write('Error, time not found');

    console.log('greeting')
  }
};
  var customer1 = new Customer('Joe', 'Schmoe', '403', '12345', '55432');
  customer1.greeting();
console.log( 'customer1', customer1);


// customer1.greeting = function() {
//   alert('Good morning ' + this.firstName + ', and welcome to ' + this.company + 'Room ' + this.roomNumber + 'is now ready for you. Enjoy your stay, and let us know if you need anything.');
// };
