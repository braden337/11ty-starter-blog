# 11ty-starter-blog

## Getting Started

###### Clone this repository, and change into the directory

```bash
git clone https://github.com/braden337/11ty-starter-blog.git

cd 11ty-starter-blog
```

###### Install dependencies with `npm`

```bash
npm install
```

###### Start the live development server

So you can view your blog in a browser while you work.

```bash
npm start
```

###### Deploy to Github pages

If your repository is named something like `your_username.github.io`, then you can run the below
command without any problems. Your website will be available at `https://your_username.github.io/`.

```bash
npm run deploy
```

If your repository has a different name, before running this command you will have to uncomment the
`pathPrefix` property at the bottom of the `.eleventy.js` file and change the value to
`/name_of_your_repository/`. Your website will be available at
`https://your_username.github.io/name_of_your_repository/`.

```javascript
return {
  markdownTemplateEngine: 'hbs',
  // pathPrefix: '/subdirectory/',
  dir: {
    input: 'src',
    output: 'dist',
    layouts: '_layouts',
  },
};
```

###### Images

When linking to one of your images in an article, you must use the URL "helper":
`{{ url /images/something.jpg }}`. You can do this in your markdown also.

```markdown
[This is your alt text, it will be added as a caption below the photo]({{ url "/images/cat.jpg" }})
```

This will make sure the `cat.jpg` in your `./src/images` directory has the correct path (if you are
using a repository name other than `your_username.github.io`).

###### RSS Feed

You should update the variables at the top of the `./src/feed.njk` to reflect your own feed details.

```yaml
permalink: feed.xml
eleventyExcludeFromCollections: true
metadata:
  title: 11ty starter
  subtitle: This is my personal blog.
  url: https://username.github.io
  feedUrl: https://username.github.io/feed.xml
  author:
    name: Your Name
    email: username@gmail.com
```
