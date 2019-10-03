import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

// Constants
import ROUTES from '../constants/routeNames';

// Components
import { Icon, IconContainer } from '../components/icon';
import { Home, Notification, Profile, Points } from '../screens';
import { PostButton, BottomTabBar } from '../components';

const BaseNavigator = createBottomTabNavigator(
  {
    [ROUTES.TABBAR.HOME]: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon iconType="MaterialIcons" name="view-day" color={tintColor} size={26} />
        ),
      }),
    },
    [ROUTES.TABBAR.NOTIFICATION]: {
      screen: Notification,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <IconContainer
            isBadge
            badgeType="notification"
            iconType="MaterialIcons"
            name="notifications"
            color={tintColor}
            size={26}
          />
        ),
      }),
    },
    [ROUTES.TABBAR.POSTBUTTON]: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon iconType="MaterialCommunityIcons" name="pencil" color={tintColor} size={26} />
        ),
      },
    },
    [ROUTES.TABBAR.POINTS]: {
      screen: Points,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            iconType="MaterialCommunityIcons"
            style={{ padding: 15 }}
            name="gift-outline"
            color={tintColor}
            size={26}
          />
        ),
      }),
    },
    [ROUTES.TABBAR.PROFILE]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon iconType="MaterialIcons" name="credit-card" color={tintColor} size={26} />
        ),
      }),
    },
  },
  {
    tabBarComponent: props => <BottomTabBar {...props} />,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#357ce6',
      inactiveTintColor: '#c1c5c7',
      style: {},
      tabStyle: {},
    },
  },
);

export { BaseNavigator };
