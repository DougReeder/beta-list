import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var lipsum = "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".split(" ");

    var items = [];
    for (var i = 0; i < 500; i++) {
      var text = [];
      for (var j=0; j<Math.random()*60; j++) {
        text.push (lipsum[Math.floor(Math.random()*lipsum.length)]);
      }
      text.push(i);
      items.push({name: text.join(" "), index: i});
    }
    return items;
  }
});
