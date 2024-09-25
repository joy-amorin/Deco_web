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

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    const overlay = document.getElementById('overlay');

    let currentImageIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', function(e) {
            currentImageIndex = index; // Guarda el índice de la imagen actual
            e.preventDefault();
            modalImage.src = this.src;
            overlay.style.display = "block";
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Cierra el modal al hacer clic en el overlay
    overlay.addEventListener('click', function() {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Navegación previa
    document.getElementById('prev-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        modalImage.src = images[currentImageIndex].src;
    });

    // Navegación siguiente
    document.getElementById('next-button').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        modalImage.src = images[currentImageIndex].src;
    });

    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "block") {
            if (event.key === "Escape") {
                modal.style.display = "none";
                overlay.style.display = "none";
            } else if (event.key === "ArrowLeft") {
                currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
                modalImage.src = images[currentImageIndex].src;
            } else if (event.key === "ArrowRight") {
                currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
                modalImage.src = images[currentImageIndex].src;
            }
        }
    });    
});

