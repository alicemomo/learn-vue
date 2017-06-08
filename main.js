// class way
// window.Event = new Vue() ;


// wrapper for $emit and $on functions

window.Event = new class {

  constructor() {

    this.vue = new Vue() ;

  }


  fire(event, data = null) {

    this.vue.$emit(event, data) ;

  }

  listen(event, callback) {

    this.vue.$on(event, callback) ;

  }

}


Vue.component("coupon", {

  template: `
    <input type="text" @blur="emitApply" placeholder="Enter a coupon code" >
  `,

  methods: {

    emitApply() {
      Event.fire("applied") ;
    }

  }

})


new Vue({
  el: "#root",

  data: {

    coupon_applied: false

  },

  methods: {

    applyCoupon() {
      this.coupon_applied = true ;
    }

  },

  created() {

    Event.listen("applied", () => this.applyCoupon());

  }

});
