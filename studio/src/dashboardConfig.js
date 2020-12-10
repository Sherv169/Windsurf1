export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd2424b53c4b22c9ce36367',
                  title: 'Sanity Studio',
                  name: 'windsurf-1-studio',
                  apiId: 'c523078f-7912-4c1b-b91e-989b4f368d65'
                },
                {
                  buildHookId: '5fd2424bcc67f80e4306a83e',
                  title: 'Blog Website',
                  name: 'windsurf-1',
                  apiId: 'b19c3c8d-b356-4fed-9878-3cdfad32de95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sherv169/Windsurf1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://windsurf-1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
