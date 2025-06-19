const fashionProducts = [
   {
  "_id": {
    "$oid": "6841553c1968e5e010b0f7c9"
  },
  "name": "Levi's Slim Fit Jeans",
  "image": "https://example.com/images/levis-jeans.jpg",
  "price": 1,
  "review": "Comfortable fit and durable fabric.",
  "rating": 4.5,
  "description": "Classic slim fit jeans with stretchable denim, suitable for casual and semi-formal wear."
},
]

export default fashionProducts;

// const fashionProducts = [
//   {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7c9"
//   },
//   "name": "Levi's Slim Fit Jeans",
//   "image": "https://example.com/images/levis-jeans.jpg",
//   "price": 2499,
//   "review": "Comfortable fit and durable fabric.",
//   "rating": 4.5,
//   "description": "Classic slim fit jeans with stretchable denim, suitable for casual and semi-formal wear."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7ca"
//   },
//   "name": "Nike Air Max Sneakers",
//   "image": "https://example.com/images/nike-air-max.jpg",
//   "price": 5999,
//   "review": "Trendy design and very comfortable.",
//   "rating": 4.7,
//   "description": "High-performance sneakers with air cushioning, ideal for daily wear and running."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7cb"
//   },
//   "name": "H&M Cotton T-Shirt",
//   "image": "https://example.com/images/hm-tshirt.jpg",
//   "price": 799,
//   "review": "Soft cotton, fits perfectly.",
//   "rating": 4.3,
//   "description": "Basic solid t-shirt made with 100% breathable cotton for everyday comfort."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7cc"
//   },
//   "name": "Zara Women's Blazer",
//   "image": "https://example.com/images/zara-blazer.jpg",
//   "price": 3599,
//   "review": "Elegant and well-tailored.",
//   "rating": 4.6,
//   "description": "Modern fit blazer, perfect for office or formal events with a sharp silhouette."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7cd"
//   },
//   "name": "Fossil Analog Watch",
//   "image": "https://example.com/images/fossil-watch.jpg",
//   "price": 7199,
//   "review": "Looks classy and works great.",
//   "rating": 4.8,
//   "description": "Stylish leather-strap watch with water resistance and minimalist dial."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7ce"
//   },
//   "name": "Adidas Activewear Set",
//   "image": "https://example.com/images/adidas-activewear.jpg",
//   "price": 4299,
//   "review": "Stretchy, breathable fabric. Great for gym.",
//   "rating": 4.4,
//   "description": "Matching sports bra and leggings set, moisture-wicking and designed for workouts."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7cf"
//   },
//   "name": "Puma Men's Jacket",
//   "image": "https://example.com/images/puma-jacket.jpg",
//   "price": 3199,
//   "review": "Warm and windproof, great for winter.",
//   "rating": 4.5,
//   "description": "Sporty puffer jacket with zip-up closure and water-resistant outer shell."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d0"
//   },
//   "name": "Allen Solly Formal Shirt",
//   "image": "https://example.com/images/allen-solly-shirt.jpg",
//   "price": 1899,
//   "review": "Perfect for office wear.",
//   "rating": 4.2,
//   "description": "Regular-fit cotton shirt in pastel shades, ideal for daily formal wear."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d1"
//   },
//   "name": "BIBA Anarkali Kurti",
//   "image": "https://example.com/images/biba-kurti.jpg",
//   "price": 2599,
//   "review": "Very elegant, comfortable fabric.",
//   "rating": 4.6,
//   "description": "Traditional Anarkali kurti with printed patterns, great for festive occasions."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d2"
//   },
//   "name": "U.S. Polo Assn. Casual Shoes",
//   "image": "https://example.com/images/us-polo-shoes.jpg",
//   "price": 2799,
//   "review": "Stylish and long-lasting.",
//   "rating": 4.4,
//   "description": "Lace-up sneakers with cushioned soles and contrast detailing."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d3"
//   },
//   "name": "Forever 21 Crop Top",
//   "image": "https://example.com/images/forever21-crop.jpg",
//   "price": 999,
//   "review": "Trendy and cute!",
//   "rating": 4.3,
//   "description": "Fitted crop top with ribbed texture, ideal for summer outings."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d4"
//   },
//   "name": "Raymond Men’s Trousers",
//   "image": "https://example.com/images/raymond-trousers.jpg",
//   "price": 2099,
//   "review": "Great fit, premium fabric.",
//   "rating": 4.5,
//   "description": "Tailored formal trousers for men with flat front and regular fit."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d5"
//   },
//   "name": "Van Heusen Women's Handbag",
//   "image": "https://example.com/images/vanheusen-bag.jpg",
//   "price": 3499,
//   "review": "Stylish and roomy.",
//   "rating": 4.6,
//   "description": "PU leather structured handbag with metallic handle and zip compartments."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d6"
//   },
//   "name": "Roadster Denim Jacket",
//   "image": "https://example.com/images/roadster-jacket.jpg",
//   "price": 2299,
//   "review": "Stylish and fits well.",
//   "rating": 4.3,
//   "description": "Classic blue washed denim jacket with button closure and pockets."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d7"
//   },
//   "name": "W for Woman Palazzo Pants",
//   "image": "https://example.com/images/w-palazzo.jpg",
//   "price": 1499,
//   "review": "Lightweight and airy.",
//   "rating": 4.2,
//   "description": "Straight cut palazzo with elastic waistband and comfortable crepe fabric."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d8"
//   },
//   "name": "HRX Running Tights",
//   "image": "https://example.com/images/hrx-tights.jpg",
//   "price": 1199,
//   "review": "Perfect for jogging.",
//   "rating": 4.4,
//   "description": "Full-length stretch leggings designed for fitness and high-intensity workouts."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7d9"
//   },
//   "name": "Tommy Hilfiger Belt",
//   "image": "https://example.com/images/tommy-belt.jpg",
//   "price": 2090,
//   "review": "Premium leather quality.",
//   "rating": 4.7,
//   "description": "Genuine leather belt with branded buckle and reversible design."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7da"
//   },
//   "name": "Louis Philippe Suit",
//   "image": "https://example.com/images/lp-suit.jpg",
//   "price": 12499,
//   "review": "Best suit for events.",
//   "rating": 4.8,
//   "description": "2-piece suit with wool-blend fabric and modern tailored fit."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7db"
//   },
//   "name": "Hidesign Leather Wallet",
//   "image": "https://example.com/images/hidesign-wallet.jpg",
//   "price": 1999,
//   "review": "Compact and premium build.",
//   "rating": 4.6,
//   "description": "Men's leather wallet with coin pouch and RFID protection."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7dc"
//   },
//   "name": "ONLY Ripped Jeans",
//   "image": "https://example.com/images/only-jeans.jpg",
//   "price": 2699,
//   "review": "Trendy and stylish.",
//   "rating": 4.4,
//   "description": "Distressed denim for women with high waist and ankle-length cut."
// },
// {
//   "_id": {
//     "$oid": "6841553c1968e5e010b0f7dd"
//   },
//   "name": "Bata Leather Sandals",
//   "image": "https://example.com/images/bata-sandals.jpg",
//   "price": 1599,
//   "review": "Comfortable for long walks.",
//   "rating": 4.2,
//   "description": "Closed-toe leather sandals with adjustable strap and rubber sole."
// },
// ];

// export default fashionProducts;