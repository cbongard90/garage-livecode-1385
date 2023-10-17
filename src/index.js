console.log("Connected")

// step 1 fetch all cars
const garageName = "garage-1385";
const garageURL = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
const carList = document.querySelector('.cars-list');
// define the function
const fetchAllCars = () => {
  // we call the server
  fetch(garageURL)
    .then(response => response.json())
    .then((data) => {
      console.log(data); // Array
      carList.innerHTML = "";
      // We iterate on the array
      data.forEach((car) => {
        // we create a card for EACH cars
        const carCard = `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>
        `;
        // Insert into the list
        carList.insertAdjacentHTML('afterbegin', carCard);
      })
    })
}

// call the function
fetchAllCars();

// get the Submit button
const submitButton = document.querySelector(".car-form");

console.log(submitButton);
// Listen to the submit event
submitButton.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('click click Im here');
  // we get the information from the inputs
  console.log(event.currentTarget);
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  const newCar = Object.fromEntries(formData)
  console.log('car object', newCar);
  // we post the new car to the data
  fetch(garageURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCar)
  })
    .then(() => fetchAllCars())
    event.currentTarget.reset();
})
