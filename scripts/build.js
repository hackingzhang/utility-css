const fs = require("fs");
const path = require("path");
const sass = require("sass");
const { rimrafSync } = require("rimraf");

// prepare dist dir
const distPath = path.resolve(__dirname, "../dist/");
if (fs.existsSync(distPath)) {
  rimrafSync(distPath + "/*");
} else {
  fs.mkdirSync(distPath);
}

// compile & output
const srcPath = path.resolve(__dirname, "../src/");
const result = sass.compile(path.resolve(srcPath, "index.scss"));
fs.writeFileSync(path.resolve(distPath, "utility-css.css"), result.css);

const compressed = sass.compile(path.resolve(srcPath, "index.scss"), {
  style: "compressed",
});
fs.writeFileSync(path.resolve(distPath, "utility-css.min.css"), compressed.css);
