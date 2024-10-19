import fetchData from "@/lib/fetchData";

export default async function PokiCatelog() {
	const pokiList: unknown = await fetchData("pokemon");
	console.log(pokiList);
	return <div></div>;
}
