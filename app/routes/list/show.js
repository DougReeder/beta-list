import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('item', params.item_id);
  },

  actions: {
    didTransition() {
      console.log("didTransition");
      // $('.panelContainer')[0].scrollLeft = 10000;
      $('.panelContainer').animate({
        scrollLeft: $('.panelContainer').width()
      }, {
        duration: 330
      });
      return true; // Bubble the didTransition event
    }
  }
});
