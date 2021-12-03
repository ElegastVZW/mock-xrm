import executeGet from "./utility/executeGet";
import retrieveMetadataWrapperMemo from './retrieveMetadataWrapperMemo';

const retrieve = async (entityLogicalName, id, options = '') => {
    let meta = await retrieveMetadataWrapperMemo(entityLogicalName);
    let LogicalCollectionNameTemp;
    // Fix when LogicalCollectionName is not set
    if(meta.EntityMetadata.LogicalCollectionName){
        LogicalCollectionNameTemp = meta.EntityMetadata.LogicalName+"s";
    }else{
        LogicalCollectionNameTemp = meta.EntityMetadata.LogicalCollectionName;
    }
    let result = await executeGet(`${LogicalCollectionNameTemp}(${id})${options ? options : ''}`)();
    return result.json();
}

export default retrieve;