import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      console.log("didTransition to index");
      $('.panelList').removeClass('right');
      $('.panelDetail').removeClass('right');
      return true; // Bubble the didTransition event
    }
  }
});
