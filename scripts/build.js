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

// full version
const fullEntry = path.resolve(srcPath, "full.scss");
const fullResult = sass.compile(fullEntry);
fs.writeFileSync(
  path.resolve(distPath, "utility-css.full.css"),
  fullResult.css
);
const fullCompressed = sass.compile(fullEntry, { style: "compressed" });
fs.writeFileSync(
  path.resolve(distPath, "utility-css.full.min.css"),
  fullCompressed.css
);

// basic version
const basicEntry = path.resolve(srcPath, "basic.scss");
const basicResult = sass.compile(basicEntry);
fs.writeFileSync(
  path.resolve(distPath, "utility-css.basic.css"),
  basicResult.css
);
const basicCompressed = sass.compile(basicEntry, { style: "compressed" });
fs.writeFileSync(
  path.resolve(distPath, "utility-css.basic.min.css"),
  basicCompressed.css
);
