import express, { Router, Request, Response } from "express"
import axios from "axios"

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon")
        return res.send(data.results)
    } catch (err) {
        console.log("Error fetching pokemons", err)
        return res.status(400).send(err)
    }
})

export default router