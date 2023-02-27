import { bookService } from '../services/book.service.js'
import { eventBusService } from '../services/event-bus.service.js'

import LongTxt from '../cmps/LongTxt.js'
import AddReview from '../cmps/AddReview.js'
import ReviewList from '../cmps/ReviewList.js'

export default {
  template: `
        <section class="book-details" v-if="book">
            <h2><span>Title:</span> {{ book.title }}</h2>
            <h3><span>Subtitle:</span> {{ book.subtitle }}</h3>
            <h3><span>Authors:</span> {{ authors }}</h3>
            <h3><span>Published Date:</span> {{book.publishedDate}} {{ handleDateState }}</h3>
            <LongTxt :txt="book.description" />
            <h3><span>Page Count:</span>{{book.pageCount}} {{ handleReadingState }}</h3>
            <h3><span>Categories:</span> {{ book.categories[0] }}</h3>
            <h3><span>Language:</span> {{ book.language }}</h3>
            
            <span>Amount: 
              <span :class="handleAmountClass">{{ formattedPrice }}</span>
           </span>

            <h4 v-if="book.listPrice.isOnSale">ON SALE!</h4>
         
          <img :src="book.thumbnail" alt="thumbnail">
          <RouterLink to="/book">Back to list</RouterLink>
          <AddReview :bookId="book.id" />
          <ReviewList :book="book" @remove="removeReview" />
        </section>
    `,
  data() {
    return {
      book: null,
    }
  },
  created() {
    const { bookId } = this.$route.params
    bookService.get(bookId).then((book) => (this.book = book))
  },
  methods: {
    removeReview(reviewId) {
      bookService
        .removeRev(this.book.id, reviewId)
        .then((updatedBook) => {
          this.book = updatedBook
          eventBusService.emit('show-msg', {
            txt: 'Review removed',
            type: 'success',
          })
        })
        .catch((err) => {
          eventBusService.emit('show-msg', {
            txt: 'Review remove failed',
            type: 'error',
          })
        })
    },
  },
  computed: {
    handleReadingState() {
      const currCount = this.book.pageCount
      if (currCount >= 500) return ', Serious Reading'
      if (currCount >= 200) return ', Descent Reading '
      if (currCount < 100) return ', Light Reading'
    },
    handleDateState() {
      const currYear = new Date().getFullYear()
      if (currYear - 10 > this.book.publishedDate) return ', Vintage'
      if (currYear - 1 <= this.book.publishedDate) return ', New'
    },
    handleAmountClass() {
      const currAmount = this.book.listPrice.amount
      return { red: currAmount > 150, green: currAmount < 20 }
    },
    formattedPrice() {
      const { amount, currencyCode } = this.book.listPrice
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currencyCode,
      }).format(amount)
    },
    authors() {
      return this.book.authors.join(', ')
    },
  },
  components: {
    LongTxt,
    AddReview,
    ReviewList,
  },
}
