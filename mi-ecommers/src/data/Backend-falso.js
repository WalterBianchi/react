const base_de_datos = [
    {   
        id:1,
        nombre: "Trek",
        modelo: "Speed concept",
        precio: "9500",
        img: "https://images.squarespace-cdn.com/content/v1/5767b637ebbd1a42a8a9574e/2717aba7-ff64-4688-ab42-e8f19e3fe25e/SC_Marquee_Bike.jpeg",
    },
    {   
        id:2,
        nombre: "Specialized",
        modelo: "S-Works",
        precio: "9500",
        img: "https://sportuniverse.com/imagenes/publicaciones/lg-20128.jpg",
    },
    {   
        id:3,
        nombre: "Cervelo",
        modelo: "Cervelo P5",
        precio: "9500",
        img: "https://www.220triathlon.com/wp-content/uploads/sites/4/2020/05/15387-ae1a882.jpg",
    },
    {   
        id:4,
        nombre: "Canyon",
        modelo: "Speedmax",
        precio: "9500",
        img: "https://biketoday.news/storage/articles/2948/1550759400_main.jpg",
    },
]

export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout (() => {
            res(base_de_datos)
            rej("error")
        }, 3000);
        });
    }
