import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos"
import axios from "axios"
import { useEffect } from "react";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";



export default function Index() {
  let [contador,setContador] = useState(0)
  let[produtos, setProdutos] = useState([])

  useEffect(()=>{
  carregarProdutos()

  },[])


  function carregarProdutos() {
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
    .then((resp)=>{
      setProdutos(resp.data)
    })
  }


  return (
    <View style={estilo.container}>
      <ListaProdutos produtos={produtos}></ListaProdutos>
      <Button title={contador.toString()}onPress={()=>{Clicarbotao()}}></Button>

      <CadastroProduto/>


    </View>
    );
  function Clicarbotao(){
    setContador(contador + 1)
  };
}





const estilo = StyleSheet.create({
  container:{
    flex: 1,
  },
  Text: {
    color:"#ffffff",
    fontSize: 20,
  },
  titulo:{
    color: "#8B0000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
});