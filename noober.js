// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Store passenger details
  let riderInfo = ride.passengerDetails
  // Store Rider First Name
  let riderFirstName = ride.passengerDetails.first
  // Store Rider Last Name
  let riderLastName = ride.passengerDetails.last
  // Store Rider Phone Number
  let riderPhone = ride.passengerDetails.phoneNumber
  // Store Pick Up Location
  let riderPickUp = ride.pickupLocation
  // Store Pick Up Address
  let riderAddress = ride.pickupLocation.address
  // Store Pick Up City
  let riderCity = ride.pickupLocation.city
  // Store Pick Up State
  let riderState = ride.pickupLocation.state
  // Store Pick Up Zip
  let riderZip = ride.pickupLocation.zip 
  // Store Drop Off Location
  let riderDrop = ride.dropoffLocation
  // Store Drop Off Address
  let riderDropAddress = ride.dropoffLocation.address
  // Store Drop Off City
  let riderDropCity = ride.dropoffLocation.city
  // Store Drop Off State
  let riderDropState = ride.dropoffLocation.state
  // Store Drop Off Zip
  let riderDropZip = ride.dropoffLocation.zip
  // Store Number of Passengers
  let passengers = ride.numberOfPassengers
  // Store Purple Requested
  let purple = ride.purpleRequested
  // Define Car Types
  let carTypes = [`Noober X`, `Noober XL`, 'Noober Purple']
  // Conditional Statement to determine car needed
  let car
  if (purple == true) {car = carTypes[2]
} else if (passengers > 3 && purple == false) {car = carTypes[1]
} else {car = carTypes[0]}


  console.log(`${car}`)



  
  

  // 🔥 YOUR CODE ENDS HERE 🔥
})
