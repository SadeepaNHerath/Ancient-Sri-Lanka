// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    } else {
        console.warn('AOS is not defined. Ensure it is properly included.');
    }

    // Check if Bootstrap is available globally
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap is not globally available. Ensure it is properly included.');
        window.bootstrap = {}; // Provide an empty object to avoid errors
    }

    // Initialize Swiper if available
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.testimonialSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            autoplay: {
                delay: 5000,
            },
        });
    } else {
        console.warn('Swiper is not defined. Ensure it is properly included.');
    }

    // Initialize Timeline if available and element exists
    if (typeof TL !== 'undefined' && document.getElementById('timeline-embed')) {
        const timelineJSON = {
            "title": {
                "text": {
                    "headline": "Ancient Sri Lanka Timeline",
                    "text": "A journey through the major events in Sri Lanka's ancient history"
                }
            },
            "events": [
                {
                    "start_date": {
                        "year": "-543"
                    },
                    "text": {
                        "headline": "Arrival of Prince Vijaya",
                        "text": "According to the ancient chronicle Mahavamsa, Prince Vijaya from North India arrived in Sri Lanka, establishing the Sinhalese kingdom."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?srilanka,ancient",
                        "caption": "Ancient Sri Lanka"
                    }
                },
                {
                    "start_date": {
                        "year": "-250"
                    },
                    "text": {
                        "headline": "Introduction of Buddhism",
                        "text": "King Devanampiya Tissa embraced Buddhism after the arrival of Mahinda, son of Emperor Ashoka of India."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?buddhism,temple",
                        "caption": "Buddhism in Sri Lanka"
                    }
                },
                {
                    "start_date": {
                        "year": "377"
                    },
                    "end_date": {
                        "year": "429"
                    },
                    "text": {
                        "headline": "Reign of King Mahasena",
                        "text": "King Mahasena constructed massive irrigation tanks and canals, including the Minneriya tank."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?lake,reservoir",
                        "caption": "Ancient Irrigation Systems"
                    }
                },
                {
                    "start_date": {
                        "year": "477"
                    },
                    "end_date": {
                        "year": "495"
                    },
                    "text": {
                        "headline": "King Kasyapa and Sigiriya",
                        "text": "After seizing power, King Kasyapa built his palace on top of Sigiriya rock."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?sigiriya",
                        "caption": "Sigiriya Rock Fortress"
                    }
                },
                {
                    "start_date": {
                        "year": "1017"
                    },
                    "end_date": {
                        "year": "1070"
                    },
                    "text": {
                        "headline": "Chola Occupation",
                        "text": "The Chola dynasty from South India conquered and ruled parts of Sri Lanka."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?india,temple",
                        "caption": "Chola Influence"
                    }
                },
                {
                    "start_date": {
                        "year": "1153"
                    },
                    "end_date": {
                        "year": "1186"
                    },
                    "text": {
                        "headline": "King Parakramabahu I",
                        "text": "Known as the 'Great King,' Parakramabahu I unified the country and oversaw a period of prosperity and cultural renaissance."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?polonnaruwa",
                        "caption": "Polonnaruwa Era"
                    }
                },
                {
                    "start_date": {
                        "year": "1592"
                    },
                    "end_date": {
                        "year": "1815"
                    },
                    "text": {
                        "headline": "European Colonization",
                        "text": "Sri Lanka was colonized by the Portuguese (1505-1658), followed by the Dutch (1658-1796), and finally the British (1796-1948)."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?colonial,fort",
                        "caption": "Colonial Period"
                    }
                },
                {
                    "start_date": {
                        "year": "1948"
                    },
                    "text": {
                        "headline": "Independence",
                        "text": "Sri Lanka (then Ceylon) gained independence from British rule."
                    },
                    "media": {
                        "url": "https://source.unsplash.com/random/800x600/?srilanka,flag",
                        "caption": "Modern Sri Lanka"
                    }
                }
            ]
        };

        const timeline = new TL.Timeline('timeline-embed', timelineJSON, {
            start_at_end: false,
            default_bg_color: "#f8f9fa"
        });
    } else {
        console.warn('TL is not defined or timeline-embed element not found. Ensure TimelineJS is properly included and the element exists.');
    }

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all fields', 'danger');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Please enter a valid email address', 'danger');
                return;
            }
            
            // If validation passes, show success message
            showAlert('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Modal Contact Form
    const contactModalForm = document.getElementById('contactModalForm');
    if (contactModalForm) {
        contactModalForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show success message
            showAlert('Thank you for your request! Our travel expert will contact you within 24 hours.', 'success');
            contactModalForm.reset();
            
            // Close the modal after submission
            const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            if (contactModal) {
                contactModal.hide();
            }
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showAlert('Thank you for subscribing to our newsletter!', 'success');
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        // Initially hide the button
        backToTopButton.style.display = 'none';
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
                backToTopButton.style.opacity = '1';
            } else {
                backToTopButton.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        backToTopButton.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add active class to current navigation item based on URL
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.innerText);
                    let count = 0;
                    const speed = Math.floor(2000 / target);
                    
                    const updateCount = () => {
                        if (count < target) {
                            count += Math.ceil(target / 100);
                            if (count > target) count = target;
                            counter.innerText = count.toLocaleString();
                            setTimeout(updateCount, speed);
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    // Interactive Tour Planner
    const generateItineraryBtn = document.getElementById('generateItinerary');
    const itineraryResult = document.getElementById('itineraryResult');
    const itineraryContent = document.getElementById('itineraryContent');
    const modifyItineraryBtn = document.getElementById('modifyItinerary');
    const saveItineraryBtn = document.getElementById('saveItinerary');
    
    if (generateItineraryBtn && itineraryResult && itineraryContent) {
        generateItineraryBtn.addEventListener('click', function() {
            // Get selected values
            const duration = document.getElementById('tripDuration').value;
            const month = document.getElementById('tripMonth').value;
            const style = document.getElementById('travelStyle').value;
            
            // Get selected attractions
            const attractions = [];
            if (document.getElementById('sigiriyaCheck').checked) attractions.push('Sigiriya Rock Fortress');
            if (document.getElementById('anuradhapuraCheck').checked) attractions.push('Sacred City of Anuradhapura');
            if (document.getElementById('polonnaruwaCheck').checked) attractions.push('Ancient City of Polonnaruwa');
            if (document.getElementById('kandyCheck').checked) attractions.push('Sacred City of Kandy');
            if (document.getElementById('dambullaCheck').checked) attractions.push('Dambulla Cave Temple');
            
            // Generate itinerary content
            let itineraryHTML = `
                <div class="alert alert-warning mb-4">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-info-circle-fill me-2 fs-4"></i>
                        <div>
                            <strong>Your Custom Itinerary</strong><br>
                            <span class="small">${duration}-day ${style} tour in ${getMonthName(month)}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
            `;
            
            // Generate day-by-day itinerary
            for (let i = 1; i <= duration; i++) {
                const attraction = attractions[(i - 1) % attractions.length];
                itineraryHTML += `
                    <div class="col-md-6 mb-4">
                        <div class="card border-0 shadow-sm rounded-3 h-100">
                            <div class="card-header bg-light py-3 rounded-top-3">
                                <h5 class="mb-0"><i class="bi bi-calendar-day text-warning me-2"></i> Day ${i}</h5>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">${attraction}</h6>
                                <p class="card-text small">Explore the magnificent ${attraction} with a knowledgeable guide. Learn about the history and cultural significance of this ancient site.</p>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <span class="badge bg-light text-dark"><i class="bi bi-clock me-1"></i> Full Day</span>
                                    <span class="badge bg-light text-dark"><i class="bi bi-star-fill text-warning me-1"></i> Must See</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            itineraryHTML += `
                </div>
                <div class="alert alert-light mt-3">
                    <div class="d-flex">
                        <i class="bi bi-lightbulb-fill text-warning me-2 fs-4"></i>
                        <div>
                            <strong>Travel Tip:</strong> The best time to visit these sites is early morning to avoid crowds and heat.
                        </div>
                    </div>
                </div>
            `;
            
            // Display the itinerary
            itineraryContent.innerHTML = itineraryHTML;
            itineraryResult.style.display = 'block';
            
            // Scroll to the result
            itineraryResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        // Modify itinerary button
        if (modifyItineraryBtn) {
            modifyItineraryBtn.addEventListener('click', function() {
                itineraryResult.style.display = 'none';
                window.scrollTo({
                    top: document.querySelector('.py-5').offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        }
        
        // Save itinerary button
        if (saveItineraryBtn) {
            saveItineraryBtn.addEventListener('click', function() {
                showAlert('Your itinerary has been saved! Check your email for details.', 'success');
            });
        }
    }
    
    // Add animation to timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline .card');
    if (timelineItems.length > 0) {
        // Simple function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Add fade-in effect when scrolling
        function handleScroll() {
            timelineItems.forEach(item => {
                if (isInViewport(item)) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial styles
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Check on scroll
        window.addEventListener('scroll', handleScroll);
        // Check on initial load
        handleScroll();
    }
    
    // Image gallery lightbox effect for attraction images
    const attractionImages = document.querySelectorAll('.img-fluid.rounded.shadow');
    attractionImages.forEach(image => {
        image.addEventListener('click', function() {
            // Simple lightbox effect - in a real application, you might use a dedicated lightbox library
            if (window.innerWidth >= 768) { // Only on larger screens
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.zIndex = '9999';
                
                const img = document.createElement('img');
                img.src = this.src;
                img.style.maxHeight = '90%';
                img.style.maxWidth = '90%';
                img.style.objectFit = 'contain';
                
                overlay.appendChild(img);
                document.body.appendChild(overlay);
                
                overlay.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
            }
        });
    });
    
    // Add hover effect to transform-hover elements
    const transformHoverElements = document.querySelectorAll('.transform-hover');
    transformHoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Add bounce animation to the arrow down icon
    const bounceArrow = document.querySelector('.animate-bounce');
    if (bounceArrow) {
        setInterval(() => {
            bounceArrow.style.transform = 'translateY(10px)';
            setTimeout(() => {
                bounceArrow.style.transform = 'translateY(0)';
            }, 500);
        }, 1500);
        bounceArrow.style.transition = 'transform 0.5s ease';
    }
    
    // Helper function to show alerts
    function showAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-4 shadow-lg`;
        alertDiv.style.zIndex = '9999';
        alertDiv.style.maxWidth = '90%';
        alertDiv.style.width = '500px';
        
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Add to body
        document.body.appendChild(alertDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(alertDiv);
            }, 300);
        }, 5000);
    }
    
    // Helper function to get month name
    function getMonthName(monthCode) {
        const months = {
            'jan': 'January',
            'feb': 'February',
            'mar': 'March',
            'apr': 'April',
            'may': 'May',
            'jun': 'June',
            'jul': 'July',
            'aug': 'August',
            'sep': 'September',
            'oct': 'October',
            'nov': 'November',
            'dec': 'December'
        };
        
        return months[monthCode] || monthCode;
    }
});