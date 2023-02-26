const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'

const options = {
  template: `
        <section class="container">
        <AppHeader @setRoute="route = $event"/>
        <main class="router-view">
                <HomePage v-if="route === 'HomePage'"/>
                <!-- <CarIndex v-if="route === 'CarIndex'"/> -->
                <AboutPage v-if="route === 'AboutPage'"/>
            </main>
        </section>
    `,
  data() {
    return {
      route: 'HomePage',
    }
  },
  components: {
    AppHeader,
    AppFooter,
    HomePage,
    AboutPage,
  },
}

const app = createApp(options)
app.mount('#app')
