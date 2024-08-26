import databaseJson from "./db.json" assert { type: "json" };
import fs from 'fs'
import login from "./login.json" assert {type: "json"}

const getlist = async (req, res) =>{
    res.status(200).json(databaseJson.produtos)
}

const getId = async (req,res) => {
    const _id = req.params.id

    const produtos = databaseJson.produtos
    
    const produtoEncontrado = produtos.find((produto) => produto.id == _id)

    if(produtoEncontrado){
        res.send(produtoEncontrado)
    }else{
        res.status(404).send({error:'not found'})
    }

}

const create = async (req,res) => {
    
    const dados = req.body

    if(!dados.nome || !dados.preco){
        res.status(406).send({error:'campo de nome e preço necessario'})
    }

    databaseJson.produtos.push(dados)
    fs.writeFile('./db.json',JSON.stringify(databaseJson), (err) => {
        if(err){
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(200).json({"Status":"Produto cadastro"})
    console.log("oi")
}

const createLogin = async (req,res) => {

    const dados = req.body

    if(!dados.nome || !dados.senha){
        res.status(406).send({error:'campo de nome e Senha'})
    }

    login.dados.push(dados)
    fs.writeFile('./login.json',JSON.stringify(login), (err) => {
        if(err){
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(200).json({"Status":"Cadrasto feito com sucesso"})
    console.log("oi")
}

const procurarUser = async (req,res) =>{
    const _id = req.params.id

    if(_id){
        res.status(200).json(_id)
    }else{
        res.status(404).json({"Erro":"Falha ao buscar"})
    }
    
    

}


export default {getlist, getId,create, createLogin,procurarUser}