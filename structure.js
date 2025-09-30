const fs = require("fs");
const path = require("path");

function getDirectoryStructure(dirPath, prefix = "", isLast = true) {
  const ignore = ["node_modules", ".git", "dist", "build", ".next", ".cache"];

  const stats = fs.statSync(dirPath);
  const name = path.basename(dirPath);

  console.log(
    prefix +
      (isLast ? "└── " : "├── ") +
      name +
      (stats.isDirectory() ? "/" : "")
  );

  if (stats.isDirectory() && !ignore.includes(name)) {
    const files = fs.readdirSync(dirPath);
    const filteredFiles = files.filter((file) => !ignore.includes(file));

    filteredFiles.forEach((file, index) => {
      const filePath = path.join(dirPath, file);
      const isLastFile = index === filteredFiles.length - 1;
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      getDirectoryStructure(filePath, newPrefix, isLastFile);
    });
  }
}

console.log("project-root/");
const files = fs.readdirSync(".");
files
  .filter((file) => file !== "node_modules" && file !== ".git")
  .forEach((file, index) => {
    getDirectoryStructure(file, "", index === files.length - 1);
  });
