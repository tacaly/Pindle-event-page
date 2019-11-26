const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://admin.pindle.dk/api/v2/activities.xml?hvor=Odense&api_key=fc2af6ef007d0da9d76d2ebfb171370387e9b9d2f4e28fa216d30e53e39256b4', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(arrangement => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = arrangement.title;

      const p = document.createElement('p');
      movie.beskrivelse = arrangement.beskrivelse.substring(0, 300);
      p.textContent = `${arrangement.beskrivelse}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Virker ikke!`;
    app.appendChild(errorMessage);
  }
}

request.send();
