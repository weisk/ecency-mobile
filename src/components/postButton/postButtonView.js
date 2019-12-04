import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from '../icon';

// Constant
import { default as ROUTES } from '../../constants/routeNames';
import scalePx from '../../utils/scalePx';

const PostButtonView = ({ navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate({
        routeName: ROUTES.SCREENS.EDITOR,
      })
    }
    activeOpacity={1}
  >
    <Icon iconType="MaterialCommunityIcons" name="pencil" color="#c1c5c7" size={scalePx(26)} />
  </TouchableOpacity>
);

export default withNavigation(PostButtonView);
