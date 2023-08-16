import React from "react";
import ButtonType from "./ButtonType";

function App() {
  const [total, setTotal] = React.useState(0)
  return (
    <div>
      <p>Total:{total}</p>
      <ButtonType total={total} setTotal={setTotal}/>

    </div>
  );
}

export default App;
