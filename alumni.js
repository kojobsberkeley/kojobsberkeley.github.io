document.addEventListener('DOMContentLoaded', function() {
    const peopleWrapper = document.getElementById('peopleWrapper');

    // Sample. Need to use csv file
    const alumni = [
        { name: "Dongho Eun", title: "Cognitive Science", bio: "Microsoft", linkedIn: "linkedin1", imageName: "image1.jpg", year: "2020" },
        { name: "Yeongho Song", title: "SWE", bio: "Google", linkedIn: "linkedin2", imageName: "image2.jpg", year: "2019" },
        { name: "Sojung Moon", title: "Business Anaylist", bio: "Goldman Sachs", linkedIn: "linkedin3", imageName: "image3.jpg", year: "2018" },
        { name: "Woosung Jung", title: "SWE", bio: "Samsung", linkedIn: "linkedin4", imageName: "image4.jpg", year: "2018" },
        { name: "Jinwoo Hong", title: "Cog Science", bio: "Amazon", linkedIn: "linkedin5", imageName: "image5.jpg", year: "2019" },
        { name: "Doyoung Kim", title: "SWE", bio: "ZOOM", linkedIn: "linkedin6", imageName: "park.jpg", year: "2021" },
        { name: "Jueun Kim", title: "Associate", bio: "Deloitte", linkedIn: "linkedin7", imageName: "image7.jpg", year: "2020" },
        { name: "Chaewon Park", title: "BDM", bio: "SK", linkedIn: "linkedin8", imageName: "image8.jpg", year: "2019" },
        { name: "Jungeun Lee", title: "Assurance staff", bio: "EY", linkedIn: "linkedin9", imageName: "image9.jpg", year: "2022" },
        { name: "Jinwoo Yun", title: "Data Engineering", bio: "BOA", linkedIn: "linkedin10", imageName: "image10.jpg", year: "2018" },
        { name: "Hyunchan Cho", title: "Business planning associate", bio: "LG", linkedIn: "linkedin11", imageName: "image11.jpg", year: "2021" },
        { name: "Inwoo Cheon", title: "Unknown", bio: "Unknown", linkedIn: "linkedin12", imageName: "image12.jpg", year: "2022" }
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
            <img src="Images/${alum.imageName}" alt="${alum.name}">
            </div>
            <h2 class = "bar" >${alum.name}</h2>
            
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


//  <img src="images/Temp/${alum.imageName}" alt="${alum.name}">
// <img src="images/Temp/Staff_Card.jpg" alt="${alum.name}">