"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    console.log(parejaHeroes);
    const villano = ['Lex Lutor', 5, true];
    console.log(villano);
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(aliados);
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    console.log(Fuerza[5]);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    console.log(activar_batiseñal());
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    function suma(num1, num2) {
        let suma = num1 + num2;
        suma = suma / 2;
        return suma;
    }
    console.log(suma(23, 12));
    //tupla
    const persona = ["Nombre", "Alejandro"];
    console.log(persona);
})();
