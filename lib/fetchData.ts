export default async function fetchData(endpoint: unknown) {
	try {
		// await new Promise((resolve) => setTimeout(resolve, 3000));
		const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await res.json();
		return data;
	} catch (err) {
		throw err;
	}
}
