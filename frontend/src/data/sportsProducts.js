
const sportsProducts = [
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
}
];

export default sportsProducts;
