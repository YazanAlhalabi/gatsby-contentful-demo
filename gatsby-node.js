const path = require(`path`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
      blogs: allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.slug}`,
        component: path.resolve(`./src/templates/Blog/index.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
