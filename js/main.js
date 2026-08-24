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
      mainImage: 'images/products/kem-nghe/artboard_1.png',
      thumbnails: [
        'images/products/kem-nghe/artboard_1.png',
        'images/products/kem-nghe/artboard_2.png',
        'images/products/kem-nghe/artboard_3.png',
        'images/products/kem-nghe/artboard_4.png',
        'images/products/kem-nghe/artboard_5.png',
        'images/products/kem-nghe/artboard_6.png',
        'images/products/kem-nghe/artboard_7.png',
        'images/products/kem-nghe/artboard_8.png'
      ],
      hashtags: ['#kemnghethorakao', '#giamthammun', '#kemnghe', '#sangda'],
      accordions: {
        qty: 'Trọng lượng tịnh: 47g | Quy cách: Hộp dập nổi thương hiệu | Hạn sử dụng: 3 năm kể từ ngày sản xuất.',
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
      mainImage: 'images/products/kem-sam/thumb_1.png',
      thumbnails: [
        'images/products/kem-sam/thumb_1.png',
        'images/products/kem-sam/thumb_2.png',
        'images/products/kem-sam/thumb_3.png',
        'images/products/kem-sam/thumb_4.png',
        'images/products/kem-sam/thumb_5.png',
        'images/products/kem-sam/thumb_6.png',
        'images/products/kem-sam/thumb_7.png',
        'images/products/kem-sam/thumb_8.png'
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
      mainImage: 'images/products/bo-ket/thumb_1.png',
      thumbnails: [
        'images/products/bo-ket/thumb_1.png',
        'images/products/bo-ket/thumb_2.png',
        'images/products/bo-ket/thumb_3.png',
        'images/products/bo-ket/thumb_4.png',
        'images/products/bo-ket/thumb_5.png',
        'images/products/bo-ket/thumb_6.png',
        'images/products/bo-ket/thumb_7.png',
        'images/products/bo-ket/thumb_8.png'
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
      mainImage: 'images/products/hoa-buoi/thumb_1.png',
      thumbnails: [
        'images/products/hoa-buoi/thumb_1.png',
        'images/products/hoa-buoi/thumb_2.png',
        'images/products/hoa-buoi/thumb_3.png',
        'images/products/hoa-buoi/thumb_4.png',
        'images/products/hoa-buoi/thumb_5.png',
        'images/products/hoa-buoi/thumb_6.png',
        'images/products/hoa-buoi/thumb_7.png',
        'images/products/hoa-buoi/thumb_8.png'
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
      mainImage: 'images/products/kem-thoa-tay/thumb_1.png',
      thumbnails: [
        'images/products/kem-thoa-tay/thumb_1.png',
        'images/products/kem-thoa-tay/thumb_2.png',
        'images/products/kem-thoa-tay/thumb_3.png',
        'images/products/kem-thoa-tay/thumb_4.png',
        'images/products/kem-thoa-tay/thumb_5.png',
        'images/products/kem-thoa-tay/thumb_6.png',
        'images/products/kem-thoa-tay/thumb_7.png',
        'images/products/kem-thoa-tay/thumb_8.png'
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
  let productGalleryAutoTimer = null;

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

    // Gallery Elements
    const mainView = document.getElementById('mainImageView');
    const mainImgEl = document.getElementById('mainProductImg');
    const thumbsContainer = document.getElementById('thumbnails');
    const galleryContainer = document.querySelector('.product-gallery-container');

    const thumbnailsList = product.thumbnails && product.thumbnails.length > 0
      ? product.thumbnails
      : [product.mainImage];

    let currentSlideIdx = 0;
    let isTransitioning = false;

    // Switch Image Function with Ultra-Smooth Transition
    const goToSlide = (idx, isManual = false) => {
      if (!mainImgEl || thumbnailsList.length === 0) return;
      currentSlideIdx = (idx + thumbnailsList.length) % thumbnailsList.length;
      const targetSrc = thumbnailsList[currentSlideIdx];

      // Update thumbnails UI
      const thumbItems = thumbsContainer?.querySelectorAll('.thumb-item');
      thumbItems?.forEach((t, i) => {
        t.classList.toggle('active', i === currentSlideIdx);
      });

      // Smooth Crossfade Effect
      if (mainImgEl.src !== targetSrc && !isTransitioning) {
        isTransitioning = true;
        mainImgEl.classList.add('img-fading');
        
        setTimeout(() => {
          mainImgEl.src = targetSrc;
          mainImgEl.alt = `${product.title} - ${currentSlideIdx + 1}`;
          
          // Once image starts loading / next frame, fade back in
          requestAnimationFrame(() => {
            mainImgEl.classList.remove('img-fading');
            setTimeout(() => {
              isTransitioning = false;
            }, 250);
          });
        }, 160);
      }
    };

    // Auto-Slide Logic
    const stopAutoSlide = () => {
      if (productGalleryAutoTimer) {
        clearInterval(productGalleryAutoTimer);
        productGalleryAutoTimer = null;
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      if (thumbnailsList.length > 1) {
        productGalleryAutoTimer = setInterval(() => {
          goToSlide(currentSlideIdx + 1);
        }, 3500);
      }
    };

    // Render Thumbnails Grid
    if (thumbsContainer) {
      thumbsContainer.innerHTML = '';
      thumbnailsList.forEach((src, idx) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        thumbDiv.setAttribute('data-src', src);
        thumbDiv.setAttribute('title', `Ảnh ${idx + 1}`);
        thumbDiv.innerHTML = `<img src="${src}" alt="${product.title} ${idx + 1}">`;

        thumbDiv.addEventListener('click', () => {
          goToSlide(idx, true);
          startAutoSlide(); // Reset auto timer
        });

        thumbsContainer.appendChild(thumbDiv);
      });
    }

    // Set initial image
    if (mainImgEl) {
      mainImgEl.src = thumbnailsList[0];
      mainImgEl.alt = product.title;
    }

    // Pause on gallery hover & resume on mouseleave
    if (galleryContainer) {
      galleryContainer.addEventListener('mouseenter', stopAutoSlide);
      galleryContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Interactive Hover Zoom on Main View
    if (mainView && mainImgEl) {
      mainView.addEventListener('mousemove', (e) => {
        stopAutoSlide();
        const rect = mainView.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        mainView.classList.add('is-zooming');
        mainImgEl.style.transformOrigin = `${x}% ${y}%`;
        mainImgEl.style.transform = 'scale(2.2)';
      });

      mainView.addEventListener('mouseleave', () => {
        mainView.classList.remove('is-zooming');
        mainImgEl.style.transformOrigin = 'center center';
        mainImgEl.style.transform = 'scale(1)';
        startAutoSlide();
      });

      // Mobile Touch Interaction
      mainView.addEventListener('touchstart', (e) => {
        stopAutoSlide();
      }, { passive: true });

      mainView.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          const rect = mainView.getBoundingClientRect();
          const x = ((touch.clientX - rect.left) / rect.width) * 100;
          const y = ((touch.clientY - rect.top) / rect.height) * 100;
          if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
            mainView.classList.add('is-zooming');
            mainImgEl.style.transformOrigin = `${x}% ${y}%`;
            mainImgEl.style.transform = 'scale(2.0)';
          }
        }
      }, { passive: true });

      mainView.addEventListener('touchend', () => {
        mainView.classList.remove('is-zooming');
        mainImgEl.style.transformOrigin = 'center center';
        mainImgEl.style.transform = 'scale(1)';
        startAutoSlide();
      }, { passive: true });
    }

    // Start auto slide initially
    startAutoSlide();

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
  // 7. CART DRAWER & STATE MANAGEMENT
  // =============================================
  const DEFAULT_CART = [
    {
      id: 'kem-nghe',
      name: 'KEM NGHỆ GIẢM THÂM SẸO THORAKAO',
      variant: 'Hũ 7g - Tinh chất nghệ tươi',
      price: 18000,
      qty: 2,
      image: 'images/Rectangle_4.png'
    },
    {
      id: 'bo-ket',
      name: 'DẦU GỘI BỒ KẾT THORAKAO',
      variant: 'Chai vòi nhấn 400ml',
      price: 65000,
      qty: 1,
      image: 'images/category.png'
    }
  ];

  let cart = [];
  try {
    const saved = localStorage.getItem('thorakao_cart_items_v2');
    cart = saved ? JSON.parse(saved) : DEFAULT_CART;
  } catch (e) {
    cart = DEFAULT_CART;
  }

  let appliedDiscount = 0; // percentage (0.1 for 10%)
  const FREESHIP_THRESHOLD = 200000;
  const STANDARD_SHIPPING = 25000;

  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
  const closeCartDrawerBtn = document.getElementById('closeCartDrawer');
  const cartItemsList = document.getElementById('cartItemsList');
  const drawerCartBadge = document.getElementById('drawerCartBadge');
  const navCartCount = document.getElementById('cartCount');
  const freeshipMessage = document.getElementById('freeshipMessage');
  const freeshipProgressFill = document.getElementById('freeshipProgressFill');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartShipping = document.getElementById('cartShipping');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const btnApplyVoucher = document.getElementById('btnApplyVoucher');
  const voucherCodeInput = document.getElementById('voucherCodeInput');
  const btnUpsellAdd = document.getElementById('btnUpsellAdd');
  const btnDrawerCheckout = document.getElementById('btnDrawerCheckout');

  function saveCart() {
    localStorage.setItem('thorakao_cart_items_v2', JSON.stringify(cart));
  }

  function formatCurrency(num) {
    return num.toLocaleString('vi-VN') + '₫';
  }

  function openCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.add('active');
      cartDrawerOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      renderCart();
    }
  }

  function closeCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('active');
      cartDrawerOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function renderCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Update Badges
    if (drawerCartBadge) drawerCartBadge.textContent = totalQty;
    if (navCartCount) navCartCount.textContent = totalQty;

    // Free Shipping Progress
    if (freeshipMessage && freeshipProgressFill) {
      if (subtotal === 0) {
        freeshipMessage.innerHTML = `Mua thêm <strong>${formatCurrency(FREESHIP_THRESHOLD)}</strong> để được <strong>Freeship</strong>`;
        freeshipProgressFill.style.width = '0%';
        freeshipProgressFill.style.background = 'linear-gradient(90deg, #E86C2E 0%, #0037BD 100%)';
      } else if (subtotal >= FREESHIP_THRESHOLD) {
        freeshipMessage.innerHTML = `🎉 Chúc mừng! Bạn đã được <strong>Miễn phí vận chuyển toàn quốc</strong>!`;
        freeshipProgressFill.style.width = '100%';
        freeshipProgressFill.style.background = '#28a745';
      } else {
        const remaining = FREESHIP_THRESHOLD - subtotal;
        const percent = Math.min(100, Math.round((subtotal / FREESHIP_THRESHOLD) * 100));
        freeshipMessage.innerHTML = `Mua thêm <strong>${formatCurrency(remaining)}</strong> để được <strong>Freeship</strong>`;
        freeshipProgressFill.style.width = `${percent}%`;
        freeshipProgressFill.style.background = 'linear-gradient(90deg, #E86C2E 0%, #0037BD 100%)';
      }
    }

    // Render Items
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛍️</div>
          <h4 class="cart-empty-title">GIỎ HÀNG TRỐNG</h4>
          <p class="cart-empty-desc">Chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá các giải pháp làm đẹp thiên nhiên từ Thorakao.</p>
          <button type="button" class="btn-empty-shop" id="btnEmptyShop">Khám phá sản phẩm ngay</button>
        </div>
      `;
      const btnEmptyShop = document.getElementById('btnEmptyShop');
      if (btnEmptyShop) {
        btnEmptyShop.addEventListener('click', () => {
          closeCartDrawer();
          window.location.href = 'product.html';
        });
      }
    } else {
      cartItemsList.innerHTML = cart.map((item, idx) => `
        <div class="cart-item-card" data-idx="${idx}">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-name" title="${item.name}">${item.name}</h4>
            <span class="cart-item-variant">${item.variant}</span>
            <div class="cart-item-price-row">
              <span class="cart-item-price">${formatCurrency(item.price)}</span>
              <div class="cart-item-qty-wrap">
                <button type="button" class="cart-qty-btn btn-cart-minus" data-idx="${idx}" aria-label="Giảm">−</button>
                <span class="cart-qty-num">${item.qty}</span>
                <button type="button" class="cart-qty-btn btn-cart-plus" data-idx="${idx}" aria-label="Tăng">+</button>
              </div>
            </div>
          </div>
          <button type="button" class="cart-item-remove-btn" data-idx="${idx}" aria-label="Xóa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `).join('');

      // Add Qty & Remove Event Listeners
      cartItemsList.querySelectorAll('.btn-cart-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const i = parseInt(btn.getAttribute('data-idx'), 10);
          if (cart[i].qty > 1) {
            cart[i].qty -= 1;
          } else {
            cart.splice(i, 1);
          }
          saveCart();
          renderCart();
        });
      });

      cartItemsList.querySelectorAll('.btn-cart-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const i = parseInt(btn.getAttribute('data-idx'), 10);
          cart[i].qty += 1;
          saveCart();
          renderCart();
        });
      });

      cartItemsList.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const i = parseInt(btn.getAttribute('data-idx'), 10);
          cart.splice(i, 1);
          saveCart();
          renderCart();
        });
      });
    }

    // Totals Breakdown
    const discountAmount = subtotal * appliedDiscount;
    const shippingFee = (subtotal >= FREESHIP_THRESHOLD || subtotal === 0) ? 0 : STANDARD_SHIPPING;
    const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(subtotal);
    
    if (cartDiscountRow && cartDiscount) {
      if (appliedDiscount > 0) {
        cartDiscountRow.style.display = 'flex';
        cartDiscount.textContent = `-${formatCurrency(discountAmount)}`;
      } else {
        cartDiscountRow.style.display = 'none';
      }
    }

    if (cartShipping) {
      cartShipping.textContent = shippingFee === 0 ? (subtotal === 0 ? '0₫' : 'Miễn phí (0₫)') : formatCurrency(shippingFee);
    }

    if (cartGrandTotal) cartGrandTotal.textContent = formatCurrency(grandTotal);
  }

  // Bind Nav Cart Click
  document.querySelectorAll('.cart-pill-link, #cartLink').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Bind Close Buttons
  if (closeCartDrawerBtn) closeCartDrawerBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerBackdrop) cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawerOverlay && cartDrawerOverlay.classList.contains('active')) {
      closeCartDrawer();
    }
  });

  // Upsell Button
  if (btnUpsellAdd) {
    btnUpsellAdd.addEventListener('click', () => {
      const existing = cart.find(item => item.id === 'bo-hat-mo');
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: 'bo-hat-mo',
          name: 'Kem dưỡng da tay Bơ Hạt Mỡ',
          variant: 'Tuýp 80ml - Dưỡng ẩm sâu',
          price: 35000,
          qty: 1,
          image: 'images/Rectangle_4_2.png'
        });
      }
      saveCart();
      renderCart();
      btnUpsellAdd.textContent = '✓ Đã thêm';
      btnUpsellAdd.style.background = '#28a745';
      btnUpsellAdd.style.color = '#fff';
      setTimeout(() => {
        btnUpsellAdd.textContent = '+ Thêm';
        btnUpsellAdd.style.background = '';
        btnUpsellAdd.style.color = '';
      }, 1500);
    });
  }

  // Voucher Apply
  if (btnApplyVoucher && voucherCodeInput) {
    btnApplyVoucher.addEventListener('click', () => {
      const code = voucherCodeInput.value.trim().toUpperCase();
      if (code === 'THORAKAO10' || code === 'GIAM10') {
        appliedDiscount = 0.1;
        btnApplyVoucher.textContent = '✓ Đã áp dụng';
        btnApplyVoucher.style.background = '#28a745';
        btnApplyVoucher.style.color = '#fff';
        renderCart();
      } else if (code === '') {
        appliedDiscount = 0;
        renderCart();
      } else {
        voucherCodeInput.style.animation = 'none';
        voucherCodeInput.offsetHeight;
        voucherCodeInput.style.animation = 'shake 0.4s ease';
        alert('Mã giảm giá không hợp lệ! Hãy thử nhập mã: THORAKAO10');
      }
    });
  }

  // Checkout Button
  if (btnDrawerCheckout) {
    btnDrawerCheckout.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
      }
      const totalText = cartGrandTotal ? cartGrandTotal.textContent : '';
      alert(`🎉 Cảm ơn quý khách!\n\nĐơn hàng trị giá ${totalText} đang được chuyển tiếp tới hệ thống đặt hàng Thorakao.`);
    });
  }

  // Product Page: Add to Cart Button
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

      // Add product to cart
      const currentProduct = {
        id: 'kem-nghe',
        name: 'KEM NGHỆ GIẢM THÂM SẸO THORAKAO',
        variant: 'Hũ 7g - Tinh chất nghệ tươi',
        price: 18000,
        qty: qty,
        image: 'images/Rectangle_4.png'
      };

      const existingIndex = cart.findIndex(item => item.id === currentProduct.id);
      if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
      } else {
        cart.push(currentProduct);
      }

      saveCart();
      renderCart();

      // Reset Selector
      if (qtyValue) qtyValue.textContent = '0';

      // Feedback on button
      const originalText = btnAddCart.textContent;
      btnAddCart.textContent = '✓ ĐÃ THÊM VÀO GIỎ';
      btnAddCart.style.background = '#003FB9';

      setTimeout(() => {
        btnAddCart.textContent = originalText;
        btnAddCart.style.background = '';
        openCartDrawer(); // Auto open drawer to delight user!
      }, 600);
    });
  }

  // Initial render
  renderCart();
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
