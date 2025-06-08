//src/index.ts
import Server from './server';

// Iniciar el servidor en el puerto 3000
Server.listen(9090, () => {
    console.log("Servidor corriendo en el puerto 9090");
    console.log("http://localhost:9090");
});

