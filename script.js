const restaurants =[
    {
        name:"Juans Deli",
        cuisine: "Sub Sandwiches",
        location:"Orange Texas",
        rating: 5
    },
    
    {
        name:"Clares Cookies",
        cuisine: "Cookie Cakes",
        location: "Harrisburg Pa",
        rating: 3
    },

    {
        name:"Eddies Tavern",
        cuisine:"Soul Food",
        location: "Orangeburg South Carolina",
        rating:4
    }   
]

function renderRestaurants() {
    const cards = document.getElementById("cardContainer"); 
    cards.innerHTML = '';
 restaurants.forEach(restaurant =>{
        const card = document.createElement('div');
        card.innerHTML =
        `<div class='card mt-2 mb-2'>
            <div class='card-body'>
                <h3 class='card-title'>${restaurant.name}</h3>
                <p class='card-text'>Cuisine:${restaurant.cuisine} </p>
                <p class='card-text'>Location:${restaurant.location} </p>
                <p class='card-text'>Rating:${restaurant.rating}</p>
            </div>
        </div>
        `;
        cards.appendChild(card);

 })
}
renderRestaurants();







