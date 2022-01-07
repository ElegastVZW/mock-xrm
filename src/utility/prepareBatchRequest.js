import { WEBAPI } from "../consts";

/**
 * Setup payload for batch request
 * @param {string} batchId 
 * @param {object} data 
 * @returns string
 */
const prepareBatchRequest = async(batchId,data) => {
    let payload = [];

    data.forEach(element => {

        /**
         * Element should be structured as followed:
         * {
         * method: 'POST',
         * entity: 'tasks',
         * data: {name: 'test'}
         * }
         */

        let urlParameter = "";

        // Headers
        payload.push('--batch_'+batchId);
        payload.push('Content-type: application/http')
        payload.push('Content-Transfer-Encoding:binary');

        // When id is set, add id to url param
        if(element.id){
            urlParameter = "("+element.id+")";
        }

        // Method and url
        payload.push('');
        payload.push(element.method.toUpperCase()+" "+ WEBAPI + "/"+element.entity+urlParameter + " HTTP/1.1");
        payload.push('MSCRM.SuppressDuplicateDetection: true');
        payload.push('If-match: *');
        payload.push('AutoDisassociate: true');
        payload.push('Content-Type: application/json');
        payload.push('Prefer: odata.include-annotations="*"');
        payload.push('Clienthost: Browser')
        payload.push('');

        // Data
        payload.push(JSON.stringify(element.data));

    });

    payload.push('--batch_'+batchId+"--");
    return Promise.resolve(payload.join('\r\n'));
}


export default prepareBatchRequest;