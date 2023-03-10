class SwapiService {
  _baseUrl = "https://swapi.dev/api/";
  _baseImgUrl = "https://starwars-visualguide.com/assets/img/";
  async getResource(url = "people/") {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error("Faild to fetch data!!!!!!!!!");
    }
    return res.json();
  }
  getAllPeople = async () => {
    const people = await this.getResource();
    return people.results.map(this._transformPerson);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  };
  getAllPlanets = async () => {
    const getPlanets = await this.getResource("planets/");
    const results = getPlanets.results;
    return results.map(this._transformPlanetData);
  };
  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanetData(planet);
  };
  getAllStarships = async () => {
    const ships = await this.getResource("starships/");
    return ships.results.map(this._transoformStarShip);
  };
  getStarship = async (id) => {
    const starShip = await this.getResource(`starships/${id}/`);
    return this._transoformStarShip(starShip);
  };
  getPersonImage = (id) => {
    return `${this._baseImgUrl}characters/${id}.jpg`;
  };
  getPlanetImage = (id) => {
    return `${this._baseImgUrl}planets/${id}.jpg`;
  };
  getStarShipImage = (id) => {
    return `${this._baseImgUrl}starships/${id}.jpg`;
  };
  _extractID = (item) => {
    const regEx = /\/([0-9]*)\/$/;
    const id = item.url.match(regEx)[1];
    return id;
  };
  _transformPlanetData = (planet) => {
    // console.log(this._extractID(planet));
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };
  _transoformStarShip = (starship) => {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
  _transformPerson = (person) => {
    return {
      id: this._extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
export default SwapiService;
