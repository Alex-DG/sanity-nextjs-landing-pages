export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e218f1ad4ce0573feb4fc61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4wth5w69',
                  apiId: '3fa81022-702f-4997-82cf-24a3d3a0e205'
                },
                {
                  buildHookId: '5e218f1afd97f0caf21b78c4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rp8h6u9w',
                  apiId: '76782f14-4144-40c9-8f59-0ed5ad442404'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alex-DG/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rp8h6u9w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
