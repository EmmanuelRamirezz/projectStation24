import React, { useState } from 'react';
import { TvIcon, SquaresPlusIcon, Squares2X2Icon, InformationCircleIcon } from '@heroicons/react/24/solid'
import contenido from '../assets/contenido.png'
const Contenido = (props) => {

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
  ];
  const screens = [
    {
      name: 'Pantalla 1',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />
    },
    {
      name: 'Pantalla 2',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />
    },
    {
      name: 'Pantalla 3',
      icon: <TvIcon className="size-6 text-white mx-auto mt-1" />
    }
  ];
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

              <form className="space-y-4">
                <div className="flex justify-evenly">
                  {screens.map((screen) => (
                    <button
                      key={screen.name}
                      type="radio"
                      className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                    >
                      {screen.name}
                      {screen.icon}
                    </button>
                  ))}
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal1}
                    className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 transition"
                  >
                    Aplicar
                  </button>
                </div>
              </form>
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

              <form className="space-y-4">
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

                <div className="flex justify-end space-x-4">
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
              <div className="flex justify-end space-x-4">
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
      </>
    );
}
export default Contenido