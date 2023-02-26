export default {
    name: 'bookPreview',
    props: ['book'],
    template: `
        <fieldset class="book-preview">
            <legend>{{ book.listPrice.amount + book.listPrice.currencyCode }}</legend>
            <img :src="book.thumbnail" alt="thumbnail">
            <h3>{{ book.title }}</h3>
        </fieldset>
    `,
}