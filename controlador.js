
const hello = async (req, res) =>{
    res.status(200).json({"Hello":"Worl"})
}

export default {hello}