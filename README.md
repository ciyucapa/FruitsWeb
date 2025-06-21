# Season Fruits – Landing Page ReactJS

## Prerequisitos

- **Node.js** v10.9.2 

> Estas versiones fueron usadas para desarrollar y testear el proyecto. 
---

## Instalación

```bash
git clone https://github.com/ciyucapa/FruitsWeb
cd FruitsWeb

# usar npm:
npm install
npm run dev
```

### Configuración de Proxy CORS (Solo para Desarrollo)

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

