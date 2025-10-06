document.addEventListener('DOMContentLoaded', function() {
    
    // --- Form Submission Handler ---
    const form = document.getElementById('booking-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value;
        formStatus.textContent = `Thank you, ${name}! Your request has been sent.`;
        formStatus.style.color = '#3D405B';

        setTimeout(() => {
            form.reset();
            formStatus.textContent = '';
        }, 4000);
    });

    // --- Fade-in on Scroll Animation ---
    const fadeInSections = document.querySelectorAll('.fade-in');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Menu Modal Functionality ---
    const menuItems = document.querySelectorAll('.menu-item');
    const modal = document.getElementById('menu-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    const menus = {
        'north-indian': {
            title: 'North Indian Menu',
            items: [
                { name: 'Paneer Butter Masala', price: '₹280' },
                { name: 'Dal Makhani', price: '₹250' },
                { name: 'Garlic Naan', price: '₹70' },
                { name: 'Tandoori Roti', price: '₹40' }
            ]
        },
        'south-indian': {
            title: 'South Indian Menu',
            items: [
                { name: 'Masala Dosa', price: '₹150' },
                { name: 'Idli Sambar', price: '₹120' },
                { name: 'Vada Plate', price: '₹100' },
                { name: 'Filter Coffee', price: '₹60' }
            ]
        },
        'indo-chinese': {
            title: 'Indo-Chinese Menu',
            items: [
                { name: 'Gobi Manchurian', price: '₹220' },
                { name: 'Hakka Noodles', price: '₹200' },
                { name: 'Chilli Paneer', price: '₹260' },
                { name: 'Veg Fried Rice', price: '₹180' }
            ]
        }
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const menuKey = item.dataset.menu;
            const menuData = menus[menuKey];
            
            let menuHTML = `<h3 class="menu-category-title">${menuData.title}</h3>`;
            menuData.items.forEach(dish => {
                menuHTML += `
                    <div class="menu-list-item">
                        <h4>${dish.name}</h4>
                        <span>${dish.price}</span>
                    </div>
                `;
            });
            
            modalBody.innerHTML = menuHTML;
            modal.classList.add('is-visible');
        });
    });

    function closeModal() {
        modal.classList.remove('is-visible');
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
