import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos"
import axios from "axios"
import { useEffect } from "react";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";
import { useRouter, useFocusEffect } from "expo-router";



export default function Index() {
  const router = useRouter()

  useFocusEffect(()=>{
    carregarProdutos()
  })

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
      <ListaProdutos produtos={produtos} aoAtualizar={carregarProdutos}></ListaProdutos>
      <Button title="Cadastrar"onPress={()=>{telaCadastro()}}></Button>


    </View>
    );

    function telaCadastro() {
      router.push('/Componentes/telas/cadastro')
    }
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