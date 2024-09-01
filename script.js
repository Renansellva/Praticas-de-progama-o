document.getElementById('toggle-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    var lista = document.getElementById('lista');
    if (lista.classList.contains('oculto')) {
        lista.classList.remove('oculto');
    } else {
        lista.classList.add('oculto');
    }
});



      