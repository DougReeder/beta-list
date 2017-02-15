import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Ember from 'ember';
import notification from 'beta-list/utils/notification';

export default Ember.Component.extend(RecognizerMixin, {
  recognizers: 'tap press swipe',
  tagName: 'div',
  classNames: ['touchList'],
  columns: [100],
  init() {
    console.log("touch-list init");
    this._super(...arguments);
  },

  didUpdateAttrs() {
    console.log("touch-list didUpdateAttrs", ...arguments);
    this._super(...arguments);
  },

  // gestures
  swipeLeft() {
    console.log("swipeLeft:", ...arguments);
  },

  swipeRight(event) {
    let listItems = Ember.$(event.target).closest(".listItem");   // should be 0 or 1
    if (listItems.length) {
      let index = listItems[0].dataset.index;
      console.log("swipeRight: " + index, Ember.$(event.target).closest(".listItem"));

      notification("swipeRight - item " + index, "SWIPE");
    }
  },

  actions: {
    // required(event) {
    //   if (!event.target.value) {
    //     this.get('errors').pushObject({ message: `${event.target.name} is required`});
    //   }
    // }
  }
});
