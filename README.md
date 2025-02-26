# Ankon - Deploy process
npm run build
npm run export
npm install --save-dev gh-pages

Check package.json -> "scripts": {
"deploy": "npm run build && npm run export && gh-pages -d out"
}

npm run deploy

# AWESOME

## DEMO Page

https://theme-awesome.vercel.app/

## Download

You can download latest version from here
https://storage.googleapis.com/theme-awesome/awesome.zip

## Motivation

I just want to create/update markdown files to deploy sites using Git.
This blog can run without any SaaS service such as contentful or Strapi

## Requirements

Node.js and npm

### Theme Structure

```md
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── blog.config.ts           # The theme's original configuration
├── next-sitemap.js          # Sitemap configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by the theme
├── components
│   ├── articles             # The components related to article
│   ├── buttons              # The components related to article
│   ├── common               # The common components
│   ├── layouts              # Layout components of the theme
│   ├── sides                # The components related to side column
│   ├── texts                # The components related to texts
│   └── utils                # The utility components
├── contents                 # Markdown files for each contents
├── pages                    # Next JS pages
├── hooks                    # React hooks functions
├── styles                   # Global css directory
├── types                    # Type utilities
├── utils                    # Utility functions
├── .babelrc                 # Babel configuration to extends Next.js
├── .editorconfig            # Editor configuration
├── .eslint                  # JavaScript coding rule configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Package configuration to install dependencies
├── yarn.lock                # Package configuration to install dependencies
└── vercel.json              # Vercel configuration to deploy the theme
```

## Getting Started

### Install the dependencies

```sh
$ cd ./path/to/the/project
$ npm install
```

### Develop

```
$ npm run dev
```

Open https://localhost:3300 with your favorite browser

## How to deploy

### Create Git Repository on GitHub

First, copy the contents of the theme, and push them to the GitHub

https://github.com/

### Connect Repository on Vercel

Second, Using the vercel is the easiest way to deploy the site.

https://vercel.com/


## Blog Configuration

You can customize the site easily with `blog.config.ts`

`blog.config.ts` looks like below.

**blog.config.ts**

```ts
export default {
  siteLogo: {
    url: "/images/logo.svg",
    width: "201",
    height: "39",
  },
  siteName: "AWESOME",
  title: "AWESOME",
  description: "AWESOME Next.js TypeScript MDX Blog Theme",
  styles: {
    containerMaxWidth: "1280px",
    colors: {
      primary: "#50C0A1",
      primaryGradient: "linear-gradient(to right, #06A9B7, #B0DE87)",
      base: "#F2F4F3",
      border: "",
      bg: "#F7F7F7",
      text: "#2C2C2C",
      grayLighter: "#A0A0A0",
    },
    breakPoints: {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px",
    },
  },
  account: {
    name: "Mr. AWESOME",
    description: "profile here profile here profile here profile here",
    image: `/images/me.png`,
    social: {
      twitter: "https://twitter.com/steelydylan",
      github: "https://github.com/steelydylan",
    },
  },
  hero: {
    title: "My awesome life",
    image: "/images/plane.jpeg",
    description: "AWESOME Next.js TypeScript MDX Blog Theme",
  },
  navigation: [
    {
      name: "travel",
      url: `/travel`,
    },
    {
      name: "camp",
      url: `/camp`,
    },
  ],
  article: {
    defaultThumbnail: "/images/thumbnail.png",
    articlesPerPage: 6,
  },
  categories: [
    {
      id: "camp",
      title: "Camp",
      imagePath: "/images/camp.jpeg",
      description: "Look at my awesome camp life",
    },
    {
      id: "travel",
      title: "Travel",
      imagePath: "/images/london.jpeg",
      description: "Look at my awesome travel life",
    },
  ],
  tags: [
    {
      id: "london",
      title: "London",
    },
    {
      id: "boston",
      title: "Boston",
    },
    {
      id: "paris",
      title: "Paris",
    },
    {
      id: "fire",
      title: "Fire",
    },
    {
      id: "sky",
      title: "Sky",
    },
  ],
};
```

- `siteLogo` the header logo image and its size
- `siteName` the site name for the SEO and OGP
- `title` the title tag
- `description` the description for the top page
- `styles` the site CSS
- `account` the blog author info
- `hero` the hero image of the top page
- `navigation` the header navigation
- `article.defaultThumbnail` the default thumbnail of the each articles
- `article.articlesPerPage` the number of the article of the each index pages
- `writers`
  - `id` the slug of the writer
  - `title` the title of the writer
  - `image` the image url of the writer
  - `description` the description of the writer
- `categories`
  - `id` the slug of the category. it is used for the url
  - `title` the title of the category
  - `imagePath` the image url of the category
  - `description` the description of the category
- `tags`
  - `id` the slug of the tag. it is used for the url
  - `title` the title of the tag

## How to write articles

### Add mdx file

Add mdx files on the following path `contents/***/index.mdx`

The `***` part will be the slug of the article

### Frontmatter

Each articles can have meta info via frontmatter like belows.

```yaml
---
title: Awesome - Next.js Blog Theme
date: 2021-09-18
writtenBy: steelydylan
category: themes
tags: ["about"]
related: []
thumbnail: /images/awesome.png
---
```

- `title` the title of the article
- `date` written date of the article
- `writtenBy` the author of the article
- `category` the category of the article, it should be defined on the `blog.config.ts`
- `related` related articles of the article, it should be the article slugs array
- `thumbnail` the thumbnail image of the article
- `description` the description of this article


## Use Notion API Instead of mdx files

### **Create a database in Notion**.

First, let's create a database in Notion. Type `/table` to create a table block, which will be the database.

Prepare the following properties for the table

- `Page` Title of the portfolio
- `Slug` Used as the URL to display the portfolio
- `Published` Whether to display the portfolio or not
- `Date` The date of the portfolio
- `Authors` The author of this article
- `Thumbnail` Thumbnail of the article
- `Description` Brief description of the portfolio
- `Category` category of the article

This sample page will help

https://mint-hardware-b22.notion.site/7e9876bd5ca14342aff2608403804a8a?v=25494ae1a48846e7bf6fe31fb699e185

### **Get Secret Key and Database ID in Notion**.

Next, We will obtain the Secret Key and Database ID from Notion.

First, obtain the Secret Key.

To obtain the Secret Key, go to the Notion page, Settings & Members, Integrations, Develop your own integrations, and create a new Integration.

Next, invite the integration you just created to the table you just created.

Click the Share button in the upper right corner of the Notion, and invite the integration you created from Invite in the popover that appears.

Next, obtain the database ID.

The table page has the following URL

```html
https://www.notion.so/*****************?v=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
````

The ``****************`` part is the database ID, so write it down.

Enter the information you have noted in the .env file

```html
NOTION_DATABASE_ID= 
NOTION_TOKEN=
```

### Update Blog Config

In, `blog.config.ts`, just set `notion` to `use` property

```json
  use: "notion", // mdx or notion
```


## License

MIT License
