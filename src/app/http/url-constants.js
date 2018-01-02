"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dinesh on 22/03/17.
 */
var Url = (function () {
    function Url() {
    }
    return Url;
}());
// for QA
Url.serverUrl = 'https://rso-qa-api.kahunaapps.io/RentRegistry';
// for local
// public static serverUrl = 'http://192.168.0.85:8084/RentRegistry';
Url.SIDEBAR_JSON = 'src/app/shared/utils/sidebar.json';
// for QA
Url.CAP_URL = 'https://rso-qa-api.kahunaapps.io/CAP';
Url.CEP_URL = 'https://rso-qa-api.kahunaapps.io/CEP';
// for local
// public static CAP_URL = 'http://192.168.0.105:8080/CAP';
//  public static CEP_URL = 'http://192.168.0.28:8090/CEP';
Url.APP_VERSION = '1.5';
Url.CAP_VERSION = '';
Url.RSO_VERSION = '';
Url.APP_ID = 'RSO';
Url.Rent = {
    // url will come here.
    'authentication': {
        'Authentication': '/rest/auth/1/authenticate',
        'logout': '/rest/auth/1/logout',
        'getUserProfileImage': '/rest/contact/1/get_user_profile_image',
        'getSocialAuthKeyList': '/rest/config/1/get_social_template_config',
        'registration': '/rest/contact/1/citizen_registration',
        'resendMail': '/rest/contact/1/resend_mail',
        'signIn': '/rest/v1/authenticate/signin',
        'changePassword': '/rest/user/1/change_password',
        'forgetPassword': '/rest/user/1/forgot_password',
        'resetPassword': '/rest/user/1/reset_password',
        'validateTocken1': '/rest/user/1/validate_forgot_password_token'
    },
    'Admin': {
        'UserModule': {
            'getModuleListByRole': '/rest/user/1/get_role_module'
        }
    },
    'languages': {
        'getAllLanguages': '/rest/srapp/1/get_all_languages'
    },
    'property': {
        'addProperty': '/rest/v1/property/add',
        'editProperty': '/rest/v1/property/edit',
        'deleteProperty': '/rest/v1/property/delete',
        'getPropertyList': '/rest/v1/properties/get',
        'getProperty': '/rest/v1/property/get',
        'search': '/rest/v1/property/search',
        'unit': {
            'addUnit': '/rest/v1/unit/add',
            'getUnit': '/rest/v1/unit/get',
            'editUnit': '/rest/v1/unit/edit',
            'deleteUnit': '/rest/v1/unit/delete',
            'addMultipleUnits': '/cdnbe/v1/unit/multiple/add',
            'certifyUnits': '/rest/v1/unit/certify'
        },
        'uploadDocument': '/cdnbe/v1/document/upload',
        'getDocument': '/rest/v1/documents/get',
        'deleteDocument': '/rest/v1/document/delete',
        'addPropertyManager': '/rest/v1/property/manager/add',
        'getPropertyManager': '/rest/v1/property/manager/get',
        'submit': '/rest/v1/property/submitForReview',
        'summeryToExcel': '/generateExcelSheet/',
        'propertyDetails': '/rest/v1/property/details/get',
        'getConfig': '/rest/v1/config/get',
        'getReason': '/rest/v1/properties/get_reason_for_state/',
        'downloadDocument': '/rest/v1/document/get_document_download_url',
        'generatePdf': '/generatePdf/',
        'deleteSiteaddress': '/rest/v1/siteaddress/delete'
    },
    'siteAddress': {
        'addSiteaddress': '/rest/v1/siteaddress/add',
        'deleteSiteaddress': '/rest/v1/siteaddress/delete',
        'editSiteaddress': '/rest/v1/siteaddress/edit'
    },
    'widget': {
        'getDetailsForWidget': '/rest/app/1/getDetailsForWidget'
    },
    'reports': {
        'monthlyStatisticReport': '/rest/v1/property/report/get_case_submitted_from_portal',
        'monthlyStatusSummaryReport': '/rest/v1/property/report/get_status_count',
        'monthlyStatusReport': '/rest/v1/property/report/get_submitted_case_data',
        'monthlyStatusSubmittedReport': '/rest/v1/property/report/get_pending_for_review_property',
        'generateExcelForDetailStatus': '/generateExcelFordetailsstatus'
    },
    'userProfile': {
        'getLatestUserProfile': '/rest/contact/1/get_latest_user_profile',
        'updateUserProfile': '/cdnbe/1/update_user_profile',
        'getListOfCountries': '/rest/contact/1/get_list_of_countries',
        'updateContact': '/rest/v1/contact/update'
    },
    'header': {
        'getUserCases': '/rest/v1/property/get_user_cases',
        'userProfile': '/rest/v1/check_user_profile_completeness'
    },
    'pastForms': {
        'getCaseDetails': '/rest/v1/property/get_case_details/',
        'generateExcelSheet': '/generateCaseExcelSheet/',
        'generatePdf': '/generateCasePdf/'
    },
    'staff': {
        'getProperty': '/rest/v1/staff/property/get',
        'getAllProperty': '/rest/v1/staff/property/get/all',
        'getStaffConfig': '/rest/v1/staff/config/get',
        'getPropertyStateCount': '/rest/v1/staff/property/state/counts',
        'registerProperty': '/rest/v1/property/register_case',
        'generateCertificate': '/generateCertificate/',
        'generateAllCertificate': '/generateAllCertificates/',
        'generateExcelForUnregisteredProperty': '/generateExcelForUnregisteredProperty',
        'report': {
            'getUnitBasedSummaryReport': '/rest/v1/property/report/get_unit_based_summary_report',
            'getDetailStatusSummaryReport': '/rest/v1/property/report/get_detail_status_summary_report',
            'getStaffStatusCount': '/rest/v1/property/report/get_staff_status_count',
            'downloadRegistryData': '/property_details?startDate=',
            'downloadUnitDetails': '/unit_details?startDate='
        },
        'getAllPropStoreProperty': '/rest/v1/staff/propstore/property/get/all',
        'cancelRegistration': '/rest/v1/staff/property/registration/cancel',
        'declineProperty': '/rest/v1/staff/property/decline'
    },
    'search': {
        'searchProperty': '/rest/v1/property/search'
    },
    'getVersion': '/rest/getVersion',
    'licenseReport': {
        'getOwnerDetails': '/rest/v1/staff/property/get_property_and_their_owner_details',
        'generateExcel': '/property_and_their_owner_details'
    },
    'logo': {
        'getAppLogo': '/rest/config/1/get_app_logo'
    }
};
exports.Url = Url;
//# sourceMappingURL=url-constants.js.map