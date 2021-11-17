const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-details a');

  const firstRestaurant = locate('.restaurant-details a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-found');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-details a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
