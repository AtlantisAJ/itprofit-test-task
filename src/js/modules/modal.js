export function setupModal(openModalBtn, modalOverlay, closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    closeModalBtn.addEventListener('click', () => {
        closeModal(modalOverlay);
    });

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });
}

function closeModal(modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}
