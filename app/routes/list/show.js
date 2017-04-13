import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('item', params.item_id);
  },

  actions: {
    // didTransition() {
    //   console.log("didTransition to show");
    //   $('.panelList').addClass('right');
    //   $('.panelDetail').addClass('right');
    //   return true; // Bubble the didTransition event
    // }
  }
});
