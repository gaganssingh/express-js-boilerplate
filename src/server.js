const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => console.log(`✔ [SERVER] Listening on PORT: ${PORT}`));
