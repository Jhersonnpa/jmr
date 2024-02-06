import { useStore } from "@nanostores/react";
import { buscador,recursos, recursosFiltrados } from "../state/state";


const SearchMarc = () => {
  const $palabraClave = useStore(buscador);
  const $recursos = useStore(recursos);
  // console.log(`palabraclave: ${$palabraClave}`);
  // console.log(`recursos:`+JSON.stringify($recursos))

  const buscarPalabraClave = (buscador) => {
    const palabraClave = buscador;

    // con el startswith es para que empiece igual
    let resultados = $recursos.items.filter(
      (item) =>
        // Verificar si el nombre o la descripción es exactamente igual a la palabra clave
        item.name.toLowerCase().startsWith(palabraClave) ||
        item.category.some((category) =>
          category.toLowerCase().startsWith(palabraClave)
        )
    );

    recursosFiltrados.set(resultados)
    if(location.pathname != "/search-navbar"){
      document.getElementById("searchButton").click();
    }
  };

  const handleOnChange = (e) => {
    buscador.set(e.target.value);
    buscarPalabraClave(buscador.get());
  };

  return (
    <>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          ></path>
        </svg>
        <span className="sr-only">Search icon</span>
        <a id="searchButton" href="/search-navbar" className="hidden"></a>
      </div>
      <input
        value={$palabraClave}
        type="text"
        id="search-navbar"
        className="search-navbar block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#d5c5ff] focus:border-[#d5c5ff] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"
        placeholder="Busca por nombre o categoria"
        onChange={handleOnChange}
        autoFocus
      />
    </>
  );
};

export default SearchMarc;
