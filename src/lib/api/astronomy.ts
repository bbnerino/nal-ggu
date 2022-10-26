import { apiWithAstronomy } from "./main";

const makeDate = () => {
	const date = new Date().toISOString();
	const [year, month, day] = date.split("T")[0].split("-");

	return `${year}${month}${day}`;
};

export const getAstronomyInformation = async (lon: string, lat: string) => {
	const response = await apiWithAstronomy({
		params: {
			ServiceKey: process.env.REACT_APP_ASTRONOMY_API_KEY,
			latitude: lat,
			longitude: lon,
			dnYn: "Y",
			locdate: makeDate(),
		},
	});
	console.log(response.data.response.body.items.item);
	const { sunrise, sunset } = response.data.response.body.items.item;

	return [
		{
			category: "sunrise",
			value: sunrise.trim(),
		},
		{
			category: "sunset",
			value: sunset.trim(),
		},
	];
};
