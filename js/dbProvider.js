const dbUrl = '/js/db.json';

const fetchAll = async () => {
    let response = await fetch(dbUrl);
    return await response.json();
};

const getSectionById = async (id) => {
    const jsonResponse = await fetchAll();
    const sections = jsonResponse.sections;
    const filteredSections = sections.filter(section => section.id === id);

    return filteredSections.length > 0 ? filteredSections.shift() : null;
};

const getAllProducts = async () => {
    const jsonResponse = await fetchAll();

    const allProducts = jsonResponse.sections.reduce((accumulator, section) => {
        section.categories.forEach(category => accumulator.push(...category.products));
        return accumulator;
    }, []);

    return allProducts;
};

const getProductById = async (id) => {
    const allProducts = await getAllProducts();

    const filteredProducts = allProducts.filter(product => product.id === id);

    return filteredProducts.length > 0 ? filteredProducts.shift() : null;
};

const comparePopularProducts = (product1, product2) => {
        return product2.numberOfViews - product1.numberOfViews;
};

const getPopularProducts = async () => {
    const allProducts = await getAllProducts();

    const sortedProductsByPopularity = allProducts.sort(comparePopularProducts);

    return sortedProductsByPopularity.slice(0, 10);
};
