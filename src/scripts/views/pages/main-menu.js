import RestaurantSource from '../../data/restaurant-source';
import './restaurant-list';

class MainMenu extends HTMLElement {
  constructor() {
    super();
    console.log('MainMenu constructor');
  }

  async connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('./styles/main-menu.css')
      </style>

      <section class="hero-element" id="maincontent">
        <div class="intro">
          <h2 tabindex="0">Wanna find a good restaurant?</h2>
          <p tabindex="0">This is the right place for you</p>
        </div>
      </section>

      <section class="explore">
          <h2 tabindex="0">Explore Restaurants</h2>
          <restaurant-list></restaurant-list>
      </section>
    `;

    await this.afterRender();
  }

  async afterRender() {
    const restaurantList = this.querySelector('restaurant-list');
    const restaurants = await RestaurantSource.getRestaurantList();

    restaurantList.restaurants = restaurants;
  }
}

customElements.define('main-menu', MainMenu);
