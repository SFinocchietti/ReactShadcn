import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";


type CarritoItem ={
  producto: string;
  cantidad: number;
  total: number;
}

type Producto = "Producto 1" | "Producto 2" | "Producto 3";


const valoresUnitarios: Record<Producto, number> ={
  "Producto 1": 100,
  "Producto 2": 200,
  "Producto 3": 300,
};

const Carrito = () => {
  <Slider defaultValue={[33]} max={100} step={1} />;
  const [cantidad1, setCantidad1] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [cantidad3, setCantidad3] = useState(0);
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  const confirmarCompra = (producto: Producto, cantidad: number) => {
    if (cantidad > 0) {
      const valorUnitario = valoresUnitarios[producto];
      const total = cantidad * valorUnitario;
      setCarrito((preCarrito) => [
        ...preCarrito,
      {producto, cantidad, total},
    ]); 
    }
  };

  const eliminarProducto = (index: number) =>{
    setCarrito((preCarrito) => preCarrito.filter((_, i) => i !==index));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 1</CardTitle>
            <CardDescription>Valor unitario $100</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Alimento</p>
            <div className="flex items-center space-x-2">
              <Slider
                value={[cantidad1]}
                max={100}
                onValueChange={(value) => setCantidad1(value[0])}
                className="flex-grow"
              />
              <span>{cantidad1}</span>
              <Button onClick={() => confirmarCompra("Producto 1", cantidad1)}>Confirmar Compra</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 2</CardTitle>
            <CardDescription>Valor unitario $200</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Alimento</p>
            <div className="flex items-center space-x-2">
              <Slider
                value={[cantidad2]}
                max={100}
                onValueChange={(value) => setCantidad2(value[0])}
                className="flex-grow"
              />
              <span>{cantidad2}</span>
              <Button onClick={() => confirmarCompra("Producto 2", cantidad2)}>Confirmar Compra</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 3</CardTitle>
            <CardDescription>Valor unitario $300</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Alimento</p>
            <div className="flex items-center space-x-2">
              <Slider
                value={[cantidad3]}
                max={100}
                onValueChange={(value) => setCantidad3(value[0])}
                className="flex-grow"
              />
              <span>{cantidad3}</span>
              <Button onClick={() => confirmarCompra("Producto 3", cantidad3)}>Confirmar Compra</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {carrito.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Productos en el carrito</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {carrito.map((item, index) => (
              <Card key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg">
                <TrashIcon onClick={() => eliminarProducto(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"></TrashIcon>
                <CardHeader>
                  <CardTitle>{item.producto}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Valor a pagar: ${item.total} </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
