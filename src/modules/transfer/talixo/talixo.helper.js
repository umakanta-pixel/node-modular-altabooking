exports.searchRequest = (data) => {
    const requestBody = {
        "start_place_id": data.start_place_id,
        "end_place_id": data.end_place_id,
        // "start_time_date": data.start_time_date,
        "start_time_time": data.start_time_time,
        "passengers": parseInt(data.passengers),
        "luggage": parseInt(data.luggage)
    }
    if (data.travel_type === 'hourly') {
        requestBody.end_time_date = data.end_time_date;
        requestBody.end_time_time = data.end_time_time;
    }
    return requestBody;
}