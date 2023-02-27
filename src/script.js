const container = document.getElementById('container');
const loading = document.getElementById('loading');

class Api {
    constructor() {
        this._url = 'https://swapi.dev/api/';
    }

    async _getResource(resource) {
        const res = await fetch(`${this._url}${resource}`);
        if (!res.ok) {
            throw new Error('Ինչ որ բան այն չէ');
        }
        return await res.json();
    }

    getAllPlanets() {
        return this._getResource('planets');
    }

    getAllPlanet(id) {
        return this._getResource(`planets/${id}`);
    }

    getAllUsers() {
        return this._getResource('people');
    }

    getAllUser(id) {
        return this._getResource(`people/${id}`);
    }
}


function createCardEl(planets) {
    const main = document.createElement('div');
    main.id = "main";
    planets.results.forEach(planet => {
        const div = document.createElement('div');
        div.classList.add('card');
        const urlParts = planet.url.split("/");
        div.innerHTML = `<h4 class="test">${planet.name}</h4><ul><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li></ul><button class="more" data-id="${urlParts[urlParts.length - 2]}">More</button>`;
        main.appendChild(div);
    });
    container.appendChild(main);
}

async function createPlanet(event) {
    const api = new Api();
    const dataId = event.target.dataset.id;
    const planet = await api.getAllPlanet(dataId);

    const main = document.getElementById('main');
    main.innerHTML = `<h1 class="test">${planet.name}</h1><ul><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li><li>Planet diameter: 3455</li></ul>`;

    console.log(planet);
}

async function init() {
    const api = new Api();
    loading.classList.add('display');
    const planets = await api.getAllPlanets();
    createCardEl(planets);
    loading.classList.remove('display');
    let btnId = document.getElementsByClassName("more");
    for (let i = 0; i < btnId.length; i++) {
        btnId[i].addEventListener("click", createPlanet);
    }
}

init();




