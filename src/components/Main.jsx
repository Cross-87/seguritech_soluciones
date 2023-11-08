import React from "react";

function Main() {
  return (
    <main className="">
      <section
        id="home"
        className="h-screen w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-blue-700">
          Bienvenido a Seguritech Soluciones!
        </h1>
        <p className="text-lg">
          Somos expertos en seguridad cibernética y ofrecemos soluciones de
          vanguardia para proteger tu empresa en un mundo digital en constante
          cambio.
        </p>
        <p className="text-md font-medium">
          Nuestro equipo de profesionales en seguridad te brindará la
          tranquilidad que necesitas.
        </p>
      </section>

      <section
        id="services"
        className="h-screen w-full flex flex-col justify-center items-center gap-y-8 bg-blue-400 text-white"
      >
        <h2 className="text-4xl font-bold">Servicios Destacados</h2>
        <ul className="w-[60%] flex flex-col gap-y-1">
          <li className="list-disc">
            <span className="text-lg font-medium">Seguridad de Red:</span>{" "}
            Protege tus redes contra amenazas cibernéticas con soluciones
            avanzadas de firewall y monitoreo constante.
          </li>
          <li className="list-disc">
            <span className="text-lg font-medium">
              Gestión de Identidad y Acceso:
            </span>{" "}
            Administra de manera segura las identidades y accesos de tus
            empleados y clientes.
          </li>
          <li className="list-disc">
            <span className="text-lg font-medium">
              Prevención de Ransomware:
            </span>{" "}
            Evita ataques de ransomware y protege tus datos más valiosos.
          </li>
          <li className="list-disc">
            <span className="text-lg font-medium">Seguridad en la Nube:</span>{" "}
            Garantiza la seguridad de tus datos en entornos de nube con
            soluciones a medida.
          </li>
          <li className="list-disc">
            <span className="text-lg font-medium">
              Evaluación de Vulnerabilidades:
            </span>
            Identifica y corrige posibles vulnerabilidades en tus sistemas.
          </li>
          <li className="list-disc">
            <span className="text-lg font-medium">Educación en Seguridad:</span>{" "}
            Capacitamos a tus empleados en las mejores prácticas de seguridad
            cibernética.
          </li>
        </ul>
      </section>

      <section
        id="contact"
        className="h-screen w-full flex flex-col items-center justify-center gap-y-8"
      >
        <h1 className="text-4xl font-bold text-blue-700">Contacto</h1>
        <div>
          <p className="text-lg">
            Contáctanos para obtener una consulta gratuita y descubre cómo
            podemos proteger tu negocio. Información de contacto:
          </p>
          <p className="text-md font-medium w-[500px] mx-auto text-center">
            Dirección: Av. Rómulo Garza, Calle 13 #219 <br /> Teléfono:
            8127648548
            <br />
            Correo Electrónico: seguritech@outlook.org
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
