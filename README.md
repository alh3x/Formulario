Atributo type
PRÓXIMA ACTIVIDAD

HTML nos regala algunas herramientas para la validación de formularios. Una de ellas es el atributotype. Este atributo hace validaciones, por ejemplo, type=email, que verifica si la estructura que fue escrita está en un formato válido.

¿De las alternativas abajo, cuál de ellas presenta un escenario en el que el uso del atributo type hace una validación?
-----------
Lo que aprendimos
PRÓXIMA ACTIVIDAD

Lo que aprendimos en esta aula:

Hacer validación en el propio HTML utilizando los atributos required y type.
Utilizar reglas del regex dentro del atributo pattern para validar el campo de contraseña.
Mandar un mensaje customizado de error en el navegador.
------------------------
Trabajando con validity
PRÓXIMA ACTIVIDAD

Hemos visto que para enseñar mensajes de error podemos utilizar el atributo title. En JavaScript también es posible tratar los errores de validación utilizando la propiedad validity del input, como utilizamos en la validación customizada del campo “fecha de nacimiento”.

¿Cómo adicionar un mensaje customizado de error para validaciones que no estén en los padrones de HTML?

input.setCustomValidity('Mensaje customizado de error')

¡Alternativa correcta! Vamos a usar una función del input setCustomValidity() para definir un mensaje de error customizado.

-----------

Lo que aprendimos en esta aula:

Crear funciones para validaciones del formulario.
Definir mensajes customizados para validaciones fuera del HTML.
Utilizar data attributes para trabajar con JavaScript.
Dejar la función de validación más genérica para funcionar con cualquier input.