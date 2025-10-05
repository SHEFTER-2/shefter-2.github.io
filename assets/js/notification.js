document.addEventListener('DOMContentLoaded', () => {
    const notification = document.querySelector('.notification');
    const closeBtn = document.querySelector('.notification-close');
    const copyBtn = document.querySelector('.notification-copy');
    const cursorTT = document.querySelector('.notification-tooltip');
    const email = copyBtn.textContent.trim();

    
    /** Aparicion de la notificacion */
    setTimeout(() => {
        notification.classList.remove('visible-no');
        notification.classList.add('visible');
    }, 800);

    /** Desparecer notificacion al hacer click en X */
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        notification.classList.remove('visible')
        notification.classList.add('visible-no');
        setTimeout(() => {
            notification.remove();
        }, 800);
    });

    /** Aparicion del Tooltip */
    copyBtn.addEventListener('mouseenter', () => {
        cursorTT.textContent = 'Click para copiar.';
        cursorTT.classList.add('visible');
        cursorTT.classList.remove('fade-out');
    });

    /** Mover el Tooltip con el mouse */
    copyBtn.addEventListener('mousemove', (e) => {
        cursorTT.style.left = `${e.clientX}px`;
        cursorTT.style.top = `${e.clientY}px`;
    });

    /** Ocultar el Tooltip */
    copyBtn.addEventListener('mouseleave', () => {
        cursorTT.classList.add('fade-out');
    });

    /** Copiar texto y cambiar el tooltip al hacer clic */
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email)
            .then(() => {
                cursorTT.textContent = 'Email copiado!';
                /** Timeout para desaparecer el tooltip despues de copiado */
                setTimeout(() => {
                    cursorTT.classList.add('fade-out');
                }, 2000);
            })
            .catch(err => {
                /** Timeout para desaparecer el tooltip despues de un error */
                cursorTT.textContent = 'Error al copiar';
                setTimeout(() => {
                    cursorTT.classList.add('fade-out');
                }, 2000);
            });
    });

});