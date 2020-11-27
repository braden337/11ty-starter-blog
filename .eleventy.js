const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const moment = require('moment');
const _ = require('lodash');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.setBrowserSyncConfig({
    watch: true,
    open: true,
  });

  eleventyConfig.addCollection('archive', function (collectionApi) {
    let posts = [...collectionApi.getFilteredByTag('post')].reverse();

    let years = posts
      .map(post => moment(post.date).format('YYYY'))
      .map(year => (this.year !== year ? (this.year = year) : null), {year: null});

    return _(_.zip(years, posts)).flatten().compact();
  });

  eleventyConfig.addCollection('latest', function (collectionApi) {
    let posts = [...collectionApi.getFilteredByTag('post')].reverse();
    return posts.splice(0, 5);
  });

  eleventyConfig.addFilter('yearSlashMonth', function (date) {
    let m = moment(date);
    return m.format('YYYY/MMM').toLowerCase();
  });

  eleventyConfig.addFilter('date', function (date) {
    let m = moment(date);
    return m.format('MMMM Do, YYYY');
  });

  eleventyConfig.addFilter('doctype', function () {
    return '<!DOCTYPE html>';
  });

  return {
    markdownTemplateEngine: 'hbs',
    // pathPrefix: '/subdirectory/',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
