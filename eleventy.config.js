module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./assets");
    eleventyConfig.addPassthroughCopy("./assets");
    return {
        dir: {
            input: "src/content", // Set the source for 11ty
            output: "_site", // This is the default
            includes: "../_includes", // This is the default
            layouts: "../_layouts", // Base page layouts
            data: "../_data" // This is the default
        }
    };
};
