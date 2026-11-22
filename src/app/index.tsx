import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (

    <View style={{ flex: 1, backgroundColor: "#FFF9EC" }}>
      
  {/* Menu */}
  <View style={styles.menu}>
    <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/")}>
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
{/* fim do menu */}


{/* início das boas vindas*/}
  <ScrollView style={styles.container}>

    <View style={styles.header}>

      <Text style={styles.greeting}>
        Seja muito bem-vindo(a) à DOCE POMAR! 👋   
      </Text>

      <Text style={styles.descricao}>
        Aqui você encontra saladas de frutas deliciosas! 🍇🍍🥝
      </Text>

      <Text style={styles.slogan}>
        DOCE POMAR — o sabor natural que conquista você!
      </Text>
    
    </View>
{/* fim das boas vindas */}

{/* início do banner */}
  <Text style={styles.title}>
    Qual combinação chama sua atenção?
  </Text>

  <View style={styles.banner}>
    <Text style={styles.offer}>
      DOCE POMAR
    </Text>

    <Text style={styles.bannerTitle}>
      Salada Colorida
    </Text>

    <Text style={styles.bannerText}>
      Uma combinação perfeita para seu pedido!!
    </Text>

    <TouchableOpacity style={styles.button} onPress={() => router.push("/cardapio")}>
      <Text style={styles.buttonText}>
        Peça agora  ➜
      </Text>
    </TouchableOpacity>

    <Image
      source={require("../../assets/images/frutas_banner.png")}
      style={styles.bannerImage}
      resizeMode="contain"/>

  </View>
{/* fim do banner */}

{/* início das categorias */}
    <Text style={styles.sectionTitle}>
      Categorias :
    </Text>

    <View style={styles.categorias}>

      <TouchableOpacity
        style={styles.category}
        onPress={() => router.push({ pathname: "/cardapio", params: { categoria: "Saladas Tradicionais" } })}>
        <Text style={styles.emoji}>🍌</Text>
        <Text style={styles.categoryText}>Tradicionais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => router.push({ pathname: "/cardapio", params: { categoria: "Saladas Especiais" } })}>
        <Text style={styles.emoji}>🥝</Text>
        <Text style={styles.categoryText}>Especiais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => router.push({ pathname: "/cardapio", params: { categoria: "Saladas Com Adicionais" } })}>
        <Text style={styles.emoji}>🍫</Text>
        <Text style={styles.categoryText}>Com adicionais</Text>
      </TouchableOpacity>

    </View>
{/* fim das categorias */}

    </ScrollView>
  </View>

  );
}

const styles = StyleSheet.create({


  bannerImage: {
    position: "absolute",
    right: 22,
    width: 120,
    height: 240,
    bottom: -80,
  },


  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#355D2D",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    lineHeight: 22, // espaço entre as linhas, deixa mais fácil de ler
    color: "#4F6B47",
    marginLeft: 5,
  },

  slogan: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#A95F25",
    marginLeft: 5,
  },

  menu: {
    flexDirection: "row", // itens lado a lado
    justifyContent: "space-around", // espaço entre os itens
    backgroundColor: "#355D2D",
    paddingTop: 10, // espaço da barra de status do celular
    paddingBottom: 12,
  },

  menuItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    marginTop: 15,
    borderBottomColor: "transparent", // reserva o espaço do sublinhado, senão o item "pula" ao selecionar
  },

  menuText: {
    fontSize: 14,
    color: "#E4EBD9",
  },



  container: {
    flex: 1,
    backgroundColor: "#FFF9EC",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: 'Georgia',
    color: "#A95F25",
  },

  banner: {
    backgroundColor: "#355D2D",
    borderRadius: 20,
    padding: 25,
    marginTop: 17,
  },

  offer: {
    color: "#FFD76A",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  bannerText: {
    color: "#ffff",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#FFD76A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-start", // ele posiciona o botão longe da margen inicial
  },

  buttonText: {
    color: "#355D2D",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30, // distância do nome com o coiso de cima
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Yeseva One",
    color: "#355D2D"
  },

  categorias: {
    flexDirection: "row", // sem isso ficaria na horizontal
    justifyContent: "space-between", // espaço entre os botões
  },

  category: {
    width: "30%", // espaço que o botão toma
    backgroundColor: "#FFF9EC",
    paddingVertical: 18,
    borderRadius: 15,
    borderColor: "#F0DFC0",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 20,
  },

  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },

  categoryText: {
    color: "#355D2D",
  }

});