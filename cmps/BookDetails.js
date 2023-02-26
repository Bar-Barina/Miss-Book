export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2><span>Title:</span> {{ book.title }}</h2>
            <h3><span>Subtitle:</span> {{ book.subtitle }}</h3>
            <h3><span>Authors:</span> {{ book.authors[0] }}</h3>
            <h3><span>Published Date:</span> {{ book.publishedDate }}</h3>
            <h3><span>Description:</span> {{ book.description }}</h3>
            <h3><span>Page Count:</span> {{ book.pageCount }}</h3>
            <h3><span>Categories:</span> {{ book.categories[0] }}</h3>
            <img :src="book.thumbnail" alt="thumbnail">
            <h3><span>Language:</span> {{ book.language }}</h3>
            <h3><span>List Price:</span> {{ book.listPrice[0] }}</h3>
            <h3><span>Id:</span> {{ book.id }}</h3>
        
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    }
}