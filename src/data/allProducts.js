const allProducts = [
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b4"
  },
  "name": "Sony WH-1000XM5 Headphones",
  "image": "https://example.com/images/sony-headphones.jpg",
  "price": 29999,
  "review": "Top-notch noise cancellation and sound quality.",
  "rating": 4.8,
  "description": "Premium over-ear headphones with industry-leading noise cancelation and up to 30 hours of battery life."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b5"
  },
  "name": "Samsung Galaxy Tab S9",
  "image": "https://example.com/images/samsung-tab-s9.jpg",
  "price": 57999,
  "review": "Great for productivity and entertainment.",
  "rating": 4.6,
  "description": "11-inch dynamic AMOLED display, Snapdragon 8 Gen 2 chip, and S Pen support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b6"
  },
  "name": "Dell XPS 13 Laptop",
  "image": "https://example.com/images/dell-xps-13.jpg",
  "price": 99999,
  "review": "Compact and powerful ultrabook.",
  "rating": 4.7,
  "description": "13.4” FHD+ display, Intel i7 13th Gen, 16GB RAM, 512GB SSD, and premium build quality."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b7"
  },
  "name": "Canon EOS R10 Mirrorless Camera",
  "image": "https://example.com/images/canon-eos-r10.jpg",
  "price": 81990,
  "review": "Excellent for beginners and travel photography.",
  "rating": 4.5,
  "description": "24.2MP APS-C sensor, 4K 30p video, Dual Pixel Autofocus, and lightweight design."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b8"
  },
  "name": "Apple Watch Series 9",
  "image": "https://example.com/images/apple-watch-9.jpg",
  "price": 41900,
  "review": "Perfect for iPhone users and fitness tracking.",
  "rating": 4.9,
  "description": "Advanced health sensors, double tap gesture, and brighter always-on Retina display."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7b9"
  },
  "name": "Logitech MX Master 3S Mouse",
  "image": "https://example.com/images/logitech-mx-master-3s.jpg",
  "price": 8995,
  "review": "Best productivity mouse on the market.",
  "rating": 4.8,
  "description": "Customizable buttons, silent click, 8K DPI sensor, and multi-device support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ba"
  },
  "name": "HP DeskJet 4178 All-in-One Printer",
  "image": "https://example.com/images/hp-deskjet.jpg",
  "price": 6999,
  "review": "Great value for home use.",
  "rating": 4.3,
  "description": "Print, scan, and copy with wireless connectivity and mobile printing support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7bb"
  },
  "name": "Amazon Echo Dot (5th Gen)",
  "image": "https://example.com/images/echo-dot.jpg",
  "price": 4499,
  "review": "Smart and convenient assistant.",
  "rating": 4.6,
  "description": "Compact smart speaker with Alexa and improved sound quality for voice commands."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7bc"
  },
  "name": "boAt Airdopes 141",
  "image": "https://example.com/images/boat-airdopes.jpg",
  "price": 1499,
  "review": "Best budget earbuds!",
  "rating": 4.4,
  "description": "True wireless earbuds with ENx tech, up to 42 hours playback, and Type-C fast charging."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7bd"
  },
  "name": "Xiaomi Mi Smart Band 8",
  "image": "https://example.com/images/mi-band-8.jpg",
  "price": 2999,
  "review": "Lightweight and packed with features.",
  "rating": 4.5,
  "description": "Fitness tracker with AMOLED display, 120+ workout modes, heart rate & SpO2 monitoring."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7be"
  },
  "name": "Sony Bravia 43-Inch Smart TV",
  "image": "https://example.com/images/sony-tv.jpg",
  "price": 41999,
  "review": "Crystal-clear picture quality.",
  "rating": 4.7,
  "description": "4K UHD LED TV with Google TV OS, Dolby Audio, and HDR10 support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7bf"
  },
  "name": "JBL Flip 6 Bluetooth Speaker",
  "image": "https://example.com/images/jbl-flip6.jpg",
  "price": 8999,
  "review": "Powerful bass and rugged design.",
  "rating": 4.6,
  "description": "Waterproof portable speaker with 12-hour battery and dual bass radiators."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c0"
  },
  "name": "OnePlus Nord Buds 2",
  "image": "https://example.com/images/nord-buds-2.jpg",
  "price": 2999,
  "review": "Crisp sound with active noise cancellation.",
  "rating": 4.5,
  "description": "ANC true wireless earbuds with 12.4mm drivers and fast charging support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c1"
  },
  "name": "SanDisk 1TB SSD",
  "image": "https://example.com/images/sandisk-ssd.jpg",
  "price": 7499,
  "review": "Compact and blazing fast.",
  "rating": 4.8,
  "description": "Portable external SSD with USB 3.2 Gen 2, 1050MB/s read speeds, and secure encryption."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c2"
  },
  "name": "Lenovo Smart Clock Essential",
  "image": "https://example.com/images/lenovo-clock.jpg",
  "price": 2999,
  "review": "Minimal and helpful on a desk.",
  "rating": 4.2,
  "description": "Smart clock with LED display, Google Assistant, and USB charging port."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c3"
  },
  "name": "ASUS ROG Strix Gaming Laptop",
  "image": "https://example.com/images/asus-rog.jpg",
  "price": 134999,
  "review": "Ultimate performance for gamers.",
  "rating": 4.9,
  "description": "15.6” FHD 144Hz, Ryzen 7, RTX 4060, 16GB RAM, 1TB SSD, RGB keyboard."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c4"
  },
  "name": "TP-Link WiFi 6 Router AX1800",
  "image": "https://example.com/images/tplink-wifi6.jpg",
  "price": 3999,
  "review": "Faster speeds and better range.",
  "rating": 4.4,
  "description": "Next-gen dual-band WiFi 6 router with OFDMA and MU-MIMO support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c5"
  },
  "name": "Realme Smart Cam 360",
  "image": "https://example.com/images/realme-cam.jpg",
  "price": 2999,
  "review": "Great for home security.",
  "rating": 4.3,
  "description": "360° rotation, night vision, 1080p recording, and real-time alerts."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c6"
  },
  "name": "Acer 24-inch LED Monitor",
  "image": "https://example.com/images/acer-monitor.jpg",
  "price": 8999,
  "review": "Perfect for work and gaming.",
  "rating": 4.5,
  "description": "Full HD IPS display with slim bezels and Blue Light Shield technology."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c7"
  },
  "name": "Anker PowerCore 20000mAh",
  "image": "https://example.com/images/anker-powerbank.jpg",
  "price": 3299,
  "review": "Charges my phone 4 times!",
  "rating": 4.6,
  "description": "High-capacity power bank with dual USB outputs and PowerIQ fast charging."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c8"
  },
  "name": "Google Chromecast HD",
  "image": "https://example.com/images/chromecast-hd.jpg",
  "price": 3299,
  "review": "Streams everything smoothly.",
  "rating": 4.7,
  "description": "HD streaming dongle with Google TV interface, voice remote, and app support."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c9"
  },
  "name": "Levi's Slim Fit Jeans",
  "image": "https://example.com/images/levis-jeans.jpg",
  "price": 2499,
  "review": "Comfortable fit and durable fabric.",
  "rating": 4.5,
  "description": "Classic slim fit jeans with stretchable denim, suitable for casual and semi-formal wear."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ca"
  },
  "name": "Nike Air Max Sneakers",
  "image": "https://example.com/images/nike-air-max.jpg",
  "price": 5999,
  "review": "Trendy design and very comfortable.",
  "rating": 4.7,
  "description": "High-performance sneakers with air cushioning, ideal for daily wear and running."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7cb"
  },
  "name": "H&M Cotton T-Shirt",
  "image": "https://example.com/images/hm-tshirt.jpg",
  "price": 799,
  "review": "Soft cotton, fits perfectly.",
  "rating": 4.3,
  "description": "Basic solid t-shirt made with 100% breathable cotton for everyday comfort."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7cc"
  },
  "name": "Zara Women's Blazer",
  "image": "https://example.com/images/zara-blazer.jpg",
  "price": 3599,
  "review": "Elegant and well-tailored.",
  "rating": 4.6,
  "description": "Modern fit blazer, perfect for office or formal events with a sharp silhouette."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7cd"
  },
  "name": "Fossil Analog Watch",
  "image": "https://example.com/images/fossil-watch.jpg",
  "price": 7199,
  "review": "Looks classy and works great.",
  "rating": 4.8,
  "description": "Stylish leather-strap watch with water resistance and minimalist dial."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ce"
  },
  "name": "Adidas Activewear Set",
  "image": "https://example.com/images/adidas-activewear.jpg",
  "price": 4299,
  "review": "Stretchy, breathable fabric. Great for gym.",
  "rating": 4.4,
  "description": "Matching sports bra and leggings set, moisture-wicking and designed for workouts."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7cf"
  },
  "name": "Puma Men's Jacket",
  "image": "https://example.com/images/puma-jacket.jpg",
  "price": 3199,
  "review": "Warm and windproof, great for winter.",
  "rating": 4.5,
  "description": "Sporty puffer jacket with zip-up closure and water-resistant outer shell."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d0"
  },
  "name": "Allen Solly Formal Shirt",
  "image": "https://example.com/images/allen-solly-shirt.jpg",
  "price": 1899,
  "review": "Perfect for office wear.",
  "rating": 4.2,
  "description": "Regular-fit cotton shirt in pastel shades, ideal for daily formal wear."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d1"
  },
  "name": "BIBA Anarkali Kurti",
  "image": "https://example.com/images/biba-kurti.jpg",
  "price": 2599,
  "review": "Very elegant, comfortable fabric.",
  "rating": 4.6,
  "description": "Traditional Anarkali kurti with printed patterns, great for festive occasions."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d2"
  },
  "name": "U.S. Polo Assn. Casual Shoes",
  "image": "https://example.com/images/us-polo-shoes.jpg",
  "price": 2799,
  "review": "Stylish and long-lasting.",
  "rating": 4.4,
  "description": "Lace-up sneakers with cushioned soles and contrast detailing."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d3"
  },
  "name": "Forever 21 Crop Top",
  "image": "https://example.com/images/forever21-crop.jpg",
  "price": 999,
  "review": "Trendy and cute!",
  "rating": 4.3,
  "description": "Fitted crop top with ribbed texture, ideal for summer outings."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d4"
  },
  "name": "Raymond Men’s Trousers",
  "image": "https://example.com/images/raymond-trousers.jpg",
  "price": 2099,
  "review": "Great fit, premium fabric.",
  "rating": 4.5,
  "description": "Tailored formal trousers for men with flat front and regular fit."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d5"
  },
  "name": "Van Heusen Women's Handbag",
  "image": "https://example.com/images/vanheusen-bag.jpg",
  "price": 3499,
  "review": "Stylish and roomy.",
  "rating": 4.6,
  "description": "PU leather structured handbag with metallic handle and zip compartments."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d6"
  },
  "name": "Roadster Denim Jacket",
  "image": "https://example.com/images/roadster-jacket.jpg",
  "price": 2299,
  "review": "Stylish and fits well.",
  "rating": 4.3,
  "description": "Classic blue washed denim jacket with button closure and pockets."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d7"
  },
  "name": "W for Woman Palazzo Pants",
  "image": "https://example.com/images/w-palazzo.jpg",
  "price": 1499,
  "review": "Lightweight and airy.",
  "rating": 4.2,
  "description": "Straight cut palazzo with elastic waistband and comfortable crepe fabric."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d8"
  },
  "name": "HRX Running Tights",
  "image": "https://example.com/images/hrx-tights.jpg",
  "price": 1199,
  "review": "Perfect for jogging.",
  "rating": 4.4,
  "description": "Full-length stretch leggings designed for fitness and high-intensity workouts."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7d9"
  },
  "name": "Tommy Hilfiger Belt",
  "image": "https://example.com/images/tommy-belt.jpg",
  "price": 2090,
  "review": "Premium leather quality.",
  "rating": 4.7,
  "description": "Genuine leather belt with branded buckle and reversible design."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7da"
  },
  "name": "Louis Philippe Suit",
  "image": "https://example.com/images/lp-suit.jpg",
  "price": 12499,
  "review": "Best suit for events.",
  "rating": 4.8,
  "description": "2-piece suit with wool-blend fabric and modern tailored fit."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7db"
  },
  "name": "Hidesign Leather Wallet",
  "image": "https://example.com/images/hidesign-wallet.jpg",
  "price": 1999,
  "review": "Compact and premium build.",
  "rating": 4.6,
  "description": "Men's leather wallet with coin pouch and RFID protection."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7dc"
  },
  "name": "ONLY Ripped Jeans",
  "image": "https://example.com/images/only-jeans.jpg",
  "price": 2699,
  "review": "Trendy and stylish.",
  "rating": 4.4,
  "description": "Distressed denim for women with high waist and ankle-length cut."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7dd"
  },
  "name": "Bata Leather Sandals",
  "image": "https://example.com/images/bata-sandals.jpg",
  "price": 1599,
  "review": "Comfortable for long walks.",
  "rating": 4.2,
  "description": "Closed-toe leather sandals with adjustable strap and rubber sole."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7de"
  },
  "name": "Prestige Pressure Cooker",
  "image": "https://example.com/images/prestige-cooker.jpg",
  "price": 2199,
  "review": "Cooks fast and is very safe.",
  "rating": 4.6,
  "description": "Aluminum pressure cooker with safety lid and anti-bulge base."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7df"
  },
  "name": "Milton Thermosteel Bottle",
  "image": "https://example.com/images/milton-bottle.jpg",
  "price": 799,
  "review": "Keeps water hot/cold for hours.",
  "rating": 4.4,
  "description": "Insulated stainless steel bottle with 1L capacity."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e0"
  },
  "name": "Philips Mixer Grinder",
  "image": "https://example.com/images/philips-mixer.jpg",
  "price": 3199,
  "review": "Powerful motor and easy to clean.",
  "rating": 4.5,
  "description": "600W mixer with 3 jars and advanced air ventilation system."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e1"
  },
  "name": "Usha Steam Iron",
  "image": "https://example.com/images/usha-iron.jpg",
  "price": 1299,
  "review": "Lightweight and smooth ironing.",
  "rating": 4.3,
  "description": "Non-stick soleplate, variable steam, and temperature control."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e2"
  },
  "name": "Cello Dinner Set - 18 Pcs",
  "image": "https://example.com/images/cello-dinner.jpg",
  "price": 1699,
  "review": "Perfect for everyday use.",
  "rating": 4.2,
  "description": "Microwave-safe, break-resistant dinner set with plates and bowls."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e3"
  },
  "name": "Havells Wall Fan",
  "image": "https://example.com/images/havells-fan.jpg",
  "price": 2499,
  "review": "High-speed airflow and silent.",
  "rating": 4.5,
  "description": "400mm fan with 3-speed levels and oscillation function."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e4"
  },
  "name": "AmazonBasics Nonstick Cookware Set",
  "image": "https://example.com/images/amazonbasics-cookware.jpg",
  "price": 2999,
  "review": "Nonstick and easy to clean.",
  "rating": 4.4,
  "description": "5-piece nonstick cookware with soft-touch handles."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e5"
  },
  "name": "Butterfly Gas Stove 2 Burner",
  "image": "https://example.com/images/butterfly-stove.jpg",
  "price": 2899,
  "review": "Glass top, sleek design.",
  "rating": 4.5,
  "description": "ISI certified toughened glass top gas stove with brass burners."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e6"
  },
  "name": "Eveready LED Emergency Light",
  "image": "https://example.com/images/eveready-light.jpg",
  "price": 899,
  "review": "Bright and portable.",
  "rating": 4.2,
  "description": "Rechargeable LED light with backup up to 4 hours."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e7"
  },
  "name": "Pigeon Toaster",
  "image": "https://example.com/images/pigeon-toaster.jpg",
  "price": 1199,
  "review": "Quick and crispy toast.",
  "rating": 4.3,
  "description": "2-slice pop-up toaster with browning control."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e8"
  },
  "name": "Kutchina Chimney",
  "image": "https://example.com/images/kutchina-chimney.jpg",
  "price": 7999,
  "review": "Very powerful suction.",
  "rating": 4.6,
  "description": "Auto-clean kitchen chimney with LED and filterless design."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7e9"
  },
  "name": "Borocil Glass Storage Set",
  "image": "https://example.com/images/borocil-jars.jpg",
  "price": 1599,
  "review": "Airtight and stylish.",
  "rating": 4.4,
  "description": "Set of 5 borosilicate jars for kitchen storage."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ea"
  },
  "name": "Prestige Induction Cooktop",
  "image": "https://example.com/images/prestige-induction.jpg",
  "price": 2899,
  "review": "Easy to operate and cook.",
  "rating": 4.5,
  "description": "Induction stove with push-button control and auto voltage adjust."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7eb"
  },
  "name": "Kent Water Purifier",
  "image": "https://example.com/images/kent-purifier.jpg",
  "price": 11499,
  "review": "Clean, tasty drinking water.",
  "rating": 4.6,
  "description": "RO+UV+UF water purifier with TDS controller and 8L tank."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ec"
  },
  "name": "Home Centre Wall Clock",
  "image": "https://example.com/images/homecentre-clock.jpg",
  "price": 1299,
  "review": "Elegant design and clear display.",
  "rating": 4.4,
  "description": "Minimalistic silent wall clock with quartz movement."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ed"
  },
  "name": "Vinod Pressure Pan",
  "image": "https://example.com/images/vinod-pan.jpg",
  "price": 1999,
  "review": "Good for curries and frying.",
  "rating": 4.3,
  "description": "Hard anodized pressure pan with 3.2L capacity and inner lid."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ee"
  },
  "name": "Wonderchef Nutri-Blend",
  "image": "https://example.com/images/wonderchef-blender.jpg",
  "price": 2499,
  "review": "Best for smoothies!",
  "rating": 4.5,
  "description": "Compact blender with 2 jars, perfect for daily smoothies and chutneys."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ef"
  },
  "name": "Treo Glass Lunch Box",
  "image": "https://example.com/images/treo-lunchbox.jpg",
  "price": 1399,
  "review": "Leak-proof and microwave-safe.",
  "rating": 4.3,
  "description": "Set of 3 borosilicate lunch boxes with air-tight lids."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f0"
  },
  "name": "Ajanta Ceiling Fan",
  "image": "https://example.com/images/ajanta-fan.jpg",
  "price": 1799,
  "review": "Silent and good air circulation.",
  "rating": 4.4,
  "description": "3-blade fan with 400 RPM and energy-efficient motor."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f1"
  },
  "name": "Butterfly Glass Kettle",
  "image": "https://example.com/images/butterfly-kettle.jpg",
  "price": 1299,
  "review": "Heats water in 3 minutes.",
  "rating": 4.5,
  "description": "Electric kettle with 1.8L capacity, automatic shut-off, and LED indicator."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f2"
  },
  "name": "Yonex Badminton Racket",
  "image": "https://example.com/images/yonex-racket.jpg",
  "price": 1999,
  "review": "Lightweight and durable.",
  "rating": 4.6,
  "description": "High-quality graphite badminton racket for beginners and pros."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f3"
  },
  "name": "NIVIA Football",
  "image": "https://example.com/images/nivia-football.jpg",
  "price": 799,
  "review": "Good grip and bounce.",
  "rating": 4.4,
  "description": "Size 5 synthetic rubber football, suitable for all weather conditions."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f4"
  },
  "name": "Adidas Running Shoes",
  "image": "https://example.com/images/adidas-shoes.jpg",
  "price": 3299,
  "review": "Very comfortable for daily running.",
  "rating": 4.7,
  "description": "Breathable mesh, cushioned sole, and stylish look."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f5"
  },
  "name": "Cosco Volleyball",
  "image": "https://example.com/images/cosco-volleyball.jpg",
  "price": 599,
  "review": "Soft touch and great for practice.",
  "rating": 4.3,
  "description": "Synthetic volleyball for indoor and outdoor play."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f6"
  },
  "name": "SG Cricket Bat",
  "image": "https://example.com/images/sg-bat.jpg",
  "price": 2499,
  "review": "Well balanced and strong willow.",
  "rating": 4.5,
  "description": "Grade 1 English willow bat with thick edges and comfortable grip."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f7"
  },
  "name": "Wildcraft Backpack 44L",
  "image": "https://example.com/images/wildcraft-bag.jpg",
  "price": 2199,
  "review": "Durable and spacious.",
  "rating": 4.6,
  "description": "Ideal for hiking and long travel with multiple compartments."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f8"
  },
  "name": "Reebok Yoga Mat",
  "image": "https://example.com/images/reebok-mat.jpg",
  "price": 999,
  "review": "Non-slip and soft material.",
  "rating": 4.4,
  "description": "6mm anti-skid yoga mat with strap for easy carry."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7f9"
  },
  "name": "Decathlon Skipping Rope",
  "image": "https://example.com/images/skipping-rope.jpg",
  "price": 399,
  "review": "Great cardio tool, smooth motion.",
  "rating": 4.2,
  "description": "Adjustable length with ergonomic handles."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7fa"
  },
  "name": "Kobo Dumbbell Set (10kg)",
  "image": "https://example.com/images/kobo-dumbbell.jpg",
  "price": 1899,
  "review": "Perfect for home workouts.",
  "rating": 4.5,
  "description": "Rubber-coated steel dumbbells with anti-slip grip."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7fb"
  },
  "name": "Speedo Swimming Goggles",
  "image": "https://example.com/images/speedo-goggles.jpg",
  "price": 599,
  "review": "Crystal clear underwater vision.",
  "rating": 4.4,
  "description": "Anti-fog, UV-protected lenses for professional swimmers."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7fc"
  },
  "name": "Quechua Tent (2 Person)",
  "image": "https://example.com/images/quechua-tent.jpg",
  "price": 3699,
  "review": "Quick setup and waterproof.",
  "rating": 4.7,
  "description": "Ideal for camping and hiking trips. Easy 2-second setup."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7fd"
  },
  "name": "Puma Sports T-shirt",
  "image": "https://example.com/images/puma-shirt.jpg",
  "price": 799,
  "review": "Breathable and stylish.",
  "rating": 4.3,
  "description": "Dry-fit polyester fabric with comfort fit."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7fe"
  },
  "name": "SG Cricket Gloves",
  "image": "https://example.com/images/sg-gloves.jpg",
  "price": 999,
  "review": "Good cushioning and grip.",
  "rating": 4.4,
  "description": "Leather palm, high-density foam padding."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f7ff"
  },
  "name": "B-Twin Bicycle Helmet",
  "image": "https://example.com/images/helmet.jpg",
  "price": 1399,
  "review": "Lightweight and safe.",
  "rating": 4.6,
  "description": "Adjustable straps, 17 ventilation holes."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f800"
  },
  "name": "Li-Ning Badminton Shoes",
  "image": "https://example.com/images/lining-shoes.jpg",
  "price": 2899,
  "review": "Good grip on indoor courts.",
  "rating": 4.5,
  "description": "Non-marking sole, shock absorption."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f801"
  },
  "name": "Camping Cookware Set",
  "image": "https://example.com/images/camp-cookware.jpg",
  "price": 1199,
  "review": "Very compact and useful.",
  "rating": 4.3,
  "description": "Includes pot, pan, cups, and utensils for outdoor cooking."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f802"
  },
  "name": "Quechua Hiking Shoes",
  "image": "https://example.com/images/hiking-shoes.jpg",
  "price": 3599,
  "review": "Waterproof and durable.",
  "rating": 4.6,
  "description": "Ideal for mountain trails and long hikes."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f803"
  },
  "name": "AmazonBasics Resistance Bands",
  "image": "https://example.com/images/resistance-band.jpg",
  "price": 699,
  "review": "Great for stretching and toning.",
  "rating": 4.4,
  "description": "Set of 3 bands with different resistance levels."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f804"
  },
  "name": "Nike Sports Cap",
  "image": "https://example.com/images/nike-cap.jpg",
  "price": 899,
  "review": "Blocks sun and sweat.",
  "rating": 4.5,
  "description": "Moisture-wicking, breathable fabric."
},
{
  "_id": {
    "$oid": "6841553c1968e5e010b0f805"
  },
  "name": "Trekking Pole Set",
  "image": "https://example.com/images/trekking-poles.jpg",
  "price": 1699,
  "review": "Strong grip and support on terrain.",
  "rating": 4.6,
  "description": "Adjustable aluminum poles with shock absorption."
}]

export default allProducts;