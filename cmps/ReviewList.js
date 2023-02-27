export default {
  props: ['book'],
  template: `
              <div class="user-review">
        <ul class="review-list" v-for="review in book.reviews" :key="review.id"> 
            <h2>{{review.fullname}} Review 👇</h2>
                <li>Rating: {{review.rating}}</li> 
                <li>{{review.fullname}} read this book at: {{review.readAt}} </li>
                <button class="remove-btn" @click="remove(review.id)">x</button>  
        </ul>
</div>
    `,
  methods: {
    remove(reviewId) {
      this.$emit('remove', reviewId)
      console.log(reviewId)
    },
  },
  components: {
    
  },
}
