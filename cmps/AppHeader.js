export default {
    template: `
        <header class="app-header">
            <h1>Miss Book</h1>
            <nav>
                <a @click="setRoute('HomePage')" href="#">Home</a>
                <!-- <a @click="setRoute('CarIndex')" href="#">Cars</a> -->
                <a @click="setRoute('AboutPage')" href="#">About</a>
            </nav>
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('set-route', route)
        }
    }
}