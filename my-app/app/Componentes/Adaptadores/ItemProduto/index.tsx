import Style from "@/app/Styles/Default";
import { Alert, Button, Image, Text, View } from "react-native";
import Produto from "@/app/Models/produto";
import axios from "axios";


interface PropProd{
    produto:Produto,
}


const ItemProduto:React.FC<PropProd> = ( {produto})=> {
    
    function Excluir(id: number) {
        let api = "https://api-docker-2t8m.onrender.com/api/produtos"
        axios.delete(`${api}/${id}`)
        .then((resp) =>{
            Alert.alert("Produto excluido com sucesso")
            alert("produto excluido com sucesso")
        })
    }

    return(
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>R$ {produto.preco}</Text>
            <Image source={{uri:produto.foto}} style={Style.image}/>
            <Button title="excluir" onPress={() => {Excluir(produto.id)}} />
        </View>
    )
}

export default ItemProduto;