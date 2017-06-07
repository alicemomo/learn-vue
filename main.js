Vue.component("coupon", {

  template: `
    <input type="text" @blur="emitApply" placeholder="Enter a coupon code" >
  `,

  methods: {

    emitApply() {
      this.$emit("applied")
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

  }
});
