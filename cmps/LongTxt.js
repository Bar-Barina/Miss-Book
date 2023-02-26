export default {
  props: ['txt'],
  template: `
               Description: {{readMoreLess}}
               <button @click="isShown = !isShown">
                <span v-if="isShown">Read more</span>
                <span v-if="!isShown">Read less</span>
            </button>
    `,
  data() {
    return {
      isShown: false,
    }
  },

  methods: {

  },
  computed: {
    readMoreLess() {
      if (this.isShown && this.txt.length > 100) return this.txt.slice(0, 100)
      else return this.txt
    },
  },
}
