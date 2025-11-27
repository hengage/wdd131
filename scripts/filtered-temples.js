const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Côte d'Ivoire",
    location: "Abidjan, Côte d'Ivoire",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59305.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "2022, June, 19",
    area: 52921,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28222.jpg"
  },
];

const templesGrid = document.querySelector('.temples-grid')
const navLinks = document.querySelectorAll('.nav-menu a')

function displayTemples(filteredTemples) {
  templesGrid.innerHTML = ''
  filteredTemples.forEach(temple => {
    templesGrid.innerHTML += `
      <section class="temple-card">
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} Temple" loading="lazy"/>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </section>
    `
  })
}

function filterTemples(criteria) {
  switch(criteria) {
    case 'old':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
    case 'new':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
    case 'large':
      return temples.filter(temple => temple.area > 90000)
    case 'small':
      return temples.filter(temple => temple.area < 10000)
    default:
      return temples
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const criteria = e.target.textContent.toLowerCase()
    const filtered = filterTemples(criteria)
    displayTemples(filtered)
    document.getElementById('page-title').textContent = e.target.textContent
  })
})

// Displaying all temples initially
displayTemples(temples)
