import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Rodolfo"
  const novaGaragem= "Anderson"

  const carro1={
    nomeDoCarro: "Fusca",
    ano: 1970,
    cor: "Azul",
    flex: false
  }
  
  const carro2={
    nomeDoCarro: "SP2",
    ano: 1976,
    cor: "Cinza",
    flex: false
  }

  const carro3={
    nomeDoCarro: "Brasília",
    ano: 1970,
    cor: "Amarela",
    flex: false
    }

  const carro4={
    nomeDoCarro: "Corvette C8",
    ano: "2021",
    cor: "Vermelho",
    flex: true
  }

  const carro5={
    nomeDoCarro: "Ferrari F355",
    ano: "1999",
    cor: "Amarelo",
    flex: false
  }

  const carro6={
    nomeDoCarro: "Tesla Model S Plaid",
    ano: "2022",
    cor: "Vermelho",
    flex: false
  }

  function apresentacao (nome){
    alert(`Bem vindos à garagem de ${nome}`)
  }

  return (

    <div>
      <Garagem 
      nome={nome}
      aircooled={carro1}
      aircooled2={carro2}
      aircooled3={carro3}
      funcao={apresentacao}
      adicionadoPor={nome}
      />
      <Garagem
      nome={novaGaragem}
      aircooled={carro4}
      aircooled2={carro5}
      aircooled3={carro6}
      funcao={apresentacao}
      />
    </div>
  );
}
