import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  completed: DS.attr('boolean', { defaultValue: false }),
  priority: DS.attr('string')
});
