document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones del acordeón
    const accordionButtons = document.querySelectorAll('.btn-link');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            // Alterna el estado del elemento actual
            $(targetElement).collapse('toggle');

            // Previene la propagación del evento de click
            e.stopPropagation();
        });
    });

    // Cierra los desplegables si se hace clic fuera de cualquier contenido del acordeón
    document.addEventListener('click', function (event) {
        const target = event.target;

        // Si el clic fue fuera del contenido desplegable, cierra todos los desplegables
        if (!target.closest('.collapse') && !target.closest('.btn-link')) {
            document.querySelectorAll('.collapse').forEach(collapse => {
                $(collapse).collapse('hide');
            });
        }
    });
});
