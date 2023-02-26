import BookPreview from './BookPreview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id">
                    <BookPreview :book="book"/>
                    <button @click="showDetails(book.id)">Details</button>
                    <!-- <button @click="remove(car.id)">x</button> --> 
                </li>
            </ul>
        </section>
    `,
    methods: {
        // remove(carId) {
        //     this.$emit('remove', carId)
        // },
        showDetails(bookId){
            this.$emit('show-details', bookId)
        },
    },
    components: {
        BookPreview,
    }
}