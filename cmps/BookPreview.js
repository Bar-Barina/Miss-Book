export default {
    name: 'bookPreview',
    props: ['book'],
    template: `
            <h2>{{ book.title }}</h2>
            <img :src="book.thumbnail" alt="thumbnail">
            <p>{{ book.listPrice.amount }}</p>
    `,
}