Vue.component('message', {

  props: ["title", "body", "initial_visible"],


  data() {

    return {
      isVisible: this.initial_visible
    };

  },

  template: `
    <article class="message" v-if="isVisible" >
      <div class="message-header">
          {{ title }}
        <button class="delete" @click="hideModal"></button>
      </div>
      <div class="message-body">
        {{ body }}
      </div>
    </article>
  `,

  methods: {

    hideModal() {
      this.isVisible = false;
    }

  }
})


new Vue({
  el: "#root"
});
