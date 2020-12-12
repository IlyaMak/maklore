window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = +urlParams.get('id');

    renderProduct(await getProductById(productId));
};

const renderProduct = (product) => {
    const productContainer = document.querySelector('#product-container');

    const imageElements = product.images.map(image => `
    <div class="mySlides fade">
        <img class="slide-img" src="${image}" alt="${product.title}">
    </div>`);

    productContainer.innerHTML = `
    <div class="slideshow-container">
    <div class="mySlides fade">
        <a href="/sections/men.html" style="padding: 0"><img class="slide_img" src="/images/man.jpg" alt="man"></a>
        <a class="text" href="/sections/men.html">
            <div>Мужчинам</div>
        </a>
    </div>

    <div class="mySlides fade">
        <a href="/sections/women.html" style="padding: 0"><img class="slide_img" src="/images/woman.jpg"
                alt="woman"></a>
        <a class="text" href="/sections/women.html">
            <div>Женщинам</div>
        </a>
    </div>

    <div class="mySlides fade">
        <a href="/sections/children.html" style="padding: 0"><img class="slide_img" src="/images/girl.jpg"
                alt="girl"></a>
        <a class="text" href="/sections/children.html">
            <div>Детям</div>
        </a>
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="dots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
</div>
<h2 class="header-h2">Популярное</h2>
<div class="popular">
    <div class="first-row">
        <div class="item">
            <a class="a-img" href="/products/Raven.html"><img src="/images/hoodie_raven.jpg" alt="hoodie-raven"></a>
            <div class="item-info">
                <div class="price">
                    <span>108 р. 71 к.</span>
                </div>
                <div class="name-product">
                    <span>Raven / Худи</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/nitti.html"><img src="/images/nitti1.jpg" alt="nitti"></a>
            <div class="item-info">
                <div class="price">
                    <span>57 р. 71 к.</span>
                </div>
                <div class="name-product">
                    <span>Нити-Нити / Свитшот</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/gila.html"><img src="/images/gila1.jpg" alt="gila"></a>
            <div class="item-info">
                <div class="price">
                    <span>56 р. 99 к.</span>
                </div>
                <div class="name-product">
                    <span>Gila / Свитшот "Крылья"</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/aleksandra-coat.html"><img src="/images/aleksandra-coat1.jpg"
                    alt="aleksandra-coat"></a>
            <div class="item-info">
                <div class="price">
                    <span>413 р. 54 к.</span>
                </div>
                <div class="name-product">
                    <span>Aleksandra / Пальто</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/arnestern.html"><img src="/images/arnestern1.jpg" alt="arnestern"></a>
            <div class="item-info">
                <div class="price">
                    <span>255 р. 54 к.</span>
                </div>
                <div class="name-product">
                    <span>ArneStern / Пуховик</span>
                </div>
            </div>
        </div>
    </div>
    <div class="second-row">
        <div class="item">
            <a class="a-img" href="/products/jacket-nord.html"><img src="/images/jacket-nord1.jpg"
                    alt="jacket-nord"></a>
            <div class="item-info">
                <div class="price">
                    <span>286 р. 61 к.</span>
                </div>
                <div class="name-product">
                    <span>HANSTER / Куртка Норд</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/jeans-wrangler.html"><img src="/images/jeans-wrangler1.jpg"
                    alt="jeans-wrangler"></a>
            <div class="item-info">
                <div class="price">
                    <span>104 р. 68 к.</span>
                </div>
                <div class="name-product">
                    <span>Wrangler / Джинсы Texas</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/jacket-wrangler.html"><img src="/images/jacket-wrangler1.jpg"
                    alt="jacket-wrangler"></a>
            <div class="item-info">
                <div class="price">
                    <span>117 р. 62 к.</span>
                </div>
                <div class="name-product">
                    <span>Wrangler / Куртка</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/aurorastar-dutik.html"><img src="/images/aurorastar-dutik1.jpg"
                    alt="aurorastar-dutik"></a>
            <div class="item-info">
                <div class="price">
                    <span>93 р. 71 к.</span>
                </div>
                <div class="name-product">
                    <span>AURORASTAR / Дутики</span>
                </div>
            </div>
        </div>
        <div class="item">
            <a class="a-img" href="/products/nordman-dutik.html"><img src="/images/nordman-dutik1.jpg"
                    alt="nordman-dutik"></a>
            <div class="item-info">
                <div class="price">
                    <span>105 р. 09 к.</span>
                </div>
                <div class="name-product">
                    <span>Nordman / Дутики LUMI</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    showSlides(slideIndex);
};