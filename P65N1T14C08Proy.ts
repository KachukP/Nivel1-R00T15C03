//• PROGRAMA 65 (Nivel 1) (TEMA 14 POO) (Clase 08 Clases con clases)
/*
Clases con clases
En este capítulo, vamos a aumentar la complejidad para entender todas las posibilidades que nos permiten las clases, con la ayuda de TypeScript.

La clase Banda que creaste probablemente se ve así:

class Banda {
   members: string[];
   albums: object[];
   constructor(members: string[], albums: object[]) {
      this.members = members;
      this.albums = albums;
   }
}

En el desafío, le indicamos al constructor que albums tiene que recibir el tipo de dato object[], o sea, cualquier array de objetos. Esa es la única condición.

Ahora, imaginemos que queremos ser más específicos. En lugar de indicarle a albums que tiene que recibir un object[], podemos decirle que espere recibir otra clase, a la que le vamos a definir ciertas características.

class Album {
   title: string;
   songs: string[];
}
class Banda {
   members: string[];
   albums: object[];
   constructor(members: string[], albums: Album[]) {
      this.members = members;
      this.albums = albums;
   }
}
*/
class AlbumC {
    //Tirulo del Album:
    TituloA:string;
    //Lista de Canciones:
    ListaC:string[];
    constructor(Pa1:string,Pa2:string[]){
        this.TituloA=Pa1;
        this.ListaC=Pa2;
    };
};

class NameBand {
    Nombre:string;
    constructor(Parametro1:string) {
        this.Nombre=Parametro1;
    };
};

class GrupoMusic {
    Integrantes:string[];
    Album:AlbumC;
    Banda:NameBand;
    //Asignacion de los paramatros: Parametro1(Integrantes),Parametro2(Albums de Canciones)
    constructor(ParamI:string[],ParamA:AlbumC,ParamN:NameBand){
        this.Integrantes=ParamI;
        this.Album=ParamA;
        this.Banda=ParamN;
    };
};

function Inicio() {
    //Msnera sin declarar tipo AlbumC
    //const Album1 = {TituloA:"TA",ListaC:["C1","C2"]};
    //Manera Declarando tipo AlbumC
    const Album1 = new AlbumC("TA",["C1","C2"]);
    //Se asigna el valor NB (Nombre de la Banda)
    const NombreDeBanda = new NameBand("NB");
    const GrupoA = new GrupoMusic(
        ["Pa","Ca"],Album1,NombreDeBanda
        //Una opcion sin declarar los constructor de la Clase (AlbumC):
        //{TituloA:"TA2",ListaC:["C1","C2"]},
    );
    console.log(GrupoA);
    console.log("---------------------------");
    console.log(GrupoA.Integrantes);
    console.log(GrupoA.Album);
    console.log(GrupoA.Banda);
    //console.log(Album1);//Mostrar el contenido de (Album1)
};

Inicio();
//EN VSC PARA EJECUTAR: npx tsx .\P65N1T14C08ClasesConClases.ts