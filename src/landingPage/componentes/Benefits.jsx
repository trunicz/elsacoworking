import CardImage from "./Benefits/CardImage";

const images = [
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Interior moderno de oficina",
  },
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Interior moderno de oficina",
  },
  {
    src: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Interior moderno de oficina",
  },
];

const Benefits = () => {
  return (
    <section className="w-full mx-auto flex justify-center p-10">
      <main className="text-center w-full">
        <h1 className="text-4xl mx-auto font-titles font-black">Beneficios</h1>
        <p className="font-euphemia w-8/12 mx-auto text-gray-600">
          Aquí puedes proyectar una imagen profesional sin rentar una oficina
          completa. Te ofrecen soporte administrativo, espacio para juntas y
          atención para tus clientes. Ahorras tiempo y dinero, y te enfocas en
          hacer crecer tu negocio sin preocuparte por los detalles.
        </p>

        <div className="flex mx-auto py-6 w-2/3  h-96 overflow-hidden ">
          {images.map((image, index) => (
            <CardImage
              key={index}
              src={image.src}
              alt={image.alt}
              imageIndex={index}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Benefits;
