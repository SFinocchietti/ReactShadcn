import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "@tanstack/react-router";

const pago: React.FC = () => {
  const navigate = useNavigate();

  const handleCreditoClic = () => {
    navigate({ to: "/tarjetaCredito" });
  };

  const handleDebitoClic = () => {
    navigate({ to: "/tarjetaDebito" });
  };

  const handleQRClic = () => {
    navigate({ to: "/mercadoPago" });
  };

  return (
    <div>
      <Button
        onClick={handleCreditoClic}
        variant="destructive"
        style={{ margin: "10px" }}
      >
        {" "}
        Tarjeta de credito{" "}
      </Button>
      <Button
        onClick={handleDebitoClic}
        variant="destructive"
        style={{ margin: "10px" }}
      >
        {" "}
        Tarjeta de debito{" "}
      </Button>
      <Button variant="destructive" style={{ margin: "10px" }}>
        {" "}
        Transferencia por MP{" "}
      </Button>
      <Button
        onClick={handleQRClic}
        variant="destructive"
        style={{ margin: "10px" }}
      >
        {" "}
        QR Mercado Pago{" "}
      </Button>
    </div>
  );
};

export default pago;
