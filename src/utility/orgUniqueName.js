import memoize from './memoize';

const orgUniqueName = memoize(async () => {
    let result = await fetch('/tools/systemcustomization/systemCustomization.aspx?pid=05&web=true');
    if(result.length > 0){
    return result.text().then(data => data.match(/var ORG_UNIQUE_NAME = '([-a-zA-Z0-9]*)';/)[1]);
    }else{
        return '';
    }
});

export default orgUniqueName;