import LongTxt from './LongTxt.js'

export default {
  props: ['book'],
  template: `
        <section class="book-details">
            <h2><span>Title:</span> {{ book.title }}</h2>
            <h3><span>Subtitle:</span> {{ book.subtitle }}</h3>
            <h3><span>Authors:</span> {{ book.authors[0] }}</h3>
            <h3><span>Published Date:</span> {{ handleDateState }}</h3>
            <LongTxt :txt="book.description"/>
            <h3><span>Page Count:</span> {{ handleReadingState }}</h3>
            <h3><span>Categories:</span> {{ book.categories[0] }}</h3>
            <img :src="book.thumbnail" alt="thumbnail">
            <h3><span>Language:</span> {{ book.language }}</h3>
            <ul><span>List Price:</span>
            <h4>Amount: <span :class="handleAmountClass">{{ book.listPrice.amount }}</span></h4>
            <h4><span>Currency:</span> {{ book.listPrice.currencyCode }}</h4>
            <h4><span>Sale?:</span> {{ handleSale }}</h4>
            </ul>
            <h3><span>Id:</span> {{ book.id }}</h3>
            <button @click="closeDetails">Close</button>
        </section>
    `,
  methods: {
    closeDetails() {
      this.$emit('hide-details')
    },
  },
  computed: {
    handleReadingState() {
      const currCount = this.book.pageCount
      if (currCount >= 500) return currCount + ' ,Serious Reading...'
      else if (currCount >= 200) return currCount + ' ,Descent Reading... '
      else return currCount + '  ,Light Reading...'
    },
    handleDateState() {
      const currYear = new Date().getFullYear()
      if (currYear - 10 > this.book.publishedDate)
        return this.book.publishedDate + ' ,Vintage'
      else if (currYear - 1 <= this.book.publishedDate)
        return this.book.publishedDate + ' ,New'
    },
    handleAmountClass() {
      const currAmount = this.book.listPrice.amount
      return { red: currAmount > 150, green: currAmount < 20 }
    },
    handleSale() {
        const onSale = this.book.listPrice.isOnSale
        if (onSale) return onSale + ' 🤑'
        else return onSale + ' 🥺'
      },
  },
  components: {
    LongTxt,
}
}
