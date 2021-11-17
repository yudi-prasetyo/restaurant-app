import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class FavoriteRestaurants extends HTMLElement {
  constructor() {
    super();
    console.log('FavoriteRestaurants constructor');
  }

  async connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('./styles/favorite-restaurants.css')
      </style>

      <section class="favorites">
          <h2 tabindex="0">Favorite Restaurants</h2>
          <restaurant-list></restaurant-list>
      </section>
    `;

    await this.afterRender();
  }

  async afterRender() {
    const restaurantList = this.querySelector('restaurant-list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurantList.restaurants = restaurants;
  }
}

customElements.define('favorite-restaurants', FavoriteRestaurants);
