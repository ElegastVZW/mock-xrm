import executePost from "./utility/executePost";
import prepareBatchRequest from "./utility/prepareBatchRequest";

const executeMultiple = async (data) => {
    const uniqueId = Date.now();

    try {
    let preparedData = await prepareBatchRequest(uniqueId,data);

    let response = await executePost(preparedData)('$batch')({'Accept': 'application/json', 'content-type': 'multipart/mixed;boundary=batch_'+uniqueId });

    return Promise.resolve(response);

    }catch(error){
        return Promise.reject(error);
    }
}

export default executeMultiple;