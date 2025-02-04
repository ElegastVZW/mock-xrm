import webApi from "./webApi.js";
import utility from "./utility.js";
import navigation from "./navigation.js";
// import authToMicrosoft from "./utility/auth";
import getAttributes from "./retrieveAttributes.js";
import countRecords from "./retrieveTotalRecordCount.js";
import { login } from "./auth.js";

const xrm = {
  _mainOrg: "https://elegastsandbox.crm4.dynamics.com",
  AUTH_KEY: null,
  AuthToMicrosoft: async () => {
    // This is in BETA!
    try {
      const loginResponse = await login();
      if (loginResponse !== null || loginResponse.accessToken) {
        xrm.setAuth(loginResponse.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  },
  ActionCollectionBase: () => {},
  AlertDialogStrings: () => {},
  ArrayEx: () => {},
  AttributeFormat: () => {},
  AttributeType: () => {},
  BeginSecureSessionResponseCode: () => {},
  BusinessProcessFlowInstanceState: () => {},
  BusinessProcessFlowInstanceStatus: () => {},
  BusinessRuleNotificationBase: () => {},
  ChartPaneMode: () => {},
  ClientName: () => {},
  ClientState: () => {},
  ClientStates: () => {},
  Collection: () => {},
  ComponentModel: () => {},
  ConfirmDialogStrings: () => {},
  Constants: () => {},
  ControlType: () => {},
  CountRecords: countRecords,
  DataLoadEventArgs: () => {},
  DataLoadState: () => {},
  DateFormattingInfo: () => {},
  DelegateItterator: () => {},
  Description: () => {},
  Device: () => {},
  Diagnostics: () => {},
  Dialog: () => {},
  DialogOptions: () => {},
  Encoding: () => {},
  EntityFormOptions: () => {},
  EntityListPageInput: () => {},
  EntityMetadata: () => {},
  EntityRelationshipRoleType: () => {},
  EntityRelationshipType: () => {},
  ErrorDialogOptions: () => {},
  ErrorResponse: () => {},
  ExecutionContext: () => {},
  Flag: () => {},
  FormDataAttributePrivilege: () => {},
  FormDataAttributePrivileges: () => {},
  FormFactor: () => {},
  FormNotificationOptions: () => {},
  FormSaveAction: () => {},
  FormType: () => {},
  Gen: () => {},
  GetAttributes: getAttributes,
  GridType: () => {},
  IBusinessRuleNotificationProvider: () => {},
  IsMockXrm: () => true,
  IXrmCollectionItem: () => {},
  Interfaces: () => {},
  Internal: () => {},
  JavaScriptConsoleTraceListener: () => {},
  KBSearchResult: () => {},
  LocalizedLabel: () => {},
  LookupObject: () => {},
  LookupOptions: () => {},
  LookupStyle: () => {},
  MetricsStopwatch: () => {},
  Mobile: () => {},
  Navigation: navigation,
  NotificationLevel: () => {},
  NumberEx: () => {},
  Objects: () => {},
  Offline: () => {},
  OfflineErrorResponse: () => {},
  OpenFileMode: () => {},
  OpenFormSuccessResponse: () => {},
  OptionSetItem: () => {},
  OrganizationServiceProxyBridge: () => {},
  Page: () => {},
  PageBridge: () => {},
  PageContextBridge: () => {},
  PageEx: () => {},
  PageInput: () => {},
  PageType: () => {},
  Panel: () => {},
  ProcessActionSuccessResponse: () => {},
  ProcessResponse: () => {},
  ProcessState: () => {},
  ProcessStatus: () => {},
  RelationshipReference: () => {},
  RequiredLevel: () => {},
  SaveErrorResponse: () => {},
  SaveEventArgs: () => {},
  SaveMode: () => {},
  SaveOptions: () => {},
  SaveSuccessResponse: () => {},
  ScopedServiceDirectory: () => {},
  Sdk: () => {},
  Services: () => {},
  Soap: () => {},
  StepProgress: () => {},
  StepType: () => {},
  StringBuilderTraceListener: () => {},
  StringEx: () => {},
  SubmitMode: () => {},
  TabDisplayState: () => {},
  TabItem: () => {},
  TabSection: () => {},
  TaskFlowOptions: () => {},
  TaskIterrator: () => {},
  Tracing: () => {},
  UI: () => {},
  Utility: utility,
  WebApi: webApi,
  WindowOptions: () => {},
  XrmBusinessProcessFlow: () => {},
  XrmChart: () => {},
  XrmCollection: () => {},
  XrmCollectionBase: () => {},
  XrmCollectionDictionary: () => {},
  XrmControl: () => {},
  XrmControlACI: () => {},
  XrmControlAutoLookup: () => {},
  XrmControlBase: () => {},
  XrmControlButton: () => {},
  XrmControlDateTime: () => {},
  XrmControlEmailEngagementActionsControl: () => {},
  XrmControlEmailRecipientActivity: () => {},
  XrmControlFormSelector: () => {},
  XrmControlGrid: () => {},
  XrmControlIFrame: () => {},
  XrmControlLookup: () => {},
  XrmControlOptionSet: () => {},
  XrmControlQuickForm: () => {},
  XrmControlRoutedGrid: () => {},
  XrmControlSearchWidget: () => {},
  XrmControlSilverlight: () => {},
  XrmControlSubGrid: () => {},
  XrmControlText: () => {},
  XrmControlTimer: () => {},
  XrmControlWebResource: () => {},
  XrmControls: () => {},
  XrmDataControl: () => {},
  XrmDialog: () => {},
  XrmEncoding: () => {},
  XrmEntities: () => {},
  XrmEntity: () => {},
  XrmEntityAttribute: () => {},
  XrmEntityAttributeBoolean: () => {},
  XrmEntityAttributeDateTime: () => {},
  XrmEntityAttributeLookup: () => {},
  XrmEntityAttributeNumber: () => {},
  XrmEntityAttributeOptionSet: () => {},
  XrmEntityAttributeOptionSetBase: () => {},
  XrmEntityAttributeString: () => {},
  XrmEntityAttributes: () => {},
  XrmEntityRelationship: () => {},
  XrmFile: () => {},
  XrmForm: () => {},
  XrmFormData: () => {},
  XrmFormSelectorItem: () => {},
  XrmFormSelectorItems: () => {},
  XrmFormUI: () => {},
  XrmGlobalContext: () => {},
  XrmGridData: () => {},
  XrmGridFilter: () => {},
  XrmGridRow: () => {},
  XrmGridRows: () => {},
  XrmInternal: () => {},
  XrmNavigation: () => {},
  XrmNavigationItem: () => {},
  XrmNavigationItems: () => {},
  XrmNavigations: () => {},
  XrmOffline: () => {},
  XrmOpenFileOption: () => {},
  XrmOrganizationSettings: () => {},
  XrmPageContextClient: () => {},
  XrmPanel: () => {},
  XrmPerformance: () => {},
  XrmProcessControlData: () => {},
  XrmProcessControlUI: () => {},
  XrmProcessStage: () => {},
  XrmProcessStep: () => {},
  XrmQuickForms: () => {},
  XrmRelatedEntities: () => {},
  XrmSdkMessages: () => {},
  XrmServiceDirectory: () => {},
  XrmTab: () => {},
  XrmTabNavigator: () => {},
  XrmTabNavigatorGroup: () => {},
  XrmTabNavigators: () => {},
  XrmTabSection: () => {},
  XrmTabSections: () => {},
  XrmTabs: () => {},
  XrmTaskProcess: () => {},
  XrmTrace: () => {},
  XrmUserSettings: () => {},
  XrmUtility: () => {},
  XrmViewSelector: () => {},
  getName: () => "Xrm",
  setAuth: function (auth) {
    globalThis.AUTH_KEY = auth;
  },
  getAuth: () => globalThis.AUTH_KEY,
  getOrg: () => globalThis._mainOrg,
};

export default xrm;
