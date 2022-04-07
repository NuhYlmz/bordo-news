import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'column.list',
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    
    const { options } = data

    return Fetch(Columns, {}, options, 'columns');
  }
});