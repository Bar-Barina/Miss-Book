export default {
    template: `
        <section class="book-filter">
            <input class="search"
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </section>
            `,
    data() {
        return {
            filterBy: { title: ''},
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}