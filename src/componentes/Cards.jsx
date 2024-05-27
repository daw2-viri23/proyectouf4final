import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Trash, Pencil } from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';
import { CirclePlus } from 'lucide-react';


export function Cards() {
  const { historias } = useGlobalContext();

  return (
    <div className="relative w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {historias.map(historia => (
        <Card key={historia.id} className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
          <Image
            removeWrapper
            alt={historia.titulo}
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={historia.imagen}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          <CardHeader className="absolute top-4 left-4 z-20">
            <p className="text-white text-sm uppercase font-bold">{historia.fecha}</p>
            <h4 className="text-white text-2xl font-bold">{historia.titulo}</h4>
          </CardHeader>
          <CardBody className="absolute bottom-16 left-4 z-20">
            <p className="text-white text-sm">{historia.experiencia}</p>
          </CardBody>
          <CardFooter className="absolute bottom-4 left-4 z-20 flex space-x-4">
            <Button auto flat icon={<Pencil />} className="text-white bg-yellow-500 hover:bg-yellow-600">Editar</Button>
            <Button auto flat icon={<Trash />} className="text-white bg-red-500 hover:bg-red-600">Eliminar</Button>
          </CardFooter>
        </Card>
      ))}
      <Button className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 text-lg transition-transform transform hover:scale-105" auto><CirclePlus /></Button>
    </div>
  );
}