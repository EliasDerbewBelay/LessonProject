import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
  const detailContainer = document.getElementById('detailContainer');
  
  // Parse ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'), 10);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    // Render error state if not found
    detailContainer.innerHTML = `
      <div class="error-state">
        <h2>Product not found</h2>
        <p>The botanical specimen you are looking for does not exist or has been removed.</p>
        <a href="index.html" class="btn-back">Return to Catalog</a>
      </div>
    `;
    return;
  }
  
  // Update page title
  document.title = `Fernshop | ${product.name}`;
  
  const isOutOfStock = product.stock === 0;
  
  // Render two-column layout
  detailContainer.innerHTML = `
    <section class="product-detail-section">
      <!-- Left Column: Image -->
      <div class="detail-left">
        <div class="specimen-tag detail-image-wrapper">
          <img src="${product.image}" alt="${product.name}">
        </div>
      </div>
      
      <!-- Right Column: Info -->
      <div class="detail-right detail-info">
        <div class="detail-header">
          <span class="category specimen-data">${product.category}</span>
          <h1>${product.name}</h1>
          <div class="rating-row">
            <span class="stars">★ ${product.rating.toFixed(1)}</span>
            <span class="review-count">(${product.reviewCount} reviews)</span>
          </div>
        </div>
        
        <div class="specimen-tag price-stock-box">
          <div class="price specimen-data specimen-data--large">$${product.price.toFixed(2)}</div>
          <div class="stock-status specimen-data ${isOutOfStock ? 'out-of-stock' : 'in-stock'}">
            ${isOutOfStock ? 'OUT OF STOCK' : `${product.stock} IN STOCK`}
          </div>
        </div>
        
        <p class="description">${product.description}</p>
        
        <div class="care-facts">
          <div class="care-item">
            <span class="care-label specimen-data">LIGHT</span>
            <span class="care-value specimen-data">${product.care.light}</span>
          </div>
          <div class="care-item">
            <span class="care-label specimen-data">WATER</span>
            <span class="care-value specimen-data">${product.care.water}</span>
          </div>
          <div class="care-item">
            <span class="care-label specimen-data">DIFFICULTY</span>
            <span class="care-value specimen-data">${product.care.difficulty}</span>
          </div>
          <div class="care-item">
            <span class="care-label specimen-data">SKU</span>
            <span class="care-value specimen-data">FS-${product.id.toString().padStart(4, '0')}</span>
          </div>
        </div>
        
        <button class="btn-add-cart" id="addToCartBtn" ${isOutOfStock ? 'disabled' : ''}>
          ${isOutOfStock ? 'Sold Out' : 'Add to Cart'}
        </button>
        
        <div class="seller-info">
          Sold by ${product.sellerName}
        </div>
      </div>
    </section>
  `;

  // TODO: Wire up real cart state in Week 2 Session 5.
  const addToCartBtn = document.getElementById('addToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      // Intentionally inert - do not add fake alert or console.log
    });
  }
});
