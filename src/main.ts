import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.modeule"


async function start(){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    app.listen(PORT, () => console.log(`Server started at port = ${PORT}`))

}

start()