const app = require("./app");
const sequelize = require("./utils/connection");

const PORT = process.env.PORT || 8080;

const main = async () => {
<<<<<<< HEAD
  try {
    console.log(
      "🚀 1) ------ Servidor  de paul zarumainiciado en el puerto:",
      PORT
    );

    sequelize.sync();
    // sequelize.sync({ force: true });
    console.log("DB connected");
    app.listen(PORT);
    console.log(`👉 Server running on port ${PORT}`);
    console.log(`👉 Link http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};
=======
    try {
        sequelize.sync();
        // sequelize.sync({ force: true });

        console.log("DB connected");
        app.listen(PORT);
        console.log(`👉 Server running on port ${PORT}`);
        console.log(`👉 Link http://localhost:${PORT}`);
    } catch (error) {
        console.log(error)
    }
}
>>>>>>> c0bef2335b94f903bd0840ae1cf71edfafdc131c

main();
