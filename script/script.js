// Base de dados dos livros atualizada com gêneros e preços
const books = [
    {
        id: 1,
        title: "O Diário de um Mago",
        author: "Paulo Coelho",
        genre: "Ficção Autobiográfica / Esoterismo",
        price: "R$ 12,99",
        image: "images/book1.jpg",
        synopsis: "A jornada de autodescoberta do autor pelo místico Caminho de Santiago de Compostela, mesclando reflexões esotéricas, exercícios práticos e a busca pela própria espada."
    },
    {
        id: 2,
        title: "Will & Will",
        author: "John Green & David Levithan",
        genre: "Romance Jovem Adulto (YA)",
        price: "R$ 12,00",
        image: "images/book2.jpg",
        synopsis: "Dois garotos com o mesmo nome, mas vidas completamente diferentes, têm seus caminhos cruzados em uma esquina de Chicago, o que acaba mudando a trajetória de ambos."
    },
    {
        id: 3,
        title: "O Jardim dos Esquecidos",
        author: "V.C. Andrews",
        genre: "Romance Gótico / Drama",
        price: "R$ 19,99",
        image: "images/book3.jpg",
        synopsis: "A sombria e trágica história de quatro irmãos que são trancados em um sótão por sua mãe e avó, revelando terríveis segredos obscuros da família."
    },
    {
        id: 4,
        title: "Loney",
        author: "Andrew Michael Hurley",
        genre: "Ficção de Mistério / Terror Gótico",
        price: "R$ 19,99",
        image: "images/book4.jpg",
        synopsis: "Um romance gótico e atmosférico que explora fé, segredos e um macabro ritual que ocorre durante uma peregrinação a um santuário na sombria costa inglesa."
    },
    {
        id: 5,
        title: "As Provações de Apolo: O Oráculo Oculto",
        author: "Rick Riordan",
        genre: "Fantasia / Mitologia",
        price: "R$ 12,99",
        image: "images/book5.jpg",
        synopsis: "O arrogante deus Apolo é punido por Zeus e transformado em um adolescente mortal sem poderes, precisando aprender a sobreviver no mundo moderno para reconquistar seu lugar no Olimpo."
    },
    {
        id: 6,
        title: "O Nome do Vento",
        author: "Patrick Rothfuss",
        genre: "Alta Fantasia",
        price: "R$ 24,99",
        image: "images/book6.jpg",
        synopsis: "A história épica de Kvothe, um jovem dotado de imenso talento mágico e musical que cresce para se tornar o mago mais notório de seu mundo."
    },
    {
        id: 7,
        title: "Como Eu Era Antes de Você",
        author: "Jojo Moyes",
        genre: "Romance Contemporâneo / Drama",
        price: "R$ 19,99",
        image: "images/book7.jpg",
        synopsis: "A comovente história de Lou Clark e Will Traynor, um homem tetraplégico rico e cínico de quem ela é contratada para cuidar, transformando as perspectivas de vida de ambos."
    },
    {
        id: 8,
        title: "Seleções Reader's Digest (Capa Branca)",
        author: "Vários Autores",
        genre: "Coletânea / Diversos",
        price: "R$ 12,99",
        image: "images/book8.jpg",
        synopsis: "Coletânea contendo versões condensadas de: 'Nada a Perder', 'A Orquestra de La Salva o Mundo', 'A Pirâmide' e 'A Garota que Caçava a Lua'."
    },
    {
        id: 9,
        title: "Biblioteca de Seleções (Lombada Bege)",
        author: "Vários Autores",
        genre: "Coletânea / Diversos",
        price: "R$ 12,99",
        image: "images/book9.jpg",
        synopsis: "Volume clássico que inclui os títulos condensados: 'Demolidores de Barragens', 'A Estrada do Poente', 'Os Braços de Vênus' e 'Uma História de Pardais'."
    },
    {
        id: 10,
        title: "Seleções de Livros (Lombada Cinza)",
        author: "Vários Autores",
        genre: "Coletânea / Diversos",
        price: "R$ 12,99",
        image: "images/book10.jpg",
        synopsis: "Coletânea literária apresentando as obras: 'Águas de Fronteira', 'O Lugar de uma Mulher', 'Transplante' e 'A Guerra dos Inocentes'."
    },
    {
        id: 11,
        title: "Como Interpretar Seu Mapa Astral",
        author: "Martin Freeman",
        genre: "Astrologia / Esoterismo",
        price: "R$ 12,99",
        image: "images/book11.jpg",
        synopsis: "Um guia conciso que apresenta técnicas básicas para a análise e interpretação dos elementos que compõem um mapa natal."
    },
    {
        id: 12,
        title: "Astrologia Atual Alto Astral",
        author: "Maggy Harrison & Melina Li",
        genre: "Astrologia / Esoterismo",
        price: "R$ 12,99",
        image: "images/book12.jpg",
        synopsis: "Um material voltado para o autoconhecimento, explorando signos, constelações e as influências celestes nas características individuais."
    },
    {
        id: 13,
        title: "Quem Você Pensa Que É?",
        author: "Derek e Julia Parker",
        genre: "Astrologia / Autoconhecimento",
        price: "R$ 14,99",
        image: "images/book13.jpg",
        synopsis: "Uma exploração detalhada da personalidade humana, utilizando conhecimentos astrológicos para investigar comportamentos, traços e potenciais."
    },
    {
        id: 14,
        title: "O Quinze",
        author: "Rachel de Queiroz",
        genre: "Romance Regionalista Brasileiro",
        price: "R$ 9,99",
        image: "images/book14.jpg",
        synopsis: "Um grande clássico da literatura nacional que retrata de forma crua e realista o drama, a miséria e a luta pela sobrevivência dos retirantes durante a grande seca de 1915 no Nordeste."
    },
    {
        id: 15,
        title: "Admirável Mundo Novo",
        author: "Aldous Huxley",
        genre: "Ficção Científica / Distopia",
        price: "R$ 9,99",
        image: "images/book15.jpg",
        synopsis: "Uma distopia assustadoramente atual sobre uma sociedade futurista dividida em castas, onde as pessoas são condicionadas biologicamente e pacificadas por tecnologia e drogas de felicidade."
    },
    {
        id: 16,
        title: "Metodologia do Trabalho Científico",
        author: "Antônio Joaquim Severino",
        genre: "Acadêmico / Educação",
        price: "R$ 12,99",
        image: "images/book16.jpg",
        synopsis: "Um manual indispensável para estudantes, oferecendo diretrizes claras e estruturadas para a elaboração de trabalhos acadêmicos, pesquisas e redação científica."
    },
    {
        id: 17,
        title: "Sabá, O País das Mil Fragrâncias",
        author: "Roselis von Sass",
        genre: "Romance Histórico / Espiritualidade",
        price: "R$ 12,99",
        image: "images/book17.jpg",
        synopsis: "Um romance histórico que viaja pela sabedoria do Rei Salomão e o fascínio da Rainha de Sabá, mergulhando nas tradições e nos ricos aromas do Oriente antigo."
    },
    {
        id: 18,
        title: "O Livro do Juízo Final",
        author: "Roselis von Sass",
        genre: "Espiritualidade / Esoterismo",
        price: "R$ 12,99",
        image: "images/book18.jpg",
        synopsis: "Uma obra reflexiva que aborda visões espirituais, escatologia e as transformações destinadas à humanidade segundo leis universais."
    }
];

