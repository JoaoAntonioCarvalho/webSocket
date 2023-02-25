import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.LINK);
let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados");
} catch (err) {
    console.log(err);
};

export { documentosColecao };