const products = [
  {
    id: "Axasd1231",
    name: "Gta san andres",
    description: "Grand Theft Auto: San Andreas es un videojuego de acción-aventura de mundo abierto de disparos en tercera persona desarrollado por Rockstar North y publicado por Rockstar Games  ",
    price: 450,
    stock: 5,
    category: "survival",
    image: "/image/gtasan.jpg"
  },
  {
    id: "Axasass112",
    name: "Red dead redeption II",
    description: "Red Dead Redemption 2 es un videojuego de acción-aventura de mundo abierto desarrollado y publicado por Rockstar Games. El juego es la tercera entrada de la serie Red Dead y una precuela del juego de 2010 Red Dead Redemptio",
    price: 210,
    stock: 3,
    category: "survival",
    image: "/image/red-dead.jpg"
  },
  {
    id: "Gsx1232343",
    name: "Bully",
    description: "Bully es un videojuego no lineal de acción y aventura de mundo abierto desarrollado por Rockstar Vancouver para la consola PlayStation 2. El juego fue publicado el 17 de octubre de 2006 en América del Norte y el 25 de octubre de 2006 en Europa y Australia",
    price: 250,
    stock: 10,
    category: "shooter",
    image: "/image/bully.jpg"
  },
  {
    id: "Sdsaw1q123",
    name: "Max payne 3",
    description: "Max Payne 3 es un videojuego de acción en tercera persona de la franquicia Max Payne, desarrollado por Rockstar Games para Mac OS X, Microsoft Windows, PlayStation 3 y Xbox 360. Es el tercer juego de la saga, segundo desarrollado por Rockstar Vancouver.",
    price: 190,
    stock: 2,
    category: "shooter",
    image: "/image/max-payne-3.jpeg"
  }
]

//obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 2000);
  });
};

export default getProducts