import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    console.log(`id ${id}`);
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurant;
  }

  static async addReview(data) {
    console.log(data);
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    console.log(response);
    return responseJson.results;
  }
}

export default RestaurantSource;
