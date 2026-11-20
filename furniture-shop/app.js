/**
 * AURA & OAK - High-End Furniture E-Commerce Engine
 * Complete interactive frontend logic
 */

// Furniture Product Catalog Data
const FURNITURE_CATALOG = [
  {
    id: 1,
    name: "Astrid Velvet 3-Seater Sofa",
    category: "Living Room",
    price: 1280,
    oldPrice: 1450,
    badge: "Sale -12%",
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    snippet: "Deep-cushioned comfort in stain-resistant emerald performance velvet with solid walnut legs.",
    description: "The Astrid brings Danish mid-century poise into the modern sanctuary. Upholstered in high-tensile performance velvet that repels spills and pet claw snags, paired with high-resiliency foam cushions wrapped in ethically sourced duck feathers for a cloud-like sit.",
    dimensions: '88" W × 36" D × 32" H',
    material: "Kiln-dried FSC Birch Frame & Italian Velvet",
    weightCapacity: "750 lbs",
    warranty: "10-Year Frame Warranty",
    assembly: "Screw-on legs only (5 mins)",
    colors: [
      { name: "Forest Emerald", hex: "#1d4434" },
      { name: "Warm Terracotta", hex: "#b85d3b" },
      { name: "Oatmeal Beige", hex: "#d8cebe" }
    ]
  },
  {
    id: 2,
    name: "Koto Minimalist Accent Armchair",
    category: "Living Room",
    price: 540,
    oldPrice: null,
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    snippet: "Sculptural silhouette wrapped in tactile textured bouclé with an oiled oak frame.",
    description: "Inspired by Japanese wabi-sabi philosophy, the Koto armchair strikes a balance between grounding presence and gentle curves. Its hand-shaped solid white oak arms provide a pleasant tactile warmth, while the bouclé wool blend keeps its shape effortlessly.",
    dimensions: '32" W × 33" D × 30" H',
    material: "Solid White Oak & Heavy Bouclé Wool Blend",
    weightCapacity: "350 lbs",
    warranty: "10-Year Frame Warranty",
    assembly: "Delivered Fully Assembled",
    colors: [
      { name: "Natural Bouclé Cream", hex: "#e8e3d8" },
      { name: "Charcoal Slate", hex: "#3b3c3d" },
      { name: "Caramel Leather", hex: "#a8683e" }
    ]
  },
  {
    id: 3,
    name: "Solstice Round Travertine Coffee Table",
    category: "Living Room",
    price: 690,
    oldPrice: 780,
    badge: "Popular",
    rating: 4.9,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1533779283484-8da7979bc658?auto=format&fit=crop&w=800&q=80",
    snippet: "Honed Roman travertine stone top resting upon dual fluted white oak pillars.",
    description: "A showpiece of organic geometry. The Solstice coffee table showcases unique natural veinings cut from single travertine limestone slabs. Sealed with a matte food-safe sealer to prevent wine and coffee rings while preserving its natural tactile texture.",
    dimensions: '38" Dia × 16" H',
    material: "Roman Honed Travertine & Solid White Oak",
    weightCapacity: "220 lbs",
    warranty: "5-Year Guarantee",
    assembly: "Top rests securely on slotted oak base",
    colors: [
      { name: "Natural Cream Travertine", hex: "#e2d9cd" },
      { name: "Dark Walnut & Espresso Stone", hex: "#45382e" }
    ]
  },
  {
    id: 4,
    name: "Bergen Solid Oak Platform Bed",
    category: "Bedroom",
    price: 1450,
    oldPrice: 1620,
    badge: "Best Seller",
    rating: 5.0,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    snippet: "Floating Japanese platform bed with built-in ledges and zero-creak mortise joinery.",
    description: "The Bergen bed frame elevates your sleep sanctuary into a zen haven. Designed with wide perimeter side ledges for morning tea and books, solid hardwood roll-out slats that breathe, and whisper-quiet structural interlocking corners without screws.",
    dimensions: 'Queen: 74" W × 92" L × 28" H',
    material: "100% Solid European White Oak",
    weightCapacity: "900 lbs",
    warranty: "15-Year Structural Frame",
    assembly: "Slot-together joinery (20 mins)",
    colors: [
      { name: "Natural White Oak", hex: "#d8c4a5" },
      { name: "Smoked American Walnut", hex: "#5a4131" }
    ]
  },
  {
    id: 5,
    name: "Nordic Minimalist Nightstand with Drawer",
    category: "Bedroom",
    price: 320,
    oldPrice: null,
    badge: "New",
    rating: 4.7,
    reviewsCount: 41,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    snippet: "Soft-closing concealed drawer with solid brass pill pull and open display alcove.",
    description: "Keep bedside clutter at bay with the Nordic Nightstand. Featuring Austrian Blum soft-close runners, seamless mitered corners, and an integrated rear cord passthrough for your phone and lamp chargers.",
    dimensions: '20" W × 16" D × 21" H',
    material: "Solid Oak & Brushed Brass Accent",
    weightCapacity: "110 lbs",
    warranty: "5-Year Guarantee",
    assembly: "Delivered Fully Assembled",
    colors: [
      { name: "Natural Oak", hex: "#d8c4a5" },
      { name: "Matte Black Ash", hex: "#262524" }
    ]
  },
  {
    id: 6,
    name: "Elysian 6-Drawer Solid Walnut Dresser",
    category: "Bedroom",
    price: 1120,
    oldPrice: 1290,
    badge: "Sale -13%",
    rating: 4.8,
    reviewsCount: 77,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    snippet: "Dovetail solid walnut drawers with custom-turned brass hardware and beveled edges.",
    description: "Ample storage executed with timeless elegance. The Elysian Dresser uses bookmatched North American walnut planks, ensuring unbroken grain flow across the six drawers. Hand-waxed with non-toxic organic oils for silky smooth touch.",
    dimensions: '58" W × 19" D × 34" H',
    material: "Solid North American Walnut",
    weightCapacity: "400 lbs",
    warranty: "10-Year Guarantee",
    assembly: "Anti-tip wall anchor included",
    colors: [
      { name: "Rich American Walnut", hex: "#4b3621" },
      { name: "Bleached Scandinavian Ash", hex: "#e7dec9" }
    ]
  },
  {
    id: 7,
    name: "Neva Solid Oak Extendable Dining Table",
    category: "Dining",
    price: 1580,
    oldPrice: 1750,
    badge: "Popular",
    rating: 4.9,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    snippet: "Seats 6 to 10 guests seamlessly with a smooth hidden internal butterfly extension leaf.",
    description: "Entertain without compromise. The Neva dining table conceals a patented German-engineered extension mechanism beneath its solid oak tabletop, allowing one person to expand the table effortlessly from 72 inches to 98 inches in under 15 seconds.",
    dimensions: '72" to 98" L × 38" W × 30" H',
    material: "Kiln-Dried European White Oak",
    weightCapacity: "500 lbs",
    warranty: "10-Year Warranty",
    assembly: "Bolt-on legs (15 mins)",
    colors: [
      { name: "Natural Matte Oak", hex: "#d5c3aa" },
      { name: "Smoked Espresso", hex: "#3e3229" }
    ]
  },
  {
    id: 8,
    name: "Soren Spindle Dining Chair (Set of 2)",
    category: "Dining",
    price: 460,
    oldPrice: null,
    badge: "New",
    rating: 4.8,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    snippet: "Modern Shaker style with steam-bent curved backrest and sculpted ergonomic seat.",
    description: "Light on the eyes yet sturdy enough for lively family feasts. Each Soren spindle chair is steam-bent from continuous ash timber, giving supreme back support while sitting comfortably around breakfast or dinner.",
    dimensions: '21" W × 20" D × 31" H (Seat: 18" H)',
    material: "Solid Steam-Bent Ash Hardwood",
    weightCapacity: "320 lbs per chair",
    warranty: "5-Year Guarantee",
    assembly: "Delivered Fully Assembled",
    colors: [
      { name: "Warm Honey Ash", hex: "#cbb18a" },
      { name: "Soot Black", hex: "#222120" }
    ]
  },
  {
    id: 9,
    name: "Valo Fluted Tambour Sideboard",
    category: "Dining",
    price: 980,
    oldPrice: 1150,
    badge: "Sale -15%",
    rating: 4.9,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    snippet: "Sliding slatted tambour doors that glide smoothly around curved architectural corners.",
    description: "The Valo Sideboard pairs statement fluted tambour woodwork with functional dining storage. Inside, find adjustable shelves for dinnerware, fine glassware, and integrated wine racks with soft interior cable ports.",
    dimensions: '64" W × 18" D × 30" H',
    material: "Solid Oak Slats & Veneered Core",
    weightCapacity: "300 lbs",
    warranty: "10-Year Frame Warranty",
    assembly: "Pre-assembled case, attach base legs",
    colors: [
      { name: "Golden Honey Oak", hex: "#c9a97d" },
      { name: "Ebony Black", hex: "#1c1b1a" }
    ]
  },
  {
    id: 10,
    name: "Atelier Solid Walnut Executive Desk",
    category: "Office",
    price: 1190,
    oldPrice: null,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    snippet: "Full-grain solid walnut desk with concealed magnetic cable trench and felt-lined drawer.",
    description: "Designed for deep creative focus. The Atelier features an expansive 60-inch desktop with beveled chamfer edges, a flush-mount magnetic lid concealing power strips, and dual dovetail drawers lined in Spanish wool felt.",
    dimensions: '60" W × 28" D × 30" H',
    material: "Solid North American Walnut",
    weightCapacity: "350 lbs",
    warranty: "10-Year Warranty",
    assembly: "Legs attachment (10 mins)",
    colors: [
      { name: "American Walnut", hex: "#4d3a2a" },
      { name: "Natural White Oak", hex: "#d8c4a5" }
    ]
  },
  {
    id: 11,
    name: "ErgoCurve Leather Task Chair",
    category: "Office",
    price: 680,
    oldPrice: 750,
    badge: "Sale -10%",
    rating: 4.8,
    reviewsCount: 120,
    image: "https://images.unsplash.com/photo-1580481077195-c3a82474c721?auto=format&fit=crop&w=800&q=80",
    snippet: "Italian top-grain saddle leather with active lumbar support and cast aluminum base.",
    description: "Work comfortably without sacrificing interior design aesthetics. Unlike bulky plastic gaming seats, the ErgoCurve wraps breathable Italian saddle leather around an ergonomic s-curve spine, paired with smooth 360-degree silent rollerblade casters.",
    dimensions: '26" W × 26" D × 38"-42" H',
    material: "Top-grain Saddle Leather & Brushed Aluminum",
    weightCapacity: "300 lbs",
    warranty: "5-Year Mechanism Warranty",
    assembly: "Simple gas-cylinder snap-in (5 mins)",
    colors: [
      { name: "Cognac Saddle Tan", hex: "#9b5523" },
      { name: "Pitch Black", hex: "#1f1f1e" },
      { name: "Warm Taupe", hex: "#9d9284" }
    ]
  },
  {
    id: 12,
    name: "Arcade Modular Oak Bookshelf",
    category: "Office",
    price: 890,
    oldPrice: null,
    badge: "Popular",
    rating: 4.7,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    snippet: "Tall architectural 5-tier shelving unit with asymmetric arches and solid brass bracing.",
    description: "An elegant home for your literary collection and ceramic treasures. The Arcade bookcase features soft curved arched pillars that soften straight wall planes, capable of supporting heavy art monographs without shelf bowing.",
    dimensions: '42" W × 14" D × 76" H',
    material: "Solid European White Oak",
    weightCapacity: "80 lbs per shelf",
    warranty: "10-Year Guarantee",
    assembly: "Anti-tip wall bracket included",
    colors: [
      { name: "Natural Oak", hex: "#d8c4a5" },
      { name: "Charcoal Ash", hex: "#2b2927" }
    ]
  },
  {
    id: 13,
    name: "Kyoto Ceramic Ribbed Table Lamp",
    category: "Decor",
    price: 195,
    oldPrice: 230,
    badge: "Sale -15%",
    rating: 4.9,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    snippet: "Hand-thrown fluted ceramic base paired with an unbleached organic linen drum shade.",
    description: "Casts a warm ambient glow that transforms living rooms and bedrooms into tranquil retreats. Features a weighted brass pull-chain switch and includes an energy-efficient warm filament LED bulb (2700K).",
    dimensions: '14" Dia × 22" H',
    material: "Glazed Earthenware Ceramic & Raw Linen",
    weightCapacity: "N/A",
    warranty: "3-Year Electrical Warranty",
    assembly: "Shade mounting (2 mins)",
    colors: [
      { name: "Sand Terracotta", hex: "#c49a7a" },
      { name: "Matte Chalk White", hex: "#eae6df" }
    ]
  },
  {
    id: 14,
    name: "Aalto Full-Length Solid Oak Floor Mirror",
    category: "Decor",
    price: 440,
    oldPrice: null,
    badge: "New",
    rating: 5.0,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    snippet: "Arched floor mirror with solid bullnose oak frame and high-definition copper-free glass.",
    description: "Open up your bedroom or entryway with luminous depth. The Aalto mirror features distortion-free 5mm shatter-resistant silver glass encased in a deep 2-inch solid oak surround that can lean safely against walls or be wall-mounted.",
    dimensions: '30" W × 2" D × 72" H',
    material: "Solid White Oak & Copper-free Float Glass",
    weightCapacity: "Wall bracket rated for 80 lbs",
    warranty: "Lifetime Frame Integrity",
    assembly: "Lean-ready or mount with included cleats",
    colors: [
      { name: "Natural Pale Oak", hex: "#d8c4a5" },
      { name: "Dark Walnut", hex: "#4d3a2a" }
    ]
  }
];

