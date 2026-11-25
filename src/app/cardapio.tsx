import { useRouter } from "expo-router";
import { useState } from "react";
import { saladas, categorias } from "../dados_saladas/saladas";
import { useCarrinho } from "../context_car/carrinho_context";
import { useLocalSearchParams } from "expo-router";
import SaladaCard from "../components/saladaCard";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

  export default function HomeScreen() {
    const router = useRouter();
    const [busca, setBusca] = useState('');

    const saladasFiltradas = saladas.filter((salada) =>
      salada.nome.toLowerCase().includes(busca.toLowerCase())
    );

    const { carrinho, adicionarCarrinho, total } = useCarrinho();

    const { categoria: categoriaEscolhida } = useLocalSearchParams<{ categoria?: string }>();


  return (

    <View style={{ flex: 1, backgroundColor: "#FFF9EC" }}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => router.replace("/")}>
                <Text style={styles.menuText}>
                    Início
                </Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/cardapio")}>
                <Text style={styles.menuText}>
                    Cardápio
                </Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/confirmacao")}>
                <Text style={styles.menuText}>
                    🛒
                </Text>
            </TouchableOpacity>
        </View>

<Text style={styles.quant_itens}>
  Itens no carrinho: {carrinho.length}
</Text>

{/* início da barra de pesquisa */}
<View>
    <TextInput
        style={styles.busca}                
        placeholder="Buscar salada..."      
        placeholderTextColor="#A56836"     
        value={busca}                       
        onChangeText={setBusca}/>
</View>      
{/* fim da barra de pesquisa layout*/}

        <Text style={styles.titulo_cardapio}>
               SALADA DE FRUTAS
        </Text>

        <Text style={styles.subtitulo}>
            Escolha a sua para delivery!!
        </Text>

{/* início do cardápio */}
{categorias.map((categoria) => {
  if (categoriaEscolhida && categoria !== categoriaEscolhida) return null;

  const itens = saladasFiltradas.filter((s) => s.categoria === categoria);

    if (itens.length === 0) return null;

    return (
    <View key={categoria}>
        <Text 
            style={styles.categoria}>{categoria}:
        </Text>

    {itens.map((salada) => (
    <SaladaCard
        key={salada.id}
        salada={salada}
        onAdicionar={() => adicionarCarrinho(salada)}/>
    ))}
    
    </View>
  );
})}

{/* fim do cardápio */}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

menu: {
    flexDirection: "row", // itens lado a lado
    justifyContent: "space-around", // espaço entre os itens
    backgroundColor: "#355D2D",
    paddingTop: 10, // espaço da barra de status do celular
    paddingBottom: 12,
  },

  menuItem: {
    marginTop: 15,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent", // reserva o espaço do sublinhado, senão o item "pula" ao selecionar
  },

  menuText: {
    fontSize: 14,
    color: "#E4EBD9",
  },

  quant_itens: {
    fontSize: 15,
    color: "#355D2D",
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 40,
    marginTop: 15,
  },

  titulo_cardapio: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#355D2D",
    textAlign: "center",
    marginTop: 20,
  },
  
  subtitulo: {
    fontSize: 16,
    color: "#A95F25",
    textAlign: "center",
    marginTop: 5,
  },

  categoria: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
    fontSize: 20,
    color: "#355D2D",
    fontWeight: "bold",
  },

busca: {
  backgroundColor: '#FFF9EC',   // mesmo creme dos cards
  borderWidth: 1.5,             // espessura da borda
  borderColor: '#EDE5D1',       // cor da borda, igual à dos cards
  borderRadius: 25,             // cantos arredondados
  paddingHorizontal: 20,        // espaço interno nas laterais
  paddingVertical: 12,          // espaço interno em cima e embaixo
  marginHorizontal: 10,         // afastamento das laterais da tela
  marginTop: 15,                // afastamento do subtítulo
  fontSize: 16,                 // tamanho da letra
  color: '#355D2D',             // cor do texto digitado (verde)
},

});