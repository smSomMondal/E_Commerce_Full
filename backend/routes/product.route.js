import express from "express";
import { addNewProdect, buyProduct, deleteProduct, listOfProduct, sarchProduct, updateProdect } from "../controller/product.controller.js";

const ProductRoute = express.Router();

/*seller or Admin side*/
ProductRoute.post("/add", addNewProdect)
ProductRoute.post("/update", updateProdect);
ProductRoute.post("/list", listOfProduct);
ProductRoute.post("/delete", deleteProduct);

/*buyer side*/
ProductRoute.post("/listU", sarchProduct);
ProductRoute.post("/buy", buyProduct);

export default ProductRoute;