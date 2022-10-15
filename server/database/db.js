import mongoose from "mongoose"

const Connection = async(username , password)=>{
    const URL = `mongodb://${username}:${password}@ac-egefqzb-shard-00-00.3fqufwc.mongodb.net:27017,ac-egefqzb-shard-00-01.3fqufwc.mongodb.net:27017,ac-egefqzb-shard-00-02.3fqufwc.mongodb.net:27017/?ssl=true&replicaSet=atlas-u1tcoy-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL , {useNewUrlParser:true})
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("Error in Connecting to Database", error)
    }
}

export default Connection;