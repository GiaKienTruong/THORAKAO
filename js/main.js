/* ========================================
   THORAKAO WEBSITE - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // HEADER - Scroll effect
  // =============================================
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // =============================================
  // MOBILE MENU TOGGLE
  // =============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerNav = document.getElementById('headerNav');

  if (mobileMenuBtn && headerNav) {
    mobileMenuBtn.addEventListener('click', () => {
      headerNav.classList.toggle('open');
      
      // Animate hamburger icon
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (headerNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu when clicking a nav link
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('open');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // =============================================
  // SCROLL REVEAL ANIMATION
  // =============================================
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =============================================
  // QUANTITY SELECTOR
  // =============================================
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyValue = document.getElementById('qtyValue');

  if (qtyMinus && qtyPlus && qtyValue) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent, 10);
      if (val > 0) {
        qtyValue.textContent = val - 1;
      }
    });

    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent, 10);
      if (val < 99) {
        qtyValue.textContent = val + 1;
      }
    });
  }

  // =============================================
  // ADD TO CART
  // =============================================
  const btnAddCart = document.getElementById('btnAddCart');

  if (btnAddCart) {
    btnAddCart.addEventListener('click', () => {
      const qty = parseInt(qtyValue?.textContent || '0', 10);
      
      if (qty <= 0) {
        // Shake animation for feedback
        btnAddCart.style.animation = 'none';
        btnAddCart.offsetHeight; // trigger reflow
        btnAddCart.style.animation = 'shake 0.4s ease';
        return;
      }

      // Update cart count in header
      const cartCount = document.getElementById('cartCount');
      if (cartCount) {
        let current = parseInt(cartCount.textContent, 10);
        cartCount.textContent = current + qty;

        // Save to localStorage
        localStorage.setItem('thorakao_cart_count', cartCount.textContent);
      }

      // Reset quantity
      qtyValue.textContent = '0';

      // Success feedback
      btnAddCart.classList.add('added');
      const originalText = btnAddCart.textContent;
      btnAddCart.textContent = '✓ ĐÃ THÊM VÀO GIỎ';

      setTimeout(() => {
        btnAddCart.classList.remove('added');
        btnAddCart.textContent = originalText;
      }, 2000);
    });
  }

  // =============================================
  // ACCORDION
  // =============================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all other accordions
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
        }
      });

      // Toggle current
      item.classList.toggle('open');
    });
  });

  // =============================================
  // PRODUCT THUMBNAIL GALLERY
  // =============================================
  const thumbnails = document.querySelectorAll('.product-thumbnail');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Remove active from all
      thumbnails.forEach(t => t.classList.remove('active'));
      // Add active to clicked
      thumb.classList.add('active');

      // When real images are added, swap the main image:
      // const mainImage = document.querySelector('.product-main-image img');
      // const thumbImg = thumb.querySelector('img');
      // if (mainImage && thumbImg) {
      //   mainImage.src = thumbImg.src.replace('thumb', 'main');
      // }
    });
  });

  // =============================================
  // LOAD CART COUNT FROM LOCALSTORAGE
  // =============================================
  const savedCartCount = localStorage.getItem('thorakao_cart_count');
  if (savedCartCount) {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      cartCount.textContent = savedCartCount;
    }
  }

  // =============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // =============================================
  // SHARE LINK - COPY TO CLIPBOARD
  // =============================================
  const shareLink = document.getElementById('shareLink');
  if (shareLink) {
    shareLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        // Brief visual feedback
        const originalColor = shareLink.style.background;
        shareLink.style.background = '#E86C2E';
        shareLink.style.color = '#fff';
        setTimeout(() => {
          shareLink.style.background = originalColor;
          shareLink.style.color = '';
        }, 1500);
      });
    });
  }

});

// =============================================
// CSS ANIMATION KEYFRAMES (added via JS)
// =============================================
const shakeKeyframes = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = shakeKeyframes;
document.head.appendChild(styleEl);
