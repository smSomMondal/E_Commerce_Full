// import { generateAccessToken } from "../utils/generateAccessToken.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
    try {    
        const { name, email, password } = req.body;        
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });  
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(5);//use small number
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log( "bcript ",hashedPassword);
        
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password:hashedPassword,
            },
        }).catch(async(e)=>{
            console.log(e);            
        })
        res.json({
            Message: "User created successfully please login",
            status: 200,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials password" });
        }

        res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
        /*const token = generateAccessToken({
            payload: user.id,
            secretKey: process.env.ACCESS_TOKEN_SECRET,
            expiresIn: "1d",
        });
        res.json({
            token,
            user: {
                id: user.id,
                role: user.role,
                name: user.name,
                email: user.email,
            },
        });*/
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
