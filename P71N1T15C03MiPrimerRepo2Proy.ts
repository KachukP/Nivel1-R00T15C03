//• PROGRAMA 71 (Nivel 1) (TEMA 15 GIT) (Clase 03 Mi Primer Repo) 2°
const Pelis=[
    {Titulo:"Hola",Rating:4,id:1},
    {Titulo:"Hola2",Rating:4,id:2},
    {Titulo:"Hola Hlanda",Rating:5,id:3},
    {Titulo:"Holndas 2",Rating:6,id:4},
];
function ObtenerTodo() {
    return Pelis;
}
function ObtenerID(ParaID:number) {
    const PeliculaEncontrada=Pelis.find((P)=>{
        return P.id==ParaID;
    });
    return PeliculaEncontrada;
}
export {ObtenerTodo,ObtenerID};