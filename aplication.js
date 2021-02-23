//Escribe tu código aquí
let Aplication = (function (){
    let instance 
    function createInstance(name){
        return {
            initialize: function(){
                console.log(`The app ${name} se está ejecutando`)
            }
        }
    }
    return{
        getInstance: function(name){
            if(!instance){
                instance = createInstance(name)
            }
            return instance;
        }
    }
}) ();

const app = Aplication.getInstance("Henry");
const app2 = Aplication.getInstance("Otra App");
console.log(app); //Va a dar Henry
console.log(app2); //Va a dar Henry de vuelta, es la fuerza del Singleton. Una vez creo el objeto y me va a devolver el mismo objeto
console.log(app === app2) //Va a dar true, a diferencia de lo que daría en un JS normal

