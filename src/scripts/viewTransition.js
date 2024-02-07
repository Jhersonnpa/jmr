if (document.startViewTransition) {
  // Agrega un event listener para el evento 'navigate'
  window.navigation.addEventListener("navigate", (event) => {
    const toUrl = new URL(event.destination.url);

    // Es una página externa? Si es así, lo ignoramos
    if (location.origin !== toUrl.origin) return;

    // Si es una navegación en el mismo dominio (origen)
    event.intercept({
      async handler() {
        try {
          // Cargamos la página de destino utilizando fetch para obtener el HTML
          const response = await fetch(toUrl.pathname);
          const text = await response.text();
          const regexHTML = /<html[^>]*>([\s\S]*?)<\/html>/i;

          // Extraemos solo el contenido del HTML dentro de la etiqueta body
          const [, data] = text.match(regexHTML) || [];

          if (data) {
            // Utilizamos la API de View Transition
            document.startViewTransition(() => {
              const html = document.getElementById("html");

              if (html) {
                // Hacemos scroll hacia arriba del todo
                document.innerHTML = data;
                // document.documentElement.scrollTop = 0;
              }

              const script = document.createElement("script");
              script.src = "/scripts/scripts.js";
              html.appendChild(script);
              script.src = "/scripts/viewTransition.js";
              html.appendChild(script);
              script.src = "/scripts/scriptsHead.js"
              document.head.appendChild(script);
              script.onload = () => {
                // Lógica adicional después de cargar el script
                document.endViewTransition();
              };
              
            });
          }
        } catch (error) {
          console.error("Error al cargar la página:", error);
        }
      },
    });
  });
}

