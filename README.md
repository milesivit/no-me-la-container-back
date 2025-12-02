# 🚢 NOMELA CONTAINER – Backend

Backend del sistema de gestión logística marítima **No Me La Container**, desarrollado con **Node.js + Express + Sequelize**.  
Provee APIs para manejar barcos, puertos, viajes, contenedores, reservas, facturas, usuarios, roles, etc.

---

# 📦 Tecnologías principales

- Node.js + Express
- Sequelize ORM
- MySQL
- Swagger
- Dotenv

---

# 📁 Estructura del proyecto

```
no-me-la-container-back/
│── config/
│── controllers/
│── data/
│── middlewares/
│── migrations/
│── models/
│── routes/
│── seeders/
│── swagger/
│── utils/
│── createDataBase.js
│── index.js
│── package.json
│── .env-example
```

---

# ⚙️ Requisitos previos

- Node.js 16+
- MySQL 8+
- npm o yarn

---

# 🔧 Instalación

```bash
git clone https://github.com/milesivit/no-me-la-container-back.git
cd no-me-la-container-back
npm install
```

---

# 🔑 Archivo .env

```bash
cp .env-example .env
```

Luego completar:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=container_db
DB_PORT=3306

JWT_SECRET=super_secret_key
PORT=3000
```

---

# 🧱 Crear base de datos

```bash
node createDataBase.js
```

---

# 🔄 Migraciones

```bash
npx sequelize-cli db:migrate
```

---

# 🌱 Seeders

```bash
npx sequelize-cli db:seed:all
```

---

# ▶️ Ejecutar proyecto

```bash
npm run dev
```

o producción:

```bash
npm start
```

---

# 📘 Swagger

```
http://localhost:3000/api-docs
```

---

# 🧩 Scripts útiles

| Script | Uso |
|--------|------|
| npm start | Modo producción |
| npm run dev | Desarrollo con nodemon |
| db:migrate | Migrar tablas |
| db:seed:all | Ejecutar seeders |

---

# ✨ Entidades principales

- Barcos  
- Puertos  
- Ciudades  
- Containers  
- Estados  
- Servicios adicionales  
- Viajes  
- Reservas  
- Facturas  
- Usuarios / Roles  
- Autenticación JWT  

---

# 👥 Autores

Equipo del proyecto “No Me La Container”.
 - Milena Sivit
 - Santiago Baez
 - Alejo Pinatti
