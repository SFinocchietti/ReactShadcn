import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const cede = () => {
  const [count, setCount] = useState(0);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Hiciste clic ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <h1>Cede!!!</h1>
      <div>
        <p>Hiciste clic {count}</p> 
        <Button onClick={() => setCount(count + 1)} style={{ margin: "10px" }}>
          Comprar
        </Button>
        <Button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          style={{ margin: "10px" }}
        >
          Restar Compra
        </Button>
        <Button onClick={() => setCount(0)} style={{ margin: "10px" }}>
          {" "}
          Resetear
        </Button>
      </div>
      <Button onClick={() => setContador(contador + 1)}> Clic de titulo</Button>
    </div>
  );
};

export default cede;
