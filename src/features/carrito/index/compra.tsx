import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Carrito = () => {
  <Slider defaultValue={[33]} max={100} step={1} />;
  const [cantidad1, setCantidad1] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [cantidad3, setCantidad3] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 1</CardTitle>
            <CardDescription>Descripcion</CardDescription>
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
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 2</CardTitle>
            <CardDescription>Descripcion</CardDescription>
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
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform transform hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Producto 3</CardTitle>
            <CardDescription>Descripcion</CardDescription>
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Carrito;
