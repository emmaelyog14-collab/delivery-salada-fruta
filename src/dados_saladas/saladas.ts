export const categorias = [
  'Saladas Tradicionais',
  'Saladas Especiais',
  'Saladas Com Adicionais',
];

export const saladas = [
  {
  id: '1',
  nome: 'Salada Clássica',
  categoria: 'Saladas Tradicionais',
  descricao: 'Banana, maçã, laranja e mamão',
  preco: 10,
  imagem: require('../../assets/images/salada_classica.png'),
},
{
  id: '2',
  nome: 'Salada Tropical',
  categoria: 'Saladas Tradicionais',
  descricao: 'Manga, abacaxi, banana e maçã',
  preco: 12.5,
  imagem: require('../../assets/images/salada_tropical.png'),
},
{
  id: '3',
  nome: 'Salada Moranguinho',
  categoria: 'Saladas Tradicionais',
  descricao: 'Morango, banana, maçã e mamão',
  preco: 13.99,
  imagem: require('../../assets/images/salada_moranguinho.png'),
},
{
  id: '4',
  nome: 'Salada Colorida',
  categoria: 'Saladas Tradicionais',
  descricao: 'Laranja, mamão, abacaxi e uva',
  preco: 14,
  imagem: require('../../assets/images/salada_colorida.png'),
},
{
  id: '5',
  nome: 'Pomar Premium',
  categoria: 'Saladas Especiais',
  descricao: 'Morango, kiwi, manga e uva',
  preco: 17.5,
  imagem: require('../../assets/images/pomar_premiun.png'),
},
{
  id: '6',
  nome: 'Doce Tentação',
  categoria: 'Saladas Especiais',
  descricao: 'Morango, banana, manga e leite condensado',
  preco: 16,
  imagem: require('../../assets/images/doce_tentacao.png'),
},
{
  id: '7',
  nome: 'Paraíso Tropical',
  categoria: 'Saladas Especiais',
  descricao: 'Kiwi, abacaxi, morango e laranja',
  preco: 14,
  imagem: require('../../assets/images/paraiso_tropical.png'),
},
{
  id: '8',
  nome: 'Sensação',
  categoria: 'Saladas Especiais',
  descricao: 'Banana, morango, kiwi e cobertura de chocolate',
  preco: 17,
  imagem: require('../../assets/images/sensacao.png'),
},
{
  id: '9',
  nome: 'Leite Ninho',
  categoria: "Saladas Com Adicionais",
  descricao: 'Banana, maçã, morango e leite em pó',
  preco: 19,
  imagem: require('../../assets/images/leite_ninho.png'),
},
{
  id: '10',
  nome: 'Crock',
  categoria: "Saladas Com Adicionais",
  descricao: 'Maçã, banana, uva, granola e mel',
  preco: 15,
  imagem: require('../../assets/images/crock.png'),
},
{
  id: '11',
  nome: 'Creamy',
  categoria: "Saladas Com Adicionais",
  descricao: 'Morango, manga, banana e creme de leite',
  preco: 20,
  imagem: require('../../assets/images/creamy.png'),
},
{
  id: '12',
  nome: 'Especial da casa',
  categoria: "Saladas Com Adicionais",
  descricao: 'Mamão, manga, morango, coco ralado e castanhas',
  preco: 22,
  imagem: require('../../assets/images/especial_da_casa.png'),
},
];

export function formatarPreco(valor: number) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}