import { WEBAPI } from "../consts";

/**
 * Setup payload for batch request
 * @param {string} batchId 
 * @param {object} data 
 * @returns string
 */
const prepareBatchRequest = async(batchId,data) => {
    let payload = [];
    let contentId = 1;
    const changeSetId = "--changeset_"+Math.floor(Math.random() * Date.now());

    // Setup batch & content type
    payload.push('--batch_'+batchId);
    payload.push('Content-Type: multipart/mixed;boundary='+changeSetId);
    payload.push('');

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
        payload.push(changeSetId);
        payload.push('Content-type: application/http')
        payload.push('Content-Transfer-Encoding:binary');
        payload.push('Content-ID: '+contentId);

        // When id is set, add id to url param
        if(element.id){
            urlParameter = "/("+element.id+")";
        }

        // Method and url
        payload.push(element.method.toUpperCase() + WEBAPI + "/"+element.entity+urlParameter + " HTTP/1.1");
        payload.push('Content-Type: application/json');
        payload.push('');

        // Data
        payload.push(JSON.stringify(element.data));

        payload.push(changeSetId);
    });

    payload.push('');
    payload.push('--batch_'+batchId);
    return Promise.resolve(payload.join('\r\n'));
}


export default prepareBatchRequest;