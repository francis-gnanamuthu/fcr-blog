module.exports = {
    title: 'Francis Gnanamuthu Blog',
    description: 'Francis Gnanamuthu Blog',
    head: [
        ['link', { rel: 'icon', href: '/icons/favicon.png' }]
      ],
    themeConfig:{
        lastUpdated: 'Last Updated',
        logo: '/icons/logo.jpg',
        nav:[
            {text: 'Home', link: '/'},
            {text: 'Archived posts', link:'/posts/'},
            {text: 'About Me', link: 'aboutme'}
        ]
    }
}