// Elementos do DOM
const bookshelf = document.getElementById('bookshelf');
const modal = document.getElementById('book-modal');
const closeModal = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalGenre = document.getElementById('modal-genre');
const modalSynopsis = document.getElementById('modal-synopsis');

// Função para renderizar os livros
function renderBooks() {
    books.forEach(book => {
        // Criação do card
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.onclick = () => openModal(book);

        // Imagem do livro
        const img = document.createElement('img');
        img.src = book.image;
        img.alt = `Capa do livro ${book.title}`;

        // Título abaixo da capa
        const title = document.createElement('div');
        title.classList.add('book-title');
        title.textContent = book.title;

        // Preço na parte inferior do card
        const price = document.createElement('div');
        price.classList.add('book-price');
        price.textContent = book.price;

        // Montagem
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price); // Injetando o preço no HTML do Card
        bookshelf.appendChild(card);
    });
}

// Abrir modal com as informações do livro
function openModal(book) {
    modalImg.src = book.image;
    modalTitle.textContent = book.title;
    modalAuthor.textContent = book.author;
    modalGenre.textContent = book.genre; // Injetando o gênero
    modalSynopsis.textContent = book.synopsis;
    
    modal.classList.remove('hidden');
}

// Fechar modal
closeModal.onclick = () => {
    modal.classList.add('hidden');
}

// Fechar modal clicando fora dele
window.onclick = (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
}

// Iniciar a renderização
renderBooks();