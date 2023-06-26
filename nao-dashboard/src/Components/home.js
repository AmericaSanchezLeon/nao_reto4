import Clientes from "./clientes";
import Recibos from "./recibos";
import Ventas from "./ventas";
import Productos from "./productos";

export default function Home() {
  return (
    <div className="w-9/12 bg-slate-100 m-5 w-full overflow-y-auto">
      <Ventas />
      <Productos />
    <div className="flex">

      <Clientes />
      <Recibos />
    </div>
    </div>
  );
}
