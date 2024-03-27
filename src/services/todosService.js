const URL = "https://random-todos.azurewebsites.net/todos?apikey=$2a$10$6vM3U0f9MX4OGO1m3BDAHOlaIm9sCSMXTFSPdJmh3oXtPxrzfZkJK"
export const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
}