import {CLIENT_URL} from '../consts';

const openForm = async (entityFormOptions, formParameters) => {

    let redirectUrl = CLIENT_URL+"?pagetype=entityrecord";
    let openWhere = "_blank";

    if(entityFormOptions["entityName"]){
        redirectUrl += "&ent="+entityFormOptions["entityName"];
    }

    if(entityFormOptions["entityId"]){
        redirectUrl += "&id="+entityFormOptions["entityId"];
    }

    if(entityFormOptions["formId"]){
        redirectUrl += "&formid="+entityFormOptions["formId"];
    }

    // Open in new window?
    if(!entityFormOptions["openInNewWindow"]){
        openWhere = null;
    }
    

    window.open(redirectUrl, openWhere);
    Promise.resolve(true);
}

export default openForm;