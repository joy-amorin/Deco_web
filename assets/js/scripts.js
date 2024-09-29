document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Evita que el clic en el botón se propague al documento
        event.stopPropagation();

        // Cierra cualquier detalle abierto que no sea el actual
        document.querySelectorAll('.details.show').forEach(openDetail => {
            if (openDetail !== this.nextElementSibling) {
                openDetail.classList.remove('show');
                openDetail.classList.remove('animate__fadeIn');
                openDetail.classList.add('animate__fadeOut');
            }
        });

        // Muestra o esconde el contenido actual
        const details = this.nextElementSibling;
        if (details.classList.contains('show')) {
            details.classList.remove('show');
            details.classList.remove('animate__fadeIn');
            details.classList.add('animate__fadeOut');
        } else {
            details.classList.add('show');
            details.classList.remove('animate__fadeOut');
            details.classList.add('animate__fadeIn');
        }
    });
});

// Maneja el clic fuera de los detalles
document.addEventListener('click', function(event) {
    // Verifica si el clic fue fuera de un botón toggle y de los detalles
    if (!event.target.classList.contains('toggle-btn')) {
        // Cierra todos los detalles abiertos
        document.querySelectorAll('.details.show').forEach(openDetail => {
            openDetail.classList.remove('show');
            openDetail.classList.remove('animate__fadeIn');
            openDetail.classList.add('animate__fadeOut');
        });
    }
});

let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length; // Cambia esto para contar el total de páginas

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p, index) => {
        p.classList.remove('active'); // Remueve la clase active de todas las páginas
        if (index + 1 === page) {
            p.classList.add('active'); // Agrega la clase active solo a la página actual
        }
    });
}

showPage(currentPage);

setInterval(() => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = 1;
    }
    showPage(currentPage);   
}, 5000);
