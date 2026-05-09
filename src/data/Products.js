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
    title: "White Hand Bag",
    price: 2599,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGvTXql4jEMnBuFZNIk5GbppYOBa1E5m2ecHza3IbRstgcn1MSRR1QSCeEFbADJlYXM5BoUYtj8yUI4RWuQXp46nyLQBDQk_bI3Ab3sGE4_YHlzufAGItZEImyXxMV7ZElevOhjuhS&usqp=CAc",
    rating: 4.0,
    category: "Hand Bags",
    description:
      "A structured beige-toned handbag with a sleek silhouette and gold-tone detailing, designed to add a touch of elegance to everyday outfits. Its compact yet spacious build makes it perfect for both casual outings and semi-formal occasions, blending style with practicality.",

    highlight: [
      "Premium textured faux leather finish",
      "Structured silhouette for a polished look",
      "Gold-tone hardware accents",
      "Compact yet spacious interior design",
      "Versatile for daily wear and outings",
    ],
    discount: 20,
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
    title: "Long red dress",
    price: 2999,
    image:
      "https://chotronette.com/wp-content/uploads/2022/11/348720691_894302918326721_7466824773977892143_n.jpg.webp",
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
    id: 12,
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
    id: 13,
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
    id: 14,
    title: "Small Bones",
    price: 399,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71-H0tZ9XSS._AC_UL210_SR210,210_.jpg",

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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
    title: "Mixer",
    price: 5999,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2CZRkKFRs4LHXc7yuIJNo9-hWetGFKgl_cgdHW9BqpeiE7KDman-QFp2zYqjedxo0xFJhWw5KDC2nPaGMM7rLddmorx_eQnGxiJgruD6T8XGnmUjxR2yYgAZ5mlxOB292g3VXgQ&usqp=CAc",
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
    id: 19,
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
    id: 20,
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
    id: 21,
    title: "Mixer",
    price: 5999,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRfq_9-lCuoNzIeHe7uq2vh9ODCyWu3jnsIDqmrnwwQWDql645PRzEOhX-7w6ck5FRS2TrwT6J5vPeIWh6EO1lRkvlr-0NGADgOhx1FdvJHQ0-QfOI-UBK010oxOHm_CH7K&usqp=CAc",
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
    id: 22,
    title: "black Hand Bag",
    price: 2999,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTUJtEqW4XJ7S_AECO5ndQv_0S-UCsORc-DwpBVnVVWiZGRLz1oHrQaEqqyLvWQx4GmaeRzaVWgeBh0SpIeE_UWjkrTj0B7taIGlCIqR7fUu3fr75OoFR45TDd9Nfcw3ndXT8izyc&usqp=CAc",
    rating: 4.5,
    category: "Hand Bags",
    description:
      "A structured quilted shoulder handbag with a refined silhouette and elegant finish, designed to elevate both casual and formal outfits. Its compact yet spacious interior makes it perfect for daily essentials while maintaining a polished luxury-inspired look.",

    highlight: [
      "Premium quilted textured finish",
      "Structured silhouette with top-handle design",
      "Compact yet spacious interior storage",
      "Elegant metal hardware detailing",
      "Perfect for both casual and formal styling",
    ],
    discount: 25,
  },
  {
    id: 23,
    title: "Brown Hand Bag",
    price: 3999,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQifBBTCisMOvBatnlEE4dTtf5x0hAeh7T5l7yTx9-vWDff_H866mXWXZDzWdBXgNR-Kp_is0kehdBwXaJQRUfVofRaYImx14HSo10XRmxUGWV6WCubHk4wKobrb7BdfpH24oUM7Ho&usqp=CAc",
    rating: 4.5,
    category: "Hand Bags",
    description:
      "A sophisticated black quilted shoulder handbag featuring a structured silhouette, gold-tone chain strap, and elegant flap closure. Designed to bring a luxurious and timeless appeal, this bag seamlessly blends everyday functionality with high-end fashion aesthetics.",

    highlight: [
      "Premium quilted leather texture with diamond stitching",
      "Elegant gold-tone chain shoulder strap",
      "Structured flap design with secure closure",
      "Compact yet functional interior space",
      "Perfect for both casual and formal styling",
    ],
    discount: 35,
  },
  {
    id: 24,
    title: "Pink Hand Bag",
    price: 3000,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOFLxAblMvuzwVN3cqltl3jrgI2afP54m9eVnJJvMioZHYZURw2HqbfeSH8q09eTXG-Jl2D0IhYbLaFOl3DoQAxfoeMeZJODxzMcEtg2aggpH9ofF6XdsRIa_sRwaSORX84i_bD10&usqp=CAc",
    rating: 4.0,
    category: "Hand Bags",
    description:
      "A chic pink quilted shoulder handbag featuring a structured silhouette, elegant flap closure, and gold-tone chain strap. Designed to deliver a timeless luxury-inspired look, this bag effortlessly elevates both everyday outfits and evening wear with its refined and versatile design.",

    highlight: [
      "Premium diamond-quilted textured finish",
      "Elegant flap closure with secure magnetic fastening",
      "Gold-tone chain strap for shoulder wear",
      "Structured body for a polished luxury look",
      "Perfect balance of style and everyday functionality",
    ],
    discount: 30,
  },

  {
    id: 25,
    title: "Short Dress",
    price: 3599,
    image:
      "https://bohobeachhut.com/cdn/shop/products/boho-beach-hut-boho-dress-short-sleeve-dress-mini-dress-white-dress-hippie-dress-floral-dress-summer-dress-white-s-chic-white-summer-dress-34898052808899.jpg?v=1759851250&width=800",
    rating: 4.5,
    category: "Fashion",
    description:
      "A white cotton short dress with relaxed silhouette and subtle texture, offering effortless elegance and all-day comfort. Designed for versatile wear from casual outings to stylish city strolls",
    highlight: [
      "Handwoven premium cotton slub fabric",
      "Loose, flattering silhouette",
      "Breezy and comfortable all-day wear",
      "Carefully tailored artisanal design",
      "Ideal for summer outings and casual chic",
    ],
    discount: 40,
  },
  {
    id: 26,
    title: "Black Top",
    price: 1599,
    image:
      "https://images.asos-media.com/products/bershka-long-sleeve-top-in-black/209439484-1-black/?$n_480w$&wid=476&fit=constrain",
    rating: 4.5,
    category: "Fashion",
    description:
      "A black cotton top with relaxed silhouette and subtle texture, offering effortless elegance and all-day comfort. Designed for versatile wear from casual outings to stylish city strolls",
    highlight: [
      "Handwoven premium cotton slub fabric",
      "Loose, flattering silhouette",
      "Carefully tailored artisanal design",
      "Ideal for summer outings and casual chic",
    ],
    discount: 40,
  },
  {
    id: 27,
    title: "Maxi Dress",
    price: 4599,
    image:
      "https://arcinaori.com.au/cdn/shop/files/5.7-PALOMA-MAXI-5.jpg?v=1762236314&width=1920",
    rating: 4.0,
    category: "Fashion",
    description:
      "A white and black cotton maxi dress with relaxed silhouette and subtle texture, offering effortless elegance and all-day comfort. Designed for versatile wear from casual outings to stylish city strolls",
    highlight: [
      "Handwoven premium cotton slub fabric",
      "Loose, flattering silhouette",
      "Breezy and comfortable all-day wear",
      "Carefully tailored artisanal design",
      "Ideal for summer outings and casual chic",
    ],
    discount: 40,
  },
  {
    id: 28,
    title: "Hunt The Villian",
    price: 399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWbk-DILJ3_fgMns0wusjBKsCsdijNoP_Wg&s",
    rating: 5.0,
    category: "Books",
    description:
      "Hunt The Villian is a gripping MM romance about love, heartbreak, and obsession. vaughn's world is turned upside down by the enigmatic yulian dimitrive in this intense, unforgettable story of passion and transformation.",
    highlight: [
      "dark romance",
      "high angst",
      "Deep emotions",
      "Enimies to lovers",
      "Bittersweet love",
    ],
    discount: 13,
  },
  {
    id: 29,
    title: "God Of Fury",
    price: 499,
    image:
      "https://thegrimoire.co.nz/cdn/shop/files/God_of_Fury_grande.png?v=1736980692",
    rating: 5.0,
    category: "Books",
    description:
      "God Of Fury is a gripping dark MM romance about love, heartbreak, and obsession. brandon's world is turned upside down by the enigmatic Nikolai Sokolov in this intense, unforgettable story of passion and transformation.",
    highlight: [
      "dark romance",
      "high angst",
      "Deep emotions",
      "Enimies to lovers",
      "Bittersweet love",
    ],
    discount: 10,
  },
  {
    id: 30,
    title: "Vows Of Deception",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh_5JK5Tt8_dkIrT0ZH62nQuo0Sd4SzclEA&s",
    rating: 5.0,
    category: "Books",
    description:
      "Vows Of Deception is a gripping dark MM romance about love, heartbreak, and obsession. Lia's world is turned upside down by the enigmatic Adrian Volkov in this intense, unforgettable story of passion and transformation.",
    highlight: [
      "dark romance",
      "high angst",
      "Deep emotions",
      "Enimies to lovers",
      "Bittersweet love",
    ],
    discount: 15,
  },
  {
    id: 31,
    title: "Mini Camera",
    price: 2599,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTrZwXs3Kv-CJPQg2JeX0yyAHYBaH-dhu8g0JJJFVBU89GTlH1mQUDkdGuDqFvkGBcZPcbSfC9Ze0OT4iwvTZjbsjBUERlpZph0JOsKoPi4tcOqx1rGBTly6TK-Ioc_lcA_5RhX7g&usqp=CAc",
    rating: 4.5,
    category: "Electronics",
    description:
      "Compact mini camera with ultra-clear video quality and smart portable design. Perfect for travel, security, and capturing moments with ease.",

    highlight: [
      "HD Video Recording",
      "Wide Angle Lens",
      "Portable Mini Design",
      "Night Vision Support",
      "Long Battery Backup",
    ],
    discount: 25,
  },
  {
    id: 31,
    title: "Monitor 34 inch",
    price: 25999,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwJpZgRi_J2WpCaJHYWKAEcKPXM1PKlNkJX9mOeoFdZ4LKLd_CiAu6R0FnDvk5U8jL8zCc-cIywAFQRZr7KRD_q8PypYJGpJlOMsSpB3lCf8DQkgz34mN_ew86j-4k&usqp=CAc",
    rating: 4.5,
    category: "Electronics",
    description:
      "Ultra-wide 34-inch monitor with stunning visuals and smooth performance. Built for immersive gaming, multitasking, and professional productivity.",

    highlight: [
      "34-Inch UltraWide Display",
      "Crystal Clear Resolution",
      "High Refresh Rate",
      "Eye Care Technology",
      "Multiple Connectivity Ports",
    ],
    discount: 25,
  },
  {
    id: 32,
    title: "Pink Hand Bag",
    price: 3500,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTrd4jxTdpK9RvnEQQ97BuGaGwMm4mLTXc9pUsBJCLic4fTBTKg6JYc46bgBo8QfIWexlY_YpgaztCZ6d46ghak1nboPxGCybiy4jLRSd0avUJzpJcmceYw&usqp=CAc",
    rating: 4.5,
    category: "Hand Bags",
    description:
      "A chic grren quilted shoulder handbag featuring a structured silhouette, elegant flap closure. Designed to deliver a timeless luxury-inspired look, this bag effortlessly elevates both everyday outfits and evening wear with its refined and versatile design.",

    highlight: [
      "Premium diamond-quilted textured finish",
      "Gold-tone chain strap for shoulder wear",
      "Structured body for a polished luxury look",
      "Perfect balance of style and everyday functionality",
    ],
    discount: 20,
  },
  {
    id: 33,
    title: "white & black Hand Bag",
    price: 4500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtq1ndTAi9gxqr-kYnZ1y4GRGY9ixQmg6Fw&s",
    rating: 4.5,
    category: "Hand Bags",
    description:
      "Elegant black and white handbag combo crafted for everyday style and convenience. Perfect for casual outings, office looks, and special occasions.",

    highlight: [
      "Pack of 2 Stylish Handbags",
      "Premium Leather Finish",
      "Spacious Storage Design",
      "Comfortable Carry Handles",
      "Perfect for Daily Use",
    ],
    discount: 20,
  },
];

export default products;
