
# Quotes Cards

Este proyecto se encuentra desarrollado con **React 18** en **Vite** y está configurado dentro de un entorno de desarrollo con **Docker** utilizando la imagen de **Node v20**. Este documento te guiará para configurar y ejecutar el proyecto localmente en tu computadora.

## 1. Primer uso

### 1.1 Prerrequisitos

- Docker (mínimo v20.10.12)
- Docker Compose (mínimo v1.25.0)
    NOTA: A partir de la última versión a la fecha (08-02-2023), al instalar Docker, Docker Compose está disponible como un parámetro. No se utiliza más `docker-compose`.
    [Documentación oficial](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

Para verificar que todo esté correctamente instalado, ejecuta el siguiente comando:
```bash
docker ps
```


## 2. Configuración

Para comenzar, clona el repositorio y utiliza la rama **Master** o **Main**:
```bash
git clone https://github.com/SanchezKatisaac/quotes-cards.git
```


### 2.1 Levantar contenedor

Para utilizar el contenedor, es necesario ejecutar el siguiente comando en la raíz del proyecto:

```bash
docker compose up
```

Una vez seguidos estos pasos, podrás acceder al proyecto desde:
 - Local: http://localhost:3000/
 - Red: http://172.22.0.2:3000/


### 2.2 Comandos dentro del contenedor

Para ingresar al contenedor de Docker y su bash, usa el siguiente comando:

```bash
docker exec -it quotes-cards bash
```
Esto te permitirá ejecutar los scripts del package.json.


### 2.3 Levantar servidor mock

Para que la app pueda realizar las peticiones HTTP, **primero** es necesario **inicializar** el servidor Mock que simula nuestro backend

Ejecuta el siguiente comando dentro del contenedor ([como se menciona anteriormente](#22-comandos-dentro-del-contenedor)):

```bash
npm run server:mock
```
Si se siguieron los pasos correctamente, ya puedes **consultar** los endpoints **desde**:

   - Home: http://0.0.0.0:8000
   - Resources: http://0.0.0.0:8000/quotes


## 3. Tests Unitarios

Utilizo Jest para correr los test unitarios.

Para que se corran los test, Ejecuta el siguiente comando dentro del contenedor ([como se menciona anteriormente](#22-comandos-dentro-del-contenedor)):

Para correr todos los test:
```bash
npm run test:all
```
Para correr un test file:
```bash
npm run test:file <TestFileName.test>
```