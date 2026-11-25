import { 
    createContext, 
    useContext, 
    useState, 
    ReactNode 
} from "react";
import { saladas } from "../dados_saladas/saladas";

type Salada = (typeof saladas)[number];

{/* tudo o que o contexto disponibiliza para as telas */}
type CarrinhoContextType = {
  carrinho: Salada[];
  adicionarCarrinho: (salada: Salada) => void;
  removerCarrinho: (indice: number) => void;
  total: number;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<Salada[]>([]);

  {/* adicionar produto ao carrinho */}
  const adicionarCarrinho = (salada: Salada) => {
    setCarrinho((atual) => [...atual, salada]);
  };

  {/* remover produto ao carrinho */}
  const removerCarrinho = (indice: number) => {
    setCarrinho((atual) => atual.filter((_, i) => i !== indice));
  };

  {/* soma do total */}
  const total = carrinho.reduce((soma, s) => soma + s.preco, 0);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarCarrinho, removerCarrinho, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);
  if (!contexto) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return contexto;
}