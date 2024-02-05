import { useEffect, useState } from 'react';
import Select from 'react-select';
import recursos from "../../public/data/JMresource.json";
import categorias from "../../public/data/categorias.json";
const ITEMS = recursos.resources;
const ALLITEMS = ITEMS.concat(categorias.categorias)

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    if (selectedOption != null) {
      handleOnChange()
    }
  
  }, [selectedOption])
  
  const items=ALLITEMS.map((item) => {
    return { value: item.name, label: item.name }
  })

  const handleOnChange = () => {
    const palabraClave = selectedOption.value.toString().toLowerCase();
    // con el startswith es para que empiece igual
    let resultados = ITEMS.filter(
      (item) =>
        // Verificar si el nombre o la descripción es exactamente igual a la palabra clave
        item.name.toLowerCase().startsWith(palabraClave) ||
        item.category.some((category) =>
          category.toLowerCase().startsWith(palabraClave)
        )
    );

    localStorage.setItem("buscador", JSON.stringify(resultados));
    document.getElementById("searchButton").click()
  }


  return (
    <div>
      <Select
        defaultValue={null}
        onChange={setSelectedOption}
        options={items}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: '#4F46E5',
            primary: '#4F46E5',
          },
        })}
      />
      <a id='searchButton' href="/search-navbar" className='hidden'></a>
    </div>
  )
}



export default Search