// FilterConfig.js
export const FILTERS = [
  {
    type: "checkbox",
    key: "category",
    label: "Category",
    options: ["Electronics", "Fashion", "Home", "Sports"],
  },
  {
    type: "range",
    key: "price",
    label: "Price (₹)",
    min: 100,
    max: 2000,
  },
  {
    type: "select",
    key: "rating",
    label: "Rating",
    options: ["4★ & above", "3★ & above", "2★ & above"],
  },
  {
    type: "checkbox",
    key: "review",
    label: "Review",
    options: ["Verified", "With Images"],
  },
  {
    type: "checkbox",
    key: "brand",
    label: "Brand",
    options: ["Apple", "Samsung", "Sony", "LG"],
  },
  {
    type: "checkbox",
    key: "availability",
    label: "Availability",
    options: ["In Stock", "Out of Stock"],
  },
];
