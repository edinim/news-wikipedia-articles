chrome.storage.sync.get('categories', function (data) {
    init(data.categories);
});

function init(categories) {
    $.each((categories), function (index, category) {
        $('.categories').append(
            `<input 
            type="checkbox" 
            class="category_checkbox" 
            name="${index}" 
            value="${category.name}" 
            ${category.checked ? 'checked' : ''}> 
            ${category.name}<br>`
        );
    });

    $('.category_checkbox').change(function () {
        categories[Number($(this)[0].name)].checked = $(this).is(":checked")
        updateCategories(categories);
    });
}

function updateCategories(categories) {
    chrome.storage.sync.set({ categories: categories }, function () { });
}