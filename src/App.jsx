import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./components/Header/Headers";
import Form from "./components/Formulario/Form";
import MiOrg from "./components/MiOrg";
import Equipos from "./components/Equipos/Equipo";
import Footer from "./components/Footer/PiedePagina";

function App() {
  //puedes tambien usar condicion &&se muestra o lo que ballas a quitar

  const [mostrarForm, actualizarForm] = useState(false);
  //Estado donde tenemos la info de los colaboradores
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      id:uuidv4(),
      equipo: "Programación",
      foto: "https://pixabay.com/get/g4286083601048ecd38eb9a5b6002597de822e726f1d637800f212338b190964ec45c0e351cc39cd141e92c35fcfa276c9a6454ad8be13345361e723e6085e7db5efb36113c1002f49f3a8f7e8985d088_640.jpg",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      favorito:true
    },
    {
      id:uuidv4(),
      equipo: "Ux y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      favorito:false
    },
    {
      id:uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      favorito:true
    },
    {
      id:uuidv4(),
      equipo: "Gestión y Innovasión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      favorito:false
    },
  ]);
   const [equipos,actualizarEquipos]=useState([
    
      {
        id:uuidv4(),
        titulo: "Programación",
        colorPrimary: "#57c278",
        colorSecondary: "#d9f7e9",
      },
      {
        id:uuidv4(),
        titulo: "Front End",
        colorPrimary: "#82cffa",
        colorSecondary: "#e8feff",
      },
      {
        id:uuidv4(),
        titulo: "Data Sience",
        colorPrimary: "#a6d157",
        colorSecondary: "#fof8ff",
      },
      {
        id:uuidv4(),
        titulo: "DevOps",
        colorPrimary: "#e06b69",
        colorSecondary: "#fde7e8",
      },
      {
        id:uuidv4(),
        titulo: "Ux y Diseño",
        colorPrimary: "#db6ebf",
        colorSecondary: "#fae9f5",
      },
      {
        id:uuidv4(),
        titulo: "Móvil",
        colorPrimary: "#ffba05",
        colorSecondary: "#fff5d9",
      },
      {
        id:uuidv4(),
        titulo: "Gestión y Innovasión",
        colorPrimary: "#ff8a29",
        colorSecondary: "#ffeedf",
      },
    
   ])

  //Mostramos el formulario
  const cambiarMostrar = () => {
    actualizarForm(!mostrarForm);
  };

  // Func para registrar un nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log(colaborador);
    //spred opereitor
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando colaboador",id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  };
  
  //Actualizar color de equiupo
  const actualizarColorEquipo = ( color,id) => {
    console.log("Actualizar",color,id);
    const equipoActualizado = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimary=color
      }
      return equipo
  })
  actualizarEquipos(equipoActualizado)
  }
  // crear equipos
  const crearEquipo = (nuevoEquipo) => {
    console.log("Crear equipo",nuevoEquipo);
    actualizarEquipos([...equipos,{... nuevoEquipo,id:uuidv4()}])
  }

  //funcion del favorito
  const likeFavorito=(id)=>{
console.log("desde favorito")
const colaboradorFavorito = colaboradores.map((colaborador)=>{
  if (colaborador.id===id) {
     colaborador.favorito = !colaborador.favorito
  }
  return colaborador
})
actualizarColaboradores(colaboradorFavorito)
  }

  return (
    <>
      <div>
        <Header />
        <MiOrg cambiarMostrar={cambiarMostrar} />
        {mostrarForm && (
          <Form
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
        )}
        {equipos.map((equipo) => {
          return (
            <Equipos
              datos={equipo}
              key={equipo.titulo}
              colaboradores={colaboradores.filter(
                (colaborador) => colaborador.equipo === equipo.titulo
              )}
              eliminarColaborador={eliminarColaborador}
              actualizarColorEquipo={actualizarColorEquipo}
              likeFavorito={likeFavorito}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
