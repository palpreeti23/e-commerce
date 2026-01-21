const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQH1RCD0Anwd5m0ksLWZ3VCyK0Pn8w3mCp6jaCrir-v-ytekpxo_Ms9DGd8r5PzUuHxbkrOnwxOYERSznV2vxkGErbd4GpInIyjGtESooP5LAsOEy8Ua38SfiOugfGC-fX92yebw&usqp=CAc",
    rating: 4.5,
    category: "Electronics",
    description:
      "Immersive wireless headphones with rich sound and deep bass. Designed for all-day comfort with noise isolation and long battery life.",
    highlight: [
      "Deep Bass Sound",
      "Active Noise Cancellation",
      "Bluetooth Connectivity",
      "All-Day Comfort",
      "Fast Charging Support",
    ],
    discount: 15,
  },
  {
    id: 2,
    title: "Long Flow Dress",
    price: 2999,
    image:
      "https://www.ordinaree.com/cdn/shop/products/Ordinaree-39.jpg?v=1756703428",
    rating: 4.0,
    category: "Fashion",
    description:
      "A flowing, vibrant red long dress with a fitted bodice and chic silhouette that moves beautifully with every step. Ideal for special occasions and evening events where style and grace take center stage",
    highlight: [
      "Flowy silhouette with elegant drape",
      "Soft, lightweight fabric for comfort",
      "Versatile for occasions and outings",
      "Subtle neckline and flattering cut",
      "Perfect for elevated casual style",
    ],
    discount: 50,
  },
  {
    id: 3,
    title: "Older",
    price: 249,
    image: "https://cdn2.penguin.com.au/covers/original/9781464243950.jpg",
    rating: 4.2,
    category: "Books",
    description:
      "A contemporary romance exploring forbidden love and second chances. Secrets, emotions, and desire collide as two people navigate a love that defies the odds.",
    highlight: [
      "Age gap romance",
      "Forbidden attraction",
      "Slow burn",
      "Emotional tension",
      "Taboo vibes",
    ],
    discount: 16,
  },
  {
    id: 4,
    title: "Washing Machine",
    price: 40999,
    image:
      "https://smartcaresservices.in/wp-content/uploads/al_opt_content/IMAGE/smartcaresservices.in/wp-content/uploads/2025/08/washing-machine-1024x1024.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=smartcaresservices.in",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Advanced washing machine for deep cleaning and fabric care. Ensures powerful performance with water and energy efficiency.",
    highlight: [
      "Fully / Semi Automatic",
      "Energy Efficient",
      "Multiple Wash Programs",
      "Low Noise Operation",
      "Durable Build",
    ],
    discount: 31,
  },
  {
    id: 5,
    title: "Smart Watch",
    price: 3999,
    image:
      "https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d_800x.png?v=1722230645",
    rating: 4.0,
    category: "Electronics",
    description:
      "Stylish smart watch with health tracking and real-time notifications.Built to keep you connected and active throughout the day.",
    highlight: [
      "Heart Rate & SpO₂ Monitoring",
      "Multiple Fitness Modes",
      "Water Resistant",
      "Smart Notifications",
      "Long Battery Life",
    ],
    discount: 18,
  },
  {
    id: 6,
    title: "Asus Laptop",
    price: 75999,
    image:
      "https://p4-ofp.static.pub//fes/cms/2024/07/17/nlp7hjbit9r7qbqb941hykxjino4f3761364.png",
    rating: 4.7,
    category: "Electronics",
    description:
      "High-performance laptop built for work, study, and entertainment. Delivers fast processing, smooth multitasking, and long-lasting reliability.",
    highlight: [
      "High-Performance Processor",
      "SSD Storage",
      "Full HD / 4K Display",
      "Long Battery Life",
      "Lightweight Design",
    ],
    discount: 20,
  },
  {
    id: 7,
    title: "Smart Phones",
    price: 25999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnRqeZFU0hSUyV2J-z61t7Bm3gUusqsxhHg&s",
    rating: 4.5,
    category: "Electronics",
    description:
      "Fast, powerful smartphone designed for smooth performance and long battery life. Perfect for gaming, photography, and everyday multitasking.",
    highlight: [
      "AMOLED / OLED Display",
      "Powerful Chipset",
      "AI Camera System",
      "Fast Charging",
      "5G Connectivity",
    ],
    discount: 25,
  },
  {
    id: 8,
    title: "Checked Casual Shirt",
    price: 1999,
    image:
      "https://campussutra.com/cdn/shop/files/CSMOVSRT7609_3_52eadbc3-3c06-4480-abda-47bf3a54c0dd.jpg?v=1730801146&width=2000",
    rating: 4.3,
    category: "Fashion",
    description:
      "A contemporary oversized check shirt blending relaxed comfort with bold pattern details, perfect for casual city looks or weekend hangouts. Crafted with attention to fit and styling for everyday confidence",
    highlight: [
      "Oversized casual fit",
      "Lightweight, breathable fabric",
      "Button-down closure",
      "Relaxed everyday style",
      "Easy to pair with jeans or trousers",
    ],
    discount: 34,
  },
  {
    id: 9,
    title: "Long Bodycon Dress",
    price: 2999,
    image:
      "https://brunetteondemand.com/wp-content/uploads/2021/01/Low-Cut-Solid-Puff-Sleeve-Midi-Dress.jpg",
    rating: 4.0,
    category: "Fashion",
    description:
      "A flowing, vibrant red long dress with a fitted bodice and chic silhouette that moves beautifully with every step. Ideal for special occasions and evening events where style and grace take center stage",
    highlight: [
      "Flowy silhouette with elegant drape",
      "Soft, lightweight fabric for comfort",
      "Versatile for occasions and outings",
      "Subtle neckline and flattering cut",
      "Perfect for elevated casual style",
    ],
    discount: 50,
  },
  {
    id: 10,
    title: "Long red dress",
    price: 2999,
    image:
      "https://png.pngtree.com/png-vector/20230430/ourmid/pngtree-beautiful-dress-png-image_6747132.png",
    rating: 4.0,
    category: "Fashion",
    description:
      "A flowing, vibrant red long dress with a fitted bodice and chic silhouette that moves beautifully with every step. Ideal for special occasions and evening events where style and grace take center stage",
    highlight: [
      "Flowy silhouette with elegant drape",
      "Soft, lightweight fabric for comfort",
      "Versatile for occasions and outings",
      "Subtle neckline and flattering cut",
      "Perfect for elevated casual style",
    ],
    discount: 50,
  },
  {
    id: 11,
    title: "Maxi Dress",
    price: 3999,
    image:
      "https://www.stylemati.in/cdn/shop/files/mati-dresses-mati-kaavya-blue-dress-blue-long-cotton-dress-32701619011673.jpg?v=1717159762&width=1200",
    rating: 4.0,
    category: "Fashion",
    description:
      "A breezy blue cotton maxi dress with relaxed silhouette and subtle texture, offering effortless elegance and all-day comfort. Designed for versatile wear from casual outings to stylish city strolls",
    highlight: [
      "Handwoven premium cotton slub fabric",
      "Loose, flattering silhouette with belt",
      "Breezy and comfortable all-day wear",
      "Carefully tailored artisanal design",
      "Ideal for summer outings and casual chic",
    ],
    discount: 43,
  },
  {
    id: 12,
    title: "Oleander",
    price: 299,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/6112hI1+6hL._AC_UL210_SR210,210_.jpg",
    rating: 4.5,
    category: "Books",
    description:
      "Oleander is a gripping MM romance about love, heartbreak, and obsession. Jude’s world is turned upside down by the enigmatic Caspien Deveraux in this intense, unforgettable story of passion and transformation.",
    highlight: [
      "Poetic romance",
      "Soft angst",
      "Deep emotions",
      "Slow connection",
      "Bittersweet love",
    ],
    discount: 13,
  },
  {
    id: 13,
    title: "Small Bones",
    price: 399,
    image:
      "https://m.media-amazon.com/images/I/51MZdPIY9QS.SX316.SY480._SL500_.jpg",
    rating: 3.7,
    category: "Books",
    description:
      "Small Bones is a tense crime thriller following Sue Hearn, who unearths a skull while planting in her grandfather’s garden, sparking a chilling investigation into a decades‑old disappearance. Detectives Asha Harvey and Aaron Birch must untangle buried secrets and face danger as they race to uncover the truth.",
    highlight: [
      "Dark romance",
      "Emotional trauma",
      "Healing journey",
      "Intense bond",
      "Angsty love",
    ],
    discount: 11,
  },
  {
    id: 14,
    title: "Older",
    price: 249,
    image: "https://cdn2.penguin.com.au/covers/original/9781464243950.jpg",
    rating: 4.2,
    category: "Books",
    description:
      "A contemporary romance exploring forbidden love and second chances. Secrets, emotions, and desire collide as two people navigate a love that defies the odds.",
    highlight: [
      "Age gap romance",
      "Forbidden attraction",
      "Slow burn",
      "Emotional tension",
      "Taboo vibes",
    ],
    discount: 16,
  },
  {
    id: 15,
    title: "King Of Greed",
    price: 394,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81sdugJIrOL._AC_UL600_SR600,600_.jpg",
    rating: 4.0,
    category: "Books",
    description:
      "A steamy second‑chance billionaire romance about love, ambition, and redemption. Dominic Davenport has built an empire but lost the woman who loved him most. Now, he must fight to win back Alessandra and prove that some things are worth more than power and wealth",
    highlight: [
      "Marriage in trouble",
      "Second chance romance",
      "Billionaire hero",
      "Emotional angst",
      "Groveling arc",
    ],
    discount: 17,
  },
  {
    id: 16,
    title: "Washing Machine",
    price: 40999,
    image:
      "https://smartcaresservices.in/wp-content/uploads/al_opt_content/IMAGE/smartcaresservices.in/wp-content/uploads/2025/08/washing-machine-1024x1024.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=smartcaresservices.in",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Advanced washing machine for deep cleaning and fabric care. Ensures powerful performance with water and energy efficiency.",
    highlight: [
      "Fully / Semi Automatic",
      "Energy Efficient",
      "Multiple Wash Programs",
      "Low Noise Operation",
      "Durable Build",
    ],
    discount: 31,
  },
  {
    id: 17,
    title: "Mixer",
    price: 5999,
    image:
      "https://mayer.sg/cdn/shop/files/Mayer-MMPC6062-PressureCooker-with-Ceramic-Pot.png?v=1725249070&width=800",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Versatile mixer grinder for quick and effortless food preparation. Built with powerful blades for smooth grinding and blending.",
    highlight: [
      "Powerful Motor",
      "Multiple Speed Settings",
      "Stainless Steel Blades",
      "Overload Protection",
      "Durable Jars",
    ],
    discount: 27,
  },
  {
    id: 18,
    title: "Air Conditioner",
    price: 394,
    image:
      "https://www.globalbrandsmagazine.com/wp-content/uploads/2025/11/Top-Air-Conditioner-Brands-2025.webp",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Powerful air conditioner that delivers fast and efficient cooling. Designed to keep your home comfortable while saving energy.",
    highlight: [
      "Fast Cooling Technology",
      "Energy Efficient Compressor",
      "Silent Operation",
      "Smart Temperature Control",
      "Air Purification Filter",
    ],
    discount: 23,
  },
  {
    id: 19,
    title: "Air Conditioner",
    price: 394,
    image:
      "https://image.made-in-china.com/202f0j00CsVqObNlicoS/Nice-Calidad-Split-AC-Cool-1-5-Ton-2-Ton-Air-Conditioner-for-Home-Use-Office-Use-High-Quality-Airflow-with-Low-Price-Wall-Split-Air-Conditioner.webp",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Powerful air conditioner that delivers fast and efficient cooling. Designed to keep your home comfortable while saving energy.",
    highlight: [
      "Fast Cooling Technology",
      "Energy Efficient Compressor",
      "Silent Operation",
      "Smart Temperature Control",
      "Air Purification Filter",
    ],
    discount: 23,
  },
  {
    id: 20,
    title: "Mixer",
    price: 5999,
    image:
      "https://mayer.sg/cdn/shop/files/Mayer-MMPC6062-PressureCooker-with-Ceramic-Pot.png?v=1725249070&width=800",
    rating: 4.0,
    category: "Home & Kitchen",
    description:
      "Versatile mixer grinder for quick and effortless food preparation. Built with powerful blades for smooth grinding and blending.",
    highlight: [
      "Powerful Motor",
      "Multiple Speed Settings",
      "Stainless Steel Blades",
      "Overload Protection",
      "Durable Jars",
    ],
    discount: 27,
  },
];

export default products;
