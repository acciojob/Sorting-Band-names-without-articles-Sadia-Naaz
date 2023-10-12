//your code here

function sortBandNames(bandNames) {
    // Remove articles ('a', 'an', 'the') and sort the band names
    const sortedBands = bandNames.filter(name => !['a', 'an', 'the'].includes(name.toLowerCase())).sort();

    // Get the ul element by id
    const bandList = document.getElementById('band');

    // Generate li elements and append them to the ul
    sortedBands.forEach(band => {
        const listItem = document.createElement('li'); // Create a new li element
        listItem.textContent = band; // Set the text content of the li element
        bandList.appendChild(listItem); // Append the li element to the ul
    });
}

// Example usage
const bandNames = ['The Beatles', 'Pink Floyd', 'The Rolling Stones', 'Aerosmith', 'Led Zeppelin'];
sortBandNames(bandNames);



