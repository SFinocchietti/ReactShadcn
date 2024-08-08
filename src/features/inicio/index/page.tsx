import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface infoCard {
  [key: string]: boolean;
}

interface cantProducto {
  [key: string]: number;
}

interface sumarRestar {
  [key: string]: boolean;
}
// Los estados de las tarjetas
const ExamplePage: React.FC = () => {
  const [cardInfo, setCardInfo] = useState<infoCard>({});
  const [productoCant, setProductoCant] = useState<cantProducto>({});
  const [restarSumar, setRestarSumar] = useState<sumarRestar>({});
  //identificador de tarjeta
  const tarjetaInfo = (item: string) => {
    setCardInfo((muestraInfoCard) => ({
      ...muestraInfoCard,
      [item]: !muestraInfoCard[item],
    }));
  };
  //estado del boton sumar
  const sumarCantidad = (item: string) => {
    setProductoCant((prevProductoCant) => ({
      ...prevProductoCant,
      [item]: (prevProductoCant[item] || 0) + 1,
    }));
  };
  //estado del boton restar
  const restarCantidad = (item: string) => {
    setProductoCant((prevCant) => ({
      ...prevCant,
      [item]: Math.max((prevCant[item] || 0) - 1, 0),
    }));
  };
  //visibilidad de los botones
  const toggleQuantityControls = (item: string) => {
    setRestarSumar((prevsetRestarSumar) => ({
      ...prevsetRestarSumar,
      [item]: !prevsetRestarSumar[item],
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {"123456".split("").map((item, index) => (
        <Card key={item}>
          <CardHeader>
            <CardTitle>Alimento {index + 1}</CardTitle>
            <CardDescription>
              Descripcion de alimento {index + 1}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ingredientes:</p>
            <p>Alimento balanceado premium</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Button variant="ghost" onClick={() => tarjetaInfo(item)}>
              dias de entrega
            </Button>
            {cardInfo[item] && (
              <p className="mt-2">Lunes a viernes de 9 a 18.</p>
            )}
            <div className="flex items-center mt-4">
              {restarSumar[item] ? (
                <>
                  <Button onClick={() => restarCantidad(item)}>-</Button>
                  <span className="mx-2">{productoCant[item] || 0}</span>
                  <Button onClick={() => sumarCantidad(item)}>+</Button>
                </>
              ) : null}
              <Button onClick={() => toggleQuantityControls(item)}>
                comprar
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ExamplePage;
