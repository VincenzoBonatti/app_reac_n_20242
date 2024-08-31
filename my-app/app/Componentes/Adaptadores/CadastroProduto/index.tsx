import { useState } from "react"
import { Text, TextInput, View } from "react-native"

const CadastroProduto = () => {
    let [nome,setNome] = useState("")
    let [descricao,setDescricao] = useState("")

    return(
        <View>
            <Text  >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>
            
            <Text  >Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>
        </View>
    )
}

export default CadastroProduto