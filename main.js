async function getProduct() {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data;
        const results = data.products.map(function (ele) {
            return `
            <div class="all">
                <div class="proimg">
                    <img src="${ele.thumbnail}" alt="this is product img"/>
                </div>
                <div class="proinfo">
                    <h1> id: ${ele.id}</h1>
                    <h1> Name: ${ele.title}</h1>    
                    <span class=labelprice> Price: ${ele.price}$</span>
                    <button class="btndetalis">
                        <a href="productInfo.html?product_id=${ele.id}">More-Detalis</a>
                    </button>
                </div>
            </div>
            `;
        }).join('');
        document.querySelector(".ProFromJs").innerHTML = results;
    } catch (error) {
        console.error('Error', error);
    }
}

getProduct();
