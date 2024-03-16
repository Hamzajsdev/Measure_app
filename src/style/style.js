import {StyleSheet} from 'react-native';
import theme from '../common/Theme';
import {
  boldFont,
  fontSizes,
  font_family,
  mediumFont,
} from '../assets/fonts/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  // Measurement Page
  wapper: {
    gap: 125,
  },
  headerSection: {
    alignItems: 'center',
    gap: 105,
  },
  textSection: {
    alignItems: 'flex-start',
    display: 'flex',
  },
  img: {
    width: 70,
    height: 70,
    top: 20,
  },
  heading: {
    fontSize: fontSizes.large,
    color: theme.colors.secondary,
    fontWeight: boldFont.fontWeight,
    fontFamily: font_family.fontFamily,
  },
  description: {
    fontSize: fontSizes.medium,
    marginTop: 8,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.secondary,
    fontFamily: font_family.fontFamily,
  },
  btn: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  elementorHeader: {
    marginTop: 90,
  },
  btnWheel: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 50,
    bottom: 40,
    left: 16,
    right: 0,
    top: 645,
    alignItems: 'center',
  },
  btns: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  btns1: {
    borderColor: theme.colors.mdGray,
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    marginTop: 15,
    height: 50,
  },
  btntxt: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  btn1txt: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },

  // Product Page
  btnsecondary: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  btngroup: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 120,
  },
  prebtn: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nbtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nbtnSecondary: {
    backgroundColor: theme.colors.mdGray,
    borderRadius: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // BottomTabs Section
  tabsContainer: {
    marginTop: 50,
    gap: 20,
  },
  tabsSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  tabsBtn: {
    backgroundColor: theme.colors.primary,
    // width:140,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabsText: {
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.white,
  },
  tabs2Btn: {
    backgroundColor: theme.colors.mdGray,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tabs2Text: {
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.secondary,
  },
  mainCard: {
    marginTop: 30,
    gap: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 13,
  },
  cardHeader: {
    borderWidth: 2,
    borderColor: theme.colors.mdGray,
    // height: 180,
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  pdRight: {
    paddingRight: 6,
  },

  cardno: {
    marginTop: 15,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.mdGray,
  },
  cardImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTxt: {
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.secondary,
  },

  // ChairDescription Section
  descriptionContainer: {
    flexDirection: 'row',
    gap: 80,
    marginTop: 30,
  },
  DesHeader: {
    gap: 8,
    marginTop: 40,
  },
  navHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chairDes: {
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.secondary,
  },
  btngroups: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 75,
  },
  btngroupscam: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 15,
    marginTop: 75,
    bottom: 35,
    left: 16,
    right: 0,
    alignItems: 'center',
  },
  btngroupst: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 40,
  },
  // Measure Section
  measureSection: {
    marginTop: 50,
  },
  measureSections: {
    marginTop: 20,
  },
  measuresections: {
    marginTop: 30,
  },
  radioHeader: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: -10,
  },
  radioContainer: {
    alignItems: 'flex-start',
  },
  label: {
    fontWeight: mediumFont.fontWeight,
    flex: 1,
    fontSize: 17,
    color: theme.colors.secondary,
  },
  btnInactive: {
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    marginTop: 220,
    height: 50,
  },
  btntxtInactive: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
    opacity: 0.4,
  },

  // CameraMeasure Section
  cameraheader: {
    position: 'absolute',
    backgroundColor: theme.colors.secondary,
    width: 150,
    height: 38,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60,
    left: 16,
  },
  cameraContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  message: {
    fontSize: fontSizes.small,
    display: 'none',
  },
  wimg: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Measure Management Section
  CardContent: {
    marginTop: 35,
    gap: 20,
  },
  CardsContain: {
    height: 100,
    borderRadius: 8,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 25,
    backgroundColor: theme.colors.lightGray,
  },
  CardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardHeading: {
    fontSize: fontSizes.x_medium,
    color: theme.colors.secondary,
    fontWeight: boldFont.fontWeight,
  },
  CardDescription: {
    fontSize: fontSizes.small,
    color: theme.colors.secondary,
  },

  // Popup Model Section
  modelContainer: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  modelDescription: {
    color: theme.colors.primary,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
  },
  modelDescriptions: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
  },

  // Delete Model Section
  deleteModel: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  ModelTitle: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  ModelDescription: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontSize: fontSizes.small,
  },
  DeleteModelHeader: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
  },
  ModelBtnHead: {
    borderWidth: 1,
    borderColor: theme.colors.mdGray,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModelBtnHead2: {
    backgroundColor: theme.colors.primary,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModelTitlebtn: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  ModelTitlebtn2: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },

  // Profile Account Section
  boxTxt: {
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    color: theme.colors.secondary,
  },
  boxContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  boxContent: {
    backgroundColor: theme.colors.white,
    height: 110,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 15,
    gap: 16,
  },

  // Profile Section
  prifileContainer: {
    marginTop: 40,
    gap: 5,
  },
  profileHeader: {
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.secondary,
  },
  profileDes: {
    fontSize: fontSizes.small,
    color: theme.colors.mdGray,
  },
  textInput: {
    height: 48,
    paddingLeft: 16,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.mdGray,
  },
  fieldContainer: {
    marginTop: 40,
    gap: 22,
  },
  fieldContainers: {
    marginTop: 25,
    gap: 22,
  },
  profilebtn: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  Mtprofilebtn: {
    marginTop: 230,
  },
  profilebtnss: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  mainprofilebtnss: {
    marginTop: 70,
  },
  profilebtns: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  mainprofilebtns: {
    marginTop: 320,
  },
  //  Login Section
  textImg: {
    color: theme.colors.primary,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
  },
  signup: {
    color: theme.colors.primary,
    fontSize: fontSizes.small,
  },
  textSections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerIng: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  signupDescription: {
    color: theme.colors.secondary,
    fontSize: fontSizes.medium,
    marginTop: 40,
  },
  changePassbtn: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  mainchangePassbtn: {
    marginTop: 330,
  },
  textSectionbtn: {
    marginTop: 260,
    alignItems: 'flex-start',
    display: 'flex',
  },
  changebtnEmail: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    marginTop: 25,
    height: 50,
  },
  radioverification:{
    marginTop: 25,
    marginLeft:-13
  },
  editPasswordBtn: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 12,
    height: 50,
  },
  maineditPasswordBtn: {
    marginTop: 330,
  },
  slide: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 24,
    color: 'white',
  },

  //   TakePhoto Camera

  takePhoto: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 15,
    alignSelf: 'center',
    marginTop: 370,
    marginLeft: 30,
  },
  photoImgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  takePhotobtn:{
    fontWeight:boldFont.fontWeight,
    color:theme.colors.secondary, 
    fontSize:fontSizes.small
  },
  touchBtn:{
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignSelf: 'left',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 200,
    top: 10,
  }
});

export default styles;
