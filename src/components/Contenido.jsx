import React, { useState } from 'react';
import { TvIcon, SquaresPlusIcon, Squares2X2Icon, CheckCircleIcon, FilmIcon } from '@heroicons/react/24/solid'
import contenido from '../assets/contenido.png'
const Contenido = (props) => {
  const [screensContent, setScreensContent] = useState([]);
  
  let ids = [];
  if (props.videosSeleccionados.length !== 0) {
    for (let i = 0; i < props.videosSeleccionados.length; i++) {
      ids.push(props.videosSeleccionados[i].id);
    }
    console.log('IDs:', ids);
  }
    // Función para asignar contenido a una pantalla
    const asign1 = () => {
      openModal5();
      setScreensContent((prev) => {
        const updated = [...prev];
        updated[0] = ids; // Asignar a screen1
        return updated;
      });
      console.log('Pantalla 1 actualizada:', ids);
    };
    const asign2 = () => {
      openModal5();
      setScreensContent((prev) => {
        const updated = [...prev];
        updated[1] = ids; // Asignar a screen2
        return updated;
      });
      console.log('Pantalla 2 actualizada:', ids);

    };
    const asign3 = () => {
      openModal5();
      setScreensContent((prev) => {
        const updated = [...prev];
        updated[2] = ids; // Asignar a screen3
        return updated;
      });
      console.log('Pantalla 3 actualizada:', ids);
    };
console.log(screensContent);
const pantall1 = [];
const pantall2 = [];
const pantall3 = [];
if(screensContent[0]!=null){
  pantall1.push(screensContent[0]);
}
if(screensContent[1]!=null){
  pantall2.push(screensContent[1]);
}
if(screensContent[2]!=null){
  pantall3.push(screensContent[2]);
}
console.log("pantalla 1 "+pantall1);
console.log("pantalla 2 "+pantall2);
console.log("pantalla 3 "+pantall3);


  //modal1
  const [isOpen1, setIsOpen1] = useState(false);
  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  //modal2
  const [isOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);
  //modal3
  const [isOpen3, setIsOpen3] = useState(false);
  const openModal3 = () => setIsOpen3(true);
  const closeModal3 = () => setIsOpen3(false);
  //modal4
  const [isOpen4, setIsOpen4] = useState(false);
  const openModal4 = () => setIsOpen4(true);//fetchSelectedVideos();
  const closeModal4 = () => setIsOpen4(false);
  //modal de confirmacion 5
  const [isOpen5, setIsOpen5] = useState(false);
  const openModal5 = () => setIsOpen5(true);//fetchSelectedVideos();
  const closeModal5 = () => setIsOpen5(false);

  //botones
  const buttons = [
    {
      name: 'Asignar conenido',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />,
      func: openModal1,
    },
    {
      name: 'Crear Playlist',
      icon: <SquaresPlusIcon className="size-6 text-white mx-auto mt-1" />,
      func: openModal2,
    },
    {
      name: 'Ver Playlists',
      icon: <Squares2X2Icon className="size-6 text-white mx-auto mt-1" />,
      func: openModal3,
    },
    {
      name: 'Ver contenido',
      icon: <FilmIcon className="size-6 text-white mx-auto mt-1" />,
      func: openModal4,
    },
  ];
  //modal pantallas
  const screens = [
    {
      name: 'Pantalla 1',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />,
      asign: asign1,
    },
    {
      name: 'Pantalla 2',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />,
      asign: asign2,
    },
    {
      name: 'Pantalla 3',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />,
      asign: asign3,
    }
  ];
  //array de playlists
  const playlists = [
    { id: 1, name: 'Especial navidad', autor: 'Jorge', duration: '10:20', length: '4', created:'18/12/2024' },
    { id: 2, name: 'Spining', autor: 'Emmanuel ', duration: '33:15', length: '11', created:'13/11/2024' },
    { id: 3, name: 'Videos chidos', autor: 'Alejandro', duration: '5:03', length: '1', created:'07/02/2024' },
  ];  


    return (
      <>
        <h2 className="text-white font-serif text-xl font-stationFont font-extrabold italic mx-auto my-5 text-center">
          Seleccione una pantalla y un contenido para ser aplicado
        </h2>
        {/* imagen de ejemplo */}
        {/* <div className="flex justify-center">
          <img src={contenido} height={200} width={800} alt="logo" />
        </div> */}
        <div className="flex justify-center mt-10">
          {buttons.map((button) => (
            <button
              type="button"
              key={button.name}
              onClick={button.func}
              className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-4 py-1 me-2 mb-2 mr-5"
            >
              {button.name}
              {button.icon}
            </button>
          ))}
        </div>
        {/* Modal 1 */}
        {isOpen1 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-darkGray p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4 text-stationOrange">
                Selecciona las pantallas a reproducir
              </h2>
                <div className="flex justify-evenly">
                  {screens.map((screen) => (
                    <button
                      key={screen.name}
                      type="radio"
                      className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                      onClick={screen.asign}
                    >
                      {screen.name}
                      {screen.icon}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center mt-20 space-x-4">
                  <button
                    type="button"
                    onClick={closeModal1}
                    className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                  >
                    Cerrar
                  </button>

                </div>
            </div>
          </div>
        )}
        {/* Modal 2 */}
        {isOpen2 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-darkGray p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4 text-stationOrange">
                Nueva playlist de videos
              </h2>

              <form className="">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Nombre de la playlist
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Autor de la playlist
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="mt-1 block w-full border-stationOrange2 rounded-md shadow-sm focus:ring-stationOrange2 focus:border-stationOrange2"
                  />
                </div>

                <div className="flex justify-center mt-20 space-x-4">
                  <button
                    type="button"
                    onClick={closeModal2}
                    className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Modal3 */}
        {isOpen3 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-darkGray p-6 rounded-lg shadow-lg max-w-2xl w-full">
              <h2 className="text-xl font-bold mb-4 text-stationOrange">
                Playlists disponibles
              </h2>
              <div>
                <table className="min-w-full border-collapse border border-gray-200 text-white mb-8">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Nombre
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Autor
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Duración
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Longitud
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Creación
                      </th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {playlists.map((row) => (
                      <tr key={row.id} className="">
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.id}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.name}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.autor}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.duration}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.length}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          {row.created}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                          <ul className="">
                            <li>
                              <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Asignar</button>
                            </li>
                            <li>
                              <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Editar</button>
                            </li>
                            <li>
                              <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Eliminar</button>
                            </li>
                          </ul>                       
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={closeModal3}
                  className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal4 */}
        {isOpen4 && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-darkGray p-6 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-xl font-bold mb-4 text-stationOrange">
            Contenido en reproducción
          </h2>
          <div>
            <table className="min-w-full border-collapse border border-gray-200 text-white mb-8">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-700">
                    Numero de la pantalla
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                    Video en reproduccion
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                    Cantidad de videos de la playlist
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                    Duración total de la playlist
                  </th>
                  
                  <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-sm font-medium text-gray-700">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                    <p>1</p>
                  </td>
                {screensContent[0] && (
                  <td></td>
                )}
                </tr>

                {playlists.map((row) => (
                  <tr key={row.id} className="">
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      {row.id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                      {row.autor}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                      {row.duration}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                      <ul className="">
                        <li>
                          <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Siguiente</button>
                        </li>
                        <li>
                          <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Pausar</button>
                        </li>
                        <li>
                          <button className=" text-stationOrange2 font-medium bold text-md px-2 py-1 hover:text-white">Anterior</button>
                        </li>
                      </ul>                       
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={closeModal4}
              className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
      
    )}
      {/* Modal5 */}
      {isOpen5 && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
          <h2 className="text-xl font-bold mb-4 text-stationOrange">
            Videos agregados exitosamente
          </h2>
          <CheckCircleIcon className="size-12 text-gray mx-auto my-4" />
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={closeModal5}
              className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
            >
             Aceptar
            </button>
          </div>
        </div>
      </div>
      
    )}
      </>
    );
}
export default Contenido