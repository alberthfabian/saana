# Prueba para Saana 🚀

Prueba para aplicar al cargo de Desarrollador Frontend

### Instrucciones para instalación 📋

Descargar una copia del repositorio comprimido en tu maquina local o realiza un git clone.

```
git clone git@github.com:alberthfabian/saana.git
```

Instalación de dependencias.

```
npm install
```

## Capas y responsabilidades 📦

Se manejaron tres capas

* Capa de presentación, en esta el usuario puede interactuar con la aplicación para ver la información y solicitar datos, en un inicio se encuentra con un Login en el cual debe loguearse, esta es la primer capa con la que interactua.
* Capa de negocio, aqui manejo la información en un estado global (Context) para que interacture con la base de datos, es esta capa la responsable de mantener todos los datos organizados y quien hace las solicitudes a los endpoint para proveer la información.
* Capa de datos, aqui se separo totalmente siendo Firebase el encargo de mantener los datos protegidos con autenticación para que sea solamente un usuairo logueado el que pueda crear, consultar, eliminar y actualizar la infomración.

Es de aclarar que se separo las responsabilidades en varios componentes para que cada uno sea el encargado de suministrar o de realizar solo lo que le corresponde.


## UI

Lo que se pretende con esta aplicación es que el usuario pueda crear, consultar, eliminar y actualizar tareas para estar al día con todo lo que debe hacer, la interfaz es amigable y de fácil comprensión.

## Construido con 🛠️

* React Native
* Axios
* Firebase - Firestore (Para la persistencia de los datos, integración con APIs JSON)
* Express - Para crear los endpoint ( CRUD ) con el fin de poderlos acceder desde la aplicación.
* El código para crear los endpoint se encuenta en en siguiete enlace https://github.com/alberthfabian/firebase-api
* Firebase - Authentication (Autenticación con correo electónico y contraseña)
* React Navigation - Paso entre pantallas
* Contex - Estado Global de la aplicación

## Autor ✒️

* **Alberh Pérez** - [Alberth Pérez](https://github.com/alberthfabian)

---
⌨️ con ❤️ por [Alberth Pérez](https://github.com/alberthfabian) 😊
