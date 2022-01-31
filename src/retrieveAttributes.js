import executeGet from "./utility/executeGet";

const retrieveAttributes = (entitylogicalName, attributes = []) => executeGet(`EntityDefinitions(LogicalName='${entitylogicalName}')/Attributes/`)({});

export default retrieveAttributes;