const dragHandle = document.querySelector('.drag-handle');
const container = document.querySelector('.container');
let isDragging = false;

dragHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault(); // Prevent text selection
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const containerRect = container.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;

        // Set the width of the left section based on mouse position
        const leftSection = container.children[0];
        const rightSection = container.children[2];

        // Ensure the sections don't collapse
        if (offsetX > 50 && offsetX < containerRect.width - 50) {
            leftSection.style.flexBasis = `${offsetX}px`;
            rightSection.style.flexBasis = `${containerRect.width - offsetX}px`;

            // Move the divider with the mouse
            const divider = document.getElementById('divider');
            divider.style.left = `${offsetX}px`; // Move the divider
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});