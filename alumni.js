document.addEventListener('DOMContentLoaded', function() {
    const peopleWrapper = document.getElementById('peopleWrapper');

    // Sample. Need to use csv file
    const alumni = [
        { name: "John Smith", title: "Business", bio: "Google", linkedIn: "linkedin1", imageName: "image1.jpg", year: "2020" },
        { name: "Emily Johnson", title: "Computer Science", bio: "Apple", linkedIn: "linkedin2", imageName: "image2.jpg", year: "2019" },
        { name: "Michael Brown", title: "Data Science", bio: "Facebook", linkedIn: "linkedin3", imageName: "image3.jpg", year: "2018" },
        { name: "Sarah Davis", title: "Business", bio: "Amazon", linkedIn: "linkedin4", imageName: "image4.jpg", year: "2018" },
        { name: "Daniel Miller", title: "Computer Science", bio: "Netflix", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Olivia Wilson", title: "Business", bio: "Apple", linkedIn: "linkedin6", imageName: "image6.jpg", year: "2021" },
        { name: "William Jones", title: "Data Science", bio: "Google", linkedIn: "linkedin7", imageName: "image7.jpg", year: "2020" },
        { name: "Sophia Garcia", title: "Computer Science", bio: "Amazon", linkedIn: "linkedin8", imageName: "image8.jpg", year: "2019" },
        { name: "James Martinez", title: "Business", bio: "Facebook", linkedIn: "linkedin9", imageName: "image9.jpg", year: "2022" },
        { name: "Isabella Rodriguez", title: "Data Science", bio: "Netflix", linkedIn: "linkedin10", imageName: "image10.jpg", year: "2018" },
        { name: "Benjamin Lee", title: "Computer Science", bio: "Amazon", linkedIn: "linkedin11", imageName: "image11.jpg", year: "2021" },
        { name: "Charlotte Thomas", title: "Business", bio: "Google", linkedIn: "linkedin12", imageName: "image12.jpg", year: "2022" }
        // ... more alumni ...
    ];

    // Create a card wrapper
    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'cards-wrapper reveal';

    // Add cards to the card wrapper
    alumni.forEach(alum => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <img src="images/Temp/Staff_Card.jpg" alt="${alum.name}">
            </div>
            <h2>${alum.name}</h2>
            <h3>${alum.title}</h3>
            <p>${alum.bio}</p>
            <a href="https://www.linkedin.com/in/${alum.linkedIn}" target="_blank">LinkedIn: @${alum.linkedIn}</a>
        `;
        cardsWrapper.appendChild(card);
    });

    peopleWrapper.appendChild(cardsWrapper);
    peopleWrapper.appendChild(document.createElement('br'));

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', reveal);

    // Check reveal on initial load
    reveal();
});


// <img src="images/Temp/${alum.imageName}" alt="${alum.name}">
// <img src="images/Temp/Staff_Card.jpg" alt="${alum.name}">