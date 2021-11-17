import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import './submit-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
    console.log('RestaurantDetail constructor');
  }

  async connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous">
  
      <style>
        @import url('./styles/restaurant-detail.css')
      </style>

      <div id="loader"></div>
      <div id="restaurantDetail" class="restaurant-detail"></div>
    `;

    await this.afterRender();
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantSource.getRestaurantDetail(url.id);

      this.querySelector('#loader').style.display = 'none';
      const restaurantDetailContainer = this.querySelector('#restaurantDetail');

      restaurantDetailContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
      this.innerHTML += '<submit-review></submit-review>';
      this.innerHTML += '<div id="likeButtonContainer"></div>';

      LikeButtonPresenter.init({
        likeButtonContainer: this.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (err) {
      const errorNode = document.createElement('p');
      errorNode.innerHTML = 'Tidak dapat menampilkan data';

      const restaurantDetailContainer = this.querySelector('#restaurantDetail');

      restaurantDetailContainer.append(errorNode);
    }
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
