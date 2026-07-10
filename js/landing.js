import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  const featuredProductsContainer = document.getElementById('featuredProducts');
  
  // Feature the top 4 products (or just the first 4)
  const featuredProducts = products.slice(0, 4);
  
  if (featuredProductsContainer) {
    let html = '';
    
    featuredProducts.forEach(product => {
      const isOutOfStock = product.stock === 0;
      const stockBadgeHTML = isOutOfStock ? `<div class="stock-badge specimen-data">Sold out</div>` : '';
      
      html += `
        <a href="product.html?id=${product.id}" class="product-card ${isOutOfStock ? 'out-of-stock' : ''}">
          <div class="specimen-tag">
            <div class="product-image-container">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
              ${stockBadgeHTML}
            </div>
            <div class="category specimen-data">${product.category}</div>
            <h3 class="name">${product.name}</h3>
            
            <div class="product-meta">
              <div class="price specimen-data specimen-data--large">$${product.price.toFixed(2)}</div>
              <div class="stars">
                ★ ${product.rating.toFixed(1)} <span style="color: var(--muted)">(${product.reviewCount})</span>
              </div>
            </div>
          </div>
        </a>
      `;
    });
    
    featuredProductsContainer.innerHTML = html;
  }
});
