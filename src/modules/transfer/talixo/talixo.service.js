const axios = require('axios');
const talixoHelper = require('./talixo.helper');

class talixoService {

    constructor() {
        this.apiEndPoint = process.env.TALIXO_API_END_POINT;
        this.apiHeaders = {
            'Content-Type': 'application/json',
            "partner": process.env.TALIXO_API_KEY
        }
        this.apiResponse = {}
    }

    async getVehicles(data) {
        try {
            let url = `${this.apiEndPoint}/en/mapi/v3/vehicles/booking_query/`;
            const request = talixoHelper.searchRequest(data);
            const result = await axios.post(url, request, { headers: this.headers })
            this.apiResponse.data = result.data.limousines
        } catch (error) {
            this.apiResponse.error = error.message;
        } finally {
            return this.apiResponse;
        }
    }
}

module.exports = new talixoService();