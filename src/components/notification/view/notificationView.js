import React, { PureComponent, Fragment } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { injectIntl } from 'react-intl';

// Constants

// Components
import { ContainerHeader } from '../../containerHeader';
import { FilterBar } from '../../filterBar';
import NotificationLine from '../../notificationLine';

// Utils
import {
  isToday, isYesterday, isThisWeek, isThisMonth,
} from '../../../utils/time';

// Styles
import styles from './notificationStyles';

class NotificationView extends PureComponent {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Remove filters from local state.
      filters: [
        { key: 'activities', value: 'ALL ACTIVITIES' },
        { key: 'votes', value: 'VOTES' },
        { key: 'replies', value: 'REPLIES' },
        { key: 'mentions', value: 'MENTIONS' },
        { key: 'follows', value: 'FOLLOWS' },
        { key: 'reblogs', value: 'REBLOGS' },
      ],
      selectedFilter: null,
    };
  }

  // Component Life Cycles

  // Component Functions

  _handleOnDropdownSelect = (index) => {
    const { getActivities } = this.props;
    const { filters } = this.state;

    this.setState({ selectedFilter: filters[index].key });
    getActivities(filters[index].key, false);
  };

  _renderList = (data) => {
    const { navigateToNotificationRoute } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NotificationLine
            notification={item}
            handleOnPressNotification={navigateToNotificationRoute}
          />
        )}
        initialNumToRender={data.length}
        maxToRenderPerBatch={data.length}
        keyExtractor={item => item.id}
      />
    );
  };

  _getNotificationsArrays = () => {
    const { notifications, intl } = this.props;

    if (!notifications && notifications.length < 1) return null;

    const notificationArray = [
      {
        title: intl.formatMessage({
          id: 'notification.recent',
        }),
        notifications: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.yesterday',
        }),
        notifications: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.this_week',
        }),
        notifications: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.this_month',
        }),
        notifications: [],
      },
      {
        title: intl.formatMessage({
          id: 'notification.older_then',
        }),
        notifications: [],
      },
    ];

    notifications.forEach((item) => {
      const listIndex = this._getTimeListIndex(item.timestamp);

      notificationArray[listIndex].notifications.push(item);
    });

    return notificationArray.filter(item => item.notifications.length > 0);
  };

  _getTimeListIndex = (timestamp) => {
    if (isToday(timestamp)) {
      return 0;
    }

    if (isYesterday(timestamp)) {
      return 1;
    }

    if (isThisWeek(timestamp)) {
      return 2;
    }

    if (isThisMonth(timestamp)) {
      return 3;
    }

    return 4;
  };

  render() {
    const { readAllNotification, getActivities } = this.props;
    const { filters, selectedFilter } = this.state;

    const _notifications = this._getNotificationsArrays();

    return (
      <View style={styles.container}>
        <FilterBar
          dropdownIconName="arrow-drop-down"
          options={filters.map(item => item.value)}
          defaultText="ALL ACTIVITIES"
          onDropdownSelect={this._handleOnDropdownSelect}
          rightIconName="ios-checkmark"
          onRightIconPress={readAllNotification}
        />
        <ScrollView
          style={styles.scrollView}
          onScroll={(e) => {
            let paddingToBottom = 1;
            paddingToBottom += e.nativeEvent.layoutMeasurement.height;
            if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
              getActivities(selectedFilter, true);
            }
          }}
        >
          <FlatList
            data={_notifications}
            renderItem={({ item, index }) => (
              <Fragment>
                <ContainerHeader
                  hasSeperator={index !== 0}
                  isBoldTitle
                  title={item.title}
                  key={item.title}
                />
                {this._renderList(item.notifications)}
              </Fragment>
            )}
            keyExtractor={item => item.title}
          />
        </ScrollView>
      </View>
    );
  }
}

export default injectIntl(NotificationView);
