/* ========================================
   THORAKAO WEBSITE - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // 1. PRODUCT DATABASE FOR DYNAMIC DETAIL PAGES
  // =============================================
  const PRODUCTS_DB = {
    'kem-nghe': {
      title: 'KEM NGHỆ giảm thâm sẹo Thorakao',
      weight: '47g',
      categoryTags: 'Chăm sóc da mặt • Giảm thâm mụn • Làm sáng da • Tinh chất Nghệ',
      price: '47.000 đ',
      mainImage: 'images/Rectangle_4.png',
      thumbnails: [
        'images/Rectangle_4.png',
        'images/Rectangle_17.png',
        'images/ChatGPT_Image_Jul_15__2026__03_24_37_AM_1.png',
        'images/ChatGPT_Image_Jul_15__2026__03_21_18_AM_1.png',
        'images/Rectangle_25.svg',
        'images/Woman_applying_cream_on_cheek_202607111609_1.png'
      ],
      hashtags: ['#kemnghethorakao', '#giamthammun', '#kemnghe', '#sangda'],
      accordions: {
        qty: 'Trọng lượng tịnh: 47g | Quy cách: Hộp | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
        suitable: '• Mọi loại da, đặc biệt là da có vấn đề về thâm mụn và sẹo sau mụn.<br>• Da xỉn màu, cần tái tạo và dưỡng sáng dịu nhẹ.',
        usage: '• Làm mờ sẹo thâm sau mụn nhanh chóng nhờ curcumin nguyên chất.<br>• Kháng viêm nhẹ, ngừa mụn tái phát.<br>• Dưỡng ẩm mềm mịn và làm đều màu da.',
        ingredients: 'Tinh chất củ nghệ tươi (Curcuma Longa Root Extract), Vitamin E, Sáp ong tự nhiên, Dầu khoáng y tế.',
        howToUse: 'Rửa mặt sạch, lau khô. Thoa một lượng kem nghệ vừa đủ lên vết thâm hoặc toàn mặt mỗi tối trước khi đi ngủ.'
      }
    },

    'kem-sam': {
      title: 'KEM SÂM dưỡng da Thorakao',
      weight: '47g',
      categoryTags: 'Chăm sóc da mặt • Chống lão hoá • Làm sáng da • Tinh chất Sâm',
      price: '62.000 đ',
      mainImage: 'images/Rectangle_4_3.png',
      thumbnails: [
        'images/Rectangle_4_3.png',
        'images/category_4.png',
        'images/Rectangle_25.svg',
        'images/Woman_applying_cream_on_cheek_202607111609_1.png'
      ],
      hashtags: ['#kemsamthorakao', '#chonglaohoa', '#kemsam', '#duongtrang'],
      accordions: {
        qty: 'Trọng lượng tịnh: 47g | Quy cách: Hũ vàng sang trọng | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
        suitable: '• Da bắt đầu xuất hiện dấu hiệu lão hóa, vết nhăn li ti.<br>• Da khô ráp, mất độ săn chắc và thiếu sức sống.',
        usage: '• Bổ sung tinh chất nhân sâm quý giá, nuôi dưỡng tế bào da từ sâu bên trong.<br>• Tăng cường độ đàn hồi, ngăn ngừa nếp nhăn và trẻ hoá làn da.<br>• Dưỡng da trắng hồng tự nhiên, mịn màng.',
        ingredients: 'Chiết xuất Nhân Sâm thiên nhiên (Panax Ginseng Root Extract), Ngọc trai tự nhiên, Vitamin E, Dầu khoáng y tế.',
        howToUse: 'Sau khi rửa sạch mặt, lấy một lượng kem sâm vừa đủ thoa đều và vỗ nhẹ lên khắp mặt và cổ mỗi sáng và tối.'
      }
    },

    'bo-ket': {
      title: 'DẦU GỘI BỒ KẾT Thorakao',
      weight: '400ml',
      categoryTags: 'Chăm sóc tóc • Trị gàu ngứa • Phục hồi tóc hư tổn • Tinh chất Bồ kết',
      price: '68.000 đ',
      mainImage: 'images/product-bo-ket.png',
      thumbnails: [
        'images/product-bo-ket.png',
        'images/Rectangle_18.png',
        'images/category.png',
        'images/Rectangle_24.svg',
        'images/Rectangle_26.svg'
      ],
      hashtags: ['#daugoiboket', '#thorakao', '#trigau', '#muottoc'],
      accordions: {
        qty: 'Dung tích: 400ml | Quy cách: Chai vòi nhấn tiện dụng | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
        suitable: '• Người có da đầu nhiều gàu, ngứa ngáy khó chịu.<br>• Tóc xơ yếu, dễ gãy rụng, cần phục hồi vẻ đen mượt tự nhiên.',
        usage: '• Saponin từ trái bồ kết giúp làm sạch sâu chân tóc, loại bỏ gàu và bã nhờn.<br>• Nuôi dưỡng da đầu khỏe mạnh, kích thích mọc tóc.<br>• Giúp mái tóc suôn mềm, đen bóng quyến rũ.',
        ingredients: 'Chiết xuất quả Bồ Kết nguyên chất (Gleditsia Australis Fruit Extract), Saponin thảo mộc, Tinh dầu tự nhiên.',
        howToUse: 'Làm ướt tóc, lấy lượng dầu gội vừa đủ thoa đều và massage da đầu trong 3-5 phút, sau đó xả sạch lại bằng nước.'
      }
    },

    'hoa-buoi': {
      title: 'DẦU GỘI HOA BƯỞI Thorakao',
      weight: '400ml',
      categoryTags: 'Chăm sóc tóc • Phục hồi tóc hư tổn • Tinh chất Hoa bưởi',
      price: '75.000 đ',
      mainImage: 'images/product-hoa-buoi.png',
      thumbnails: [
        'images/product-hoa-buoi.png',
        'images/category_2.png',
        'images/Rectangle_27.svg',
        'images/Rectangle_26.svg'
      ],
      hashtags: ['#daugoihoabuoi', '#giamgayrung', '#thorakao', '#tocdaymuot'],
      accordions: {
        qty: 'Dung tích: 400ml | Quy cách: Chai vòi nhấn | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
        suitable: '• Tóc rụng nhiều sau sinh, tóc thưa mỏng yếu.<br>• Người yêu thích hương thơm hoa bưởi thanh khiết, thư giãn.',
        usage: '• Giảm rụng tóc rõ rệt chỉ sau 2-3 tuần sử dụng.<br>• Kích thích các nang tóc con phát triển nhanh và dày mượt.<br>• Mang lại hương hoa bưởi dịu dàng lưu hương cả ngày.',
        ingredients: 'Tinh dầu hoa bưởi và vỏ bưởi tự nhiên (Citrus Grandis Peel/Flower Oil), Biotin, Pro-Vitamin B5.',
        howToUse: 'Thoa dầu gội lên tóc ướt, tạo bọt và massage nhẹ nhàng từ chân đến ngọn tóc rồi xả sạch với nước ấm.'
      }
    },

    'kem-thoa-tay': {
      title: 'KEM THOA TAY BƠ HẠT MỠ Thorakao',
      weight: '80ml',
      categoryTags: 'Chăm sóc thân thể • Cấp ẩm sâu • Mịn màng da tay',
      price: '55.000 đ',
      mainImage: 'images/Rectangle_4_2.png',
      thumbnails: [
        'images/Rectangle_4_2.png',
        'images/category_5.png',
        'images/Frame_20198.png'
      ],
      hashtags: ['#kemthoatay', '#bohatmo', '#thorakao', '#memminda'],
      accordions: {
        qty: 'Dung tích: 80ml | Quy cách: Tuýp nắp bật tiện lợi | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
        suitable: '• Đôi bàn tay khô ráp, nứt nẻ do thời tiết hanh khô hoặc tiếp xúc nước/hóa chất.<br>• Vùng da quanh móng bị chai cứng.',
        usage: '• Bơ hạt mỡ thẩm thấu nhanh, khóa ẩm sâu suốt 24 giờ.<br>• Làm mềm tức thì các vết nứt nẻ và vùng da khô sần.<br>• Cho đôi tay mềm mại, mịn màng và tươi trẻ.',
        ingredients: 'Bơ Hạt Mỡ nguyên chất (Shea Butter), Tinh dầu Dừa, Vitamin E, Glycerin thực vật.',
        howToUse: 'Lấy một lượng kem vừa đủ thoa đều khắp lòng bàn tay, mu bàn tay và các kẽ ngón tay bất cứ khi nào cảm thấy khô.'
      }
    }
  };

  // Aliases
  PRODUCTS_DB['bo-hat-mo'] = PRODUCTS_DB['kem-thoa-tay'];
  PRODUCTS_DB['sua-rua-mat'] = PRODUCTS_DB['kem-thoa-tay'];
  PRODUCTS_DB['kem-duong-da'] = PRODUCTS_DB['kem-sam'];

  // =============================================
  // 2. RENDER PRODUCT DETAIL PAGE DYNAMICALLY
  // =============================================
  const renderProductDetailPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'kem-nghe';
    const product = PRODUCTS_DB[productId] || PRODUCTS_DB['kem-nghe'];

    // Update document title
    document.title = `${product.title} - Thorakao`;

    // Title
    const titleEl = document.querySelector('.product-title-main');
    if (titleEl) titleEl.textContent = product.title;

    // Weight
    const weightEl = document.querySelector('.product-weight-badge');
    if (weightEl) weightEl.textContent = product.weight;

    // Category Tags
    const catEl = document.querySelector('.product-subtitle-categories');
    if (catEl) catEl.innerHTML = product.categoryTags;

    // Price
    const priceEl = document.querySelector('.product-price-main');
    if (priceEl) priceEl.textContent = product.price;

    // Main Image
    const mainImgEl = document.getElementById('mainProductImg');
    if (mainImgEl) {
      mainImgEl.src = product.mainImage;
      mainImgEl.alt = product.title;
    }

    // Thumbnails Grid
    const thumbsContainer = document.getElementById('thumbnails');
    if (thumbsContainer && product.thumbnails) {
      thumbsContainer.innerHTML = '';
      product.thumbnails.forEach((src, idx) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        thumbDiv.setAttribute('data-src', src);
        thumbDiv.innerHTML = `<img src="${src}" alt="${product.title} ${idx + 1}">`;
        
        thumbDiv.addEventListener('click', () => {
          document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
          thumbDiv.classList.add('active');
          if (mainImgEl) {
            mainImgEl.style.opacity = '0.3';
            setTimeout(() => {
              mainImgEl.src = src;
              mainImgEl.style.opacity = '1';
            }, 120);
          }
        });

        thumbsContainer.appendChild(thumbDiv);
      });
    }

    // Accordions
    const accordionPanels = document.querySelectorAll('.accordion-panel, .accordion-item');
    if (accordionPanels.length >= 5) {
      const keys = ['qty', 'suitable', 'usage', 'ingredients', 'howToUse'];
      accordionPanels.forEach((panel, idx) => {
        const bodyEl = panel.querySelector('.drawer-body, .accordion-content-inner');
        if (bodyEl && product.accordions[keys[idx]]) {
          bodyEl.innerHTML = product.accordions[keys[idx]];
        }
      });
    }

    // Hashtags
    const hashtagContainer = document.querySelector('.tiktok-orange-hashtags, .tiktok-hashtags');
    if (hashtagContainer && product.hashtags) {
      hashtagContainer.innerHTML = product.hashtags.map(tag => 
        `<a href="https://www.tiktok.com/tag/${tag.replace('#', '')}" target="_blank" rel="noopener noreferrer">${tag}</a>`
      ).join('');
    }
  };

  // Run on product page
  if (document.getElementById('productDetail')) {
    renderProductDetailPage();
  }

  // =============================================
  // 3. HEADER - Scroll effect
  // =============================================
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // =============================================
  // 4. MOBILE MENU TOGGLE
  // =============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerNav = document.getElementById('headerNav');

  if (mobileMenuBtn && headerNav) {
    mobileMenuBtn.addEventListener('click', () => {
      headerNav.classList.toggle('open');
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
  // 5. SCROLL REVEAL ANIMATION
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =============================================
  // 6. QUANTITY SELECTOR
  // =============================================
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyValue = document.getElementById('qtyValue');

  if (qtyMinus && qtyPlus && qtyValue) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent, 10);
      if (val > 0) qtyValue.textContent = val - 1;
    });

    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyValue.textContent, 10);
      if (val < 99) qtyValue.textContent = val + 1;
    });
  }

  // =============================================
  // 7. ADD TO CART
  // =============================================
  const btnAddCart = document.getElementById('btnAddCart');
  if (btnAddCart) {
    btnAddCart.addEventListener('click', () => {
      const qty = parseInt(qtyValue?.textContent || '0', 10);
      
      if (qty <= 0) {
        btnAddCart.style.animation = 'none';
        btnAddCart.offsetHeight;
        btnAddCart.style.animation = 'shake 0.4s ease';
        return;
      }

      const cartCount = document.getElementById('cartCount');
      if (cartCount) {
        let current = parseInt(cartCount.textContent, 10);
        cartCount.textContent = current + qty;
        localStorage.setItem('thorakao_cart_count', cartCount.textContent);
      }

      qtyValue.textContent = '0';
      const originalText = btnAddCart.textContent;
      btnAddCart.textContent = '✓ ĐÃ THÊM VÀO GIỎ';
      btnAddCart.style.background = '#003FB9';

      setTimeout(() => {
        btnAddCart.textContent = originalText;
        btnAddCart.style.background = '';
      }, 2000);
    });
  }

  // =============================================
  // 8. ACCORDIONS
  // =============================================
  const accordionToggles = document.querySelectorAll('.accordion-toggle, .accordion-header');
  accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const panel = toggle.closest('.accordion-panel') || toggle.closest('.accordion-item');
      if (!panel) return;
      const isOpen = panel.classList.contains('open');

      document.querySelectorAll('.accordion-panel.open, .accordion-item.open').forEach(openItem => {
        if (openItem !== panel) openItem.classList.remove('open');
      });

      panel.classList.toggle('open', !isOpen);
    });
  });

  // =============================================
  // 9. LOCALSTORAGE CART COUNT RESTORE
  // =============================================
  const savedCartCount = localStorage.getItem('thorakao_cart_count');
  if (savedCartCount) {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = savedCartCount;
  }

  // =============================================
  // 11. BEST SELLER AUTO SLIDER (5 products)
  // =============================================
  const bestsellerTrack = document.getElementById('bestsellerTrack');
  const bestsellerViewport = document.getElementById('bestsellerViewport');
  const indicatorBars = document.querySelectorAll('#bestsellerIndicator .indicator-bar');

  if (bestsellerTrack && bestsellerViewport) {
    let currentIndex = 0;
    const cards = bestsellerTrack.querySelectorAll('.product-mini-card');
    const totalCards = cards.length;
    let maxIndex = 2;
    let autoSlideInterval = null;

    const updateMaxIndex = () => {
      const w = window.innerWidth;
      if (w <= 768) {
        maxIndex = totalCards - 1;
      } else if (w <= 1100) {
        maxIndex = totalCards - 2;
      } else {
        maxIndex = totalCards - 3;
      }
    };

    const updateSliderPosition = () => {
      if (!cards[0]) return;
      const cardWidth = cards[0].offsetWidth;
      const gap = 20;
      const offset = currentIndex * (cardWidth + gap);
      bestsellerTrack.style.transform = `translateX(-${offset}px)`;

      indicatorBars.forEach((bar, idx) => {
        const barIndex = parseInt(bar.getAttribute('data-index') || `${idx}`, 10);
        if (barIndex === currentIndex % indicatorBars.length) {
          bar.classList.add('active');
        } else {
          bar.classList.remove('active');
        }
      });
    };

    const nextSlide = () => {
      updateMaxIndex();
      currentIndex = (currentIndex >= maxIndex) ? 0 : currentIndex + 1;
      updateSliderPosition();
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideInterval = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    // Hover pause and resume
    bestsellerViewport.addEventListener('mouseenter', stopAutoSlide);
    bestsellerViewport.addEventListener('mouseleave', startAutoSlide);

    // Mobile Touch Events (Press to Zoom & Pause)
    cards.forEach(card => {
      card.addEventListener('touchstart', () => {
        stopAutoSlide();
        card.classList.add('touch-active');
      }, { passive: true });

      card.addEventListener('touchend', () => {
        setTimeout(() => card.classList.remove('touch-active'), 250);
        startAutoSlide();
      }, { passive: true });

      card.addEventListener('touchcancel', () => {
        card.classList.remove('touch-active');
        startAutoSlide();
      }, { passive: true });
    });

    // Indicator clickable
    indicatorBars.forEach((bar, idx) => {
      bar.addEventListener('click', () => {
        currentIndex = idx;
        updateSliderPosition();
        startAutoSlide();
      });
    });

    window.addEventListener('resize', () => {
      updateMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateSliderPosition();
    });

    updateMaxIndex();
    startAutoSlide();
  }

  // =============================================
  // 5. JITTER REVEAL FOOTER SMOOTH SCROLL
  // =============================================
  const openNewsletterBtn = document.getElementById('openNewsletterBtn');
  if (openNewsletterBtn) {
    openNewsletterBtn.addEventListener('click', () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

});

// Keyframe for shake feedback
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
`;
document.head.appendChild(styleEl);
