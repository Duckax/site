// 1. Fetch the JSON file
fetch('website/site/entries.json')
    .then(response => {
        // Ensure the server response is valid
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convert raw text into a JS object/array
    })
    .then(data => {
        // 2. Select the HTML container element
        const container = document.getElementById('data-container');

        // 3. reverse sort it
        data.reverse();

        // 4. Loop through your JSON array and build structural HTML
        data.forEach(entry => {
            const card = `
                        <div style="border: 1px solid #ccc; padding: 5px; width: 15em; height: 5.5em;">
                            <table>
                                <tbody>
                                    <th>
                                        <img src = "${entry.poster}" style="width:75px;height:113px;">
                                    <th>
                                    <td>
                                        <p>
                                            &nbsp;${entry.title} <br />
                                            &nbsp;${entry.entryDate} <br />
                                            <span style="color: grey;"> &nbsp;rl: ${entry.releaseDate}</span> <br />
                                            &nbsp;${entry.rating}
                                        </p>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                        <br / >
                    `;
            // 5. Append the dynamic string template into the DOM container
            container.insertAdjacentHTML('beforeend', card);
        });
    })
    .catch(error => {
        console.error('Error parsing or reading JSON data:', error);
    });