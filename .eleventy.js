module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPassthroughCopy("/src/assets/css");
  eleventyConfig.addWatchTarget("/src/assets/css/");
  eleventyConfig.addPassthroughCopy("/src/assets/js/");
  eleventyConfig.addPassthroughCopy("/src/assets/favicon/");
  eleventyConfig.addPassthroughCopy("/src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("/src/assets/images/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
