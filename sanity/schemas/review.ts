export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'stars',
      type: 'number',
      title: 'Stars',
    },
  ],
}
