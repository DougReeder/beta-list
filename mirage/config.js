export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  var lipsum = "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".split(" ");

  var data = [];
  for (var i = 0; i < 500; i++) {
    var text = [];
    let r = Math.random();
    for (var j=0; j<2+r*r*100; j++) {
      text.push (lipsum[Math.floor(Math.random()*lipsum.length)]);
    }
    text.push(i);
    let priority;
    if (i<=1) {
      priority = "adopted";
    } else if (i >=30) {
      priority = "dismissed";
    } else {
      priority = "";
    }
    let item = {name: text.join(" "), completed: !Boolean((i+1)%3), priority: priority };
    data.push({type: 'item', id: i, attributes: item});
  }


  this.namespace = '/api';

  this.get('/items', function () {
    return {
      data: data
    };
  });

  this.get('/items/:id', ({ items }, request) => {
    let id = request.params.id;

    return {
      data: data[id]
    };
  });
}
