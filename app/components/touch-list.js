import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Ember from 'ember';
// import notification from 'beta-list/utils/notification';

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
  swipeLeft(event) {
    let itemParents = Ember.$(event.target).closest(".listItem").closest("div");   // should be 0 or 1
    if (itemParents.length) {
      console.log("swipeLeft: " + itemParents[0]);

      this.manipulateOverlay(itemParents, false);
    }
  },

  swipeRight(event) {
    let itemParents = Ember.$(event.target).closest(".listItem").closest("div");   // should be 0 or 1
    console.log(itemParents);
    if (itemParents.length) {
      // let listItem = listItems[0];
      // let index = listItem.dataset.index;
      // console.log("swipeRight: " + index, Ember.$(event.target).closest(".listItem"));

      this.manipulateOverlay(itemParents, true);
    }
  },

  manipulateOverlay(itemParents, moveRight) {
    let overlays = itemParents.children('.overlay');
    console.log("manipulateOverlay: " + overlays.length + " overlays");
    if (overlays.length === 0) {   // no overlay
      let overlayClass = moveRight ? 'overlayLeft' : 'overlayRight';
      itemParents.append('<div class="overlay ' + overlayClass + '"> </div>');
      overlays = itemParents.children('.overlay');
      console.log("created overlay: ", overlays);
      setTimeout(function () {
        overlays.removeClass(overlayClass);
      }, 25);
    } else {   // existing overlay
      console.log("existing overlay: ", overlays);

      overlays.addClass(moveRight ? 'overlayRight' : 'overlayLeft');
      overlays.on('transitionend', function () {
        console.log("transitionend", overlays);
        overlays.remove();
      });
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
