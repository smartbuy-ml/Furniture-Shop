// Comprehensive Catalog of Home Furniture Items
const FURNITURE_PRODUCTS = [
  {
    id: "sofa-velvet-sectional",
    name: "Søren L-Shape Velvet Sectional Sofa",
    category: "Living Room",
    price: 1399,
    originalPrice: 1750,
    rating: 4.9,
    reviewCount: 142,
    badge: "Bestseller",
    badgeType: "bestseller",
    inStock: true,
    stockCount: 8,
    dimensions: "108\"W x 65\"D x 33\"H",
    material: "Kiln-Dried FSC Certified Birch, High-Resilience Foam, Spill-Resistant Italian Velvet",
    weight: "185 lbs",
    assembly: "Simple (15 mins, no tools needed)",
    warranty: "10-Year Frame Warranty",
    shortDesc: "Plush, cloud-like modular sofa upholstered in spill-resistant velvet with deep lounging comfort.",
    description: "The Søren Sectional represents the pinnacle of modern Scandinavian comfort. Built on an artisan-crafted kiln-dried hardwood frame, it features dual-layer pocket spring cushioning wrapped in hypoallergenic down alternative. The upholstery is an ultra-durable, spill-resistant velvet that repels liquids while remaining irresistibly soft to the touch.",
    features: [
      "Modular reversible chaise configuration",
      "Spill & pet-claw resistant performance velvet",
      "High-density memory foam core with pocket springs",
      "Concealed heavy-duty locking brackets",
      "Removable & washable cushion covers"
    ],
    colors: [
      { name: "Forest Moss", hex: "#2E473B" },
      { name: "Charcoal Grey", hex: "#3A3D40" },
      { name: "Warm Champagne", hex: "#E5DEC9" },
      { name: "Midnight Navy", hex: "#1D2A44" }
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "table-oslo-oak-coffee",
    name: "Oslo Minimalist Solid Oak Coffee Table",
    category: "Living Room",
    price: 349,
    originalPrice: 420,
    rating: 4.8,
    reviewCount: 96,
    badge: "Popular",
    badgeType: "trending",
    inStock: true,
    stockCount: 15,
    dimensions: "47.2\"W x 23.6\"D x 16.5\"H",
    material: "100% Solid European White Oak, Natural Matte Lacquer",
    weight: "48 lbs",
    assembly: "Quick (Attach 4 legs, 5 mins)",
    warranty: "5-Year Craftsmanship Guarantee",
    shortDesc: "Organic curved silhouette crafted from solid European white oak with soft rounded edges.",
    description: "Handcrafted from responsibly sourced white oak, the Oslo Coffee Table celebrates raw organic beauty. The subtle bullnose beveling protects against everyday bumps while imparting a sculpted, floating appearance in any modern living room space.",
    features: [
      "100% Solid European White Oak (no veneers)",
      "Zero-VOC protective waterborne matte finish",
      "Child-safe rounded organic bevel edges",
      "Reinforced steel leg insert plates"
    ],
    colors: [
      { name: "Natural White Oak", hex: "#D6C4A6" },
      { name: "Smoked Walnut", hex: "#5C4638" },
      { name: "Ebonized Black", hex: "#222222" }
    ],
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "chair-boucle-curved-accent",
    name: "Maison Bouclé Curved Armchair",
    category: "Living Room",
    price: 489,
    originalPrice: 590,
    rating: 4.9,
    reviewCount: 88,
    badge: "20% OFF",
    badgeType: "sale",
    inStock: true,
    stockCount: 6,
    dimensions: "33.5\"W x 31\"D x 30\"H",
    material: "Textured Wool Bouclé, Ash Wood Concealed Base, High-Density Polyurethane",
    weight: "52 lbs",
    assembly: "Fully Assembled",
    warranty: "3-Year Structure Warranty",
    shortDesc: "Sculptural silhouette wrapped in tactile heavy-weight bouclé with supportive lumbar curve.",
    description: "A statement piece designed to be admired from every angle. The Maison Armchair combines mid-century French modernism with contemporary tactile comfort, wrapped in heavyweight textured bouclé fabric.",
    features: [
      "High tactile texture wool-blend bouclé",
      "Sculpted wrap-around curved back support",
      "Internal steel reinforcement cage",
      "Arrives 100% fully assembled and ready to relax"
    ],
    colors: [
      { name: "Oatmeal Bouclé", hex: "#EBE6DE" },
      { name: "Terracotta Earth", hex: "#B85C38" },
      { name: "Olive Moss", hex: "#556B2F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580481077195-c22830f57613?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "credenza-bergen-fluted-tv",
    name: "Bergen Fluted Solid Wood Media Console",
    category: "Living Room",
    price: 699,
    originalPrice: 850,
    rating: 4.7,
    reviewCount: 64,
    badge: "New",
    badgeType: "new",
    inStock: true,
    stockCount: 11,
    dimensions: "70.8\"W x 17.7\"D x 21.6\"H",
    material: "Solid Teak & Oak Veneers, Powder-Coated Steel Frame",
    weight: "94 lbs",
    assembly: "Moderate (30 mins, step-by-step manual included)",
    warranty: "5-Year Guarantee",
    shortDesc: "Fluted tambour sliding doors with integrated wire management channels for up to 80\" TVs.",
    description: "Architectural texture meets clean functional media storage. The Bergen Media Console features fluid sliding fluted doors that conceal game consoles, soundbars, and entertainment devices while allowing remote signals to pass smoothly.",
    features: [
      "Acoustic & signal-friendly fluted slat front",
      "Hidden internal wire-escape grommets",
      "Soft-close adjustable interior shelves",
      "Heavy load capacity tested up to 220 lbs"
    ],
    colors: [
      { name: "Warm Honey Teak", hex: "#C68B59" },
      { name: "Walnut Stain", hex: "#4A3525" },
      { name: "Nordic Ash", hex: "#D8C7B5" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "bed-aura-king-platform",
    name: "Aura Floating Upholstered King Bed",
    category: "Bedroom",
    price: 1099,
    originalPrice: 1350,
    rating: 4.9,
    reviewCount: 180,
    badge: "Bestseller",
    badgeType: "bestseller",
    inStock: true,
    stockCount: 7,
    dimensions: "84\"W x 89\"L x 45\"H (Headboard)",
    material: "Linen-Cotton Blend Upholstery, Solid Pine Slat Matrix, Hardwood Frame",
    weight: "160 lbs",
    assembly: "Easy (No box spring required, 25 mins)",
    warranty: "12-Year Warranty",
    shortDesc: "Padded channel-tufted wingback headboard with whisper-quiet solid wood slat system.",
    description: "Transform your master bedroom into a serene boutique sanctuary. The Aura Bed features an extra-padded wingback headboard for comfortable reading and morning coffee in bed, paired with sound-dampening solid slats designed for optimum airflow and mattress longevity.",
    features: [
      "Whisper-silent Velcro cushioned slat system",
      "No box spring required (mattress sits directly on slats)",
      "Textured stain-resistant linen blend fabric",
      "Recessed legs create a weightless floating look"
    ],
    colors: [
      { name: "Sand Dune Linen", hex: "#DCD0C0" },
      { name: "Slate Charcoal", hex: "#424549" },
      { name: "Warm Clay", hex: "#C48A76" }
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "nightstand-kyoto-walnut",
    name: "Kyoto Solid Walnut Bedside Table",
    category: "Bedroom",
    price: 269,
    originalPrice: 320,
    rating: 4.7,
    reviewCount: 52,
    badge: "Eco Choice",
    badgeType: "eco",
    inStock: true,
    stockCount: 14,
    dimensions: "20\"W x 18\"D x 22\"H",
    material: "100% Solid American Black Walnut, Solid Brass Pulls",
    weight: "32 lbs",
    assembly: "Pre-assembled (Screw on legs)",
    warranty: "5-Year Guarantee",
    shortDesc: "Japandi-inspired bedside companion with soft-close drawer and open book shelf.",
    description: "Simple, honest joinery inspired by traditional Japanese woodwork. Features dovetailed solid drawers, gentle chamfered edges, and an integrated rear phone cord notch keeping your nightstand clutter-free.",
    features: [
      "Authentic dovetail joinery drawer construction",
      "German soft-close under-mount ball bearing slides",
      "Concealed rear cable management groove",
      "Hand-rubbed natural organic oil finish"
    ],
    colors: [
      { name: "Rich American Walnut", hex: "#4E3629" },
      { name: "Natural Blonde Oak", hex: "#C8B28B" }
    ],
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "dresser-nordic-6-drawer",
    name: "Nordic Minimalist 6-Drawer Dresser",
    category: "Bedroom",
    price: 799,
    originalPrice: 950,
    rating: 4.8,
    reviewCount: 77,
    badge: "Trending",
    badgeType: "trending",
    inStock: true,
    stockCount: 9,
    dimensions: "60\"W x 19\"D x 34\"H",
    material: "Solid Oak & Sustainably Harvested Engineered Core, Beveled Edge Handles",
    weight: "142 lbs",
    assembly: "Hardware included, anti-tip kit provided",
    warranty: "5-Year Warranty",
    shortDesc: "Streamlined horizontal chest with deep anti-slam drawers and integrated anti-tip kit.",
    description: "Spacious storage enclosed within a clean Scandinavian silhouette. Each of the six drawers glides effortlessly on heavy-duty concealed slides, providing ample room for seasonal wardrobes and bedding essentials.",
    features: [
      "6 extra-deep full-extension drawers",
      "Integrated lip pull handles for a flush, hardware-free look",
      "Certified UL anti-tip wall anchor hardware included",
      "Sustainably harvested FSC certified timber"
    ],
    colors: [
      { name: "Nordic White Oak", hex: "#CFBA9B" },
      { name: "Matte Black Oak", hex: "#1C1C1C" },
      { name: "Smoked Espresso", hex: "#3B2F2F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "table-valen-dining-teak",
    name: "Valen Solid Teak Extendable Dining Table",
    category: "Dining Room",
    price: 899,
    originalPrice: 1150,
    rating: 4.9,
    reviewCount: 114,
    badge: "Top Rated",
    badgeType: "bestseller",
    inStock: true,
    stockCount: 5,
    dimensions: "72\" to 96\" Ext. x 38\"W x 30\"H (Seats 6 to 10)",
    material: "Solid Indonesian Grade-A Teak, Heavy-Duty Butterfly Leaf Mechanism",
    weight: "155 lbs",
    assembly: "Moderate (Attach trestle legs)",
    warranty: "15-Year Structural Warranty",
    shortDesc: "Seats up to 10 guests with seamless internal butterfly extension leaf.",
    description: "Engineered for memorable family feasts and lively dinner parties. The Valen dining table features a concealed central butterfly mechanism that smoothly extends the table from 72 inches to 96 inches in under 15 seconds.",
    features: [
      "Patented smooth one-person butterfly leaf extension",
      "Seats 6 comfortably unextended, expands to seat 10",
      "Resistant to heat rings, moisture, and wine stains",
      "Sturdy architectural angled trestle base"
    ],
    colors: [
      { name: "Natural Golden Teak", hex: "#B8860B" },
      { name: "Aged Weathered Oak", hex: "#8A7968" },
      { name: "Deep Charcoal Ash", hex: "#2B2D2F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "chair-copenhagen-dining-set",
    name: "Copenhagen Woven Cane Dining Chairs (Pair)",
    category: "Dining Room",
    price: 369,
    originalPrice: 440,
    rating: 4.8,
    reviewCount: 92,
    badge: "Set of 2",
    badgeType: "deal",
    inStock: true,
    stockCount: 12,
    dimensions: "20.5\"W x 21.5\"D x 31\"H (Seat Height: 18\")",
    material: "Solid Ash Wood, Handwoven Natural French Rattan Cane",
    weight: "16 lbs per chair",
    assembly: "Arrives Fully Assembled",
    warranty: "3-Year Warranty",
    shortDesc: "Iconic mid-century cantilever frame with airy breathable natural woven cane backrest.",
    description: "Sold in pairs, these dining chairs pair the organic warmth of authentic handwoven rattan with the strength of kiln-dried ash wood. The gently curved backrest cradles the spine during extended dinner conversations.",
    features: [
      "Includes set of two (2) dining chairs",
      "Breathable, flexible handwoven natural cane seat & back",
      "Protective floor glides included on all leg tips",
      "Tested for over 300 lbs dynamic weight capacity"
    ],
    colors: [
      { name: "Honey Oak / Natural Cane", hex: "#D4A373" },
      { name: "Matte Black / Cane", hex: "#222222" },
      { name: "Warm Walnut / Cane", hex: "#5C4033" }
    ],
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519947486513-ce6419a70125?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "sideboard-aarhus-rattan-buffet",
    name: "Aarhus Rattan Woven Sideboard Buffet",
    category: "Dining Room",
    price: 649,
    originalPrice: 790,
    rating: 4.7,
    reviewCount: 48,
    badge: "New Arrival",
    badgeType: "new",
    inStock: true,
    stockCount: 8,
    dimensions: "58\"W x 18\"D x 31\"H",
    material: "Sustainably Sourced Ash & Natural Honey Cane Webbing, Brass Accents",
    weight: "88 lbs",
    assembly: "Minor (Attach base, 15 mins)",
    warranty: "5-Year Warranty",
    shortDesc: "Triple-door storage buffet with woven cane insets and adjustable stemware shelving.",
    description: "An elegant centerpiece for dining rooms and hallways alike. Aarhus offers generous hidden storage for table linens, fine china, and liquor collections behind airy woven cane cabinet doors.",
    features: [
      "Triple soft-close magnetic cabinet doors",
      "Adjustable interior shelves with wine bottle grooves",
      "Solid turned wood legs with brushed brass ferrule caps",
      "Durable water-resistant top surface for bar serving"
    ],
    colors: [
      { name: "Natural Cane & Sand Oak", hex: "#DECBA4" },
      { name: "Black Satin & Rattan", hex: "#1F1F1F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "desk-stockholm-walnut-office",
    name: "Stockholm Ergonomic Solid Walnut Desk",
    category: "Home Office",
    price: 549,
    originalPrice: 650,
    rating: 4.9,
    reviewCount: 108,
    badge: "Editor's Pick",
    badgeType: "bestseller",
    inStock: true,
    stockCount: 10,
    dimensions: "56\"W x 26\"D x 30\"H",
    material: "Solid American Walnut Top, Aircraft-Grade Matte Black Steel Frame",
    weight: "72 lbs",
    assembly: "Simple (15 mins with hex tool provided)",
    warranty: "10-Year Desk Warranty",
    shortDesc: "Sculpted bevel desktop with hidden wireless charging pad and magnetic cable route.",
    description: "Designed for discerning professionals who value focus and minimalism. The Stockholm desk features a concealed Qi wireless fast-charging module embedded directly beneath the walnut grain and a magnetic channel that tucks unsightly cords cleanly along the rear leg.",
    features: [
      "Built-in 15W fast wireless Qi charger seamlessly hidden in wood",
      "Full-width felt-lined drawer for laptop & stationery",
      "Magnetic rear cable management raceway",
      "Heavy-gauge steel legs with micro-leveling leveling feet"
    ],
    colors: [
      { name: "Walnut & Matte Black", hex: "#42281D" },
      { name: "Natural Oak & White Steel", hex: "#C2A684" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "chair-modena-leather-office",
    name: "Modena Top-Grain Leather Executive Chair",
    category: "Home Office",
    price: 449,
    originalPrice: 550,
    rating: 4.8,
    reviewCount: 135,
    badge: "Ergonomic",
    badgeType: "trending",
    inStock: true,
    stockCount: 14,
    dimensions: "26\"W x 26\"D x 38\"-42\"H (Adjustable)",
    material: "Supple Top-Grain Italian Leather, Die-Cast Polished Aluminum Frame",
    weight: "44 lbs",
    assembly: "Quick (Assemble gas lift & wheels, 10 mins)",
    warranty: "7-Year Mechanism Warranty",
    shortDesc: "Class-4 pneumatic gas lift with synchronized tilt-lock and lumbar support.",
    description: "Where ergonomic science meets executive elegance. Upholstered in buttery Italian top-grain leather that develops a magnificent patina over time, the Modena chair supports all-day posture through a smooth synchronised tilt mechanism.",
    features: [
      "Premium breathable top-grain Italian leather",
      "Class-4 heavy-duty pneumatic gas cylinder",
      "Multi-angle tilt limiter with tension control knob",
      "Silent rollerblade-style casters safe on hardwood floors"
    ],
    colors: [
      { name: "Cognac Brown", hex: "#83431D" },
      { name: "Obsidian Black", hex: "#1A1A1A" },
      { name: "Ivory Cream", hex: "#EBE3D5" }
    ],
    images: [
      "https://images.unsplash.com/photo-1580481077195-c22830f57613?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589584649628-b2a8d3ee0fc6?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "bookshelf-fjall-modular",
    name: "Fjäll Modular Hardwood Bookshelf & Display",
    category: "Home Office",
    price: 389,
    originalPrice: 470,
    rating: 4.7,
    reviewCount: 61,
    badge: "Modular",
    badgeType: "new",
    inStock: true,
    stockCount: 9,
    dimensions: "36\"W x 14\"D x 72\"H",
    material: "Solid Sustainable Pine & Reinforced Steel Bracing",
    weight: "68 lbs",
    assembly: "Moderate (Tool provided, wall anchor included)",
    warranty: "5-Year Guarantee",
    shortDesc: "Open architectural 5-tier shelving unit with adjustable shelf heights.",
    description: "An airy, open-concept shelving tower that elevates your favorite art pieces, vintage books, and leafy houseplants. Built with interlocking modular joints that let you combine multiple units into a dramatic full-room wall library.",
    features: [
      "5 spacious shelves with 50 lbs capacity per shelf",
      "Modular design: seamlessly latch multiple units together",
      "Cross-back architectural steel stabilizers",
      "Includes earthquake safety wall strapping kit"
    ],
    colors: [
      { name: "Warm Honey Pine", hex: "#C79C6E" },
      { name: "Espresso Brown", hex: "#3D2E24" },
      { name: "Nordic Whitewash", hex: "#DFD8CF" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "lamp-luna-brass-arch",
    name: "Luna Brushed Brass Curved Arch Floor Lamp",
    category: "Lighting & Decor",
    price: 199,
    originalPrice: 250,
    rating: 4.9,
    reviewCount: 167,
    badge: "Bestseller",
    badgeType: "bestseller",
    inStock: true,
    stockCount: 18,
    dimensions: "16\" Base x 42\" Reach x 78\" Total Height",
    material: "Weighted White Carrara Marble Base, Brushed Brass Arm & Shade",
    weight: "34 lbs (Heavy non-tip base)",
    assembly: "Quick (10 mins)",
    warranty: "3-Year Electrical Warranty",
    shortDesc: "Dramatic arching silhouette grounded on genuine Carrara marble with step dimmer switch.",
    description: "Cast a warm, cozy ambient glow over your reading chair or sectional. The Luna Arch Lamp anchors firmly on a hefty 24-pound solid Carrara marble slab, preventing tipping while sweeping an elegant brass pendant overhead.",
    features: [
      "Genuine polished white Italian Carrara marble base",
      "Full-range foot-pedal sliding rotary dimmer switch",
      "Includes warm 2700K vintage LED globe bulb",
      "360-degree pivoting brass dome shade"
    ],
    colors: [
      { name: "Brushed Champagne Brass", hex: "#CBB375" },
      { name: "Matte Black & Marble", hex: "#1C1C1C" },
      { name: "Nickel Silver", hex: "#B8B8B8" }
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "rug-hygge-woven-jute",
    name: "Hygge Handwoven Organic Wool & Jute Area Rug",
    category: "Lighting & Decor",
    price: 299,
    originalPrice: 380,
    rating: 4.8,
    reviewCount: 94,
    badge: "Handmade",
    badgeType: "eco",
    inStock: true,
    stockCount: 11,
    dimensions: "8 ft x 10 ft (Also available in 5x8 and 9x12)",
    material: "70% Natural Unbleached Jute, 30% New Zealand Wool",
    weight: "36 lbs",
    assembly: "Unroll & Enjoy (Rug pad recommended)",
    warranty: "2-Year Craftsmanship Guarantee",
    shortDesc: "Richly textured chunky waffle weave providing natural warmth and sound insulation.",
    description: "Hand-loomed by artisan weavers using eco-friendly natural jute fibers and soft unbleached New Zealand wool. Its neutral tones bring tactile warmth and grounding texture to hard floors without overpowering your decor.",
    features: [
      "Artisanal hand-loomed flatweave construction",
      "Reversible design doubles the lifespan of the rug",
      "Naturally non-shedding and pet-friendly",
      "Certified GoodWeave ethical production"
    ],
    colors: [
      { name: "Natural Oatmeal", hex: "#D6C7B2" },
      { name: "Charcoal Fleck", hex: "#524E48" },
      { name: "Terracotta Tint", hex: "#B67B68" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "mirror-mira-asymmetric",
    name: "Mira Organic Asymmetric Pebble Wall Mirror",
    category: "Lighting & Decor",
    price: 179,
    originalPrice: 220,
    rating: 4.9,
    reviewCount: 83,
    badge: "Trending",
    badgeType: "trending",
    inStock: true,
    stockCount: 16,
    dimensions: "36\"H x 28\"W x 1.2\"D",
    material: "Shatter-Resistant HD Silver Glass, Ultra-Slim Solid Brass Frame",
    weight: "18 lbs",
    assembly: "Pre-installed multi-directional hanging brackets",
    warranty: "5-Year Mirror Clarity Guarantee",
    shortDesc: "Fluid puddle-shaped silhouette reflecting light and creating an artistic focal point.",
    description: "Ditch traditional rectangular mirrors for an organic pebble contour. The Mira Mirror bounces natural daylight across the room while giving entryways, vanities, or living room walls an instant high-end designer look.",
    features: [
      "High-definition 5mm shatter-proof float mirror glass",
      "Can be hung in 4 different rotational orientations",
      "Solid moisture-sealed brass framing prevents corrosion",
      "Includes professional heavy-duty French cleat hardware"
    ],
    colors: [
      { name: "Brushed Brass Edge", hex: "#CCA45A" },
      { name: "Matte Black Edge", hex: "#1C1C1C" },
      { name: "Brushed Stainless", hex: "#A8A8A8" }
    ],
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

// Furniture Categories Metadata
const FURNITURE_CATEGORIES = [
  { id: "all", name: "All Pieces", count: 16, icon: "sparkles" },
  { id: "Living Room", name: "Living Room", count: 4, icon: "sofa", desc: "Sofas, tables, accent seating & consoles" },
  { id: "Bedroom", name: "Bedroom", count: 3, icon: "bed", desc: "Platform beds, nightstands & dressers" },
  { id: "Dining Room", name: "Dining Room", count: 3, icon: "utensils", desc: "Solid teak tables, chairs & sideboards" },
  { id: "Home Office", name: "Home Office", count: 3, icon: "briefcase", desc: "Ergonomic desks, leather chairs & shelves" },
  { id: "Lighting & Decor", name: "Lighting & Decor", count: 3, icon: "lamp", desc: "Curved floor lamps, wool rugs & organic mirrors" }
];

// Room Inspiration Bundles / Lookbook
const ROOM_LOOKBOOKS = [
  {
    title: "The Scandinavian Calm Living Room",
    room: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description: "Harmonizing natural oak wood tones, rich velvet, and brushed brass lighting for effortless serenity.",
    itemIds: ["sofa-velvet-sectional", "table-oslo-oak-coffee", "lamp-luna-brass-arch", "rug-hygge-woven-jute"]
  },
  {
    title: "The Warm Minimalist Master Suite",
    room: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Clean upholstered lines paired with rich solid walnut warmth for peaceful nightly rejuvenation.",
    itemIds: ["bed-aura-king-platform", "nightstand-kyoto-walnut", "mirror-mira-asymmetric"]
  },
  {
    title: "The Executive Creative Studio",
    room: "Home Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    description: "Ergonomic leather support, wireless-enabled walnut surfaces, and modular architectural book display.",
    itemIds: ["desk-stockholm-walnut-office", "chair-modena-leather-office", "bookshelf-fjall-modular"]
  }
];

// Customer Testimonials
const CUSTOMER_REVIEWS = [
  {
    author: "Elena Rostova",
    location: "Stockholm, Sweden",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    title: "The Søren Sectional changed our entire living room",
    text: "We were hesitant to buy a sofa online, but the fabric swatches and dimension guide were spot on. The velvet is impossibly soft and repelled an accidental red wine spill with zero stain. Exceptional craftsmanship!",
    productName: "Søren Velvet Sectional Sofa",
    date: "2 days ago"
  },
  {
    author: "Marcus Vance",
    location: "Austin, Texas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    title: "Solid Teak perfection — expands in seconds",
    text: "Hosted Thanksgiving dinner with 10 people around the Valen table. The butterfly leaf extension is whisper-smooth and the solid wood feels like an heirloom that will last for 50 years.",
    productName: "Valen Solid Teak Dining Table",
    date: "1 week ago"
  },
  {
    author: "Sophia Sterling",
    location: "Melbourne, Australia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    title: "Best desk investment for remote work",
    text: "The Stockholm desk's built-in wireless charger is genius. Clean lines, rock-solid stability, and the walnut grain is absolutely gorgeous in natural light.",
    productName: "Stockholm Ergonomic Walnut Desk",
    date: "2 weeks ago"
  }
];
