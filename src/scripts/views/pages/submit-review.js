import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

class SubmitReview extends HTMLElement {
  constructor() {
    super();
    console.log('Submit Review');
  }

  async connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('./styles/submit-review.css')
      </style>

      <h3>Post Review</h3>

      <form id="submitReview">
        <label for="name">Nama</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="review">Review</label><br>
        <textarea name="review" id="review" rows="10" cols="30"></textarea>
        <button type="submit" id="submitButton">Submit</button>
      </form>
    `;
    this.submitHandler();
  }

  submitHandler() {
    const submit = this.querySelector('#submitReview');

    submit.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = UrlParser.parseActiveUrlWithoutCombiner();

      const { id } = url;
      const name = e.target.querySelector('#name').value;
      const review = e.target.querySelector('#review').value;

      await RestaurantSource.addReview({ id, name, review });
      window.location.reload(true);
    });
  }
}

customElements.define('submit-review', SubmitReview);
