const openButton = document.getElementById('openButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const noOptionMessage = document.getElementById('noOptionMessage');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

openButton.addEventListener('click', () => {
    page1.classList.add('hidden');
    setTimeout(() => page2.classList.remove('hidden'), 300);
});

let noClickCount = 0;

if (window.innerWidth > 768) // Only move on larger screens
    noButton.addEventListener('mouseover', () => {
    if (noClickCount < 4) {
        noButton.style.position = 'absolute';
        noButton.style.top = `${Math.random() * 80 + 10}%`;
        noButton.style.left = `${Math.random() * 80 + 10}%`;
        noClickCount++;
    } else {
        noButton.innerText = 'Yes';
        noButton.classList.add('yes-clone');
        noButton.style.position = 'static';
        multiplyYesButtons();
        noOptionMessage.classList.remove('hidden');
    }
    
});

noButton.addEventListener('click', () => {
    noButton.innerText = 'Yes';
    noButton.classList.add('yes-clone');
    noButton.style.position = 'static';
    multiplyYesButtons();
    noOptionMessage.classList.remove('hidden');
});

yesButton.addEventListener('click', () => {
    page2.classList.add('hidden');
    setTimeout(() => page3.classList.remove('hidden'), 300);
});

function multiplyYesButtons() {
    const container = document.querySelector('.button-container');
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const newYes = document.createElement('button');
            newYes.innerText = 'Yes';
            newYes.classList.add('yes-clone');
            newYes.style.top = `${Math.random() * 80 + 10}%`;
            newYes.style.left = `${Math.random() * 80 + 10}%`;
            newYes.addEventListener('click', () => {
                page2.classList.add('hidden');
                setTimeout(() => page3.classList.remove('hidden'), 300);
            });
            container.appendChild(newYes);
        }, i * 100); // Delay each button by 100ms
    }
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
    
        document.getElementById(pageId).classList.add('active');
    }
    
    /* Open the first page initially */
    showPage('page1');
    const pages = document.querySelectorAll('.page');

function showPage(nextPage) {
    const currentPage = document.querySelector('.page.visible');
    
    if (currentPage) {
        currentPage.classList.remove('visible');
        
        // Wait for fade-out before showing the new page
        setTimeout(() => {
            nextPage.classList.add('visible');
        }, 500); // Sync with CSS transition time
    } else {
        nextPage.classList.add('visible');
    }
}


    /* Handle page transitions */
    openButton.addEventListener('click', () => {
        showPage('page2');
    });
    
    yesButton.addEventListener('click', () => {
        showPage('page3');
    });
    
    
}