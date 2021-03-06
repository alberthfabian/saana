# Prueba para Saana 馃殌

Prueba para aplicar al cargo de Desarrollador Frontend

### Instrucciones para instalaci贸n 馃搵

Descargar una copia del repositorio comprimido en tu maquina local o realiza un git clone.

```
git clone git@github.com:alberthfabian/saana.git
```

Instalaci贸n de dependencias.

```
npm install
```

## Capas y responsabilidades 馃摝

Se manejaron tres capas

* Capa de presentaci贸n, en esta el usuario puede interactuar con la aplicaci贸n para ver la informaci贸n y solicitar datos, en un inicio se encuentra con un Login en el cual debe loguearse, esta es la primer capa con la que interactua.
* Capa de negocio, aqui manejo la informaci贸n en un estado global (Context) para que interacture con la base de datos, es esta capa la responsable de mantener todos los datos organizados y quien hace las solicitudes a los endpoint para proveer la informaci贸n.
* Capa de datos, aqui se separo totalmente siendo Firebase el encargo de mantener los datos protegidos con autenticaci贸n para que sea solamente un usuairo logueado el que pueda crear, consultar, eliminar y actualizar la infomraci贸n.

Es de aclarar que se separo las responsabilidades en varios componentes para que cada uno sea el encargado de suministrar o de realizar solo lo que le corresponde.


## UI

Lo que se pretende con esta aplicaci贸n es que el usuario pueda crear, consultar, eliminar y actualizar tareas para estar al d铆a con todo lo que debe hacer, la interfaz es amigable y de f谩cil comprensi贸n.

## Construido con 馃洜锔?

* React Native
* Axios
* Firebase - Firestore (Para la persistencia de los datos, integraci贸n con APIs JSON)
* Express - Para crear los endpoint ( CRUD ) con el fin de poderlos acceder desde la aplicaci贸n.
* El c贸digo para crear los endpoint se encuenta en en siguiete enlace https://github.com/alberthfabian/firebase-api
* Firebase - Authentication (Autenticaci贸n con correo elect贸nico y contrase帽a)
* React Navigation - Paso entre pantallas
* Context - Estado Global de la aplicaci贸n

## Autor 鉁掞笍

* **Alberh P茅rez** - [Alberth P茅rez](https://github.com/alberthfabian)

---
鈱笍 con 鉂わ笍 por [Alberth P茅rez](https://github.com/alberthfabian) 馃槉
