const DBconnect = require("./configs/db");
const app = require("./index");
const Port = process.env.PORT || 2022;

app.listen(Port, async function () {
    await DBconnect();
    console.log(`Started at http://localhost:${Port}`);
})