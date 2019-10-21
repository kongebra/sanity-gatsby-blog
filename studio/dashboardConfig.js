export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dada1863649f5d988240690',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9fxurpfh',
                  apiId: '43888b5c-222a-4925-a106-2502997bef2b'
                },
                {
                  buildHookId: '5dada18653454d8b258572f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9kk5vr4h',
                  apiId: 'cedcde62-3a8d-43aa-8a04-4b6410a75624'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kongebra/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9kk5vr4h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
