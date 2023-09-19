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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      // Header demo site link: should this be url instead?
      name: 'demoSiteLink',
      type: 'string',
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
      type: 'date',
      title: 'Start Date',
    },
    {
      // Should this be a date or a string?
      name: 'endDate',
      type: 'date',
      title: 'End Date',
    },
    {
      // Going to need a label as well
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
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
    },
    {
      name: 'learnings',
      type: 'array',
      title: 'Learnings',
    },
  ],
}
