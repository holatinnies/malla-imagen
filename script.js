const malla = [
  {
    nombre: "1° Semestre",
    ramos: [
      { id: "1", nombre: "Gestión e Investigación en Salud I 📚", prerreq: [], tipo: "comun" },
      { id: "2", nombre: "Morfología I 📚", prerreq: [], tipo: "comun" },
      { id: "3", nombre: "Fundamentos Moleculares I 📚", prerreq: [], tipo: "comun" },
      { id: "4", nombre: "Química 📚", prerreq: [], tipo: "comun" },
      { id: "5", nombre: "Matemáticas 📚", prerreq: [], tipo: "comun" },
      { id: "6", nombre: "Introducción a Tecnología Médica 📚", prerreq: [], tipo: "comun" }
    ]
  },
  {
    nombre: "2° Semestre",
    ramos: [
      { id: "7", nombre: "Gestión e Investigación en Salud II 📚", prerreq: ["1"], tipo: "comun" },
      { id: "8", nombre: "Morfología II 📚", prerreq: ["2"], tipo: "comun" },
      { id: "9", nombre: "Fundamentos Moleculares II 📚", prerreq: ["3"], tipo: "comun" },
      { id: "10", nombre: "Física General 📚", prerreq: [], tipo: "comun" }
    ]
  },
  {
    nombre: "3° Semestre",
    ramos: [
      { id: "11", nombre: "Gestión e Investigación en Salud III 📚", prerreq: ["7"], tipo: "comun" },
      { id: "12", nombre: "Electivo Formación General 📚", prerreq: [], tipo: "comun" },
      { id: "13", nombre: "Fundamentos Biológicos y Modulación Farmacológica 📚", prerreq: ["8", "9"], tipo: "comun" },
      { id: "14", nombre: "Principios Fundamentales de Instrumentación 🩻", prerreq: ["10"], tipo: "mencion" }
    ]
  },
  {
    nombre: "4° Semestre",
    ramos: [
      { id: "15", nombre: "Gestión e Investigación en Salud IV 📚", prerreq: ["11"], tipo: "comun" },
      { id: "16", nombre: "Módulo Genito-Urinario 📚", prerreq: [], tipo: "comun" },
      { id: "17", nombre: "Fotografía Médica 🩻", prerreq: ["14"], tipo: "mencion" },
      { id: "18", nombre: "Mantención de Equipos Radiológicos 🩻", prerreq: ["14"], tipo: "mencion" },
      { id: "19", nombre: "Física Aplicada I 🩻", prerreq: ["10"], tipo: "mencion" }
    ]
  },
  {
    nombre: "5° Semestre",
    ramos: [
      { id: "20", nombre: "Sistema Digestivo 📚", prerreq: [], tipo: "comun" },
      { id: "21", nombre: "Anatomía Radiológica I 🩻", prerreq: [], tipo: "mencion" },
      { id: "22", nombre: "Técnicas Radiológicas I 🩻", prerreq: ["18"], tipo: "mencion" },
      { id: "23", nombre: "Física Aplicada II 🩻", prerreq: ["19"], tipo: "mencion" }
    ]
  },
  {
    nombre: "6° Semestre",
    ramos: [
      { id: "24", nombre: "Sistema Cardiovascular 📚", prerreq: [], tipo: "comun" },
      { id: "25", nombre: "Investigación I 📚", prerreq: ["15"], tipo: "comun" },
      { id: "26", nombre: "Anatomía Radiológica II 🩻", prerreq: ["21"], tipo: "mencion" },
      { id: "27", nombre: "Técnicas Radiológicas II 🩻", prerreq: ["22"], tipo: "mencion" },
      { id: "28", nombre: "Dosimetría y Protección Radiológica 🩻", prerreq: ["23"], tipo: "mencion" }
    ]
  },
  {
    nombre: "7° Semestre",
    ramos: [
      { id: "29", nombre: "Sistema Endocrino y Reproductor 📚", prerreq: [], tipo: "comun" },
      { id: "30", nombre: "Investigación II 📚", prerreq: ["25"], tipo: "comun" },
      { id: "31", nombre: "Patología Radiológica 🩻", prerreq: ["26"], tipo: "mencion" },
      { id: "32", nombre: "Técnicas Radiológicas III 🩻", prerreq: ["27"], tipo: "mencion" },
      { id: "33", nombre: "Práctica Hospitalaria 🩻", prerreq: ["27"], tipo: "mencion" },
      { id: "34", nombre: "Electivo Formación Profesional 📚", prerreq: [], tipo: "comun" }
    ]
  },
  {
    nombre: "8° Semestre",
    ramos: [
      { id: "35", nombre: "Sistema Inmune 📚", prerreq: [], tipo: "comun" },
      { id: "36", nombre: "Seminario Gestión o Investigación I 📚", prerreq: ["30"], tipo: "comun" },
      { id: "37", nombre: "Tomografía Axial Computada 🩻", prerreq: ["31", "32"], tipo: "mencion" },
      { id: "38", nombre: "Resonancia Nuclear Magnética 🩻", prerreq: ["31", "32"], tipo: "mencion" }
    ]
  },
  {
    nombre: "9° Semestre",
    ramos: [
      { id: "39", nombre: "Seminario Gestión o Investigación II 📚", prerreq: ["36"], tipo: "comun" },
      { id: "40", nombre: "Radioterapia 🩻", prerreq: ["37", "38"], tipo: "mencion" },
      { id: "41", nombre: "Medicina Nuclear 🩻", prerreq: ["38"], tipo: "mencion" },
      { id: "42", nombre: "Módulo Integrado de Enfermedades y Asuntos Legales 🩻", prerreq: ["16", "20", "24", "29", "35"], tipo: "mencion" }
    ]
  },
  {
    nombre: "10° Semestre",
    ramos: [
      { id: "43", nombre: "Práctica Profesional Controlada 🩻", prerreq: [
        "1","2","3","4","5","6","7","8","9","10",
        "11","12","13","14","15","16","17","18","19","20",
        "21","22","23","24","25","26","27","28","29","30",
        "31","32","33","34","35","36","37","38","39","40",
        "41","42"
      ], tipo: "mencion" }
    ]
  }
];

