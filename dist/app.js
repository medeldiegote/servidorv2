"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importo Express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const puerto = 3000;
app.get('/', (req, res) => {
    res.send('Hola Nube Colectiva !');
});
app.listen(puerto, () => {
    console.info(`Ready on port ${puerto}`);
}).on("error", err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`El Servidor esta funcionado en el puerto ${puerto}`);
});
//# sourceMappingURL=app.js.map