const fs = require("fs");

// fs.writeFile("file.txt", "Hello Angela", (err) => {
//   if (err) throw err;
//   console.log("File has been Created!");
// });

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("The file contains \n", data);
});
