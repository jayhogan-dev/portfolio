export default {
  name: 'project',
  type: 'document',
  title: 'Project',
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
      name: 'demoSiteLink',
      type: 'url',
      title: 'Demo Site Link',
    },
    {
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
      name: 'startDate',
      type: 'string',
      title: 'Start Date',
    },
    {
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
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