// App State Management
let currentCategory = "All";
let currentSort = "featured";
let searchQuery = "";
let cart = [];
let wishlist = [];
let appliedDiscount = 0; // percentage e.g. 10
let selectedModalProduct = null;
let selectedModalColor = null;
let modalQuantity = 1;

// Free Shipping Threshold
const FREE_SHIPPING_THRESHOLD = 500;
const STANDARD_SHIPPING_FEE = 49;

// LocalStorage Keys
const CART_STORAGE_KEY = "aura_oak_cart_v1";
const WISHLIST_STORAGE_KEY = "aura_oak_wishlist_v1";

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initUIEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
});

// Load Cart and Wishlist from localStorage
function loadSavedState() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
  } catch (err) {
    console.warn("Storage access failed:", err);
  }
}

function saveState() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  } catch (err) {
    console.warn("Save to storage failed:", err);
  }
}

// UI Event Listeners
function initUIEventListeners() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // Cart Drawer open/close
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  // Wishlist Drawer open/close
  const wishlistToggleBtn = document.getElementById("wishlistToggleBtn");
  const closeWishlistBtn = document.getElementById("closeWishlistBtn");
  const wishlistBackdrop = document.getElementById("wishlistBackdrop");
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener("click", openWishlistDrawer);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener("click", closeWishlistDrawer);
  if (wishlistBackdrop) wishlistBackdrop.addEventListener("click", closeWishlistDrawer);

  // Product Modal close
  const closeModalBtn = document.getElementById("closeModalBtn");
  const productModalBackdrop = document.getElementById("productModalBackdrop");
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeProductModal);
  if (productModalBackdrop) productModalBackdrop.addEventListener("click", closeProductModal);

  // Search input with debounce
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  // Filter Pills
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Sort Selection
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Accordion Toggles
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all first
      document.querySelectorAll(".accordion-item").forEach(acc => {
        acc.classList.remove("active");
        acc.querySelector(".accordion-body").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        const body = item.querySelector(".accordion-body");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // ESC key listener for modal/drawers
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeWishlistDrawer();
      closeCheckoutModal();
      closeSuccessModal();
    }
  });
}

