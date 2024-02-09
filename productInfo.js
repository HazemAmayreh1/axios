async function productInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('product_id');
    
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const data = response.data;
        const result = `
          <div class="all">
            <div class="proimg">
              <img src="${data.thumbnail}" alt="This is product image"/>
            </div>
            <div class="proinfo">
              <h1>${data.id}</h1>
              <h1>${data.title}</h1>
              <span>${data.price}$</span>
              <span class="disspan">${data.discountPercentage}%</span>
            </div>
            <div class="moreinfo">
              <span>rating: ${data.rating}</span>
              <span>stock: ${data.stock}</span>
              <span>brand: ${data.brand}</span>
              <span>category: ${data.category}</span>
            </div>
          </div>
        `;

        document.querySelector(".showProduct").innerHTML = result;
    } catch (error) {
        console.error('error', error);
       
    }
}

productInfo();
