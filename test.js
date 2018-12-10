//Aqui comprobaremos todas las funciones.

function testVideoStreaming(){
    
    console.log ("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        var persona1 = new Person ("andres", "ruiz", "1997", "Cortes");
	    var categoria1 = new Category ("Terror");
	    var resource1 = new Resource ("120", "http.resource1.com");
        var movie1 = new Movie ("harry potter", "23/12/2000", "inglesa", "va de magos", "", "resource", "local");
        var serie1 = new Serie ("narcos", "15/02/2015", " ",);
        var season1 = new Season ("temporada1");
        var user1 = new User ("andres", "pipes@gmail.com", "banana95",);
        var cordenada1 = new Coordinate ("10.34.54", "34.25.65");

    console.log  ("Entra aqui");

    console.log  ("Y aqui");
    console.log  ("Valores de persona1: " + persona1.toString());
    console.log  ("Categoria 1: " + categoria1.toString());
    console.log  ("Resource 1: " + resource1.toString());
    console.log ("Pelicula 1: " + movie1.toString())
    console.log ("Serie 1:" + serie1.toString());
    console.log ("Season 1:" + season1.toString());
    console.log ("User 1:" + user1.toString());
    console.log ("Coordenada 1:" + cordenada1.toString());
    
}
window.onload = testVideoStreaming;