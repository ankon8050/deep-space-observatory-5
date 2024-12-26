const withMdxFm = require("next-mdx-frontmatter")();

module.exports = withMdxFm({
  basePath: '/deep-space-observatory-5',
  assetPrefix: '/deep-space-observatory-5/',
  images: {
    domains: ["s3.us-west-2.amazonaws.com"]
  }
});
