const dbUrl = 'js/db.json';

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
