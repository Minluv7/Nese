module.exports = (eleventyConfig) =>{
    eleventyConfig.addPassthroughCopy({
        "./input/assets/styles/dist/": "styles/",
        "./input/assets/images": "images/",
        "./input/assets/downloads": "downloads/",
        "./input/assets/fonts": "fonts/",
        "./input/js": "js/"
    });

      return{
        dir: {
            input: "input/",
            output: "output",
            includes: "../_partials",
            layouts: "../_layouts",
            data: "../_data",
            js: "../js"
        }
    }
}