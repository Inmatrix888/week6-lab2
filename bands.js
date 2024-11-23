const bands = [
    {
        name: 'Chartered Land',
        genre:'Country Music',
        formedYear: 1983,
        active: true
    },
    {
        name: 'Sky Walkers',
        genre: 'Blue Grass',
        formedYear:2011,
        active: false
    },
    { name:'Twilight Quest',
    genre: 'Jazz',
    formedYear:2020,
    active: true
        
    }  
]
function renderBands() {
    const container = document.getElementById('cardContainer')
    container.innerHTML = '';
    
    bands.forEach(band => {
        const bandCard = document.createElement('div');
        bandCard.innerHTML =
         `<div class='card mt-2 mb-2'>
            <div class='card-body'>
                <h3 class='card-title'>${band.name}</h3>
                <p class='card-text'>Genre:${band.genre} </p>
                <p class='card-text'>Formed Year:${band.formedYear} </p>
                <p class='card-text'>Status:${band.active}</p>
            </div>
        </div>
        `;
   container.appendChild(bandCard);
    })
}

    renderBands();
