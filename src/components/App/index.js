import React, { Component, PropTypes } from 'react';
import { Notification } from 're-bulma';
// import { Nav, NavGroup, NavItem, Button, Icon, NavToggle, } from 're-bulma';
// import { createStore, } from 'redux';
import { Router, Route, IndexRoute, } from 'react-router';
import { Provider, connect, } from 'react-redux';
import { historySettings, getHistory, } from '../../routers/history';
// import combinedReducers from '../../reducers';
import store from '../../stores';
import actions from '../../actions';
// import constants from '../../constants';
import styles from '../../styles';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import AppConfigSettings from '../../content/config/settings.json';
// import AppLoginSettings from '../../content/config/login.json';
import pages from '../../pages';
// import logo from './logo.svg';
// import './App.css';
import 'font-awesome/css/font-awesome.css';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import debounce from 'debounce';
const history = getHistory(historySettings, AppConfigSettings, store);

console.log({pages})

class MainApp extends Component{
  constructor(props,context) {
    super(props);
    console.log({ props, context });
    this.state = props;
    // this.previousRoute = {};
  }
  componentWillMount() {
    // // console.log('componentWillMount this.props',this.props)
    // /**
    //  *THIS IS FOR LANDING ON A DIFFERENT PAGE
    // */
    // let pageLocation = this.props.location.pathname;
    // if (pageLocation !== defaultExtensionRoute) {
    //   this.props.onChangePage(pageLocation,{config:{onAppStart:true,}});
    // }
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
    console.log('componentWillReceiveProps nextProps', nextProps);
  }
  componentDidMount() {
    // setLayoutHandler.call(this);
    // // console.log('componentDidMount this.props', this.props);
    // Promise.all([
    //   AsyncStorage.getItem(constants.jwt_token.TOKEN_NAME),
    //   AsyncStorage.getItem(constants.jwt_token.TOKEN_DATA),
    //   AsyncStorage.getItem(constants.jwt_token.PROFILE_JSON),
    //   AsyncStorage.getItem(constants.async_token.TABBAR_TOKEN),
    // ])
    //   .then((results) => {
    //     let jwt_token = results[ 0 ];
    //     let jwt_token_data = JSON.parse(results[ 1 ]);
    //     let jwt_user_profile = JSON.parse(results[ 2 ]);
    //     let appTabs = (results[ 3 ]) ? JSON.parse(results[ 3 ]) : false;
    //     // console.log('main apptabs',{ appTabs });
    //     if (jwt_token_data && jwt_user_profile) {
    //       let url = AppLoginSettings[this.props.page.runtime.environment].login.url;
    //       let response = {};
    //       let json = {
    //         token: jwt_token_data.token,
    //         expires: jwt_token_data.expires,
    //         timeout: jwt_token_data.timeout,
    //         user: jwt_user_profile,
    //       };
    //       let currentTime = new Date();
          
    //       if (moment(jwt_token_data.expires).isBefore(currentTime)) {
    //         let expiredTokenError = new Error(`Access Token Expired ${moment(jwt_token_data.expires).format('LLLL')}`);
    //         setTimeout(() => {
    //           this.handleErrorNotification({ message: 'Access Token Expired' + expiredTokenError, }, expiredTokenError);
    //         }, 1000);
    //         throw expiredTokenError;
    //       } else {
    //         this.props.saveUserProfile(url, response, json);
    //         if (appTabs) {
    //           this.props.setTabExtensions(appTabs);
    //         }
    //       }
    //     } else if (jwt_token) {
    //       this.props.getUserProfile(jwt_token);
    //     }
    //     else {
    //       console.log('MAIN componentDidMount USER IS NOT LOGGED IN');
    //     }      
    //     this.props.initialAppLoaded();
    //   })
    //   .catch((error) => {
    //     console.log('MAIN componentDidMount: JWT USER Login Error.', error);
    //     this.props.logoutUser();
    //   });
    // setImmediate(() => {
    //   // MessageBarManager.hideAlert();
    //   MessageBarManager.registerMessageBar(this.refs.AlertNotification);
    //   // MessageBarManager.hideAlert();
    // });
  }
  componentWillUnmount() {
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('COMPONENT WILL UPDATE');
    // console.log('COMPONENT WILL UPDATE',{refs:this.refs}, { nextProps }, { nextState })
    // this.loadExtensionRoute(nextProps.location.pathname);
    // perform any preparations for an upcoming update
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div style={styles.redBkgrd}>
        <AppHeader {...this.props} />
        <div>main page --DEBUG BELOW HERE</div>
        <main>
          {/*DEBUG HERE */}
          {this.props.children}
        </main>  
        <Notification
          closeButtonProps={{ onClick: () => console.log('clicked') }}
          style={styles}
        >
          lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <AppFooter  {...this.props}/>
      </div>
    );
  }
}
MainApp.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    user: state.user,
    // tabBarExtensions: state.tabBarExtensions,
    // fetchData: state.fetchData,
    // messageBar: state.messageBar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // initialAppLoaded:()=>store.dispatch(actions.pages.initialAppLoaded()),
    // onChangePage:(location) => store.dispatch(actions.pages.changePage(location)),
    // setAppDimensions:(layout) => store.dispatch(actions.pages.setAppDimensions(layout)),
    // requestData: (url, options, responseFormatter) => store.dispatch(actions.fetchData.request(url, options, responseFormatter)),
    // setTabExtensions: (arrayOfTabExtensions)=>store.dispatch(actions.tabBarExtension.setTabExtensions(arrayOfTabExtensions)),
    // showError: (notification) => store.dispatch(actions.messageBar.showError(notification)),
    // showInfo: (notification) => store.dispatch(actions.messageBar.showInfo(notification)),
    // setLoginStatus: (loggedIn) => store.dispatch(actions.user.setLoginStatus(loggedIn)),
    // getUserProfile: (jwt_token) => store.dispatch(actions.user.getUserProfile(jwt_token)),
    // saveUserProfile: (url, response, json) => store.dispatch(actions.user.saveUserProfile(url, response, json)),
    loginUser: (formdata) => store.dispatch(actions.user.loginUser(formdata)),
    // logoutUser: () => store.dispatch(actions.user.logoutUser()),
  };
};

const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp);

class Main extends Component{
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route  component={MainAppContainer}>
            <IndexRoute component={pages.PageComponents.HomePage}/>
            <Route path="home" component={pages.PageComponents.HomePage} />
            <Route path="documentation" component={pages.PageComponents.DocumentationPage} />
            <Route path="blog" component={pages.PageComponents.BlogPage}>
              <Route path="/" component={pages.PageComponents.BlogIndex}/>
              <Route path="blog/:id" component={pages.PageComponents.BlogItem}/>
            </Route>
            <Route path="*" component={pages.PageComponents.HomePage} passProps={{ test: 'testdata' }} />
          </Route>  
        </Router>
      </Provider>
    );
  }
}


export default Main;
