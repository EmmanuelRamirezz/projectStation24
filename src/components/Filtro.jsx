import React, { useState } from "react";
import Contenido from "./Contenido";
const Filtro = () => {
  const selects = [
    {
      content: "Gerencia",
      attribute: "selector1",
      options: ["gerente1", "gerente2", "gerente3"],
    },
    {
      content: "Region",
      attribute: "selector2",
      options: ["region1", "region2", "region3"],
    },
    {
      content: "Estado",
      attribute: "selector3",
      options: ["Jalisco", "Nuevo Leon", "Queretaro"],
    },
    {
      content: "Supervisor",
      attribute: "selector4",
      options: ["supervisor1", "supervisor2", "supervisor3"],
    },
    {
      content: "Sucursal",
      attribute: "selector5",
      options: ["sucursal1", "sucursal2", "sucursal3"],
    },
  ];
  //Prueba api
  const [query, setQuery] = useState(""); // Estado para el texto del input
  const [videos, setVideos] = useState([]); // Estado para los resultados de la búsqueda
  const apiKey = "JvXbikst4froBxzCJ2pLi1KrJkYIJ25M6XmzNyDumws2pUaNnolCrPTt"; // Reemplaza con tu clave de API de Pexels
  const [videosSeleccionados, setVideosSeleccionados] = [];

  const fetchVideos = async () => {
    if (!query) return; // No hacer nada si el input está vacío

    try {
      const response = await fetch(
        `https://api.pexels.com/videos/search?query=${query}&per_page=6&orientation=landscape&min_width=1280`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error en la petición");
      }

      const data = await response.json();
      console.log(data);
      
      setVideos(data.videos); // Guardar los resultados en el estado
    } catch (error) {
      console.error("Error al buscar videos:", error);
    }

  };

  return (
    <>
      <h2 className="text-stationOrange font-serif text-2xl font-stationFont font-extrabold italic text-center">
        Filtro de contenido
      </h2>
      {/* <div className="flex justify-center mt-5 gap-4">
                {selects.map((select) => (
                    <div key={select.content} className="flex flex-col">
                        <label htmlFor={select.attribute}>{select.content}</label>
                        <select name={select.attribute} id={select.attribute} className="border border-gray-300 rounded p-2">
                            {select.options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button type="button" className="text-white bg-stationOrange2 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2">
                    Aplicar
                </button>
            </div> */}
      {/* Prueba con API*/}
      <div className="w-2/3 mx-auto">
        {/* Input y botón */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca un video..."
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={fetchVideos}
            className="bg-stationOrange2 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Buscar
          </button>
          <button
            onClick={()=> setVideos([])}
            className="bg-stationOrange2 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Limpiar
          </button>
        </div>
    
        {/* Resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.id}className="border rounded overflow-hidden shadow">
             <input type="checkbox" className="absolute w-5 h-5 z-10" id={video.id}/>
              <video
                controls
                className="w-full h-auto"
                src={video.video_files[0]?.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
          <Contenido videosSeleccionados = {videosSeleccionados}/>
      </div>
    </>
  );
};

export default Filtro;
