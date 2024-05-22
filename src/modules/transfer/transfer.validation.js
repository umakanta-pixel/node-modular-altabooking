const Joi = require('joi');

exports.validateSearchRequest = (body) => {
    const schema = Joi.object().keys({
        start_place_id: Joi.string().required().messages({
            "any.required": 'start place id is required'
        }),
        end_place_id: Joi.string().required().messages({
            "any.required": 'end place id is required'
        }),
        start_time_date: Joi.string().required().messages({
            "any.required": 'start date is required'
        }),
        start_time_time: Joi.string().required().messages({
            "any.required": 'start time is required'
        }),
        passengers: Joi.string().required().messages({
            "any.required": 'passenger is required'
        }),
        luggage: Joi.string().required().messages({
            "any.required": 'luggage is required'
        }),
        travel_type: Joi.string().required().messages({
            "any.required": 'travel type is required'
        }),
    }).when(Joi.object({ travel_type: Joi.string().valid('hourly') }).unknown(), {
        then: Joi.object().keys({
            end_time_date: Joi.string().required().messages({ "any.required": 'end date is required', "any.string": 'end date should not be empty' }),
        })
    });
    const { error } = schema.validate(body, { allowUnknown: true });
    if (error) {
        return error.details[0].message;
    }
}


