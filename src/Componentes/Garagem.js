import Carro from "./Carro";


function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={()=>props.funcao(props.nome)}>Boas Vindas</button>
      <Carro 
        carro={props.aircooled}
        donoCarro={props.adicionadoPor}
      />
      <Carro 
        carro={props.aircooled2}
        donoCarro={props.adicionadoPor}
      />
      <Carro
        carro={props.aircooled3}
        donoCarro={props.adicionadoPor}
      />
    </div>
  );
}

export default Garagem;
