export async function fetcher(url) {
    return await fetch(url, {
        method: 'GET',
    });
}