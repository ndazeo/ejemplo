(() => {
    let cont = 0;
    let mesagge = "cont"; // mala practica solo es prueba

    let elem = document.getElementById("name");
    elem.value="hola";

    function Saludar() {
        cont = cont + 1;
        console.log(cont);
    }

    function Mostrar() {
        alert(cont);
    }

    console.log("JA JA");

})();
