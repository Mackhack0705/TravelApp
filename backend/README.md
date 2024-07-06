## Travel App
This project contains a travel application
which has following features -

### Admin Dashboard

#### Login
- An admin can sign up
- An admin can signin 

#### Flights
- An admin can add flights data
- An admin can see flights data
- An admin can delete flights data
- An admin can update flights data

#### Hotels
- An admin can add hotels data
- An admin can see hotels data
- An admin can delete hotels data
- An admin can update hotels data

### User

#### Login
- A user can sign up
- A user can sign in

#### Flights
- A user can search for a specific flight
- A user can book a flight and make payments
- A user can cancel a booking

#### Hotels
- A user can search for a specific hotel
- A user can book a room in a hotel and make payments
- A user can cancel a booking

### Routes

### Admin

#### Login
- POST /admin/signup
  Description - Creates a new admin account
  Input Body - {
    firstName: 'Rajesh',
    lastName: 'Mali',
    username: 'malirajesh0705@gmail.com'
    password: 'Mackhack0705@'
    confirmPasword: 'Mackhack0705@'
  }
  Output - {
    msg: 'Admin created successfully'
  }

- POST /admin/signin
  Description - Logs in a admin account
  Input Body - {
    username: 'malirajesh0705@gmail.com'
    password: 'Mackhack0705@'
  }
  Output - {
    token : 'ajfkhkakfjjjdfkjakfhkh'
  }

#### Flights
- POST /admin/flights/newflight
  Description - Add new flight data
  Input Body - {
    airlineName: 'skyway',
    flightNumber: '203',
    from: 'Mumbai',
    to: 'Delhi',
    date&time: '27-06-24: 12:05',
    tiketPrice: '2400'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Flight Data added successfully'
  }

- GET /admin/flights/allflights
  Description - Show all available flights
  Output - [
      {
      airlineName: 'skyway',
      flightNumber: '203',
      from: 'Mumbai',
      to: 'Delhi',
      date&time: '27-06-24: 12:05',
      tiketPrice: '2400'
    }, .....
  ]

- DELETE /admin/flights/removeflight
  Description - Removes a flight 
  Input Body - {
    _id: 'akdjfh'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Flight data removed successfully'
  }

- PUT /admin/flights/updateflights
  Description - Update flight data
  Input Body - {
    _id: 'ahfkahf'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Flight data updated successfully'
  }

#### Hotels
- POST /admin/hotels/newhotel
  Description - add a new hotel data
  Input Body - {
    hotelName: 'Hotel OM',
    location: 'Goa',
    from: '28-06-24',
    to: '1-07-24',
    pricePerNight: '1500'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'New hotel added successfully'
  }

- GET /admin/hotels/allhotels
  Description - Shows all available hotels
  Output - [
    {
      hotelName: 'Hotel OM',
      location: 'Goa',
      from: '28-06-24',
      to: '1-07-24',
      pricePerNight: '1500'
    }, .....
  ]

- DELETE /admin/hotels/removehotel
  Description - Removes a hotel data
  Input Body - {
    _id: 'djhfajhfk'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output -{
    msg: 'Hotel data removed successfully'
  }

- PUT /admin/hotels/updatehotel
  Description - Updates hotel data
  Input Body - {
    _id: 'djkjajfakkj'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Hotel data updated successfully'
  }

### User

#### Login
- POST /user/signup
  Description - Creates a new user account
  Input Body - {
    firstName: 'Rajesh',
    lastName: 'Mali',
    username: 'malirajesh0705@gmail.com',
    password: 'Mackhack0705@'
  }
  Output - {
    msg: 'User account created successfully'
  }

- POST /user/signin
  Description - Logs in a user account
  Input Body - {
    username: 'malirajesh0705@gmail.com',
    password: 'Mackhack0705@'
  }
  Output - {
    token: 'dkfhakhkfdajjfkjdjakj'
  }

#### Flights
- POST /user/flights/searchflight
  Description - Searches for a flight
  Input Body - {
    airlingName: 'Indigo',
    flightNumber: '203',
    from: 'Jaipur',
    to: 'Goa',
    date&time: '29-06-24:: 4:04',
  }
  Output - [
    {
      airlingName: 'Indigo',
      flightNumber: '203',
      from: 'Jaipur',
      to: 'Goa',
      date&time: '29-06-24:: 4:04',
    }, .....
  ]


- POST /userflights/makepayments
  Description - Book a flight and receive payments
  Input Body - {
    cardNumber: 554544464664,
    carExpirationMonth: 'feb',
    cardExpirationYear: 2030,
    cvv: 343,
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Flight booked and payment received successfully'
  }

- POST /user/flights/cancelbooking
  Description - Cancels a flight booking
  Input Body - {
    tiketId: 'hkjadhfk'
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Flight Booking cancelled successfully'
  }


#### Hotels
- POST /user/hotels/searchhotel
  Description - Searches for a hotel
  Input Body - {
    hotelName: 'Hotel OM',
    location: 'Goa'
    from: '28-06-24',
    to: '2-07-24'
  }
  Output - [
    {
      hotelName: 'Hotel OM',
      location: 'Goa'
      from: '28-06-24',
      to: '2-07-24'
    }, ...
  ]

- POST /user/hotels/makepayments
  Description - Book a room in a hotel and receive a payment
  Input Body - {
    cardNumber: 8875454446546,
    cardExpirationMonth: 'may',
    cardExpirationYear: 2026,
    cvv: 123
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Room booked and payment received successfully'
  }

- POST /user/hotels/cancelbooking
  Description - Cancel a room bookin in a hotel
  Input Body - {
    bookingId: 'fjahkfh',
  }
  headers - {
    'Authorization': 'Bearer <your-token>'
  }
  Output - {
    msg: 'Room Booking is cancel successfully'
  }