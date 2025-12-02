'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Ciudads', [

      // 1 - Argentina
      { nombre: 'Buenos Aires', pais_id: 1, latitud: -34.6037, longitud: -58.3816, openweather_id: 3435910, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Córdoba', pais_id: 1, latitud: -31.4201, longitud: -64.1888, openweather_id: 3860259, createdAt: new Date(), updatedAt: new Date() },

      // 2 - Brasil
      { nombre: 'São Paulo', pais_id: 2, latitud: -23.5505, longitud: -46.6333, openweather_id: 3448439, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Rio de Janeiro', pais_id: 2, latitud: -22.9068, longitud: -43.1729, openweather_id: 3451190, createdAt: new Date(), updatedAt: new Date() },

      // 3 - Chile
      { nombre: 'Santiago de Chile', pais_id: 3, latitud: -33.4489, longitud: -70.6693, openweather_id: 3871336, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Valparaíso', pais_id: 3, latitud: -33.0472, longitud: -71.6127, openweather_id: 3868626, createdAt: new Date(), updatedAt: new Date() },

      // 4 - Uruguay
      { nombre: 'Montevideo', pais_id: 4, latitud: -34.9011, longitud: -56.1645, openweather_id: 3441575, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Punta del Este', pais_id: 4, latitud: -34.9614, longitud: -54.9431, openweather_id: 3441686, createdAt: new Date(), updatedAt: new Date() },

      // 5 - Estados Unidos
      { nombre: 'New York', pais_id: 5, latitud: 40.7128, longitud: -74.0060, openweather_id: 5128581, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Los Ángeles', pais_id: 5, latitud: 34.0522, longitud: -118.2437, openweather_id: 5368361, createdAt: new Date(), updatedAt: new Date() },

      // 6 - Canadá
      { nombre: 'Toronto', pais_id: 6, latitud: 43.6532, longitud: -79.3832, openweather_id: 6167865, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Vancouver', pais_id: 6, latitud: 49.2827, longitud: -123.1207, openweather_id: 6173331, createdAt: new Date(), updatedAt: new Date() },

      // 7 - México
      { nombre: 'Ciudad de México', pais_id: 7, latitud: 19.4326, longitud: -99.1332, openweather_id: 3530597, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Guadalajara', pais_id: 7, latitud: 20.6597, longitud: -103.3496, openweather_id: 4005539, createdAt: new Date(), updatedAt: new Date() },

      // 8 - España
      { nombre: 'Madrid', pais_id: 8, latitud: 40.4168, longitud: -3.7038, openweather_id: 3117735, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Barcelona', pais_id: 8, latitud: 41.3851, longitud: 2.1734, openweather_id: 3128760, createdAt: new Date(), updatedAt: new Date() },

      // 9 - Francia
      { nombre: 'París', pais_id: 9, latitud: 48.8566, longitud: 2.3522, openweather_id: 2988507, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Lyon', pais_id: 9, latitud: 45.7640, longitud: 4.8357, openweather_id: 2996944, createdAt: new Date(), updatedAt: new Date() },

      // 10 - Alemania
      { nombre: 'Berlín', pais_id: 10, latitud: 52.5200, longitud: 13.4050, openweather_id: 2950159, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Hamburgo', pais_id: 10, latitud: 53.5511, longitud: 9.9937, openweather_id: 2911298, createdAt: new Date(), updatedAt: new Date() },

      // 11 - Italia
      { nombre: 'Roma', pais_id: 11, latitud: 41.9028, longitud: 12.4964, openweather_id: 3169070, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Milán', pais_id: 11, latitud: 45.4642, longitud: 9.1900, openweather_id: 3173435, createdAt: new Date(), updatedAt: new Date() },

      // 12 - Reino Unido
      { nombre: 'Londres', pais_id: 12, latitud: 51.5074, longitud: -0.1278, openweather_id: 2643743, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Manchester', pais_id: 12, latitud: 53.4808, longitud: -2.2426, openweather_id: 2643123, createdAt: new Date(), updatedAt: new Date() },

      // 13 - Portugal
      { nombre: 'Lisboa', pais_id: 13, latitud: 38.7223, longitud: -9.1393, openweather_id: 2267057, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Oporto', pais_id: 13, latitud: 41.1579, longitud: -8.6291, openweather_id: 2735943, createdAt: new Date(), updatedAt: new Date() },

      // 14 - Países Bajos
      { nombre: 'Ámsterdam', pais_id: 14, latitud: 52.3676, longitud: 4.9041, openweather_id: 2759794, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Róterdam', pais_id: 14, latitud: 51.9244, longitud: 4.4777, openweather_id: 2747891, createdAt: new Date(), updatedAt: new Date() },

      // 15 - Suecia
      { nombre: 'Estocolmo', pais_id: 15, latitud: 59.3293, longitud: 18.0686, openweather_id: 2673722, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Gotemburgo', pais_id: 15, latitud: 57.7089, longitud: 11.9746, openweather_id: 2711537, createdAt: new Date(), updatedAt: new Date() },

      // 16 - Noruega
      { nombre: 'Oslo', pais_id: 16, latitud: 59.9139, longitud: 10.7522, openweather_id: 3143244, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Bergen', pais_id: 16, latitud: 60.3913, longitud: 5.3221, openweather_id: 3161732, createdAt: new Date(), updatedAt: new Date() },

      // 17 - Japón
      { nombre: 'Tokio', pais_id: 17, latitud: 35.6895, longitud: 139.6917, openweather_id: 1850147, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Osaka', pais_id: 17, latitud: 34.6937, longitud: 135.5023, openweather_id: 1853909, createdAt: new Date(), updatedAt: new Date() },

      // 18 - China
      { nombre: 'Pekín', pais_id: 18, latitud: 39.9042, longitud: 116.4074, openweather_id: 1816670, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Shanghái', pais_id: 18, latitud: 31.2304, longitud: 121.4737, openweather_id: 1796236, createdAt: new Date(), updatedAt: new Date() },

      // 19 - Corea del Sur
      { nombre: 'Seúl', pais_id: 19, latitud: 37.5665, longitud: 126.9780, openweather_id: 1835848, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Busan', pais_id: 19, latitud: 35.1796, longitud: 129.0756, openweather_id: 1838524, createdAt: new Date(), updatedAt: new Date() },

      // 20 - India
      { nombre: 'Nueva Delhi', pais_id: 20, latitud: 28.6139, longitud: 77.2090, openweather_id: 1261481, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Mumbai', pais_id: 20, latitud: 19.0760, longitud: 72.8777, openweather_id: 1275339, createdAt: new Date(), updatedAt: new Date() },

      // 21 - Australia
      { nombre: 'Sídney', pais_id: 21, latitud: -33.8688, longitud: 151.2093, openweather_id: 2147714, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Melbourne', pais_id: 21, latitud: -37.8136, longitud: 144.9631, openweather_id: 2158177, createdAt: new Date(), updatedAt: new Date() },

      // 22 - Nueva Zelanda
      { nombre: 'Auckland', pais_id: 22, latitud: -36.8485, longitud: 174.7633, openweather_id: 2193733, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Wellington', pais_id: 22, latitud: -41.2865, longitud: 174.7762, openweather_id: 2179537, createdAt: new Date(), updatedAt: new Date() },

      // 23 - Sudáfrica
      { nombre: 'Johannesburgo', pais_id: 23, latitud: -26.2041, longitud: 28.0473, openweather_id: 993800, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Ciudad del Cabo', pais_id: 23, latitud: -33.9249, longitud: 18.4241, openweather_id: 3369157, createdAt: new Date(), updatedAt: new Date() },

      // 24 - Egipto
      { nombre: 'El Cairo', pais_id: 24, latitud: 30.0444, longitud: 31.2357, openweather_id: 360630, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Alejandría', pais_id: 24, latitud: 31.2001, longitud: 29.9187, openweather_id: 361058, createdAt: new Date(), updatedAt: new Date() },

      // 25 - Turquía
      { nombre: 'Estambul', pais_id: 25, latitud: 41.0082, longitud: 28.9784, openweather_id: 745044, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Ankara', pais_id: 25, latitud: 39.9334, longitud: 32.8597, openweather_id: 323786, createdAt: new Date(), updatedAt: new Date() }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ciudads', null, {});
  }
};
