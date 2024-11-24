$(".img").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
});


$('#box').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items: 2,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
            
        },
        576:{
            items:3,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
        },
        991:{
            items: 4,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
        }
    }
})

// You can add JavaScript here to handle dynamic behavior, such as fetching data from an API or updating content. For example:

// Fetch destination data from an API
fetch('https://api.example.com/destinations')
    .then(response => response.json())
    .then(data => {
        // Update the HTML with the fetched data
        const destinationCards = document.querySelector('.destination-cards');
        data.forEach(destination => {
            const card = document.createElement('div');
            card.classList.add('destination-card');
            card.innerHTML = `
                <img src="${destination.imageUrl}" alt="${destination.name}">
                <h3>${destination.name}</h3>
                <p>Average price: NPR ${destination.averagePrice}</p>
            `;
            destinationCards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });