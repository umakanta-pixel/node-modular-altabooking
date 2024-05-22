const {validateSearchRequest}=require('./transfer.validation');
const talixoService=require('./talixo/talixo.service');

class TransferController {
    constructor() {

    }

    async searchTransfers(req, res) {
        const validationError= validateSearchRequest(req.body)
        if (validationError) {
            res.send({
                res_code: 201,
                response: validationError,
            })
        }
        
        try {
            const list= await talixoService.getVehicles(req.body);
            if(list.error) {
                // throw new ErrorResponse(500, list.error);
            }
            res.send({
                res_code: 200,
                response: "Success",
                data: list
            })
        } catch (error) {
            const stackLines = error.stack.split('\n');
            res.send({
                res_code: 201,
                response: "Something unexpected happened. Try again later.",
                server_message: error.message,
                line: stackLines[1].trim() ?? ''
            })
            // throw new ErrorResponse(500, error.message);
        }
    }
}

module.exports = new TransferController();