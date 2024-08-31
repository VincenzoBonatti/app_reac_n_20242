import Style from "@/app/Styles/Default";
import { Image, Text, View } from "react-native";
import Produto from "@/app/Models/produto";


interface PropProd{
    produto:Produto,
}


const ItemProduto:React.FC<PropProd> = ( {produto})=> {
    return(
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>R$ {produto.preco}</Text>
            <Image source={{uri:produto.foto}} style={Style.image}/>
        </View>
    )
}

export default ItemProduto;