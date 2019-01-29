import express from 'express';
import PartiesControllers from '../controller/parties.controller';

const router = express.Router();


/**
 * @api {post} /parties Creates a new political party
 * @apiName CreateParties
 * 
 * @apiGroup Parties
 * 
 * @apiParam {String} name Party name
 * @apiParam {String} hqAddress Party Head Quaters
 * @apiParam {String} logoUrl Party logo
 * 
 * @apiParamExample {json} Input
 *    {
 *      "name":"PCD",
 *      "hqAddress": "Lagos",
 *      "logoUrl": "public/logo/logoUrl"
 *    }
 * 
 * @apiSuccess {Number} status status code
 * @apiSuccess {Object[]} data response data
 * @apiSuccess {id} data.id party id
 * @apiSuccess {string} name party name
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": 1,
 *      "data":[{"id":1,name:"Lagos"}]
 *    }
 * 
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/parties', PartiesControllers.createParties);

module.exports = router;
