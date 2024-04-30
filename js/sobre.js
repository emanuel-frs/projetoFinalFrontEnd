const cardsContainer = document.getElementById('cards');

const card = `
<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                </div>
            </div>
`
const area = document.createElement('ul');
area.classList.add('card-list');
cardsContainer.appendChild(area);

function criarCard(){
    const cardItem = document.createElement('li');
    cardItem.classList.add('card');
    cardItem.innerHTML = card;
    return cardItem;
}

for(let i =0; i < 6; i++){
    area.appendChild(criarCard())
}
