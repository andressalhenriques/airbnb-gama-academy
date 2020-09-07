/*const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);*/

var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);


  if (request.status >= 200 && request.status < 400) {
    data.forEach(apartment => {
      
      const { photo, property_type, name, price } = apartment;

      row = document.querySelector(".row");


      div = document.createElement("div");
      div.className = 'col-md-4';
      row.appendChild(div);

      const card = document.createElement('div');
      card.className = 'card mb-4 box-shadow';
      div.appendChild(card);

      
      const img = document.createElement('img');
      img.className = 'card-img-top';
      img.src = photo;
      img.className = 'property-image';
      card.appendChild(img);

      cardBody =  document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      cardText = document.createElement("div");
      cardText.className = "card-text";
      cardBody.appendChild(cardText);

      const h2 = document.createElement('h2');
      h2.textContent = apartment.property_type;
      h2.className = 'property-type';
      cardBody.appendChild(h2);

      const h1 = document.createElement('h1');
      h1.textContent = apartment.name;
      h1.className = 'property-name';
      cardBody.appendChild(h1);

      const p = document.createElement('p');
      p.textContent = "Total de R$ " +apartment.price + ".";
      p.className = 'property-price';
      cardBody.appendChild(p);
      
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage);
  }
}

request.send()