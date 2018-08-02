document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados 
function cargarNombres(e) {
    e.preventDefault();

    // Leer las variables

    // Leer Select
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const numero = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';

    // Si hay un origen agregarlo a la URL
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }

    // Si hay un genero agregarlo a la URL
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    // Si hay cantidad agregarloaa la URL
    if (numero !== '') {
        url += `amount=${numero}&`;
    }

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            //Generar HTML
            let html = '<div class="card-header">NOMBRES GENERADOS</div>';

            html += '<ul class="lista">';

            // Imprimir cada nombre
            data.forEach(nombre => {
                html += `
                    <li>${nombre.name}</li>
                `;
            });

            html += '<ul>';

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })

}