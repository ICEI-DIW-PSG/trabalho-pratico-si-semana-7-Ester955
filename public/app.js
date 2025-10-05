const itensMinas = [
  { id: 1, titulo: "Culinária Mineira", 
    descricao: "Sabores que acolhem e conquistam.", 
    imagem: "imagens/paodequeijo.jpeg", 
    categoria: "Pão de Queijo" },
  { id: 2, titulo: "Cidades Históricas", 
    descricao: "Arquitetura colonial e tradição barroca.", 
    imagem: "imagens/ouropreto.jpeg", 
    categoria: "Ouro Preto" },
  { id: 3, titulo: "Natureza e Ecoturismo", 
    descricao: "Trilhas, cachoeiras e montanhas incríveis.", 
    imagem: "imagens/cachoeira.jpeg", 
    categoria: "Cachoeira em Minas" },
  { id: 4, titulo: "Artesanato Mineiro", 
    descricao: "Tradição e arte feitas à mão.", 
    imagem: "imagens/artesanato.jpeg", 
    categoria: "Artesanato de Minas" },
  { id: 5, titulo: "Café Mineiro", 
    descricao: "Tradição e sabor em cada grão.", 
    imagem: "imagens/cafe.jpeg", 
    categoria: "Café Mineiro" },
  { id: 6, titulo: "História de Minas", 
    descricao: "Rica em cultura e identidade brasileira.", 
    imagem: "imagens/historia.jpeg", 
    categoria: "História de Minas Gerais" },
  { id: 7, titulo: "Festas e Cultura", 
    descricao: "Congados e tradições populares.", 
    imagem: "imagens/cultura.jpeg", 
    categoria: "Festas de Minas" },
  { id: 8, titulo: "Montanhas", 
    descricao: "Horizontes e trilhas impressionantes.", 
    imagem: "imagens/PicodaBandeira.jpeg", 
    categoria: "Pico da Bandeira" },
  { id: 9, titulo: "Roteiros Imperdíveis", 
    descricao: "Vilarejos históricos e paisagens únicas.", 
    imagem: "imagens/Serro.jpeg", 
    categoria: "Roteiros de Minas" },
  { id: 10, titulo: "Parques Naturais", 
    descricao: "Preservação ambiental e lazer em meio à natureza.", 
    imagem: "imagens/januária.jpeg", 
    categoria: "Parques de Minas" },
  { id: 11, titulo: "Minas 360°", 
    descricao: "Explore cada canto do estado.", 
    imagem: "imagens/mapa.jpeg", 
    categoria: "Mapa de Minas" },
  { id: 12, titulo: "Queijos", 
    descricao: "Tradição e sabor em cada peça.", 
    imagem: "imagens/queijo.jpeg", 
    categoria: "Queijos Mineiros" }
];

document.addEventListener("DOMContentLoaded", montarCards);

function montarCards() {
 
  const container = document.getElementById("areaCards");
  if (!container) return;

  container.innerHTML = "";

  itensMinas.forEach(item => {
   
    const cardHTML = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="${item.imagem}" class="card-img-top" alt="${item.categoria}">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">${item.titulo}</h5>
            <p class="card-text text-muted">${item.descricao}</p>
            <a href="detalhes.html?id=${item.id}" class="btn btn-outline-dark btn-sm mt-2">Ver mais</a>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}

