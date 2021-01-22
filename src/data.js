import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";
import sala from "./imahotel/sala.jpg";
import baniosuitefamiliar from "./imahotel/baniosuitefamiliar.jpeg";
import cuartosuite from "./imahotel/cuartosuitefamiliar.jpg";
import banohabitacionA from "./imahotel/banohabitaciontipo4.jpg";
import habitaciontipoA from "./imahotel/habitaciontipoA.jpg";
import literashabitaciontipoA from "./imahotel/literashabitaciontipoA.jpg";
import cuartohabitaciontipoB from "./imahotel/cuartohabitaciontipoB.jpg";
import literahabitaciontipoB from "./imahotel/literahabitaciontipoB.jpg";
import cuartohabitaciontipoc from "./imahotel/cuartohabitaciontipoc.jpg";
import cuarto2habitaciontipoc from "./imahotel/cuarto2habitaciontipoc.jpg";
import habitacion5tipoC  from "./imahotel/habitacion5tipoC .jpg";
import habitacion5TipoA2 from "./imahotel/habitacion5TipoA2.jpg";
import banohabitaciontipo4 from "./imahotel/banohabitaciontipo4.jpg";



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Suite Familiar #1",
      slug: "suite-familiar",
      type: "Individual",
      price: 200,
      //size: 200,
      capacity: 5,
      pets: false,
      breakfast: true,
      featured: false,
      description: ["Cuenta con 2 camas: cama 2 plazas - cama plaza ½ ",
        "Porch con hamaca en el exterior",
        "Suite totalmente desinfectada en cada limpieza de cuarto",
        "Complimentary refreshments",
        "Seguridad 24h",
        "Internet",
        "Camas confortables",

      ],
     
      extras:["No hay nota para esta habitacion"],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: sala
            }
          }
        },
        {
          fields: {
            file: {
              url: baniosuitefamiliar
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartosuite
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Suite Familiar #2",
      slug: "Suite-familiar2",
      type: "Individual",
      price: 115,
      size: 235,
      capacity: 6,
      pets: false,
      breakfast: true,
      featured: false,
      description: ["Cama 2 plazas - cama plaza ½ - cama plaza ½ ",
        "Porch con hamaca en el exterior",
        "Suite totalmente desinfectada en cada limpieza de cuarto",
        "Complimentary refreshments",
        "Seguridad 24h",
        "Internet",
        "Camas confortables",
      ],

      
      extras:["No hay nota para esta habitacion"],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: sala
            }
          }
        },
        {
          fields: {
            file: {
              url: baniosuitefamiliar
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartosuite
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Suite Familiar #3",
      slug: "suite-familiar 3",
      type: "Individual",
      price: 270,
      size: 300,
      capacity: 7,
      pets: true,
      breakfast: true,
      featured: false,
      description: ["Cama 2 plazas - cama plaza ½ - cama plaza ½ ",
        "Porch con hamaca en el exterior",
        "Suite totalmente desinfectada en cada limpieza de cuarto",
        "Complimentary refreshments",
        "Seguridad 24h",
        "Internet",
        "Camas confortables"],

        extras:["No hay nota para esta habitacion"],
        images: [
          {
            fields: {
              file: {
                url: img1
              }
            }
          },
          {
            fields: {
              file: {
                url: sala
              }
            }
          },
          {
            fields: {
              file: {
                url: baniosuitefamiliar
              }
            }
          },
          {
            fields: {
              file: {
                url: cuartosuite
              }
            }
          }
        ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Habitación #5 tipo A",
      slug: "habitacion5-tipoA",
      type: "Individual",
      price: 90,
      size: 400,
      capacity: 3,
      pets: false,
      breakfast: true,
      featured: false,
      description: [
        "1 cama plaza ½",
        "1 cama plaza ½",
        "1 cama 2 plazas",
        "a/c – baño con agua caliente – TV (direct tv)",
        "Incluye desayuno y uso de instalaciones.",
        "Habitación para 3 personas, cómoda , limpieza a cada instante "],
      
        extras:["Si el cliente desea la habitacion tambien puede ser de: $115 la noche – 4 personas",
        " La habitación 5A puede ser conectada con la 5B con una puerta en la mitad si así lo solicitan."],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: baniosuitefamiliar
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartosuite
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Habitación#5 tipo B",
      slug: "habitacion5-tipoB",
      type: "Doble",
      price: 90,
      size: 300,
      capacity: 3,
      pets: false,
      breakfast: true,
      featured: false,
      description: [
        "1 cama plaza ½",
        "1 cama plaza ½",
        "1 cama 2 plazas",
        "A/C – baño con agua caliente – TV (direct tv)",
        "Incluye desayuno y uso de instalaciones.",
        "Habitación para 3 personas, cómoda , limpieza a cada instante "],
        extras:["Si el cliente desea la habitacion tambien puede ser de: $115 la noche – 4 personas",
        " La habitación 5A puede ser conectada con la 5B con una puerta en la mitad si así lo solicitan."],

      
        images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: baniosuitefamiliar
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartosuite
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Habitación #5 tipo C",
      slug: "habitacion5-tipoC",
      type: "Doble",
      price: 100,
      size: 300,
      capacity: 4,
      pets: false,
      breakfast: true,
      featured: false,
      description: [
        "1 litera",
        "1 cama plaza ½",
        "1 cama plaza ½",
        "A/C – baño con agua caliente – NO HAY TV ",
        "Incluye desayuno y uso de instalaciones."],
        extras:["No hay nota para esta habitacion"],

      
        images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: baniosuitefamiliar
            }
          }
        },
        {
          fields: {
            file: {
              url: habitacion5tipoC
            }
          }
        },
        {
          fields: {
            file: {
              url: habitacion5tipoC 
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Habitacion Tipo A",
      slug: "double-standard",
      type: "Doble",
      price: 150,
      size: 400,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description: [
        "1 litera",
        "2 camas plaza ½",
        "1 cama 2 plazas",
        "a/c – baño con agua caliente – TV (direct tv)",
        "Incluye desayuno y uso de instalaciones.",
        ],
      extras: ["Si el cliente desea la habitacion tambien puede ser de: $175 la noche – CAPACIDAD 6 personas"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: habitaciontipoA
            }
          }
        },
        {
          fields: {
            file: {
              url: literashabitaciontipoA
            }
          }
        },
        {
          fields: {
            file: {
              url: banohabitacionA
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Habitacion Tipo B",
      slug: "habitaciontipob",
      type: "Doble",
      price: 100,
      size: 400,
      capacity: 4,
      pets: true,
      breakfast: false,
      featured: false,
      description: [
        "1 litera",
        "1 cama plaza ½",
        "1 cama 2 plazas",
        "a/c – baño con agua caliente – NO HAY TV",
        "Incluye desayuno y uso de instalaciones."],

      extras: ["Si el cliente desea la habitacion tambien puede ser de: $120 la noche – CAPACIDAD MÁXIMA 5 personas",
      "La habitación tipo A puede ser conectada con la tipo B (si así lo solicitan) con una puerta en la mitad. (menos la habitación #7)",
      "Cada habitación tiene su entrada independiente",
      
    ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: literahabitaciontipoB
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartohabitaciontipoB
            }
          }
        },
        {
          fields: {
            file: {
              url: banohabitacionA
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "16 "
    },
    fields: {
      name: "Habitacion Tipo C",
      slug: "habitaciontipoc",
      type: "Doble",
      price: 100,
      size: 400,
      capacity: 4,
      pets: true,
      breakfast: false,
      featured: false,
      description: [
        "1 litera",
        "1 cama plaza ½",
        "1 cama 2 plazas",
        "A/C – baño con agua caliente – NO HAY TV",
        "Incluye desayuno y uso de instalaciones."],
        extras: [
          "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
          "Niños 5 hasta 10 años – 15% dscto.",
          "Niños mayores 10 años – pago normal",
          "Desayunos, almuerzos y cenas - $7,50",
        ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: cuartohabitaciontipoc
            }
          }
        },
        {
          fields: {
            file: {
              url: cuarto2habitaciontipoc
            }
          }
        },
        {
          fields: {
            file: {
              url: banohabitacionA
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Suite Doble #1",
      slug: "double-standard",
      type: "Doble",
      price: 75,
      size: 400,
      capacity: 3 ,
      pets: true,
      breakfast: false,
      featured: false,
      description: [
          "Cama 2 plazas - Cama plaza 1/2",
          "a/c - baño con agua caliente",
          "Sala amoblada con tv (direct tv) - mini refrigeradora",
          "Incluye desayuno y uso de instalaciones."],
          extras: [
            "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
            "Niños 5 hasta 10 años – 15% dscto.",
            "Niños mayores 10 años – pago normal",
            "Desayunos, almuerzos y cenas - $7,50",
          ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Suite Doble #2",
      slug: "double-deluxe",
      type: "Doble",
      price: 115,
      size: 500,
      capacity: 3,
      pets: true,
      breakfast: true,
      featured: true,
      description: [
        "Cama 2 plazas - Cama plaza 1/2",
        "a/c - baño con agua caliente",
        "Sala amoblada con tv (direct tv) - mini refrigeradora",
        "Incluye desayuno y uso de instalaciones."],
      extras: [
        "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
        "Niños 5 hasta 10 años – 15% dscto.",
        "Niños mayores 10 años – pago normal",
        "Desayunos, almuerzos y cenas - $7,50",
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Suite Doble #3",
      slug: "habitacion-triple1",
      type: "Familiar",
      price: 115,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: true,
      featured: false,
      description:
        ["Cama 2 plazas - Cama plaza 1/2",
          "a/c - baño con agua caliente",
          "Sala amoblada con tv (direct tv) - mini refrigeradora",
          "Incluye desayuno y uso de instalaciones."],
      extras: [
        "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
        "Niños 5 hasta 10 años – 15% dscto.",
        "Niños mayores 10 años – pago normal",
        "Desayunos, almuerzos y cenas - $7,50",
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Habitacion Triple #1",
      slug: "family-basic",
      type: "Familiar",
      price: 75,
      size: 550,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        ["1 cama plaza ½",
          "1 cama plaza ½",
          "1 cama 2 plazas",
          "a/c – baño con agua caliente – NO HAY TV",
          "Incluye desayuno y uso de instalaciones."],
      extras: [
        "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
        "Niños 5 hasta 10 años – 15% dscto.",
        "Niños mayores 10 años – pago normal",
        "Desayunos, almuerzos y cenas - $7,50",
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "43"
    },
    fields: {
      name: "Habitacion Triple #2",
      slug: "family-standard",
      type: "Familiar",
      price: 75,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        ["1 cama plaza ½",
          "1 cama plaza ½",
          "1 cama 2 plazas",
          "a/c – baño con agua caliente – NO HAY TV",
          "Incluye desayuno y uso de instalaciones."],
      extras: [
        "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
        "Niños 5 hasta 10 años – 15% dscto.",
        "Niños mayores 10 años – pago normal",
        "Desayunos, almuerzos y cenas - $7,50",
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "15"
    },
    fields: {
      name: "Habitacion Triple #3",
      slug: "habitacion-triple-3",
      type: "Familiar",
      price: 95,
      size: 700,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        ["1 cama plaza ½",
          "1 cama plaza ½",
          "1 cama 2 plazas",
          "a/c – baño con agua caliente – NO HAY TV",
          "Incluye desayuno y uso de instalaciones."],
      extras: [
        "Niños 1 hasta 4 años - $7 la noche (no desayuno)",
        "Niños 5 hasta 10 años – 15% dscto.",
        "Niños mayores 10 años – pago normal",
        "Desayunos, almuerzos y cenas - $7,50",
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
 
];
