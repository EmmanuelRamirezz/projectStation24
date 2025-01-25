import React, { useState } from 'react';
import { TvIcon, SquaresPlusIcon, Squares2X2Icon, CheckCircleIcon, FilmIcon } from '@heroicons/react/24/solid'
import contenido from '../assets/contenido.png'
const apiKey = "JvXbikst4froBxzCJ2pLi1KrJkYIJ25M6XmzNyDumws2pUaNnolCrPTt"; 
const Contenido = (props) => {
  const [screensContent, setScreensContent] = useState([]);
  //Se obtienen los ids del prop
  let ids = [];
  if (props.videosSeleccionados.length !== 0) {
    for (let i = 0; i < props.videosSeleccionados.length; i++) {
      ids.push(props.videosSeleccionados[i].id);
    }
  }
//creacion de variables de apoyo
const results1 = [];
const results2 = [];
const results3 = [];
//variables de los videos seleccionados por pantalla
const [pantalla1, setpantalla1]=useState();
const [pantalla2, setpantalla2]=useState();
const [pantalla3, setpantalla3]=useState();
//variable de la duracin de los videos 
const [totalDuracion1, setTotalDuracion1] = useState();
const [totalDuracion2, setTotalDuracion2] = useState();
const [totalDuracion3, setTotalDuracion3] = useState();

// Función para realizar la petición de los videos seleccionados
const fetchVideoData = async (id) => {
  const url = `https://api.pexels.com/videos/videos/${id}`;
  try {
      const response = await fetch(url, {
          headers: {
              Authorization: apiKey
          }
      });
      if (!response.ok) {
          throw new Error(`Error en la solicitud para ID ${id}: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error(`Error al obtener datos para el ID ${id}:`, error.message);
      return { id, error: error.message }; // Devuelve un objeto con el error para ese ID
  }
};
  //Calculo de la duracion de una playlist manual
  function playlistDuration (playlist, n){
    const totalMinutes = playlist.reduce((sum, obj) => sum + obj.duration, 0);
    const hours = Math.floor(totalMinutes / 60); // Calcula las horas completas
    const minutes = totalMinutes % 60; // Calcula los minutos restantes
    if(n==1){
      setTotalDuracion1(`${hours} h : ${minutes} min`);
    }else if(n==2){
      setTotalDuracion2(`${hours} h : ${minutes} min`);
    }else if(n==3){
      setTotalDuracion3(`${hours} h : ${minutes} min`);
    }
    
  }
  // Funciones que retornar datos de videos por pantalla a partir de los ids  
  const fetchAllData1 = async (ids) => {    
    for (const id of ids) {
        const data = await fetchVideoData(id); // Llamada a la API por cada ID
        results1.push(data); // Guardar los datos en el array
    }    
    setpantalla1(results1);
    playlistDuration (results1,1);

  };
  const fetchAllData2 = async () => {
     // Array para almacenar los resultados
    for (const id of ids) {
        const data = await fetchVideoData(id); // Llamada a la API por cada ID
        results2.push(data); // Guardar los datos en el array
    }
    setpantalla2(results2);
    playlistDuration (results2,2);
  };
  const fetchAllData3 = async () => {
     // Array para almacenar los resultados
    for (const id of ids) {
        const data = await fetchVideoData(id); // Llamada a la API por cada ID
        results3.push(data); // Guardar los datos en el array
    }
    setpantalla3(results3);
    playlistDuration (results3,3);
  };

   // Funciones para asignar los ids a una pantalla
   const asign1 = () => {
    openModal5();
    setScreensContent((prev) => {
      const updated = [...prev];
      updated[0] = ids;
      return updated;
    });
    fetchAllData1(ids)
  };
  const asign2 = () => {
    openModal5();
    setScreensContent((prev) => {
      const updated = [...prev];
      updated[1] = ids;
      return updated;
    });
    fetchAllData2(ids)
  };
  const asign3 = () => {
    openModal5();
    setScreensContent((prev) => {
      const updated = [...prev];
      updated[2] = ids;
      return updated;
    });
    fetchAllData3(ids)
  };
  //Arreglo de objteros de los videos de cada pantalla
  console.log("pantalla 1 ", pantalla1);
  console.log("pantalla 2 ", pantalla2);
  console.log("pantalla 3 ", pantalla3);

  

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
                    Nombre de la playlist
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
                {pantalla1 && (
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>1</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                    <img
                      className="w-full h-auto"
                      src={pantalla1[0].image}
                    />
                    <p className='my-2'>{pantalla1[0].user.name}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>Asignación manual</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>{pantalla1.length}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                        {totalDuracion1}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
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
                )}

                {pantalla2 && (
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>2</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                    <img
                      className="w-full h-auto"
                      src={pantalla2[0].image}
                    />
                    <p className='my-2'>{pantalla2[0].user.name}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>Asignación manual</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>{pantalla2.length}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                        {totalDuracion2}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
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
                )}

                {pantalla3 && (
                  <tr>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>3</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                    <img
                      className="w-full h-auto"
                      src={pantalla3[0].image}
                    />
                    <p className='my-2'>{pantalla3[0].user.name}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>Asignación manual</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                      <p>{pantalla3.length}</p>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
                        {totalDuracion3}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center">
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
                )}
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