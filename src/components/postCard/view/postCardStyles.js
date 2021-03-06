import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  post: {
    marginBottom: 10,
    backgroundColor: '$primaryBackgroundColor',
    shadowOpacity: 0.2,
    shadowColor: '$shadowColor',
    elevation: 0.1,
    shadowOffset: {
      height: 1,
    },
  },
  commentButton: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  commentIcon: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '$iconColor',
    margin: 0,
    width: 20,
    marginLeft: 25,
  },
  postBodyWrapper: {
    marginHorizontal: 9,
  },
  thumbnail: {
    margin: 0,
    alignItems: 'center',
    alignSelf: 'center',
    height: 200,
    width: '$deviceWidth - 16',
    borderRadius: 8,
    backgroundColor: '$primaryLightGray',
  },
  hiddenImages: {
    flexDirection: 'column',
  },
  postDescripton: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    backgroundColor: '$primaryBackgroundColor',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '$primaryBlack',
  },
  summary: {
    fontSize: 13,
    color: '$primaryDarkGray',
  },
  bodyFooter: {
    backgroundColor: '$primaryBackgroundColor',
    flexDirection: 'row',
    margin: 16,
  },
  bodyHeader: {
    backgroundColor: '$primaryBackgroundColor',
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  leftFooterWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightFooterWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dropdownWrapper: {
    position: 'absolute',
    right: -10,
  },
});
