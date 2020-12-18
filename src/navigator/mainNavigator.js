import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen015891Navigator from '../features/CopyOfCopyOfBlankScreen015891/navigator';
import CopyOfBlankScreen015890Navigator from '../features/CopyOfBlankScreen015890/navigator';
import BlankScreen015889Navigator from '../features/BlankScreen015889/navigator';
import CopyOfBlankScreen015888Navigator from '../features/CopyOfBlankScreen015888/navigator';
import CopyOfCopyOfBlankScreen015887Navigator from '../features/CopyOfCopyOfBlankScreen015887/navigator';
import CopyOfBlankScreen015884Navigator from '../features/CopyOfBlankScreen015884/navigator';
import BlankScreen015880Navigator from '../features/BlankScreen015880/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen015891: { screen: CopyOfCopyOfBlankScreen015891Navigator },
CopyOfBlankScreen015890: { screen: CopyOfBlankScreen015890Navigator },
BlankScreen015889: { screen: BlankScreen015889Navigator },
CopyOfBlankScreen015888: { screen: CopyOfBlankScreen015888Navigator },
CopyOfCopyOfBlankScreen015887: { screen: CopyOfCopyOfBlankScreen015887Navigator },
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
