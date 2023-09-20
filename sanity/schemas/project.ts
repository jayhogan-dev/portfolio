export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      // Morent - A Car Rental Website
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
      name: 'color',
      type: 'string',
      title: 'Color',
    },
    {
      name: 'laptopImage',
      type: 'image',
      title: 'Laptop Image',
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
    },
    {
      name: 'problemStatementImage',
      type: 'image',
      title: 'Problem Statement Image',
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
      // Header demo site link: should this be url instead?
      name: 'demoSiteLink',
      type: 'url',
      title: 'Demo Site Link',
    },
    {
      // Header source code link: should this be url instead?
      name: 'sourceCodeLink',
      type: 'string',
      title: 'Source Code Link',
    },
    {
      name: 'role',
      type: 'string',
      title: 'My Role',
    },
    {
      // Should this be a date or a string?
      name: 'startDate',
      type: 'string',
      title: 'Start Date',
    },
    {
      // Should this be a date or a string?
      name: 'endDate',
      type: 'string',
      title: 'End Date',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'problemStatement',
      type: 'text',
      title: 'Problem Statement',
    },
    {
      name: 'figmaDesign',
      type: 'image',
      title: 'Figma Design',
    },
    {
      name: 'challenges',
      type: 'array',
      title: 'Challenges',
      of: [{type: 'string'}],
    },
    {
      name: 'learnings',
      type: 'array',
      title: 'Learnings',
      of: [{type: 'string'}],
    },
  ],
}
