import React from "react";
import { Input } from "./Input";

function App() {
  const [data, setData] = React.useState("")
  return (
    <div>
      <p>Início da viagem: {data}</p>
      <Input id="email" label="E-mail" type="email" />
      <Input id="nome" label="Nome" type="text" />
      <Input 
        id="inicio_de_viagem" 
        label="Início da viagem" 
        type="date"  
        value={data} 
        onChange={(event)=> setData(event.currentTarget.value)}/>
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}

export default App;
