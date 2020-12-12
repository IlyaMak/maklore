window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = +urlParams.get('id');

    renderProduct(await getProductById(productId));
};

const renderProduct = (product) => {
    const productContainer = document.querySelector('#product-container');

    const sizeElements = product.sizes.map(size => `<option>${size}</option>`);
    const imageElements = product.images.map(image => `
    <div class="mySlides fade">
        <img class="slide-img" src="${image}" alt="${product.title}">
    </div>`);

    productContainer.innerHTML = `
        <div class="name-product">
            <h1>${product.title}</h1>
        </div>
        <div class="main-info">
            <div class="slideshow-container">
                ${imageElements.join('')}
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>
                    <div class="right-place">
                        <div class="price">
                            <span>${product.price} р.</span>
                        </div>
                        <div class="color-product">
                            <span><strong>Цвет:</strong> синий</span>
                            <select class="select-size">
                                <option>Выберите размер</option>
                        ${sizeElements.join('')}
                            </select>
                        </div>
                        <div class="composition">
                            <h1>Состав</h1>
                            <span>${product.material}</span>
                        </div>
                        <div class="description">
                            <h1>Описание</h1>
                            <p>${product.description}</p>
                        </div>
                    </div>
                </div>`;

    showSlides(slideIndex);
};