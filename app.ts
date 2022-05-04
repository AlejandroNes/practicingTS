(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:false = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    console.log(parejaHeroes)

    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
    console.log(villano)
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    console.log(aliados)

    //Enumeraciones
    enum Fuerza {
      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100,
    }
    const fuerzaFlash:Fuerza = Fuerza.flash;
    const fuerzaSuperman:Fuerza = Fuerza.superman;
    const fuerzaBatman:Fuerza = Fuerza.batman;
    const fuerzaAcuaman:Fuerza = Fuerza.acuaman;

    console.log(Fuerza[5])
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
    console.log(activar_batiseñal())
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
    pedir_ayuda();
  
    // Aserciones de Tipo
    const poder:any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
    function suma(num1:number, num2:number):number{
      let suma:number = num1 + num2;
      suma = suma/2;
      return suma;
    }

    console.log(suma(23,12));


    //tupla
    const persona:[string, string] = ["Nombre", "Alejandro"];
    console.log(persona)
  })()
  
  