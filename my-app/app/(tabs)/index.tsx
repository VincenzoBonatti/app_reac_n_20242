import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const produtos = [
  {id: 1, nome: "Coca-Cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guarana", preco: 5.5},
];



export default function Index() {
  let [contador, setContador] = useState(0)
  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p) => (
        <View key={p.id} style={estilo.lista}>
          <Text style={estilo.titulo} >{p.nome}</Text>
          <Text style={estilo.text} >{p.preco}</Text>
        </View>))}




      <Text style={estilo.text}>HELLO WORLD</Text>

        <Button title={contador.toString()} onPress={()=>clicarBotao()}></Button>



    </View>
  );
  function clicarBotao() {
    setContador(contador++)
  }
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FC8EAC",
    gap: 10,
    paddingLeft: 60 
  },
  text: {
    color:"#000000",
    fontSize: 20,
    textAlign: "center", 

  },
  titulo:{
    color: "#ffffff",
    fontSize: 35,
    textAlign: "left", 
    fontWeight: "bold",
  },
  lista:{
    borderColor: "#000000", 
    borderWidth: 2,
    padding: 10,
    borderRadius: 15
  }
})