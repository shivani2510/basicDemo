/**
 * Created by dinesh on 22/03/17.
 */
export class Url {
  // for QA
  public static serverUrl = 'https://rso-qa-api.kahunaapps.io/RentRegistry';
  // for local
  // public static serverUrl = 'http://192.168.0.85:8084/RentRegistry';

  public static SIDEBAR_JSON = 'src/app/shared/utils/sidebar.json';
  public static APP_VERSION = '1.5';
  public static CAP_VERSION = '';
  public static RSO_VERSION = '';

  public static APP_ID = 'RSO';

  public static Rent = {

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
    }


  };

}
