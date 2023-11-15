document.addEventListener('DOMContentLoaded', function() {
    const peopleWrapper = document.getElementById('peopleWrapper');

    // Sample. Need to use csv file
    const alumni = [
        { name: "Alumni1", title: "Title1", bio: "Bio1", linkedIn: "linkedin1", imageName: "image1.jpg", year: "2020" },
        { name: "Alumni2", title: "Title2", bio: "Bio2", linkedIn: "linkedin2", imageName: "image2.jpg", year: "2019" },
        { name: "Alumni3", title: "Title3", bio: "Bio3", linkedIn: "linkedin3", imageName: "image3.jpg", year: "2018" },
        { name: "Alumni4", title: "Title4", bio: "Bio4", linkedIn: "linkedin4", imageName: "image4.jpg", year: "2018" },
        { name: "Alumni5", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Alumni5", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        { name: "Alumni5", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Alumni5", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Alumni9", title: "Title5", bio: "Bio5", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2017" },
        // ... more alumni ...
    ];

    // Group alumni by year
    const alumniByYear = alumni.reduce((acc, alum) => {
        acc[alum.year] = acc[alum.year] || [];
        acc[alum.year].push(alum);
        return acc;
    }, {});

    // Sort and display each year and its alumni
    Object.keys(alumniByYear).sort().reverse().forEach(year => {
        // Create a header for each year with fade-in effect
        const yearHeader = document.createElement('div');
        yearHeader.className = 'header reveal'; // Moved inside the loop
        yearHeader.innerHTML = `<h1>Class of ${year}</h1>`;
        peopleWrapper.appendChild(yearHeader);

        // Create a card wrapper for each year with fade-in effect
        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'cards-wrapper reveal'; // Moved inside the loop

        // Add cards to the card wrapper
        alumniByYear[year].forEach(alum => {
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
    });

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