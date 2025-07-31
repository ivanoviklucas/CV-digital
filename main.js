const sobreMI = {
  Info: "Soy desarrollador web en formación, apasionado por la tecnología y el aprendizaje constante. Me entusiasma crear soluciones digitales que aporten valor y mejoren la experiencia del usuario. Actualmente, busco mi primera oportunidad laboral para aplicar mis conocimientos, crecer profesionalmente y seguir desarrollando proyectos reales. Me adapto fácilmente, disfruto trabajar en equipo y siempre estoy dispuesto a asumir nuevos desafíos.",
};

const experiencias = [
  {
    titulo: "Ele Seguridad SRL",
    descripcion: "Vigilador general.",
  },
  {
    titulo: "Coppel (01/2022 hasta 04/2023)",
    descripcion: "Promotor vía pública.",
  },
  {
    titulo: "Prevención de la Ciudad (2023 hasta la actualidad)",
    descripcion:
      "Garantizar la seguridad y el bienestar de los ciudadanos en diferentes ámbitos.",
  },
];

const estudios = [
  {
    titulo: "Curso de Desarrollo Web",
    descripcion: "Coderhouse - HTML, CSS, diseño responsivo.",
  },
  {
    titulo: "Curso de JavaScript",
    descripcion: "Coderhouse - JS moderno, DOM, eventos, funciones.",
  },
  {
    titulo: "Lic. en Administración",
    descripcion: "9 materias aprobadas (interrumpido).",
  },
  {
    titulo: "Secundario completo",
    descripcion: "Nuestra Sra. de la Misericordia.",
  },
];

function sobreMi() {
  const contenedor = document.getElementById("sobre-mi");
  const titulo = document.createElement("h2");
  const infoMia = document.createElement("p");
  titulo.textContent = "Sobre mi";
  infoMia.textContent = sobreMI.Info;

  contenedor.appendChild(titulo);
  contenedor.appendChild(infoMia);
}

// declaro la funcion geneadora de tarjetas.
function generadorTarjetas() {
  const contenedor = document.getElementById("capasitacion");
  const tituloSeccion1 = document.createElement("h2");
  tituloSeccion1.textContent = "Estudios";
  contenedor.appendChild(tituloSeccion1);
  //recorro los elementos para crear elementos html y darles contenido
  estudios.forEach((element) => {
    const tarjeta = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = element.titulo;
    if (element.titulo === "Curso de Desarrollo Web") {
      tarjeta.addEventListener("click", () => {
        Swal.fire({
          imageUrl: "imagenes/certificado-desarrollo-web.png",
          imageWidth: 500,
          imageAlt: "Certificado del curso",
          showConfirmButton: false,
        });
      });
    } else if (element.titulo === "Curso de JavaScript") {
      tarjeta.addEventListener("click", () => {
        Swal.fire({
          imageUrl: "imagenes/certificado javaScript.png",
          imageWidth: 500,
          imageAlt: "Certificado del curso",
          showConfirmButton: false,
        });
      });
    }
    const descripcion = document.createElement("p");
    descripcion.textContent = element.descripcion;
    tarjeta.classList.add("tarjeta");
    // Insertar contenido en la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);

    // Insertar tarjeta en el contenedor
    contenedor.appendChild(tarjeta);
  });
  const contenedor2 = document.getElementById("experiencia");
  const tituloSeccion2 = document.createElement("h2");
  tituloSeccion2.textContent = "experiencia";
  contenedor2.appendChild(tituloSeccion2);
  experiencias.forEach((element) => {
    const tarjeta = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = element.titulo;
    if (
      element.titulo === "Prevención de la Ciudad (2023 hasta la actualidad)"
    ) {
      tarjeta.addEventListener("click", () => {
        Swal.fire({
          imageUrl:
            "https://www.dataciudad.com/datos/nota/BPBD/PN/BPBDPNBDAABDPMBPALNMLNPFNCBMCX.jpg",
          imageWidth: 300,
          imageAlt: "imagen de prevencion de la ciudad",
          text: "Garantizar la seguridad y el bienestar de los ciudadanos en diferentes ámbitos.",
          showConfirmButton: false,
        });
      });
    }
    const descripcion = document.createElement("p");
    descripcion.textContent = element.descripcion;
    tarjeta.classList.add("tarjeta");

    // Insertar contenido en la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);

    // Insertar tarjeta en el contenedor
    contenedor2.appendChild(tarjeta);
  });
}
// ejecuto la funcion
sobreMi();
generadorTarjetas();
