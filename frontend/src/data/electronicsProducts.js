
const electronicsProducts = [
  {
    name: "Sony WH-1000XM5 Headphones",
    image: "https://example.com/images/sony-headphones.jpg",
    price: 29999,
    review: "Top-notch noise cancellation and sound quality.",
    rating: 4.8,
    description: "Premium over-ear headphones with industry-leading noise cancelation and up to 30 hours of battery life."
  },
  {
    name: "Samsung Galaxy Tab S9",
    image: "https://example.com/images/samsung-tab-s9.jpg",
    price: 57999,
    review: "Great for productivity and entertainment.",
    rating: 4.6,
    description: "11-inch dynamic AMOLED display, Snapdragon 8 Gen 2 chip, and S Pen support."
  },
  {
    name: "Dell XPS 13 Laptop",
    image: "https://example.com/images/dell-xps-13.jpg",
    price: 99999,
    review: "Compact and powerful ultrabook.",
    rating: 4.7,
    description: "13.4” FHD+ display, Intel i7 13th Gen, 16GB RAM, 512GB SSD, and premium build quality."
  },
  {
    name: "Canon EOS R10 Mirrorless Camera",
    image: "https://example.com/images/canon-eos-r10.jpg",
    price: 81990,
    review: "Excellent for beginners and travel photography.",
    rating: 4.5,
    description: "24.2MP APS-C sensor, 4K 30p video, Dual Pixel Autofocus, and lightweight design."
  },
  {
    name: "Apple Watch Series 9",
    image: "https://example.com/images/apple-watch-9.jpg",
    price: 41900,
    review: "Perfect for iPhone users and fitness tracking.",
    rating: 4.9,
    description: "Advanced health sensors, double tap gesture, and brighter always-on Retina display."
  },
  {
    name: "Logitech MX Master 3S Mouse",
    image: "https://example.com/images/logitech-mx-master-3s.jpg",
    price: 8995,
    review: "Best productivity mouse on the market.",
    rating: 4.8,
    description: "Customizable buttons, silent click, 8K DPI sensor, and multi-device support."
  },
  {
    name: "HP DeskJet 4178 All-in-One Printer",
    image: "https://example.com/images/hp-deskjet.jpg",
    price: 6999,
    review: "Great value for home use.",
    rating: 4.3,
    description: "Print, scan, and copy with wireless connectivity and mobile printing support."
  },
  {
    name: "Amazon Echo Dot (5th Gen)",
    image: "https://example.com/images/echo-dot.jpg",
    price: 4499,
    review: "Smart and convenient assistant.",
    rating: 4.6,
    description: "Compact smart speaker with Alexa and improved sound quality for voice commands."
  },
  {
    name: "boAt Airdopes 141",
    image: "https://example.com/images/boat-airdopes.jpg",
    price: 1499,
    review: "Best budget earbuds!",
    rating: 4.4,
    description: "True wireless earbuds with ENx tech, up to 42 hours playback, and Type-C fast charging."
  },
  {
    name: "Xiaomi Mi Smart Band 8",
    image: "https://example.com/images/mi-band-8.jpg",
    price: 2999,
    review: "Lightweight and packed with features.",
    rating: 4.5,
    description: "Fitness tracker with AMOLED display, 120+ workout modes, heart rate & SpO2 monitoring."
  },
  {
    name: "Sony Bravia 43-Inch Smart TV",
    image: "https://example.com/images/sony-tv.jpg",
    price: 41999,
    review: "Crystal-clear picture quality.",
    rating: 4.7,
    description: "4K UHD LED TV with Google TV OS, Dolby Audio, and HDR10 support."
  },
  {
    name: "JBL Flip 6 Bluetooth Speaker",
    image: "https://example.com/images/jbl-flip6.jpg",
    price: 8999,
    review: "Powerful bass and rugged design.",
    rating: 4.6,
    description: "Waterproof portable speaker with 12-hour battery and dual bass radiators."
  },
  {
    name: "OnePlus Nord Buds 2",
    image: "https://example.com/images/nord-buds-2.jpg",
    price: 2999,
    review: "Crisp sound with active noise cancellation.",
    rating: 4.5,
    description: "ANC true wireless earbuds with 12.4mm drivers and fast charging support."
  },
  {
    name: "SanDisk 1TB SSD",
    image: "https://example.com/images/sandisk-ssd.jpg",
    price: 7499,
    review: "Compact and blazing fast.",
    rating: 4.8,
    description: "Portable external SSD with USB 3.2 Gen 2, 1050MB/s read speeds, and secure encryption."
  },
  {
    name: "Lenovo Smart Clock Essential",
    image: "https://example.com/images/lenovo-clock.jpg",
    price: 2999,
    review: "Minimal and helpful on a desk.",
    rating: 4.2,
    description: "Smart clock with LED display, Google Assistant, and USB charging port."
  },
  {
    name: "ASUS ROG Strix Gaming Laptop",
    image: "https://example.com/images/asus-rog.jpg",
    price: 134999,
    review: "Ultimate performance for gamers.",
    rating: 4.9,
    description: "15.6” FHD 144Hz, Ryzen 7, RTX 4060, 16GB RAM, 1TB SSD, RGB keyboard."
  },
  {
    name: "TP-Link WiFi 6 Router AX1800",
    image: "https://example.com/images/tplink-wifi6.jpg",
    price: 3999,
    review: "Faster speeds and better range.",
    rating: 4.4,
    description: "Next-gen dual-band WiFi 6 router with OFDMA and MU-MIMO support."
  },
  {
    name: "Realme Smart Cam 360",
    image: "https://example.com/images/realme-cam.jpg",
    price: 2999,
    review: "Great for home security.",
    rating: 4.3,
    description: "360° rotation, night vision, 1080p recording, and real-time alerts."
  },
  {
    name: "Acer 24-inch LED Monitor",
    image: "https://example.com/images/acer-monitor.jpg",
    price: 8999,
    review: "Perfect for work and gaming.",
    rating: 4.5,
    description: "Full HD IPS display with slim bezels and Blue Light Shield technology."
  },
  {
    name: "Anker PowerCore 20000mAh",
    image: "https://example.com/images/anker-powerbank.jpg",
    price: 3299,
    review: "Charges my phone 4 times!",
    rating: 4.6,
    description: "High-capacity power bank with dual USB outputs and PowerIQ fast charging."
  },
  {
    name: "Google Chromecast HD",
    image: "https://example.com/images/chromecast-hd.jpg",
    price: 3299,
    review: "Streams everything smoothly.",
    rating: 4.7,
    description: "HD streaming dongle with Google TV interface, voice remote, and app support."
  }
];


export default electronicsProducts;
