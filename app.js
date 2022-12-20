const searchBTN = document.querySelector('#searchButton');

function search(e) {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  const performing = document.querySelector('#performers').value;
  let resultsEl = document.querySelector('#results');
  let apiKey = `MzEwOTQ3OTl8MTY3MTQ2NjcxNC44MTk5ODEz`;

  // construct API using city and API Key
  let api =`https://api.seatgeek.com/2/performers?q=${performing}&client_id=${apiKey}`
  //&client_id=${apiKey}`'
  // request the data
  console.log(api)
  fetch(api).then(response => {
    return response.json();
  })
  .then((data) => {
  resultsEl.innerHTML = `<p> ${performing} 
  <br/> current events:${data.performers[0].num_upcoming_events}.</p><br/>`;
  console.log(data.performers[0].num_upcoming_events)
})
};

searchBTN.addEventListener('click', search);
