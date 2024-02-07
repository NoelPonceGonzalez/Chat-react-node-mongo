import fs from 'fs';

// Rutas a tus archivos de logs
const infoLogPath = 'logs/info.log';
const errorLogPath = 'logs/error.log';

// Función para borrar el contenido de un archivo
function clearLogFile(logPath: string): void {
  fs.writeFileSync(logPath, '');  // Esto vaciará el contenido del archivo
}

// Llama a la función para borrar los logs
clearLogFile(infoLogPath);
clearLogFile(errorLogPath);
