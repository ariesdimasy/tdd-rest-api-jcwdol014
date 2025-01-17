import express, { Application } from "express"
import userRoutes from "./routes/user";
import pokemonRoutes from "./routes/pokemon"

const app: Application = express()

// path 
app.use("/api/users/", userRoutes)
app.use("/api/pokemons/", pokemonRoutes)
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

export default app