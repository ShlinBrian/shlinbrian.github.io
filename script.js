document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button');

    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursor.classList.add('hover-state');
            });
            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover-state');
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dynamic Gallery (Using non-profile PNG photos)
    const galleryImages = [
        "material/web/aus_1.png",
        "material/web/aus_2.png",
        "material/web/book_1.png",
        "material/web/dog.png",
        "material/web/jp_1.png",
        "material/web/jp_2.png",
        "material/web/jp_3.png",
        "material/web/jp_4.png",
        "material/web/jp_5.png",
        "material/web/jp_6.png",
        "material/web/jp_7.png",
        "material/web/jp_8.png",
        "material/web/jp_9.png",
        "material/web/jp_10.png",
        "material/web/jp_11.png",
        "material/web/tw-1.png"
    ];

    const slots = [
        document.getElementById('gallery-img-1'),
        document.getElementById('gallery-img-2'),
        document.getElementById('gallery-img-3')
    ];

    if (slots[0]) {
        let currentShowing = [];

        // Initialize 3 random images
        slots.forEach(slot => {
            let rand;
            do {
                rand = Math.floor(Math.random() * galleryImages.length);
            } while (currentShowing.includes(rand));
            
            currentShowing.push(rand);
            slot.src = galleryImages[rand];
        });

        // Loop to crossfade all three images every 10 seconds
        setInterval(() => {
            // Fade out all current images
            slots.forEach(slot => {
                slot.style.opacity = '0';
            });
            
            setTimeout(() => {
                let newShowing = [];
                
                slots.forEach((slot, i) => {
                    let newImgIndex;
                    do {
                        newImgIndex = Math.floor(Math.random() * galleryImages.length);
                    // Ensure the new image wasn't just showing, and isn't already assigned to another slot in this batch
                    } while (currentShowing.includes(newImgIndex) || newShowing.includes(newImgIndex));
                    
                    newShowing.push(newImgIndex);
                    
                    // Change source
                    slot.src = galleryImages[newImgIndex];
                    
                    // Wait for image load before fade back in
                    slot.onload = () => {
                        slot.style.opacity = '1';
                    };
                });
                
                // Update current showing state
                currentShowing = newShowing;
            }, 800); // Wait for CSS opacity transition to finish
        }, 10000);
    }
});
