import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface Duenio {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
const DuenioCard = ({ user }: { user: Duenio }) => {
  return (
    <div className="card">
      <h2 className="card-title">Nombres y apellido: {user.name}</h2>
      <p>
        <strong>Usuario:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Telefono:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
      </p>
    </div>
  );
};

const CasaCentral = () => {
  const [imagenApi, setImagenApi] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null); // VER ESTO!!!
  const [duenios, setDuenio] = useState<Duenio[]>([]);
  const [currentDuenio, setCurrentDuenio] = useState<Duenio | null>(null);

  const fetchImgPerro = async () => {
    //setCargando(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImagenApi(data.message);
    } catch (error) {
      setError("No hay imagen de mascota");
    } finally {
      setCargando(false);
    }
  };

  const fetchDuenio = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setDuenio(data);
      setCurrentDuenio(data[Math.floor(Math.random() * data.length)]);
    } catch (error) {
      console.error("No hay datos de duenio: ", error);
    }
  };

  const handleRandomDuenio = () => {
    if (duenios.length > 0) {
      setCurrentDuenio(duenios[Math.floor(Math.random() * duenios.length)]);
    }
  };

  useEffect(() => {
    fetchImgPerro();
    fetchDuenio();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <h1>Casa Central</h1>
      <div>
        {cargando ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h2>Nuestros clientes</h2>
            <Card>
              <img
                src={imagenApi}
                alt="Random Dog"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Card>
            <Button onClick={fetchImgPerro}> Cambiar imagen</Button>
          </div>
        )}
      </div>
      <div>
        <h2> Datos de dueño</h2>
        <Card>
          {currentDuenio && <DuenioCard user={currentDuenio} />}
          <Button onClick={handleRandomDuenio}> Cambiar dueño</Button>
        </Card>
      </div>
    </div>
  );
};

export default CasaCentral;

// const casaCentral = () => {
//     return(
//         <h1>Casa Central!!</h1>
//     )
// }

// export default casaCentral;
