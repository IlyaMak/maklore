//Подключение JSON
const dbUrl = '/js/db.json';

const fetchAll = async () => {
    let response = await fetch(dbUrl);
    return await response.json();
};

//Получение разделов одежды по id
const getSectionById = async (id) => {
    const jsonResponse = await fetchAll();
    const sections = jsonResponse.sections;
    const filteredSections = sections.filter(section => section.id === id);

    return filteredSections.length > 0 ? filteredSections.shift() : null;
};

//Получение всех продуктов
const getAllProducts = async () => {
    const jsonResponse = await fetchAll();

    const allProducts = jsonResponse.sections.reduce((accumulator, section) => {
        section.categories.forEach(category => accumulator.push(...category.products));
        return accumulator;
    }, []);

    return allProducts;
};

//Получение продуктов по id
const getProductById = async (id) => {
    const allProducts = await getAllProducts();

    const filteredProducts = allProducts.filter(product => product.id === id);

    return filteredProducts.length > 0 ? filteredProducts.shift() : null;
};

//Сравнение популярных продуктов
const comparePopularProducts = (product1, product2) => {
        return product2.numberOfViews - product1.numberOfViews;
};

//Получение популярных продуктов
const getPopularProducts = async () => {
    const allProducts = await getAllProducts();

    const sortedProductsByPopularity = allProducts.sort(comparePopularProducts);

    return sortedProductsByPopularity.slice(0, 10);
};