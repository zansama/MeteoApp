import { requestGet } from "../utils/requestApi";

export const app = {
    state: {
        name:'',
        informations: {},
        city: []
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
        setInformations(state, informations) {
            return {...state, informations};
        },
        setCity(state, city) {
            return {...state, city};
        },
    },
    effects: (dispatch) => ({
        async getMeteoInformations(location) {
            console.log(location);
            if(location){
                const { coords: {latitude, longitude} } = location;
                const response = await requestGet('weather', `lat=${latitude}&lon=${longitude}`);
                if (response) {
                    this.setInformations(response);
                }
            }

        }
    })
};