let completados = JSON.parse(localStorage.getItem("completados") || "[]");

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  let totalRamos = 0;

  malla.forEach(nivel => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${nivel.nombre}</h2>`;

    nivel.ramos.forEach(ramo => {
      totalRamos++;
      const elem = document.createElement("div");
      elem.className = "ramo";
      elem.textContent = ramo.nombre;

      const habilitado = ramo.prerreq.every(id => completados.includes(id));

      if (completados.includes(ramo.id)) {
        elem.classList.add("completado");
      } else if (!habilitado) {
        elem.classList.add("bloqueado");
      }

      elem.onclick = () => {
        if (!habilitado) return;
        if (completados.includes(ramo.id)) {
          completados = completados.filter(id => id !== ramo.id);
        } else {
          completados.push(ramo.id);
        }
        localStorage.setItem("completados", JSON.stringify(completados));
        render();
      };

      div.appendChild(elem);
    });

    contenedor.appendChild(div);
  });

  actualizarProgreso(totalRamos);
}

function actualizarProgreso(total) {
  const progreso = completados.length;
  const porcentaje = Math.round((progreso / total) * 100);

  const barra = document.getElementById("barra-progreso");
  const texto = document.getElementById("progreso-texto");

  barra.style.width = `${porcentaje}%`;
  texto.textContent = `🔓 Has completado ${progreso} de ${total} asignaturas (${porcentaje}%)`;
}

function reiniciarProgreso() {
  if (confirm("¿Seguro que quieres reiniciar tu progreso?")) {
    localStorage.removeItem("completados");
    completados = [];
    render();
  }
}

function exportarPDF() {
  window.print();
}

render();
