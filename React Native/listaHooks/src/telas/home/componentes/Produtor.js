import React, {useState} from "react";
import { Text,View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Estrelas from "../../../componentes/Estrelas";

export default function Produtor({nome, imagem, distancia, estrelas}){
  const [selecionado, setSelecionado] = useState(false); 

  return<TouchableOpacity style={estilos.cartao} onPress={() => setSelecionado(!selecionado)}> 
    <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
    <View style={estilos.informacoes}>
      <View>
        <Text style={estilos.nome}>{nome} </Text>
        <Estrelas quantidade={estrelas} editavel={selecionado} grande={selecionado} />
      </View>
    <Text style={estilos.distancia}>{distancia}</Text>

    </View>

    </TouchableOpacity>


}

const estilos = StyleSheet.create ({
  cartao:{
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4
  },
  imagem:{
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,

  },
  nome:{
    fontSize:14,
    lineHeight:22,
    fontWeight:'bold',
  },
  distancia:{
    fontSize: 12,
    lineHeight: 19,
  },
})