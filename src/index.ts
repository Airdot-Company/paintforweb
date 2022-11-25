import CreateExpressApp from "express";
import "colors";

const Config = {
    Port: 3000
}
const App = CreateExpressApp();

App.get("/", async (req, res) => {
    res.send("Server Running");
});

App.listen(Config.Port, () => console.log(`API Started`.green + `\n  • Local URL: http://localhost:${Config.Port}/`.gray));