import Ember from 'ember';

export default Ember.Controller.extend({
  columns: Ember.computed(function() {
    return [100];
  }),
  actions: {
    // changeColumn: function(col) {
    //   switch (col) {
    //     case 1:
    //       this.set('columns', [25, 50, 25]);
    //       break;
    //     case 2:
    //       this.set('columns', [20, 20, 40, 20]);
    //       break;
    //     default:
    //       this.set('columns', [50, 50]);
    //       break;
    //   }
    // }
  }
});