// Render Products Grid based on Category, Search & Sort
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");
  if (!grid) return;

  let filtered = FURNITURE_CATALOG.filter(item => {
    const matchesCategory = currentCategory === "All" || item.category === currentCategory;
    const matchesSearch = searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery) ||
      item.material.toLowerCase().includes(searchQuery) ||
      item.snippet.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  }

  if (noResults) noResults.style.display = "none";

  grid.innerHTML = filtered.map(item => {
    const isWishlisted = wishlist.includes(item.id);
    let badgeClass = "badge-popular";
    if (item.badge && item.badge.includes("Sale")) badgeClass = "badge-sale";
    if (item.badge && item.badge.includes("New")) badgeClass = "badge-new";

    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-media">
          ${item.badge ? `<span class="product-badge ${badgeClass}">${item.badge}</span>` : ""}
          <div class="card-actions-overlay">
            <button class="card-action-btn ${isWishlisted ? "active-wishlist" : ""}" 
              onclick="toggleWishlist(${item.id})" 
              title="${isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}">
              <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
            </button>
            <button class="card-action-btn" onclick="openProductModal(${item.id})" title="Quick Details">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
          <img src="${item.image}" alt="${item.name}" loading="lazy" onclick="openProductModal(${item.id})">
        </div>

        <div class="product-info">
          <div class="product-category-row">
            <span class="product-category">${item.category}</span>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <strong>${item.rating.toFixed(1)}</strong>
              <span>(${item.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" onclick="openProductModal(${item.id})">${item.name}</h3>
          <p class="product-specs-snippet">${item.snippet}</p>

          <div class="product-footer-row">
            <div class="price-wrapper">
              <span class="price-current">$${item.price.toLocaleString()}</span>
              ${item.oldPrice ? `<span class="price-old">$${item.oldPrice.toLocaleString()}</span>` : ""}
            </div>
            <button class="add-cart-btn" onclick="addToCart(${item.id})">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Category shortcut from cards or footer
function filterByCategory(catName) {
  currentCategory = catName;
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    if (pill.dataset.category === catName) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
  renderProducts();

  // Scroll to catalog section smoothly
  const catalogEl = document.getElementById("catalog");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }
}

function resetFilters() {
  currentCategory = "All";
  searchQuery = "";
  currentSort = "featured";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    if (pill.dataset.category === "All") pill.classList.add("active");
    else pill.classList.remove("active");
  });
  renderProducts();
}

// ==========================================
// Product Quick View Modal
// ==========================================
function openProductModal(productId) {
  const product = FURNITURE_CATALOG.find(p => p.id === productId);
  if (!product) return;

  selectedModalProduct = product;
  selectedModalColor = product.colors && product.colors.length > 0 ? product.colors[0].name : "Standard";
  modalQuantity = 1;

  const content = document.getElementById("modalProductContent");
  const modal = document.getElementById("productModal");
  const backdrop = document.getElementById("productModalBackdrop");
  if (!content || !modal || !backdrop) return;

  const isWishlisted = wishlist.includes(product.id);

  content.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-media-col">
        <img src="${product.image}" alt="${product.name}" class="modal-main-img">
      </div>

      <div class="modal-details-col">
        <span class="modal-category-tag">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>

        <div class="modal-rating-row">
          <div class="stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(product.rating))}
            ${product.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}
          </div>
          <span>${product.rating.toFixed(1)} / 5.0 (${product.reviewsCount} verified reviews)</span>
        </div>

        <div class="modal-price-box">
          <span class="price-current">$${product.price.toLocaleString()}</span>
          ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toLocaleString()}</span>` : ""}
          ${product.badge ? `<span class="product-badge badge-popular">${product.badge}</span>` : ""}
        </div>

        <p class="modal-description">${product.description}</p>

        <!-- Specifications Breakdown -->
        <div class="specs-table">
          <div class="spec-entry">
            <span class="spec-name">Dimensions</span>
            <span class="spec-val">${product.dimensions}</span>
          </div>
          <div class="spec-entry">
            <span class="spec-name">Craft / Material</span>
            <span class="spec-val">${product.material}</span>
          </div>
          <div class="spec-entry">
            <span class="spec-name">Max Capacity</span>
            <span class="spec-val">${product.weightCapacity}</span>
          </div>
          <div class="spec-entry">
            <span class="spec-name">Assembly & Tools</span>
            <span class="spec-val">${product.assembly}</span>
          </div>
          <div class="spec-entry" style="grid-column: span 2;">
            <span class="spec-name">Guarantee</span>
            <span class="spec-val">${product.warranty} + 30-Day In-Home Trial</span>
          </div>
        </div>

        <!-- Color Swatches -->
        ${product.colors ? `
          <div class="swatches-wrapper">
            <span class="swatch-title">Finish / Color: <strong id="selectedColorLabel">${selectedModalColor}</strong></span>
            <div class="swatches-list">
              ${product.colors.map((c, idx) => `
                <button class="swatch-item ${idx === 0 ? "active" : ""}" 
                  style="background-color: ${c.hex};" 
                  title="${c.name}"
                  onclick="selectModalColor('${c.name}', this)">
                </button>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Actions -->
        <div class="modal-actions-row">
          <div class="modal-qty-picker">
            <button onclick="changeModalQty(-1)"><i class="fa-solid fa-minus"></i></button>
            <span id="modalQtyDisplay">1</span>
            <button onclick="changeModalQty(1)"><i class="fa-solid fa-plus"></i></button>
          </div>

          <button class="btn btn-primary modal-add-cart-btn" onclick="addModalItemToCart()">
            <i class="fa-solid fa-bag-shopping"></i> Add to Bag
          </button>

          <button class="icon-btn ${isWishlisted ? "active-wishlist" : ""}" 
            onclick="toggleWishlist(${product.id}); openProductModal(${product.id});" 
            title="Wishlist">
            <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  const backdrop = document.getElementById("productModalBackdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function selectModalColor(colorName, btnElement) {
  selectedModalColor = colorName;
  const label = document.getElementById("selectedColorLabel");
  if (label) label.textContent = colorName;

  document.querySelectorAll(".swatch-item").forEach(el => el.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
}

function changeModalQty(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  const display = document.getElementById("modalQtyDisplay");
  if (display) display.textContent = modalQuantity;
}

function addModalItemToCart() {
  if (!selectedModalProduct) return;
  addToCart(selectedModalProduct.id, modalQuantity, selectedModalColor);
  closeProductModal();
  openCartDrawer();
}

// ==========================================
// Shopping Cart Operations
// ==========================================
function addToCart(productId, qty = 1, selectedVariant = null) {
  const product = FURNITURE_CATALOG.find(p => p.id === productId);
  if (!product) return;

  const variant = selectedVariant || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  const cartKey = `${product.id}_${variant}`;

  const existingItem = cart.find(item => item.key === cartKey);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({
      key: cartKey,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: variant,
      quantity: qty
    });
  }

  saveState();
  updateCartUI();
  showToast(`Added "${product.name}" to your bag`, "fa-bag-shopping");
}

function updateCartQuantity(cartKey, delta) {
  const itemIndex = cart.findIndex(item => item.key === cartKey);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveState();
  updateCartUI();
}

function removeFromCart(cartKey) {
  cart = cart.filter(item => item.key !== cartKey);
  saveState();
  updateCartUI();
  showToast("Item removed from bag", "fa-trash-can");
}

function updateCartUI() {
  const cartCountEl = document.getElementById("cartCount");
  const drawerCountEl = document.getElementById("drawerCartCount");
  const listEl = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const shippingEl = document.getElementById("cartShipping");
  const discountLine = document.getElementById("discountLine");
  const discountEl = document.getElementById("cartDiscount");
  const totalEl = document.getElementById("cartTotal");
  const meterText = document.getElementById("shippingMeterText");
  const meterFill = document.getElementById("shippingMeterFill");
  const footerEl = document.getElementById("cartDrawerFooter");

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (drawerCountEl) drawerCountEl.textContent = totalItems;

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // Free shipping meter calculation
  if (meterText && meterFill) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) {
      if (subtotal === 0) {
        meterText.innerHTML = `Add $${FREE_SHIPPING_THRESHOLD} for <strong>Free White-Glove Delivery</strong>!`;
        meterFill.style.width = "0%";
      } else {
        meterText.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #16a34a;"></i> You qualify for <strong>FREE White-Glove Delivery</strong>!`;
        meterFill.style.width = "100%";
      }
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      meterText.innerHTML = `Add <strong>$${remaining.toLocaleString()}</strong> more for <strong>Free White-Glove Delivery</strong>!`;
      meterFill.style.width = `${pct}%`;
    }
  }

  if (cart.length === 0) {
    if (listEl) {
      listEl.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-couch"></i>
          <h4>Your bag is empty</h4>
          <p>Discover our timeless furniture collections and elevate your home.</p>
          <button class="btn btn-primary" onclick="closeCartDrawer(); filterByCategory('All');" style="margin-top: 1rem;">
            Start Exploring
          </button>
        </div>
      `;
    }
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (footerEl) footerEl.style.display = "block";

  if (listEl) {
    listEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateCartQuantity('${item.key}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.key}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="remove-item-btn" onclick="removeFromCart('${item.key}')" title="Remove item">
            <i class="fa-regular fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    `).join("");
  }

  // Calculations
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const discountAmount = appliedDiscount > 0 ? (subtotal * (appliedDiscount / 100)) : 0;
  const finalTotal = subtotal - discountAmount + shipping;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE (White-Glove)" : `$${shipping}`;

  if (discountLine && discountEl) {
    if (appliedDiscount > 0) {
      discountLine.style.display = "flex";
      discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
      discountLine.style.display = "none";
    }
  }

  if (totalEl) totalEl.textContent = `$${finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) drawer.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// Promo Code Handling
function applyPromo() {
  const input = document.getElementById("promoInput");
  const status = document.getElementById("promoMessage");
  if (!input || !status) return;

  const code = input.value.trim().toUpperCase();
  if (code === "AURA10" || code === "WELCOME50" || code === "FURNITURE10") {
    appliedDiscount = 10;
    status.style.color = "#15803d";
    status.innerHTML = `<i class="fa-solid fa-check"></i> Code <strong>${code}</strong> applied: 10% OFF your entire order!`;
    updateCartUI();
    showToast("Promo Code Applied: 10% Discount!", "fa-tag");
  } else if (code === "") {
    status.style.color = "#b91c1c";
    status.textContent = "Please enter a coupon code.";
  } else {
    status.style.color = "#b91c1c";
    status.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid code. Try code <strong>AURA10</strong>!`;
  }
}

