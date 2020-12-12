window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = +urlParams.get('id');

    renderSection(await getSectionById(sectionId));
};

const renderSection = (section) => {
    const sectionContainer = document.querySelector('#section-container');
    sectionContainer.innerHTML = section.categories.map(category => {
        const productElements = category.products.map(product => {
            return `<div class="item">
                    <a class="a-img" href="/product.html?id=${product.id}">
                        <img src="${product.images[0]}" alt="sweatshirt-slot">
                    </a>
                    <div class="item-info">
                        <div class="price">
                            <span>${product.price} р.</span>
                        </div>
                        <div class="name-product">
                            <span>${product.title}</span>
                        </div>
                    </div>
                    </div> `;
        });
        return `<div class="clothes">
            <h2 class="name-cloth">${category.title}</h2>
            <div class="row">${productElements.join('')}</div>
        </div>`
    }).join('');
};