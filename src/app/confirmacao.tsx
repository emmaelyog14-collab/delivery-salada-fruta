import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConfirmacaoScreen() {
  const router = useRouter();

  return (
    <View style={ {flex: 1, backgroundColor: "#FFF9EC"}}>

    {/* menu */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/cardapio")}>
          <Text style={styles.menuText}>⬅  Voltar cardápio</Text>
        </TouchableOpacity>
      </View>
    {/* fim do menu */}

    <Text style={styles.texto}>
        CONFIRMAR PEDIDO
    </Text>

{/* resumo do pedido */}
    
<ScrollView contentContainerStyle={{ padding: 20 }}>
    <Text style={styles.texto_resumo}>
        Resumo:
    </Text>

    <View style={styles.resumo}>
        <Text style={styles.itemNome}>2x Salada Clássica</Text>
        <Text style={styles.itemPreco}>R$ 20,00</Text>
    </View>

    <View style={styles.resumo}>
        <Text style={styles.itemNome}>2x Salada Clássica</Text>
        <Text style={styles.itemPreco}>R$ 20,00</Text>
    </View>

    <View style={styles.barra} />

    <Text style={styles.total}>
        Total do pedido: R$ 
    </Text>

{/* fim do resumo */}

{/* forma de pagamento */}
        <Text style={styles.secao}>Forma de pagamento:</Text>

        <View style={styles.pagamentos}>
          <View style={styles.opcao}>
            <Text style={styles.opcaoTexto}>Pix</Text>
          </View>
          <View style={styles.opcao}>
            <Text style={styles.opcaoTexto}>Cartão</Text>
          </View>
          <View style={styles.opcao}>
            <Text style={styles.opcaoTexto}>Dinheiro</Text>
          </View>
        </View>
{/* fim da forma de pagamento */}

{/* botão */}
    <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Confirmar pedido</Text>
    </TouchableOpacity>

        </ScrollView> 
    </View>  
  )
};

const styles = StyleSheet.create({

    menu: {
        flexDirection: "row", // itens lado a lado
        justifyContent: "flex-start", // espaço entre os itens
        backgroundColor: "#355D2D",
        paddingTop: 10, // espaço da barra de status do celular
        paddingBottom: 12,
    },

    menuText: {
        fontSize: 14,
        color: "#E4EBD9",
        fontWeight: "bold",
        marginTop: 25,
        marginLeft: 15,
    },

    texto: {
        fontSize: 24,
        color: "#355D2D",
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 50,
    },

    texto_resumo: {
        marginLeft: 10,
        color: "#355D2D",
        marginBottom: 5,
        fontSize: 17,
        fontWeight: "bold",
    },

    resumo: {
        flexDirection: "row",
        marginTop: 3,
        paddingVertical: 6,
        fontSize: 15,
        borderRadius: 1,
        color: "#355D2D",
        marginLeft: 20,
    },

    itemNome: {
        fontSize: 15.5,
        color: "#355D2D"
    },

    itemPreco: {
        fontSize: 15.5,
        color: "#A56836",
        marginLeft: 110,
        marginRight: 20,
    },
    
    barra: {
        height: 1.5,
        backgroundColor: "#A56836",
        marginHorizontal: 10,
        marginVertical: 16,
    },

    total: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "right",
        color: "#355D2D",
        marginRight: 20,
    },

    secao: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#355D2D",
        marginTop: 40,
        marginBottom: 15,
        marginLeft: 12,
    },

    pagamentos: {
        flexDirection: "row",
        gap: 10,
    },
    
    opcao: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: "#EDE5D1",
        backgroundColor: "#FFF9EC",
    },

    opcaoTexto: {
        color: "#355D2D",
        fontWeight: "600"
    },

    botao: {
        backgroundColor: "#FFD76A",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 28,
    },

    botaoTexto: {
        color: "#355D2D",
        fontWeight: "bold", 
        fontSize: 16 
    }
});