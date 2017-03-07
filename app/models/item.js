import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  completed: DS.attr(),
  priority: DS.attr()
});
