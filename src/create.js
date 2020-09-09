import executePost from "./utility/executePost";

const create = (entityLogicalName, data) => {
    return executePost(data)(`/${entityLogicalName}s`)({'content-type': 'application/json'});
}

export default create;