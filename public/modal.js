const initializeModals = () => {
  const triggers = document.querySelectorAll('.modal-trigger');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const closeButtons = document.querySelectorAll('.modal-close');

  const closeModal = (modal) => {
    modal.classList.remove('visible');
    document.body.style.overflow = 'auto';
    modal.style.display = 'none';
  };

  triggers.forEach(trigger => {
    const openModal = (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-id');
      const modal = document.querySelector(`.modal[data-modal-id="${modalId}"]`);
      if (modal) {
        modal.style.display = 'block';
        modal.offsetHeight;
        modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }
    };

    // Handle click events
    trigger.addEventListener('click', openModal);
    
    // Handle keyboard events (Enter and Space keys)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(e);
      }
    });
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      const modal = backdrop.closest('.modal');
      if (modal && e.target === backdrop) {
        e.stopPropagation();
        closeModal(modal);
      }
    });
  });

  // Add click handler for modal container
  document.querySelectorAll('.modal-container').forEach(container => {
    container.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const visibleModal = document.querySelector('.modal.visible');
      if (visibleModal) closeModal(visibleModal);
    }
  });
};

// Initialize on both DOMContentLoaded and astro:page-load
document.addEventListener('DOMContentLoaded', initializeModals);
document.addEventListener('astro:page-load', initializeModals); 