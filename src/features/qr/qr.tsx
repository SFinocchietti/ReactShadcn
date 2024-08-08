import QRCode from "qrcode.react";

const MercadoPagoQr = () => {
  const mercadoPagoUrl = "https://www.mercadopago.com/";

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">
        Escanea el código QR para ir a Mercado Pago
      </h1>
      <QRCode value={mercadoPagoUrl} size={256} />
    </div>
  );
};

export default MercadoPagoQr;
