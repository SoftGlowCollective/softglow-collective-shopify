// Soft Glow Collective - Main Theme JavaScript

(function() {
  'use strict';

  // Cart Counter Update
  function updateCartCount() {
    fetch('/cart.json')
      .then(response => response.json())
      .then(data => {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
          cartCount.textContent = data.item_count;
        }
      })
      .catch(error => console.error('Error fetching cart:', error));
  }

  // Add to Cart Handler
  document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('product-form') || e.target.classList.contains('add-to-cart')) {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: formData.get('id'),
          quantity: parseInt(formData.get('quantity'))
        })
      })
      .then(() => {
        updateCartCount();
        alert('Product added to cart!');
      })
      .catch(error => console.error('Error adding to cart:', error));
    }
  });

  // Image Gallery Thumbnail Click
  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const mainImage = document.querySelector('.main-image');
      const newSrc = this.getAttribute('data-src');
      if (mainImage) {
        mainImage.src = newSrc;
      }
    });
  });

  // Newsletter Signup
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      // Shopify subscriber API call
      fetch('/contact#subscribe', {
        method: 'POST'
      })
      .then(() => {
        alert('Thank you for subscribing!');
        this.reset();
      })
      .catch(error => console.error('Error subscribing:', error));
    });
  }

  // Smooth Scroll to Sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Price Range Filter
  const priceRange = document.querySelector('.price-range');
  if (priceRange) {
    priceRange.addEventListener('input', function() {
      const maxPrice = this.value;
      // Filter products by price
      document.querySelectorAll('.product-card').forEach(card => {
        const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
        if (price <= maxPrice) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Initialize
  updateCartCount();
})();