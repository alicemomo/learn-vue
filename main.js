Vue.component("tabs", {

  data() {

    return {

      tabs: []

    }
  },

  template: `

    <div>

      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" v-bind:class=" { 'is-active' : tab.isActive } ">
            <a href="#" @click="selectTab(tab)"> {{ tab.name }} </a>
          </li>
        </ul>
      </div>

      <div class="tab-details">
        <slot></slot>
      </div>

    </div>

  `,

  created() {
    this.tabs = this.$children ;
  },

  methods: {

    selectTab(selectedTab) {

      this.tabs.forEach(tab => {
        tab.isActive = ( tab.name == selectedTab.name ) ;
      });

    }

  }

})

Vue.component("tab", {

  template: `

    <div v-if="isActive">
      <slot></slot>
    </div>

  `,

  props: {

    name: { required: true },

    selected: { default: false }

  },

  data() {

    return {

      isActive: this.selected

    }

  }
})


new Vue({
  el: "#root"
});
