import { useRouter } from "expo-router";
import { useCarrinho } from "../context_car/carrinho_context";
import { formatarPreco } from "../dados_saladas/saladas";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConfirmacaoScreen() {
  const router = useRouter();
  
  const [confirmado, setConfirmado] = useState(false);

  const { carrinho, total, removerCarrinho } = useCarrinho();

  const [pagamento, setPagamento] = useState("");

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

<ScrollView>
    
{/* resumo do pedido */}

<Text style={styles.text_pedidos}>Pedidos:</Text>
{carrinho.length === 0 && (
  <Text style={styles.itemNome}>Nenhum item no pedido.</Text>
)}

{carrinho.map((item, indice) => (
  <View key={indice} style={styles.resumo}>
    <Text style={styles.item_Nome}>1x {item.nome}</Text>

    <View style={styles.direita}>
      <Text style={styles.itemPreco}>{formatarPreco(item.preco)}</Text>
      <TouchableOpacity onPress={() => removerCarrinho(indice)}>
        <Text style={styles.remover}>✕</Text>
      </TouchableOpacity>
    </View>
  </View>
))}

    <View style={styles.barra} />

    <Text style={styles.total}>
        Total do pedido: {formatarPreco(total)} 
    </Text>

{/* fim do resumo */}

{/* forma de pagamento */}
    <Text style={styles.secao}>Opções de pagamento:</Text>

    <View style={styles.pagamentos}>
        <TouchableOpacity
            style={[styles.opcao, pagamento === "Pix" && styles.opcaoAtiva]}
            onPress={() => setPagamento("Pix")}>
        <Text style={[styles.opcaoTexto, pagamento === "Pix" && styles.opcaoTextoAtivo]}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.opcao, pagamento === "Cartão" && styles.opcaoAtiva]}
            onPress={() => setPagamento("Cartão")}>
        <Text style={[styles.opcaoTexto, pagamento === "Cartão" && styles.opcaoTextoAtivo]}>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.opcao, pagamento === "Dinheiro" && styles.opcaoAtiva]}
            onPress={() => setPagamento("Dinheiro")}>
        <Text style={[styles.opcaoTexto, pagamento === "Dinheiro" && styles.opcaoTextoAtivo]}>Dinheiro</Text>
        </TouchableOpacity>
    </View>
{/* fim da forma de pagamento */}

{/* botão */}
    <TouchableOpacity style={styles.botao} onPress={() => setConfirmado(true)}>
        <Text style={styles.botaoTexto}>Confirmar pedido</Text>
    </TouchableOpacity>
    
    {confirmado && (
        <Text style={styles.confirmado}>
            Pedido confirmado, o pagamento é presencial, aguarde o entregador!!
        </Text>
    )}

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
        marginTop: 23,
        marginLeft: 15,
        marginBottom: 6
    },

    texto: {
        fontSize: 24,
        color: "#355D2D",
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 50,
    },

    text_pedidos: {
        marginLeft: 10,
        color: "#355D2D",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 17,
        fontWeight: "bold",
    },

    resumo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 3,
        paddingVertical: 6,
        fontSize: 15,
        borderRadius: 1,
        color: "#355D2D",
        marginLeft: 20,
    },

    item_Nome: {
        fontSize: 15.5,
        color: "#355D2D",
    },

    itemNome: {
        fontSize: 15.5,
        color: "#355D2D",
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 10
    },

    itemPreco: {
        fontSize: 15.5,
        color: "#A56836",
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
        margin: 10,
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
        margin: 10,
    },

    botaoTexto: {
        color: "#355D2D",
        fontWeight: "bold", 
        fontSize: 16,
    },

    confirmado: {
        color: "#355D2D",
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },

    direita: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    remover: {
        fontSize: 18,
        color: "#A95F25",
        fontWeight: "bold",
        marginRight: 10.
    },

    opcaoAtiva: {
        backgroundColor: "#355D2D",
        borderColor: "#355D2D",
    },

    opcaoTextoAtivo: {
        color: "#FFF9EC",
    },
});