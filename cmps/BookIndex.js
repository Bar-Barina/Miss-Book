import { bookService } from '../services/book.service.js'

import BookFilter from './BookFilter.js'
import BookList from './BookList.js'

import BookDetails from './BookDetails.js'

export default {
  template: `
        <section class="book-index">
            <BookFilter @filter="setFilterBy"/>
            <BookList :books="books" 
            @show-details="showBookDetails"/>
            <BookDetails 
                v-if="selectedBook" 
                @hide-details="selectedBook = null"
                :book="selectedBook"/>
        </section>
    `,
  data() {
    return {
      books: null,
      selectedBook: null,
      // filterBy: {},
    }
  },
  methods: {
    // removeCar(carId) {
    //     carService.remove(carId)
    //         .then(() => {
    //             const idx = this.cars.findIndex(car => car.id === carId)
    //             this.cars.splice(idx, 1)
    //         })
    // },
    showBookDetails(bookId) {
      this.selectedBook = this.books.find((book) => book.id === bookId)
    //   console.log(bookId)
    },
    // onSaveCar(newCar) {
    //     this.cars.unshift(newCar)
    // },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    // filteredBooks() {
    // }
  },
  created() {
    bookService.query().then((books) => (this.books = books))
  },
  components: {
    BookList,
    BookFilter,
    BookDetails,
  },
}
