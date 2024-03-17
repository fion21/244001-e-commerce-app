const apiURL = "http://127.0.0:1:3000"

export async function getbooks(bookID) {

    const response = await fetch(
        apiURL + "/book/" + bookID
    );

    return response.json();
}
