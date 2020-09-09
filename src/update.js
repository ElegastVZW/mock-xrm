import executePatch from "./utility/executePatch";

const update = (entityLogicalName, id, data) => {
    return executePatch(data)(`/${entityLogicalName}s(${id})`)({ 'content-type': 'application/json' });
}

export default update;