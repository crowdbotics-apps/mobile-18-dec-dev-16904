import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen015885Navigator from '../features/CopyOfCopyOfBlankScreen015885/navigator';
import CopyOfBlankScreen015884Navigator from '../features/CopyOfBlankScreen015884/navigator';
import BlankScreen015880Navigator from '../features/BlankScreen015880/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen015885: { screen: CopyOfCopyOfBlankScreen015885Navigator },
CopyOfBlankScreen015884: { screen: CopyOfBlankScreen015884Navigator },
BlankScreen015880: { screen: BlankScreen015880Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
