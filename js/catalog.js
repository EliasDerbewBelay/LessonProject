import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('productGrid');
  
  // TODO: Add category filtering logic in a later session

  function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
      const isOutOfStock = product.stock === 0;
      
      const card = document.createElement('a');
      card.href = `product.html?id=${product.id}`;
      card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
      
      const stockBadgeHTML = isOutOfStock 
        ? `<div class="stock-badge specimen-data">Sold out</div>` 
        : '';

      card.innerHTML = `
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
      `;
      
      productGrid.appendChild(card);
    });
  }

  renderProducts(products);
});
