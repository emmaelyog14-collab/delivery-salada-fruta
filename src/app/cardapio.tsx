import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
  const [ativo, setAtivo] = useState("inicio");
  const router = useRouter();
  const [busca, setBusca] = useState('');

  return (

    //invenção minha

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
    
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}> 
                    Promoções
                </Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>
                    Contato
                </Text>
            </TouchableOpacity>
        </View>

{/* início da barra de pesquisa */}
        <TextInput
            style={styles.busca}                // aplica o visual definido na Parte 4
            placeholder="Buscar salada..."      // texto cinza que aparece quando está vazio
            placeholderTextColor="#A56836"      // cor desse texto (o marrom do seu cardápio)
            value={busca}                       // o que aparece na barra vem do estado
            onChangeText={setBusca}           // a cada letra digitada, atualiza o estado
        />
{/* fim da barra de pesquisa */}

        <Text style={styles.titulo_cardapio}>
               SALADA DE FRUTAS
        </Text>

        <Text style={styles.subtitulo}>
            Escolha a sua para delivery!!
        </Text>

        <Text style={styles.categoria}>
            Saladas Tradicionais:
        </Text>

    <View style={styles.card_nomeado}>
        <Image source={require("../../assets/images/salada_classica.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Salada Clássica
                </Text>

                <Text style={styles.descricao}>
                    Banana, maçã, laranja e mamão
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/salada_tropical.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Salada Tropical
                </Text>

                <Text style={styles.descricao}>
                    Manga, abacaxi, banana e maçã
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/salada_refrescante.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Salada Refrescante
                </Text>

                <Text style={styles.descricao}>
                    Laranja, mamão, abacaxi e uva
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/salada_moranguinho.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Salada Moranguinho
                </Text>

                <Text style={styles.descricao}>
                    Morango, banana, maçã e mamão
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>

            
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/salada_colorida.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Salada Colorida
                </Text>

                <Text style={styles.descricao}>
                    Laranja, mamão, abacaxi e uva
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

        <Text style={styles.categoria}>
            Saladas Especiais:
        </Text>

        <View style={styles.card_nomeado}>
            <Image source={require("../../assets/images/pomar_premiun.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Pomar Premium
                </Text>

                <Text style={styles.descricao}>
                    Morango, kiwi, manga e uva
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/doce_tentacao.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Doce Tentação
                </Text>

                <Text style={styles.descricao}>
                    Morango, banana, manga e leite condensado
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/paraiso_tropical.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Paraíso Tropical
                </Text>

                <Text style={styles.descricao}>
                    Kiwi, abacaxi, morango e laranja
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/encanto.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Encanto
                </Text>

                <Text style={styles.descricao}>
                    Manga, morango, uva e mirtilo
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/sensacao.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Sensação
                </Text>

                <Text style={styles.descricao}>
                    Banana, morango, kiwi e cobertura de chocolate
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

        <Text style={styles.categoria}>
            Saladas Com Adicionais:
        </Text>

    <View style={styles.card_nomeado}>
        <Image source={require("../../assets/images/leite_ninho.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Leite Ninho
                </Text>

                <Text style={styles.descricao}>
                    Banana, maçã, morango e leite em pó
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/chocolatuda.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Chocolatuda
                </Text>

                <Text style={styles.descricao}>
                    Manga, banana, morango e calda de chocolate
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/crock.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Crock
                </Text>

                <Text style={styles.descricao}>
                    Maçã, banana, uva, granola e mel
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/creamy.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Creamy
                </Text>

                <Text style={styles.descricao}>
                    Morango, manga, banana e creme de leite
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.card}>
        <Image source={require("../../assets/images/especial_da_casa.png")} style={styles.fruta} />

            <View style={styles.informacoes}>
                <Text style={styles.nome}>
                    Especial da casa
                </Text>

                <Text style={styles.descricao}>
                    Mamão, manga, morango, coco ralado e castanhas
                </Text>

                <Text style={styles.preco}>R$ 10,00</Text>
            </View>

            {/* Botão adicionar */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.mais}>+</Text>
            </TouchableOpacity>
    </View>


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
    marginTop: 25,
    marginLeft: 20,
    fontSize: 20,
    color: "#355D2D",
    fontWeight: "bold",
  },

  card_nomeado: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9EC',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#EDE5D1',
    padding: 20,
    gap: 16,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 16,
  },

  card: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFF9EC',
  borderRadius: 25,
  borderWidth: 1.5,
  borderColor: '#EDE5D1',
  padding: 20,
  marginTop: -3,
  gap: 16,
  marginHorizontal: 10,
  marginBottom: 16,
},

fruta: {
  width: 70,
  height: 70,
  borderRadius: 25,
},

informacoes: {
  flex: 1,
  marginLeft: 15,
  marginRight: 10,
},

nome: {
  fontSize: 17,
  color: '#355D2D',
  fontWeight: '600',
},

descricao: {
  fontSize: 14,
  color: '#A56836',
},

preco: {
  fontSize: 16,
  color: '#355D2D',
  fontWeight: '500',
},

botao: {
  width: 55,
  height: 55,
  borderRadius: 50,
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
},

mais: {
  fontSize: 30,
  color: '#355D2D',
  fontWeight: 'bold',
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