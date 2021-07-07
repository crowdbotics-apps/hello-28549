import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_1172} />
      <TouchableOpacity
        style={styles.TouchableOpacity_0_1173}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_725"))
        }
      >
        <View style={styles.View_0_1174} />
        <View style={styles.View_0_1175}>
          <View style={styles.View_0_1176} />
        </View>
        <View style={styles.View_0_1177}>
          <View style={styles.View_0_1178}>
            <View style={styles.View_0_1179}>
              <View style={styles.View_0_1180}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc6/5d3b/57bbab99ff4740d744eb32dd6c17106f"
                  }}
                  style={styles.ImageBackground_0_1181}
                />
                <View style={styles.View_0_1182} />
                <View style={styles.View_0_1183} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e1/a02f/b0c70ffd352d2c1b86f610df15fbbcd5"
                }}
                style={styles.ImageBackground_0_1184}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e8/df95/f15f5f6171d371391f16aa0c92fcc0dc"
                }}
                style={styles.ImageBackground_0_1185}
              />
            </View>
          </View>
          <View style={styles.View_0_1186}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da38/e3b1/95cb9164b3a68a04f5818fd70460026c"
              }}
              style={styles.ImageBackground_0_1187}
            />
          </View>
          <View style={styles.View_0_1194}>
            <View style={styles.View_0_1195} />
            <View style={styles.View_0_1196}>
              <Text style={styles.Text_0_1196}>return</Text>
            </View>
          </View>
          <View style={styles.View_0_1197}>
            <View style={styles.View_0_1198} />
            <View style={styles.View_0_1199}>
              <Text style={styles.Text_0_1199}>space</Text>
            </View>
          </View>
          <View style={styles.View_0_1200}>
            <View style={styles.View_0_1201}>
              <View style={styles.View_0_1202}>
                <View style={styles.View_0_1203} />
                <View style={styles.View_0_1204}>
                  <Text style={styles.Text_0_1204}>123</Text>
                </View>
              </View>
              <View style={styles.View_0_1205}>
                <View style={styles.View_0_1206} />
                <View style={styles.View_0_1207}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1af/ca10/64125bc406056e97f19092d33319838c"
                    }}
                    style={styles.ImageBackground_0_1208}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fd/6ec4/cf7b22ebb0116bd189e806bab98e9444"
                    }}
                    style={styles.ImageBackground_0_1209}
                  />
                </View>
              </View>
              <View style={styles.View_0_1212}>
                <View style={styles.View_0_1213} />
                <View style={styles.View_0_1214}>
                  <View style={styles.View_0_1215}>
                    <View style={styles.View_0_1216} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e0/f5a6/202149341753d2c4e3a3fc16d3534077"
                      }}
                      style={styles.ImageBackground_0_1217}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_0_1218}>
                <View style={styles.View_0_1219} />
                <View style={styles.View_0_1220}>
                  <Text style={styles.Text_0_1220}>m</Text>
                </View>
              </View>
              <View style={styles.View_0_1221}>
                <View style={styles.View_0_1222} />
                <View style={styles.View_0_1223}>
                  <Text style={styles.Text_0_1223}>n</Text>
                </View>
              </View>
              <View style={styles.View_0_1224}>
                <View style={styles.View_0_1225} />
                <View style={styles.View_0_1226}>
                  <Text style={styles.Text_0_1226}>b</Text>
                </View>
              </View>
              <View style={styles.View_0_1227}>
                <View style={styles.View_0_1228} />
                <View style={styles.View_0_1229}>
                  <Text style={styles.Text_0_1229}>v</Text>
                </View>
              </View>
              <View style={styles.View_0_1230}>
                <View style={styles.View_0_1231} />
                <View style={styles.View_0_1232}>
                  <Text style={styles.Text_0_1232}>c</Text>
                </View>
              </View>
              <View style={styles.View_0_1233}>
                <View style={styles.View_0_1234} />
                <View style={styles.View_0_1235}>
                  <Text style={styles.Text_0_1235}>x</Text>
                </View>
              </View>
              <View style={styles.View_0_1236}>
                <View style={styles.View_0_1237} />
                <View style={styles.View_0_1238}>
                  <Text style={styles.Text_0_1238}>z</Text>
                </View>
              </View>
              <View style={styles.View_0_1239}>
                <View style={styles.View_0_1240} />
                <View style={styles.View_0_1241}>
                  <Text style={styles.Text_0_1241}>l</Text>
                </View>
              </View>
              <View style={styles.View_0_1242}>
                <View style={styles.View_0_1243} />
                <View style={styles.View_0_1244}>
                  <Text style={styles.Text_0_1244}>k</Text>
                </View>
              </View>
              <View style={styles.View_0_1245}>
                <View style={styles.View_0_1246} />
                <View style={styles.View_0_1247}>
                  <Text style={styles.Text_0_1247}>j</Text>
                </View>
              </View>
              <View style={styles.View_0_1248}>
                <View style={styles.View_0_1249} />
                <View style={styles.View_0_1250}>
                  <Text style={styles.Text_0_1250}>h</Text>
                </View>
              </View>
              <View style={styles.View_0_1251}>
                <View style={styles.View_0_1252} />
                <View style={styles.View_0_1253}>
                  <Text style={styles.Text_0_1253}>g</Text>
                </View>
              </View>
              <View style={styles.View_0_1254}>
                <View style={styles.View_0_1255} />
                <View style={styles.View_0_1256}>
                  <Text style={styles.Text_0_1256}>f</Text>
                </View>
              </View>
              <View style={styles.View_0_1257}>
                <View style={styles.View_0_1258} />
                <View style={styles.View_0_1259}>
                  <Text style={styles.Text_0_1259}>d</Text>
                </View>
              </View>
              <View style={styles.View_0_1260}>
                <View style={styles.View_0_1261} />
                <View style={styles.View_0_1262}>
                  <Text style={styles.Text_0_1262}>s</Text>
                </View>
              </View>
              <View style={styles.View_0_1263}>
                <View style={styles.View_0_1264} />
                <View style={styles.View_0_1265}>
                  <Text style={styles.Text_0_1265}>a</Text>
                </View>
              </View>
              <View style={styles.View_0_1266}>
                <View style={styles.View_0_1267} />
                <View style={styles.View_0_1268}>
                  <Text style={styles.Text_0_1268}>p</Text>
                </View>
              </View>
              <View style={styles.View_0_1269}>
                <View style={styles.View_0_1270} />
                <View style={styles.View_0_1271}>
                  <Text style={styles.Text_0_1271}>o</Text>
                </View>
              </View>
              <View style={styles.View_0_1272}>
                <View style={styles.View_0_1273} />
                <View style={styles.View_0_1274}>
                  <Text style={styles.Text_0_1274}>i</Text>
                </View>
              </View>
              <View style={styles.View_0_1275}>
                <View style={styles.View_0_1276} />
                <View style={styles.View_0_1277}>
                  <Text style={styles.Text_0_1277}>u</Text>
                </View>
              </View>
              <View style={styles.View_0_1278}>
                <View style={styles.View_0_1279} />
                <View style={styles.View_0_1280}>
                  <Text style={styles.Text_0_1280}>y</Text>
                </View>
              </View>
              <View style={styles.View_0_1281}>
                <View style={styles.View_0_1282} />
                <View style={styles.View_0_1283}>
                  <Text style={styles.Text_0_1283}>t</Text>
                </View>
              </View>
              <View style={styles.View_0_1284}>
                <View style={styles.View_0_1285} />
                <View style={styles.View_0_1286}>
                  <Text style={styles.Text_0_1286}>r</Text>
                </View>
              </View>
              <View style={styles.View_0_1287}>
                <View style={styles.View_0_1288} />
                <View style={styles.View_0_1289}>
                  <Text style={styles.Text_0_1289}>e</Text>
                </View>
              </View>
              <View style={styles.View_0_1290}>
                <View style={styles.View_0_1291} />
                <View style={styles.View_0_1292}>
                  <Text style={styles.Text_0_1292}>w</Text>
                </View>
              </View>
              <View style={styles.View_0_1293}>
                <View style={styles.View_0_1294} />
                <View style={styles.View_0_1295}>
                  <Text style={styles.Text_0_1295}>q</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_0_1172: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("279.0378006872852%"),
    minHeight: hp("279.0378006872852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_0_1173: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1174: {
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 211, 217, 1)",
    opacity: 0.8999999761581421
  },
  View_0_1175: {
    width: wp("100%"),
    height: hp("11.683848797250858%"),
    top: hp("88.31615120274914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1176: {
    width: wp("36%"),
    height: hp("1.718213058419244%"),
    minHeight: hp("1.718213058419244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7.2164948453608275%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_1177: {
    width: wp("100%"),
    height: hp("90.72164948453609%"),
    minHeight: hp("90.72164948453609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1178: {
    width: wp("4%"),
    height: hp("8.59106529209622%"),
    top: hp("82.13058419243985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1179: {
    width: wp("4%"),
    height: hp("8.59106529209622%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1180: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4.925543991560788%"),
    minHeight: hp("4.925543991560788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6655072084407294%")
  },
  ImageBackground_0_1181: {
    width: wp("4%"),
    height: hp("3.5509735448253936%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1182: {
    width: wp("0.4444444338480631%"),
    height: hp("1.9473080782546213%"),
    top: hp("2.97822198507302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7777343749999943%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_1183: {
    width: wp("2.577777862548828%"),
    height: hp("0.5727376724846175%"),
    top: hp("4.352792431808425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7110677083333314%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_0_1184: {
    width: wp("1.5111110687255858%"),
    height: hp("5.040091747270827%"),
    top: hp("0.572723703286087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2444010416666629%")
  },
  ImageBackground_0_1185: {
    width: wp("2.4%"),
    height: hp("6.185567010309279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_0_1186: {
    width: wp("6.933333333333333%"),
    height: hp("8.934707903780069%"),
    top: hp("81.44329896907216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_1187: {
    width: wp("6.933333333333333%"),
    height: hp("8.934707903780069%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1194: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    top: hp("58.4192439862543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1195: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_1196: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("3.7800687285223304%"),
    justifyContent: "flex-start"
  },
  Text_0_1196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_1197: {
    width: wp("48.8%"),
    height: hp("14.432989690721648%"),
    top: hp("58.4192439862543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1198: {
    width: wp("48.8%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1199: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("3.7800687285223304%"),
    justifyContent: "flex-start"
  },
  Text_0_1199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_1200: {
    width: wp("100%"),
    height: hp("72.85223367697594%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1201: {
    width: wp("98.4%"),
    height: hp("70.10309278350515%"),
    top: hp("2.7491408934707904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_0_1202: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    top: hp("55.67010309278351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1203: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_1204: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("4.123711340206178%"),
    justifyContent: "flex-start"
  },
  Text_0_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_1205: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1206: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_1207: {
    width: wp("6.126923116048177%"),
    height: hp("5.841924398625429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("4.467353951890033%")
  },
  ImageBackground_0_1208: {
    width: wp("6.126923116048177%"),
    height: hp("5.841924398625429%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1209: {
    width: wp("1.900779596964518%"),
    height: hp("2.4494584073725436%"),
    top: hp("1.7529464669243993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7914062500000085%")
  },
  View_0_1212: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1213: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_1214: {
    width: wp("5.241212972005208%"),
    height: hp("5.917678911661365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0217447916666664%"),
    top: hp("4.2382728602878%")
  },
  View_0_1215: {
    width: wp("5.241212972005208%"),
    height: hp("5.917678911661365%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1216: {
    width: wp("2.577777862548828%"),
    height: hp("2.5200458736354134%"),
    top: hp("3.3976236979166643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3317708333333331%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.6666666269302368,
    borderBottomRightRadius: 1.6666666269302368
  },
  ImageBackground_0_1217: {
    width: wp("5.955555725097656%"),
    height: hp("4.009163912219281%"),
    top: hp("-0.15332199044243566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3571614583333331%")
  },
  View_0_1218: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1219: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1220: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1221: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1222: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1223: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1224: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.20000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1225: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1226: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1227: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1228: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1229: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1230: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1231: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1232: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1233: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1234: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1235: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1236: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("37.11340206185567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1237: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1238: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.0309278350515427%"),
    justifyContent: "flex-start"
  },
  Text_0_1238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1239: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1240: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1241: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1241: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1242: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1243: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1244: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1245: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1246: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1247: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1248: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1249: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1250: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1251: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1252: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1253: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1254: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1255: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1256: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1257: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1258: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1259: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1260: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1261: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1262: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1263: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("18.556701030927833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1264: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1265: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.0309278350515498%"),
    justifyContent: "flex-start"
  },
  Text_0_1265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1266: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1267: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1268: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1269: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1270: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1271: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1272: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1273: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1274: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1274: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1275: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1276: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1277: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1278: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1279: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1280: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1281: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1282: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1283: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1284: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1285: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1286: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1287: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1288: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1289: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1290: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1291: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1292: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1293: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_1294: {
    width: wp("8.266666666666666%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1295: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.0309278350515463%"),
    justifyContent: "flex-start"
  },
  Text_0_1295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
