import {NavigationActions} from '@react-navigation/compat';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, key, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      key,
      params,
    }),
  );
}

function getCurrentScreen() {
  let route = _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route.routeName;
}

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentScreen,
};
