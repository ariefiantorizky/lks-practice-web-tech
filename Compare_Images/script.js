document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#container');
    const overlay = document.querySelector('#overlay');
    const slider = document.querySelector('#slider');
    const handle = document.querySelector('#handle');
    
    const slide = (x) => {
        const rect = container.getBoundingClientRect();

        const offsetX = Math.max(0, Math.min(x - rect.left, rect.width));

        overlay.style.width = `${offsetX}px`;
        slider.style.left = `${offsetX}px`;
        handle.style.left = `${offsetX}px`;
    };

    const onMouseMove = (e) => slide(e.clientX);
    const onTouchMove = (e) => slide(e.touches[0].clientX);
    
    handle.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });
    });

    handle.addEventListener('touchstart', () => {
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', onTouchMove);
        });
    });
});