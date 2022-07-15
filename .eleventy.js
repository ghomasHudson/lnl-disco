


module.exports = function(eleventyConfig) {

  // Copy styles folder to output
  eleventyConfig.addPassthroughCopy('_styles');
  // Watch styles folder for changes
  eleventyConfig.addWatchTarget("_styles");

  // sort data alphabetically
  eleventyConfig.addFilter("alpha_sort", (d) => {
    return d.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  });
  // Strip ep title
  eleventyConfig.addFilter("ep_num", (d) => {
    return d.replace("Late Night Linux – Episode ", "")
  });
};
