//Вставка содержимого на главную страницу
window.onload = async () => {
    renderMainPage(await fetchAll());

    renderPopularProducts(await getPopularProducts());
};

const renderMainPage = (mainPage) => {
    const sliderContainer = document.querySelector('#slider-container');

    const imageElements = mainPage.sections.map(section => `
    <div class="mySlides fade">
        <a href="/section.html?id=${section.id}" style="padding: 0"><img class="slide_img" src="${section.image}" alt="${section.title}"></a>
        <a class="text" href="/section.html?id=${section.id}">
            <div>${section.title}</div>
        </a>
    </div>`);

    sliderContainer.innerHTML = `
    <div class="slideshow-container">
    ${imageElements.join('')}
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="dots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
</div>`;

    showSlides(slideIndex);
};

const renderPopularProducts = (products) => {
    const productContainer = document.querySelector('#product-container');
    const productElements = products.map(product => `
            <div class="item">
                <a class="a-img" href="/product.html?id=${product.id}"><img src="${product.images[0]}" alt="${product.title}"></a>
                <div class="item-info">
                    <div class="price">
                        <span>${product.price}</span>
                    </div>
                    <div class="name-product">
                        <span>${product.title}</span>
                    </div>
                </div>
            </div>`);

    productContainer.innerHTML = `
    <div class="popular">
        <div class="rows">
            ${productElements.join('')}
        </div>
    </div>`;
}