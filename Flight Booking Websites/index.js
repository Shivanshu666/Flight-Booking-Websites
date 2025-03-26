// let URL='https://api.aviationstack.com/v1/flights?access_key=3c864d2ea5f1ccae0b0f52db94420765';

// let fetchUser = async () => {
//     try {
//         let response = await fetch(URL);
//         // if (!response.ok) throw new Error('Network response was not ok');
//         let info = await response.json();
        
        
//         // Assuming the API returns an array of flights
//         let flightInfo = info.data[1]; // Access the first flight
//         console.log(flightInfo);                            
//         displayUser(flightInfo);
//     } catch (error) {
//         console.log(error);
//     }
//   };
//   let btn = document.querySelector("#new-user");
//   btn.addEventListener("click", fetchUser);
  
//   let displayUser = (flightDetails) => {
//     document.querySelector("#flight-number").innerText = flightDetails.airline ? flightDetails.airline.name : 'N/A';
//     document.querySelector("#flight-arrival").innerText = flightDetails.arrival ? flightDetails.arrival.airport : 'N/A';
//     document.querySelector("#flight-depature").innerText=flightDetails.departure ? flightDetails.departure.airport : 'N/A';
//     document.querySelector("#flight-status").innerText=flightDetails.flight_status ? flightDetails.flight_status : 'N/A';
//     document.querySelector("#flight-date").innerText=flightDetails.flight_date ;
//     document.querySelector("#flight-num").innerText=flightDetails.flight ? flightDetails.flight.number : 'N/A';
  
  
//   };
  
  // window.onload=fetchUser();