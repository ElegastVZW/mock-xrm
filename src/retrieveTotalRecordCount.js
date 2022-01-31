import executeGet from "./utility/executeGet";

const retrieveTotalRecordCount = (entitylogicalName, attributes = []) => executeGet(`RetrieveTotalRecordCount(EntityNames=['${entitylogicalName}'])`)({});

export default retrieveTotalRecordCount;