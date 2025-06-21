# 🍓 Season Fruits – Landing Page ReactJS
Landing page en React + Vite que consume la API Fruityvice para mostrar frutas de temporada.

![Vista previa](./public/assets/vistaPrevia.png)

---

## 📌 Prerequisitos
 
- **Node.js** `v10.9.2`  
- **npm** `10.9.2`  

> Estas versiones fueron usadas para desarrollar y testear el proyecto. 
---

## ⚙️ Tecnologías usadas

- **ReactJS 18**
- **Vite**
- **TypeScript**
- **Bootstrap 5 + CSS personalizado**
- **Jest + React Testing Library** para pruebas
- **Hooks personalizados:**
  - `useFetchFruits` → consume la API
  - `useFilteredFruits` → filtra y ordena
  - `useLikedFruits` → persiste likes en localStorage
  - `useTakeImage` → selecciona imagen o fallback

---

## 🚀 Instalación ¡rápida!

```bash
git clone https://github.com/ciyucapa/FruitsWeb.git
cd FruitsWeb
npm install
npm run dev

Abre http://localhost:5173 en tu navegador.
```
---

## ✅ Funcionalidades implementadas

  1. Consumo de API pública Fruityvice
  2. Imágenes locales dinámicas /Si no existe imagen: muestra not-available.webp/
  3. Tarjetas de producto con: Imagen, nombre, info nutricional, Botón de “❤️ me gusta” persistente
  4. Filtrado por Family / Order / Genus
  5. Ordenamiento A-Z y Z-A
  6. Cargar más frutas con "See more"
  7. Resumen nutricional dinámico
  8. 100% responsive (móvil, tablet, escritorio)

---

## 🧪 Test

  #### Correr todos los tests
  npm run test

  #### Correr un test específico
  npm run test -- src/components/FilterAndSortedFruits/FilterAndSortedFruits.test.tsx

---

## 📂 Recursos proporcionados

  Durante el desarrollo de esta prueba técnica se utilizaron los siguientes recursos:

  🔗 API pública Fruityvice
  https://www.fruityvice.com/

  🎨 Diseño en Figma
  [Ver diseño](https://www.figma.com/design/ZwJgBcWBWre00mjaMwfVQd/Prueba-t%C3%A9cnica?node-id=1-64&t=spCo2oBGvumU7J4r-0)

  🖼️ Carpeta de imágenes y diseño de respaldo (Google Drive)
  [Acceder a la carpeta](https://drive.google.com/drive/folders/1SyuYFHV7WtQk_1JyjJ7GF0YFVxYey8GM)

---

## 📝 Licencia

  ##### MIT © Cindy Cáceres

---

##  🛠 Configuración de Proxy CORS (Solo para Desarrollo)

La API de Fruityvice puede bloquear solicitudes directas desde `localhost` debido a restricciones de CORS. Para solventarlo durante el desarrollo, puedes usar el proxy de CORS Anywhere:

1. Abre en tu navegador: https://cors-anywhere.herokuapp.com/corsdemo  
2. Haz clic en **“Request temporary access to the demo server”**.  
3. En tu hook de la API (`useFetchFruits.tsx`), ajusta la URL así:

   ```ts
   const API_URL =
     'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all';
  ```

4. Reinicia el servidor de desarrollo:
  ```
    npm run dev
  ```
5. Refresca tu aplicación en http://localhost:5173. Las llamadas a la API ya deberían funcionar.
Nota: Este proxy es solo para desarrollo local. Para producción, configura tu propio proxy o llama directamente a la API si CORS lo permite.

---

