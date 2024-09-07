import Produto from "@/app/Models/produto"
import axios from "axios"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

const CadastroProduto = () => {
    let [nome,setNome] = useState("")
    let [descricao,setDescricao] = useState("")
    let [preco,setPreco] = useState(0)

    return(
        <View>
            <Text  >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>
            
            <Text  >Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>

            <Text  >Preço:</Text>
            <TextInput onChangeText={(v) => 
                setPreco( isNaN(parseFloat(v))? 0: parseFloat(v))} 
                
                inputMode="numeric" value={preco.toString()}></TextInput>
        
            <Button title="Cadastrar" onPress={cadastrar} />
        
        </View>
    )

    function cadastrar() {
        let produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: preco
        } as Produto;
        let api = "https://api-docker-2t8m.onrender.com/api/produtos"
        axios.post(api,produto)
    }
}

export default CadastroProduto