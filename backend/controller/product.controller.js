import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addNewProdect = async (req, res) => {
    try {
        const { name, price, description, count, catagory,user } = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                price: price, // Ensure price is a number
                description,
                count: count, // Ensure count is a number
                catagory,
                sellerId : user
            },
        });
        const sanitizedProduct = JSON.parse(
            JSON.stringify(product, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
            )
        );
        console.log(sanitizedProduct);
        res.json({ sanitizedProduct });

    } catch (error) {
        console.error("Prisma Error:", error);

        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
}
export const updateProdect = async (req, res) => {
    try {
        //const { id } = req.params; // Get product ID from URL
        const { id , name, price, description, count, category } = req.body; // Get updated data

        const updatedProduct = await prisma.product.update({
            where: { id }, // Find product by ID
            data: {
                name,
                price: price, // Ensure price is a number
                description,
                count: count, // Ensure count is a number
                category
            }
        });

        const sanitizedProduct = JSON.parse(
            JSON.stringify(updatedProduct, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
            )
        );
        res.json({
            message: "Product updated successfully",
            product: sanitizedProduct
        });

    } catch (error) {
        console.error("Prisma Error:", error);

        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }


}
export const listOfProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include:{
                user:{
                    omit:{
                        password:true,
                        roll: true,
                        address:true,
                        cart : true,
                        Modefier:true
                    }
                }
            },
            where:{
                count :{not : 0}
            }
        });
        const sanitizedProduct = JSON.parse(
            JSON.stringify(products, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
            )
        );
        res.json({ products : sanitizedProduct });

    } catch (error) {
        console.error("Prisma Error:", error);
        res.status(500).json({
            message: "Error fetching products",
            error: error.message
        });
    }

}
export const deleteProduct = (req, res) => {
    //not applicable
}
export const sarchProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where:{
                count :{not : 0}
            },
            select:{
                name:true,
                price:true,
                description:true
            }
        });
        const sanitizedProduct = JSON.parse(
            JSON.stringify(products, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
            )
        );
        res.json({ products : sanitizedProduct });

    } catch (error) {
        console.error("Prisma Error:", error);
        res.status(500).json({
            message: "Error fetching products",
            error: error.message
        });
    }
}
export const buyProduct = (req, res) => {

}
export const AppName = (req, res) => {

}