// ==========================================
// Wishlist Management
// ==========================================
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = FURNITURE_CATALOG.find(p => p.id === productId);

  if (index === -1) {
    wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to your Wishlist`, "fa-heart");
  } else {
    wishlist.splice(index, 1);
    showToast(`Removed from your Wishlist`, "fa-heart-crack");
  }

  saveState();
  updateWishlistUI();
  renderProducts(); // Update heart states on cards
}

function updateWishlistUI() {
  const countEl = document.getElementById("wishlistCount");
  const drawerCountEl = document.getElementById("drawerWishlistCount");
  const listEl = document.getElementById("wishlistItemsList");

  if (countEl) countEl.textContent = wishlist.length;
  if (drawerCountEl) drawerCountEl.textContent = wishlist.length;

  if (!listEl) return;

  if (wishlist.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-regular fa-heart"></i>
        <h4>No saved items</h4>
        <p>Click the heart icon on any piece to save it for your dream room.</p>
      </div>
    `;
    return;
  }

  const items = FURNITURE_CATALOG.filter(p => wishlist.includes(p.id));

  listEl.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-variant">${item.category}</div>
        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
      </div>
      <div class="cart-item-controls">
        <button class="btn btn-sm btn-primary" onclick="addToCart(${item.id}); toggleWishlist(${item.id});" style="font-size: 0.75rem;">
          Move to Bag
        </button>
        <button class="remove-item-btn" onclick="toggleWishlist(${item.id})" style="margin-top: 0.5rem;">
          <i class="fa-solid fa-xmark"></i> Remove
        </button>
      </div>
    </div>
  `).join("");
}

function openWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("wishlistBackdrop");
  if (drawer) drawer.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  const backdrop = document.getElementById("wishlistBackdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// Checkout Simulator Modal
// ==========================================
function openCheckoutModal() {
  if (cart.length === 0) return;
  closeCartDrawer();

  const modal = document.getElementById("checkoutModal");
  const backdrop = document.getElementById("checkoutBackdrop");
  const subtotalEl = document.getElementById("checkoutSubtotal");
  const totalEl = document.getElementById("checkoutTotal");

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const discountAmount = appliedDiscount > 0 ? (subtotal * (appliedDiscount / 100)) : 0;
  const finalTotal = subtotal - discountAmount + shipping;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  if (modal) modal.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  const backdrop = document.getElementById("checkoutBackdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function processOrder(e) {
  e.preventDefault();
  closeCheckoutModal();

  // Generate simulated random order ID
  const randomOrderNum = Math.floor(10000 + Math.random() * 90000);
  const orderIdEl = document.getElementById("confirmedOrderId");
  if (orderIdEl) orderIdEl.textContent = `#AO-${randomOrderNum}`;

  // Clear cart
  cart = [];
  appliedDiscount = 0;
  saveState();
  updateCartUI();

  // Open confirmation
  const successModal = document.getElementById("successModal");
  const successBackdrop = document.getElementById("successBackdrop");
  if (successModal) successModal.classList.add("active");
  if (successBackdrop) successBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  const successBackdrop = document.getElementById("successBackdrop");
  if (successModal) successModal.classList.remove("active");
  if (successBackdrop) successBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// Newsletter Subscription
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector("input[type='email']");
  if (!input) return;

  showToast(`Thank you! $50 voucher code sent to ${input.value}`, "fa-gift");
  input.value = "";
}

// ==========================================
// Toast Notification Engine
// ==========================================
function showToast(message, iconClass = "fa-check") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
