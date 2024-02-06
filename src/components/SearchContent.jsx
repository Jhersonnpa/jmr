import { useEffect, useState } from "react";
import { buscador, recursosFiltrados} from "../state/state";
import { useStore } from "@nanostores/react";

const SearchContent = () => {
  const [items, setItems] = useState(useStore(recursosFiltrados));
  const $buscador = useStore(buscador);
  useEffect(() => {
    return setItems(recursosFiltrados.get());
  }, [buscador.get()]);

  const handleError = (e) => {
    e.target.src = "/images/notFound.webp";
  };

  return (
    <>
      {items.length >= 1 ? (
        items.map((item, i) => (
          <div
            key={i}
            className="card-item flex flex-col justify-between max-w-sm w-full mx-auto min-h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg object-cover aspect-video min-h-52 max-h-52 w-96 transition-all duration-300 filter"
              src={`/images/captura-${item.name
                .toLowerCase()
                .replace(/ /g, "")}.webp`}
              alt={`Imagen de ${item.name}`}
              onError={handleError}
            />
            <div className="px-4 h-full">
              <div className="py-3">
                <div className="w-full flex flex-wrap gap-1">
                  {item.category.length > 1 ? (
                    item.category.map((cat, i) => (
                      <span
                        key={cat + i}
                        className="bg-[#d5c5ff] text-gray-900/80 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-600 dark:text-white/90"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="bg-[#d5c5ff] text-gray-900/80 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-600 dark:text-white/90">
                      {item.category}
                    </span>
                  )}
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty">
                {item.description}
              </p>
            </div>
            <div className="px-5 py-1 self-center">
              <a
                href={item.link}
                target="_blank"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-600 to-indigo-900 group-hover:from-indigo-600 group-hover:to-indigo-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-2.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-world-www"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                  </svg>
                </span>
              </a>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-600 to-indigo-900 group-hover:from-indigo-600 group-hover:to-indigo-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-2.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github-filled"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                        strokeWidth="0"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              )}
              {item.youtube &&
                item.youtube.map((el,i) => (
                  <a
                    key={el+i}
                    href={el}
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-600 to-indigo-900 group-hover:from-indigo-600 group-hover:to-indigo-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-2.5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-youtube-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                          strokeWidth="0"
                          fill="#FF0000"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>No existen coincidencias de: '{$buscador}'</p>
      )}
    </>
  );
};

export default SearchContent;
