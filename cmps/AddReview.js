// import bookService from '../services.bookService.js'

export default {
  template: `
    <form>
        <h2>Add A Review!</h2>
      <label for="fullname">Fullname:</label>
      <input type="text" id="fullname" v-model="fullname">
      <hr>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <hr>
      <label for="readAt">Read at:</label>
      <input type="date" id="readAt" v-model="readAt">
      <hr>
      <button type="submit">Submit</button>
      <hr>
    </form>
    `,
  data() {
    return {
      fullname: '',
      rating: 1,
      readAt: '',
      bookReviews: [],
    }
  },
  mounted() {

  },
  methods: {
    
  },
  components: {
    // bookService,
  },
}
