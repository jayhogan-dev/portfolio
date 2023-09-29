export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date',
    },
    {
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
