import executeGet from "./utility/executeGet";
import collectionNameGenerator from "./utility/collectionNameGenerator";
//LogicalCollectionName
const retrieveMultiple = (options = '', maxpagesize = '') => async ({EntityMetadata}) => executeGet(`${collectionNameGenerator(EntityMetadata.LogicalName)}${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=${maxpagesize}` } : {prefer: `odata.include-annotations="*"`});

export default retrieveMultiple;