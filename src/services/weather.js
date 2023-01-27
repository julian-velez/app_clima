import { ajax } from "../tools/ajax";

export const getCityweather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid: "21e3195e9bfeb6879e788ec605b09ab0",
            units: "metric", // grados centigrados
        }
    };
    return await ajax(optionsRequest);
}
