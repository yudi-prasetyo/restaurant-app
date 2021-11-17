import { createRestaurantItemTemplate } from '../templates/template-creator';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    console.log('RestaurantList constructor');
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    try {
      this.afterRender();
    } catch (err) {
      const errorNode = document.createElement('p');
      errorNode.innerHTML = 'Tidak dapat menampilkan data';
      this.append(errorNode);
    }
  }

  async connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('./styles/restaurant-list.css')
      </style>

      <div id="loader"></div>
    `;
  }

  afterRender() {
    this.querySelector('#loader').style.display = 'none';

    if (this._restaurants.length) {
      const restaurantListContainer = document.createElement('div');
      restaurantListContainer.classList.add('restaurant-found');
      this._restaurants.forEach((restaurant) => {
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      this.append(restaurantListContainer);
    } else {
      this.innerHTML = '<div class="restaurant-not-found">Tidak ada restoran untuk ditampilkan</div>';
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
