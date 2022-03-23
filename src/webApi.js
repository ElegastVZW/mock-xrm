import retrieve from "./retrieve.js";
import create from "./create.js";
import update from "./update.js";
import del from "./delete.js";
import retrieveMultipleWrapper from "./retrieveMultipleWrapper.js";
import executeMultiple from "./executeMultiple.js";
import online from "./online.js";

const webApi = {
  createRecord: create,
  deleteRecord: del,
  updateRecord: update,
  retrieveRecord: retrieve,
  retrieveMultipleRecords: retrieveMultipleWrapper,
  executeMultiple: executeMultiple,
  online: online,
};

export default webApi;
