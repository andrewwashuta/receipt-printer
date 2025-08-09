const initializeModals = () => {
  const triggers = document.querySelectorAll('.modal-trigger');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const closeButtons = document.querySelectorAll('.modal-close');

  let currentModalIndex = -1;

  const closeModal = (modal) => {
    modal.classList.remove('visible');
    document.body.style.overflow = 'auto';
    modal.style.display = 'none';
    currentModalIndex = -1;
  };

  const openModal = (modalId) => {
    const modal = document.querySelector(`.modal[data-modal-id="${modalId}"]`);
    if (modal) {
      modal.style.display = 'block';
      modal.offsetHeight;
      modal.classList.add('visible');
      document.body.style.overflow = 'hidden';
      
      const trigger = document.querySelector(`.modal-trigger[data-modal-id="${modalId}"]`);
      if (trigger) {
        currentModalIndex = Array.from(triggers).indexOf(trigger);
      }
    }
  };

  const navigateToModal = (direction) => {
    if (currentModalIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      if (currentModalIndex >= triggers.length - 1) {
        const currentModal = document.querySelector('.modal.visible');
        if (currentModal) closeModal(currentModal);
        return;
      }
      newIndex = currentModalIndex + 1;
    } else {
      if (currentModalIndex <= 0) {
        const currentModal = document.querySelector('.modal.visible');
        if (currentModal) closeModal(currentModal);
        return;
      }
      newIndex = currentModalIndex - 1;
    }
    
    const newTrigger = triggers[newIndex];
    if (newTrigger) {
      const newModalId = newTrigger.getAttribute('data-modal-id');
      const currentModal = document.querySelector('.modal.visible');
      if (currentModal) {
        closeModal(currentModal);
      }
      openModal(newModalId);
    }
  };

  triggers.forEach(trigger => {
    const handleOpenModal = (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-id');
      openModal(modalId);
    };

    trigger.addEventListener('click', handleOpenModal);
    
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenModal(e);
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

  document.querySelectorAll('.modal-container').forEach(container => {
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-image')) {
        const modal = container.closest('.modal');
        if (modal) {
          closeModal(modal);
        }
      }
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
    } else if (e.key === 'Enter') {
      const visibleModal = document.querySelector('.modal.visible');
      if (visibleModal) closeModal(visibleModal);
    } else if (e.key === 'ArrowLeft') {
      navigateToModal('prev');
    } else if (e.key === 'ArrowRight') {
      navigateToModal('next');
    }
  });
};

// Initialize modals when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeModals);
} else {
  initializeModals();
}

// Initialize modals for Astro page transitions
document.addEventListener('astro:page-load', initializeModals); 