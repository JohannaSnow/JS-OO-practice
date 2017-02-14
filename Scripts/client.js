
/* start of Loading in guest and company information */
var guests = require('./guests.json');
   console.log('guests', guests);
   var companies = require('./companies.json');
   console.log('companies', companies);

/* end of 1. Load in guest and company information  from JSON files */


/* Hotel Class with Constructors */
 function Hotel(company, city, timeZone){
   this.company =company;
   this.city = city;
   this.timeZone = timeZone;
   /*returning the JSON files*/
    this.toJson = function (){
       return ("{" +
           "\"company\":\"" + this.company + "\"," +
           "\"city\":\"" + this.city + "\"," +
           "\"timeZone\":\"" + this.timeZone + "\"," +
       "}");
   };
}
/* Need to build something to search each object in the array for a “match” of the hotel id. This is what I started to do, but I think I may need to use map() to reorganize the array*/
//     Companies.fromJson = function (json){
//     var obj = JSON.parse (json);
//     return new Companies (obj.company, obj.city, obj.timeZone);
// };

/* Guest Class with Constructors */
 function Guest(firstName, lastName, roomNumber, startTimestamp, endTimestamp, hotelParameter) {
 this.firstName = firstName; ////property of guest
 this.lastName = lastName; /////property of guest
 this.hotel = hotelParameter;
 this.reservation = {   /// property of guest
   roomNumber,
   startTimestamp,
   endTimestamp
 };
  /*returning the JSON files*/
 this.toJson = function(){
   return ("{" +
       "\"firstName\":\"" + this.firstName + "\"," +
       "\"lastName\":\"" + this.lastName + "\"," +
       "\"roomNumber\":\"" + this.roomNumber + "\"," +
       "\"startTimestamp\":\"" + this.startTimestamp + "\"," +
       "\"endTimestamp\":\"" + this.endTimestamp + "\"," +
       "\"hotelParameter\":\"" + this.hotelParameter + "\"," +
       "}");
   };
   /* Greeting that will go out to guest depending on the time of day */
   this.greeting = function() {
   var myDate = new Date();
   /*hour is before noon */
   if ( myDate.getHours() < 12 ){
   console.log('myDate.getHours()');
  ('Good Morning ' + this.firstName + ', and welcome to ' + this.hotel.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
  console.log('Morning Greeting');
} else if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ){
 /* Hour is from noon to 5pm (actually to 5:59 pm) */
 ('Good Afternoon, ' + this.firstName + ', and welcome to ' + this.hotel.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
   console.log('Afternoon Greeting');
 } else if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ){
  /* the hour is after 5pm, so it is between 6pm and midnight */
   ('Good Evening, ' + this.firstName + ', and welcome to ' + this.hotel.company + '!' + 'Room ' + this.reservation.roomNumber + 'is now ready for you! Enjoy your stay, and let us know if you need anything.');
     console.log('Evening Greeting');
} else {
/* the hour is not between 0 and 24, so something is wrong */
 ('Error, time not found');
   console.log('Error');
}
};
}


/*Testing example with dummy date to see if everything is returning information */
 var guestHotel = new Hotel ('Super 8', 'Minneapolis', 'central');
 var guest1 = new Guest('Joe', 'Schmoe', '403', '12345', '55432', 'guestHotel');
   guest1.greeting();
console.log( 'guest1', guest1);
