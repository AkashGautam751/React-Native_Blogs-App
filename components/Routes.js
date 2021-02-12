import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator({
    Blogs: {
        screen: Blogs,
        navigationOptions:() => ({
            headerTitle: "Blogs",
            headerTitleStyle: { alignSelf: 'center' }
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions:() => ({
            headerTitle: "Edit"
        })
    },
})

const BottomTab = createBottomTabNavigator({
    NavStack: {
        screen: NavStack
    },
    Post: {
        screen: Post,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'blue',
            },
          }
    },    
})

export default Routes = createAppContainer(BottomTab)