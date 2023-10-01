export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review',
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
