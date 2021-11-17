import CONFIG from '../../globals/config';

const createRestaurantFoodsTemplate = (foods) => {
  let foodsDOM = '';
  foods.forEach((food) => {
    foodsDOM += `<li tabindex="0">${food.name}</li>`;
  });

  return foodsDOM;
};

const createRestaurantDrinksTemplate = (drinks) => {
  let drinksDOM = '';
  drinks.forEach((drink) => {
    drinksDOM += `<li tabindex="0">${drink.name}</li>`;
  });

  return drinksDOM;
};

const createRestaurantReviewTemplate = (reviews) => {
  let reviewsDOM = '';
  reviews.forEach((review) => {
    reviewsDOM += `
      <h4 tabindex="0">${review.name}</h4>
      <p tabindex="0">${review.date}</p>
      <p tabindex="0">${review.review}</p>
    `;
  });

  return reviewsDOM;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title" tabindex="0">${restaurant.name}</h2>
  <img 
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
      class="restaurant-image" 
      alt="${restaurant.name} image"
      tabindex="0"
  >
  <div class="restaurant_info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
  </div>

  <div class="restaurant_overview">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>

  <div>
    <h3 tabindex="0">Foods Menu</h3>
    <ul>
      ${createRestaurantFoodsTemplate(restaurant.menus.foods)}
    </ul>
  </div>

  <div>
    <h3 tabindex="0">Drinks Menu</h3>
    <ul>
      ${createRestaurantDrinksTemplate(restaurant.menus.drinks)}
    </ul>
  </div>

  <div>
    <h3 tabindex="0">Restaurant Reviews</h3>
    <div>
      ${createRestaurantReviewTemplate(restaurant.customerReviews)}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card">
    <img 
      loading="lazy"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
      class="restaurant-image lazyload" 
      alt="${restaurant.name} image"
      tabindex="0"
    >
    <div class="restaurant-details">
      <p tabindex="0" class="rating">Rating: <span>${restaurant.rating}</span></p>
      <h3 tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p tabindex="0">${restaurant.city}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
