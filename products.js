const products = [{

    name: 'Eggs',
    category: 'Poultry',
    price: 3.26,
    inStock: true
},
{
    name:'Shrimp',
    category: 'Shell Fish',
    price: 8.75,
    inStock: true 
},
{
    name:'Pea Soup',
    category:'Soup',
    price: 5.00,
    inStock: true
}
   ]

   function renderProducts(){
    const list = document.getElementById('productsList');
    list.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item' 
        listItem.innerHTML = 
        `<h4>${product.name}</h4> <br>
                <p> Category:${product.category} </p> <br>
                <p>Price:${product.price} </p> <br>
                <p>In Stock:${product.inStock} </p> <br>`
                list.appendChild(listItem);
    });
    }

    renderProducts();