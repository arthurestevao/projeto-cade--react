import { useState } from "react";
import "./App.css";
import logoCade from './imagens/logotipocade.png'; 


const listaCategorias = [
  { titulo: "Ciência e Tecnologia", subcategorias: ["Institutos", "Publicações"] },
  { titulo: "Cultura", subcategorias: ["Museus", "Música", "MP3"] },
  { titulo: "Esportes", subcategorias: ["Automobilismo", "Futebol"] },
  { titulo: "Governo", subcategorias: ["Federal", "Estados", "Concursos"] },
  { titulo: "Informática", subcategorias: ["Empresas", "Software", "Vírus"] },
  { titulo: "Lazer", subcategorias: ["Carnaval", "Turismo", "Infantil"] },
  { titulo: "Referência", subcategorias: ["Bibliotecas", "Dicionários"] },
  { titulo: "Serviços", subcategorias: ["Beleza", "Companhias Aéreas"] },
];

const listaCategoriasDireita = [
  { titulo: "Compras Online", subcategorias: ["CD", "Informática", "Livros"] },
  { titulo: "Educação", subcategorias: ["Escolas", "Universidades"] },
  { titulo: "Finanças", subcategorias: ["Bancos", "Bolsas", "Seguros"] },
  { titulo: "Indústria e Comércio", subcategorias: ["Veículos", "Telecomunicações"] },
  { titulo: "Internet", subcategorias: ["E-mail Grátis", "Provedores"] },
  { titulo: "Notícias", subcategorias: ["Jornais", "Revistas"] },
  { titulo: "Saúde", subcategorias: ["Hospitais", "Instituições"] },
  { titulo: "Sociedade", subcategorias: ["ONGs", "Pessoais", "Religião"] },
];

const listaNoticias = [
  "Laudo: cantor estava em alta velocidade",
  "Mais quatro desenhos no Cartoon",
  "Eliminatórias da Copa começam sábado",
];

const listaDestaques = [
  { titulo: "Sinal dos Tempos", texto: "Internet, o sintoma de uma Nova Era" },
  { titulo: "Febre Amarela", texto: "Um sério problema colorido" },
  { titulo: "Comportamento", texto: "Como seremos no próximo milênio?" },
];

const listaLinksRodape = ["Propaganda no Cadê?", "Centro de Informações", "Política de Privacidade"];

function BarraSuperior() {
  return (
    <div className="barra-superior">
      <div className="barra-superior-esquerda">
        <a href="#novos">Novos</a>
        <a href="#inclusoes">Inclusões</a>
      </div>
      <div className="barra-superior-direita">
        <a href="#mail">Cadê? Mail</a>
        <a href="#veja">Veja</a>
      </div>
    </div>
  );
}

function Logotipo() {
  return (
    <div className="logotipo">
      <img src={logoCade} alt="Cadê?" className="logotipo-imagem" />
    </div>
  );
}

function BarraMenu() {
  const itensMenu = ["Cadê? Você", "Download", "AQUI!", "Cadê? Livros", "Cadê? EnglishTown"];

  return (
    <div className="barra-menu">
      {itensMenu.map((item) => (
        <a key={item} href="#menu" className="item-menu">
          {item}
        </a>
      ))}
    </div>
  );
}

function CaixaDeBusca() {
  const [textoDigitado, setTextoDigitado] = useState("");

  function aoClicarEmBuscar() {
    if (textoDigitado.trim() === "") {
      alert("Digite algo para buscar!");
    } else {
      alert('Você buscou por: "' + textoDigitado + '"');
    }
  }

  return (
    <div className="caixa-busca">
      <p className="titulo-consulta">Consulta</p>
      <div className="campo-busca">
        <input
          type="text"
          value={textoDigitado}
          onChange={(evento) => setTextoDigitado(evento.target.value)}
          className="input-busca"
        />
        <button onClick={aoClicarEmBuscar} className="botao-busca">
          Busca
        </button>
      </div>
      <a href="#opcoes" className="link-opcoes">
        Opções de busca
      </a>
    </div>
  );
}

function CaixaPublicidade() {
  return (
    <div className="caixa-publicidade">
      <a href="#publicidade" className="texto-publicidade">
        Lojas Americanas - Clique Aqui!!!
      </a>
      <p className="rotulo-publicidade">PUBLICIDADE</p>
    </div>
  );
}

function BlocoCategoria({ titulo, subcategorias }) {
  return (
    <div className="bloco-categoria">
      <a href="#categoria" className="titulo-categoria">
        {titulo}
      </a>
      <div className="subcategorias">
        {subcategorias.map((subcategoria, indice) => (
          <span key={subcategoria}>
            <a href="#subcategoria">{subcategoria}</a>
            {indice < subcategorias.length - 1 ? "  " : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

function ColunaCategorias({ categorias }) {
  return (
    <div className="coluna-categorias">
      {categorias.map((categoria) => (
        <BlocoCategoria
          key={categoria.titulo}
          titulo={categoria.titulo}
          subcategorias={categoria.subcategorias}
        />
      ))}
    </div>
  );
}

function BarraLateral() {
  return (
    <div className="barra-lateral">
      <h3 className="titulo-lateral">Notícias</h3>
      <ul className="lista-noticias">
        {listaNoticias.map((noticia) => (
          <li key={noticia}>
            <a href="#noticia">{noticia}</a>
          </li>
        ))}
      </ul>
      <a href="#mais" className="link-mais">
        Mais...
      </a>

      <h3 className="titulo-lateral">Destaques</h3>
      <ul className="lista-destaques">
        {listaDestaques.map((destaque) => (
          <li key={destaque.titulo}>
            <strong>{destaque.titulo}</strong>
            <br />
            <a href="#destaque">{destaque.texto}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Rodape() {
  return (
    <div className="rodape">
      {listaLinksRodape.map((link, indice) => (
        <span key={link}>
          <a href="#rodape">{link}</a>
          {indice < listaLinksRodape.length - 1 ? " | " : ""}
        </span>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <BarraSuperior />
        <Logotipo />
        <BarraMenu />
      </header>

      <section className="secao-busca">
        <CaixaDeBusca />
        <CaixaPublicidade />
      </section>

      <hr className="linha-divisoria" />

      <main className="conteudo-principal">
        <ColunaCategorias categorias={listaCategorias} />
        <ColunaCategorias categorias={listaCategoriasDireita} />
        <BarraLateral />
      </main>

      <hr className="linha-divisoria" />

      <Rodape />
    </div>
  );
}

export default App;
