import AppConfigSettings from '../content/config/settings.json';

export default {
  pages:{
    LOAD_PAGE_ACTION: 'load page component',
    INITIAL_APP_LOADED: 'loaded initial app state',
    RESET_APP_LOADED: 'resetting initial app state',
    ASYNCSTORAGE_KEY: 'current_view',
    UPDATE_APP_DIMENSIONS: 'update dimensions state',
  },
  tabBarExtensions:{
    SET_EXTENSIONS_ACTION:'set tabBarExtensions',
  },
  fetchData:{
    FETCH_DATA_REQUEST:'fetching data request',
    FETCH_DATA_FAILURE:'fetching data failed',
    FETCH_DATA_SUCCESS:'fetching data succeeded',
  },
  user:{
    LOGIN_DATA_REQUEST:'user logining data request',
    USER_DATA_FAILURE:'user fetching data failed',
    LOGIN_DATA_SUCCESS: 'user login fetching data succeeded',
    SAVE_DATA_SUCCESS: 'user profile saving data succeeded',
    LOGOUT_REQUEST:'user logout request',
    LOGOUT_SUCCESS:'user logout succeeded',    
    LOGOUT_FAILURE:'user logout failed',    
  },
  clientCacheData:{
    CLIENT_CACHE_DATA_REQUEST:'client cache data save request',
    CLIENT_CACHE_DATA_FAILURE:'client cache data failed',
    CLIENT_CACHE_DATA_SUCCESS:'client cache data succeeded',
  },
  messageBar:{
    SHOW_INFO:'show info notification',
    SHOW_ERROR:'show error notification',
  },
  jwt_token: {
    TOKEN_NAME: `${AppConfigSettings.name}_jwt_token`,
    TOKEN_DATA: `${AppConfigSettings.name}_jwt_token_data`,
    PROFILE_JSON: `${AppConfigSettings.name}_jwt_profile`,
  },
  async_token: {
    TABBAR_TOKEN: 'AppTabs',
  },
};
