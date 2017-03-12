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
  // tap(event) {
  //   let listItems = Ember.$(event.target).closest(".listItem");   // should be 0 or 1
  //   if (listItems.length) {
  //     let index = listItems[0].dataset.index;
  //     console.log("tap: " + index, this.getProperties());
  //     let model = this.get('model');
  //     // console.log("model:", model);
  //     let store = model.get('store');
  //     // console.log("store:", store);
  //     let record = store.findRecord('item', index);
  //     console.log("record:", record);
  //   }
  // },

  swipeLeft(event) {
    let listItems = Ember.$(event.target).closest(".listItem");   // should be 0 or 1
    if (listItems.length) {
      let index = listItems[0].dataset.index;
      console.log("swipeLeft: " + index, listItems[0]);

      this.manipulateOverlay(listItems, false, dismissOrUnadopt);
    }

    function dismissOrUnadopt() {
      if (listItems.hasClass('adopted')) {
        listItems.removeClass('adopted');
      } else {
        listItems.addClass('dismissed');
      }
    }
  },

  swipeRight(event) {
    let listItems = Ember.$(event.target).closest(".listItem");   // should be 0 or 1
    console.log(listItems);
    if (listItems.length) {
      let index = listItems[0].dataset.index;
      console.log("swipeRight: " + index, listItems[0]);

      this.manipulateOverlay(listItems, true, adoptOrUndismiss);
    }

    function adoptOrUndismiss() {
      if (listItems.hasClass('dismissed')) {
        listItems.removeClass('dismissed');
      } else {
        listItems.addClass('adopted');
      }
    }
  },

  manipulateOverlay(listItems, moveRight, callback) {
    let overlays = listItems.children('.overlay');
    console.log("manipulateOverlay: " + overlays.length + " overlays");
    if (overlays.length === 0) {   // no overlay
      let overlayClass = moveRight ? 'overlayLeft' : 'overlayRight';
      listItems.append('<div class="overlay ' + overlayClass + '"> </div>');
      overlays = listItems.children('.overlay');
      console.log("created overlay: ", overlays);
      setTimeout(function () {
        overlays.removeClass(overlayClass);
      }, 25);
      overlays.one('transitionend', function () {
        console.log("transitionend 1", overlays);
        overlays.addClass('fadeout');
        callback();

        overlays.one('transitionend', function () {
          console.log("transitionend 2", overlays);
          overlays.remove();
        });
      });
    } else {   // existing overlay
      console.log("existing overlay: ", overlays);

      overlays.addClass(moveRight ? 'overlayRight' : 'overlayLeft');
      overlays.on('transitionend', function () {
        console.log("transitionend", overlays);
        overlays.remove();
        callback();
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
