API

URLS BASE:
http://localhost:1234/empleados
http://localhost:1234/departamentos

/empleados
GET ALL= peticion sin query
POST = pasar por body los campos necesarios para crear el empleado


/empleados?filter=input
GET with filters = pasar por query filtros deseados, por ej. /empleados?nif=66666&codigo_departamento=2

/empleados/id
GET by ID = pasar por param el id deseado
PUT = pasar el codigo por param y pasar los campos que desea actualizar por body
DELETE = Pasar el codigo del empleado que desea eliminar


/departamentos
GET ALL= peticion sin query
POST= Pasar por body los campos para crear el departamento

/departamentos/id
PUT= pasar el codigo del departamento por param y por body los campos que desea actualizar
DELETE= pasar el codigo del departamento que desea borrar
