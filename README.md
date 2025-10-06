[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20648766&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:Ester Cristine de Assis Ferreira
- Matricula: 1625330
- Proposta de projeto escolhida: 2. Lugares e Experiências
- Breve descrição sobre seu projeto: Esse site é um projeto que estou criando pra reunir tudo que representa Minas Gerais de forma clara e acessível. A ideia é mostrar lugares, tradições, comidas e histórias que fazem parte do nosso estado, sem complicação. É pra quem quer conhecer melhor Minas ou simplesmente se conectar com o que ela tem de único. Tudo feito com atenção aos detalhes e muito respeito pela cultura mineira.

## Print da Home-Page

![Home-Page](/public/imagens/HomePage(JS).png)


## Print da página de detalhes do item

![Detalhes do Item](/public/imagens/DetalhesDoItem.png)


## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const itensMinas = [
  {
    id: 1,
    nome: "Culinária Mineira",
    imagem: "imagens/paodequeijo.jpeg",
    descricao: "A culinária mineira é marcada por sabores autênticos e receitas que atravessam gerações. O pão de queijo, por exemplo, é símbolo de afeto e tradição.",
    outrasInformacoes: [
      { titulo: "Curiosidade", texto: "Minas tem mais de 5 mil receitas tradicionais catalogadas." },
      { titulo: "Dica de viagem", texto: "Visite mercados municipais para provar quitutes locais." },
      { titulo: "Sabia que?", texto: "O pão de queijo é considerado patrimônio cultural imaterial." }
    ]
  },
  {
    id: 2,
    nome: "Cidades Históricas",
    imagem: "imagens/ouropreto.jpeg",
    descricao: "Ouro Preto é uma joia do barroco brasileiro, com ruas de pedra e igrejas ornamentadas que contam a história da Inconfidência Mineira.",
    outrasInformacoes: [
      { titulo: "Arquitetura", texto: "Ouro Preto possui mais de 20 igrejas barrocas preservadas." },
      { titulo: "História", texto: "Foi palco da Inconfidência Mineira no século XVIII." },
      { titulo: "Dica cultural", texto: "Visite o Museu da Inconfidência na Praça Tiradentes." }
    ]
  },
  {
    id: 3,
    nome: "Natureza",
    imagem: "imagens/cachoeira.jpeg",
    descricao: "Minas Gerais abriga paisagens exuberantes, com trilhas ecológicas e cachoeiras cristalinas que encantam visitantes de todo o país.",
    outrasInformacoes: [
      { titulo: "Ecoturismo", texto: "A Serra do Cipó é um dos principais destinos de aventura." },
      { titulo: "Biodiversidade", texto: "Minas abriga espécies únicas do cerrado e da mata atlântica." },
      { titulo: "Dica verde", texto: "Leve sacolas reutilizáveis e respeite as trilhas sinalizadas." }
    ]
  },
  {
    id: 4,
    nome: "Artesanato",
    imagem: "imagens/artesanato.jpeg",
    descricao: "O artesanato mineiro revela a alma do povo: peças feitas à mão com barro, madeira e tecido, carregadas de história e identidade.",
    outrasInformacoes: [
      { titulo: "Feito à mão", texto: "Cada peça carrega a identidade do artesão local." },
      { titulo: "Regiões famosas", texto: "Vale do Jequitinhonha é referência nacional em cerâmica." },
      { titulo: "Dica cultural", texto: "Participe de oficinas em feiras de artesanato." }
    ]
  },
  {
    id: 5,
    nome: "Café Mineiro",
    imagem: "imagens/cafe.jpeg",
    descricao: "Reconhecido mundialmente, o café mineiro é cultivado com cuidado e paixão. Cada grão carrega o sabor da terra e o trabalho de gerações.",
    outrasInformacoes: [
      { titulo: "Produção", texto: "Minas é o maior produtor de café do Brasil." },
      { titulo: "Regiões", texto: "Sul de Minas e Cerrado Mineiro são os principais polos." },
      { titulo: "Dica de sabor", texto: "Experimente cafés especiais em cafeterias locais." }
    ]
  },
  {
    id: 6,
    nome: "História",
    imagem: "imagens/historia.jpeg",
    descricao: "Minas Gerais foi palco de importantes movimentos sociais e políticos. Sua história é rica, diversa e profundamente ligada à formação do Brasil.",
    outrasInformacoes: [
      { titulo: "Inconfidência", texto: "Movimento liderado por Tiradentes contra o domínio português." },
      { titulo: "Ciclo do Ouro", texto: "Minas foi o centro da exploração aurífera no século XVIII." },
      { titulo: "Dica histórica", texto: "Explore os museus de Mariana e Sabará." }
    ]
  },
  {
    id: 7,
    nome: "Festas e Cultura",
    imagem: "imagens/cultura.jpeg",
    descricao: "As festas populares como o Congado e a Folia de Reis celebram a fé, a música e a tradição do povo mineiro com cores e alegria.",
    outrasInformacoes: [
      { titulo: "Tradições", texto: "O Congado mistura religiosidade afro-brasileira e música." },
      { titulo: "Calendário", texto: "Janeiro e junho concentram as principais festas." },
      { titulo: "Dica cultural", texto: "Leve roupas coloridas e participe das danças." }
    ]
  },
  {
    id: 8,
    nome: "Montanhas",
    imagem: "imagens/PicodaBandeira.jpeg",
    descricao: "As montanhas de Minas oferecem vistas deslumbrantes e são refúgio para quem busca paz, aventura e conexão com a natureza.",
    outrasInformacoes: [
      { titulo: "Altitude", texto: "O Pico da Bandeira é o terceiro ponto mais alto do Brasil." },
      { titulo: "Trilhas", texto: "A Serra da Mantiqueira tem trilhas para todos os níveis." },
      { titulo: "Dica de aventura", texto: "Use calçados adequados e leve água." }
    ]
  },
  {
    id: 9,
    nome: "Roteiros Imperdíveis",
    imagem: "imagens/Serro.jpeg",
    descricao: "Vilarejos como Serro e São João del-Rei encantam com arquitetura colonial, gastronomia típica e hospitalidade mineira.",
    outrasInformacoes: [
      { titulo: "Serro", texto: "Famoso pelo queijo artesanal e casarões coloniais." },
      { titulo: "São João del-Rei", texto: "Tem igrejas barrocas e passeio de maria-fumaça." },
      { titulo: "Dica de roteiro", texto: "Combine história com gastronomia local." }
    ]
  },
  {
    id: 10,
    nome: "Parques Naturais",
    imagem: "imagens/januária.jpeg",
    descricao: "Os parques naturais de Minas promovem a preservação ambiental e oferecem lazer em meio à biodiversidade do cerrado e da mata atlântica.",
    outrasInformacoes: [
      { titulo: "Ibitipoca", texto: "Parque com grutas, mirantes e a famosa Janela do Céu." },
      { titulo: "Caparaó", texto: "Abriga o Pico da Bandeira e trilhas ecológicas." },
      { titulo: "Dica ecológica", texto: "Respeite a fauna e leve seu lixo de volta." }
    ]
  },
  {
    id: 11,
    nome: "Geografia de Minas",
    imagem: "imagens/mapa.jpeg",
    descricao: "Entenda o território mineiro: regiões, relevo, biomas e hidrografia que moldam o estado.",
    outrasInformacoes: [
      { titulo: "Regiões", texto: "Triângulo Mineiro, Zona da Mata, Norte de Minas, Vale do Rio Doce, Jequitinhonha, Sul e Centro." },
      { titulo: "Relevo", texto: "Serras do Espinhaço, Mantiqueira e Canastra; altitudes marcantes no Sul e Sudeste." },
      { titulo: "Hidrografia", texto: "Nascentes do São Francisco (Serra da Canastra) e bacias dos rios Doce, Paranaíba e Jequitinhonha." }
    ]
  },
  {
    id: 12,
    nome: "Queijos",
    imagem: "imagens/queijo.jpeg",
    descricao: "Queijos artesanais com tradição secular e sabor característico.",
    outrasInformacoes: [
      { titulo: "Tipos", texto: "Experimente queijos de minas padrão e maturados." },
      { titulo: "Compra", texto: "Compre em produtores locais para garantir frescor." }
    ]
  }
];
```