const divider = document.querySelector('.divider');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const searchBar = document.querySelector('.search-bar');

let isDragging = false;

divider.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;

        // Set the width of the sections based on the mouse position
        const totalWidth = containerRect.width;
        const section1Width = Math.max(350, offsetX); // Minimum width of 100px
        const section2Width = Math.max(100, totalWidth - section1Width - divider.offsetWidth); // Minimum width of 100px
        
        section1.style.flex = `0 0 ${section1Width}px`;
        section2.style.flex = `0 0 ${section2Width}px`;

        // Move the divider
        divider.style.left = `${section1Width}px`;
        

        // Adjust the search bar width
        searchBar.style.width = `${section1Width - 20}px`; // Subtract padding for the search bar
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});