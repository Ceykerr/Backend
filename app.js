import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import gastosRoutes from "./src/routes/gastosRoutes.js";
import ahorrosRoutes from "./src/routes/ahorrosRoutes.js";
import ingresosRoutes from "./src/routes/ingresosRoutes.js";

import db from "./src/models/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/gastos", gastosRoutes);
app.use("/ahorros", ahorrosRoutes);
app.use("/ingresos", ingresosRoutes);

app.get("/", (req, res) => {
    res.render("index", { titulo: "mi titulo dinámico" });
});

db.sequelize.sync().then(() => {
    console.log("Base de datos conectada");
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        error: "Error interno del servidor"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});