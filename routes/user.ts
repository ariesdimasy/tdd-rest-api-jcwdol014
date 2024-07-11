import express, { Router, Request, Response } from "express"
import prisma from "../config/prisma.config"
const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {

    try {
        const users = await prisma.user.findMany()

        return res.status(200).send({
            message: "OK",
            users: users
        })
    } catch (err) {
        return res.status(500).send({
            message: "OK",
            users: JSON.stringify(err)
        })
    }

})

export default router