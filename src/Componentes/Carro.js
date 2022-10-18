function Carro(props) {

  return (
    <div>
      <h2>{props.carro.nomeDoCarro}</h2>
      <ul>
        <li>Cor: {props.carro.cor}</li>
        <li>Ano: {props.carro.ano}</li>
        <li>É flex: {props.carro.flex?"sim":"nao"}</li>
        <li>Quem guardou na garagem?: {props.donoCarro}</li>
      </ul>
    </div>
  );
}

export default Carro;
