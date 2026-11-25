import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { saladas, formatarPreco } from "../dados_saladas/saladas";

type Salada = (typeof saladas)[number];

type Props = {
  salada: Salada;
  onAdicionar: () => void;
};

export default function SaladaCard({ salada, onAdicionar }: Props) {
  return (
    <View style={styles.card}>
      <Image source={salada.imagem} style={styles.fruta} />

      <View style={styles.informacoes}>
        <Text style={styles.nome}>{salada.nome}</Text>
        <Text style={styles.descricao}>{salada.descricao}</Text>
        <Text style={styles.preco}>{formatarPreco(salada.preco)}</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={onAdicionar}>
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9EC",
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "#EDE5D1",
    padding: 20,
    gap: 16,
    marginTop: -7,
    marginHorizontal: 10,
    marginBottom: 16,
  },

    fruta: { 
        width: 70, 
        height: 70,
        borderRadius: 25
    },

    informacoes: { 
        flex: 1,
        marginLeft: 15,
        marginRight: 10
    },

    nome: { 
        fontSize: 17,
        color: "#355D2D",
        fontWeight: "600"
    },

    descricao: {
        fontSize: 14,
        color: "#A56836"
    },

    preco: {
        fontSize: 13,
        color: "#355D2D",
        fontWeight: "500"
    }, 

    botao: {
    width: 55,
    height: 55,
    borderRadius: 50,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },

    mais: {
        fontSize: 30,
        color: "#355D2D",
        fontWeight: "bold"
    },
});