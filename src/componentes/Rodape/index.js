import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodapeFinal">
      <div>
        <a>
          <img src="img/fb.png" alt="Logo do facebook"></img>
        </a>
        <a>
          <img src="img/tw.png" alt="Logo do Twiter"></img>
        </a>
        <a>
          <img src="img/ig.png" alt="Logo do Instagran"></img>
        </a>
      </div>
      <div>
        <img src="img/logo.png"></img>
      </div>
      <div>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;
