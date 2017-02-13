console.log('The client script is sourced');
// var myDate = new Date();
    //
    // var guests = require('./guests.json');
    // console.log('guests', guests);
    // var companies = require('./companies.json');
    // console.log('companies', companies);

  function Hotel(company, city, timeZone, hotelParameter){
    this.company =company;
    this.city = city;
    this.timeZone = timeZone;
  }


 function Guest(firstName, lastName, roomNumber, startTimestamp, endTimestamp, hotelParameter) { //Class
  this.firstName = firstName; ////property of guest
  this.lastName = lastName; /////property of guest
  this.hotel = hotelParameter;
  this.reservation = {   /// property of guest
    roomNumber,
    startTimestamp,
    endTimestamp
  };
  this.greeting = function() {
    var myDate = new Date();
    /*hour is before noon */
    if ( myDate.getHours() < 12 )
{
   ('Good Morning ' + this.firstName + ', and welcome to ' + this.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
Console.log('good morning');
// } else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
//     if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
// {
//     document.write('Good Afternoon, ' + this.firstName + ', and welcome to ' + this.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
// }  else  /* the hour is after 5pm, so it is between 6pm and midnight */
//     if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
// {
//     document.write('Good Evening, ' + this.firstName + ', and welcome to ' + this.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
// } else { /* the hour is not between 0 and 24, so something is wrong */
//     document.write('Error, time not found');
//
    // console.log('greeting')
//   }
// };

}
};
}
  var guestHotel = new Hotel ('Super 8', 'Minneapolis', 'central');
  var guest1 = new Guest('Joe', 'Schmoe', '403', '12345', '55432', 'guestHotel');
    guest1.greeting();
console.log( 'guest1', guest1);
