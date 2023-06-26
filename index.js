const fs = require("fs"); // file system node modules

// fs.writeFile("message.txt", "Hello from nodejs", (err) => {
//     if (err) throw err;
//     console.log("File saved!")
// });

// vai criar um arquivo chamado message.txt e retornar dentro dele a mensagem hello from node
// se o callback retornar um erro ele vai lançar uma mensagem de erro


// funcionamento do readFile -> fs.readFile(path[, options], callback), se não dermos um encoding, igual mencionado abaixo (utf8), ira retornar um raw buffer
fs.readFile("/backuendo/message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
});