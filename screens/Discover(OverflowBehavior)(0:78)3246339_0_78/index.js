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
      <View style={styles.View_0_890} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/987e/4202/7abbeb1a37b9b8cdabf0fdd4fcb583f8"
        }}
        style={styles.ImageBackground_0_79}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_0_583}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_92"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ad/bc6b/d1527a8b377117a4efd6f63932e46113"
          }}
          style={styles.ImageBackground_0_582}
        />
        <View style={styles.View_0_699}>
          <View style={styles.View_I0_699_0_124}>
            <Text style={styles.Text_I0_699_0_124}>Ridhwan Nordin</Text>
          </View>
          <View style={styles.View_I0_699_0_126}>
            <Text style={styles.Text_I0_699_0_126}>@ridzjcob</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6314/7201/a04470fbee08e1a76200f530938c8c1d"
            }}
            style={styles.ImageBackground_I0_699_0_127}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93a7/3fe3/c4ffed3e56f14bc90fcfc2816e52c031"
          }}
          style={styles.ImageBackground_0_700}
        />
        <View style={styles.View_0_701}>
          <View style={styles.View_I0_701_0_124}>
            <Text style={styles.Text_I0_701_0_124}>Clem Onojeghuo</Text>
          </View>
          <View style={styles.View_I0_701_0_126}>
            <Text style={styles.Text_I0_701_0_126}>@clemono2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ea/274b/3b26072f543d604f2958652fe30e863b"
            }}
            style={styles.ImageBackground_I0_701_0_127}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1873/80c2/ffb2a2ccf3821dcbbc8414ee0fd772fa"
          }}
          style={styles.ImageBackground_0_702}
        />
        <View style={styles.View_0_703}>
          <View style={styles.View_I0_703_0_124}>
            <Text style={styles.Text_I0_703_0_124}>Jon Tyson</Text>
          </View>
          <View style={styles.View_I0_703_0_126}>
            <Text style={styles.Text_I0_703_0_126}>@jontyson</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ac/821a/8d13d4e266c2acbb498f6fcd76c8213a"
            }}
            style={styles.ImageBackground_I0_703_0_127}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005b/0b7a/ea073362519a4eb4ce223537b56e907d"
          }}
          style={styles.ImageBackground_0_704}
        />
        <View style={styles.View_0_705}>
          <View style={styles.View_I0_705_0_124}>
            <Text style={styles.Text_I0_705_0_124}>Simon Zhu</Text>
          </View>
          <View style={styles.View_I0_705_0_126}>
            <Text style={styles.Text_I0_705_0_126}>@smnzhu</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/866c/246c/d7f8b51b4c48838d11b8b3f9e5cb6fd2"
            }}
            style={styles.ImageBackground_I0_705_0_127}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_581}>
        <Text style={styles.Text_0_581}>What’s new today</Text>
      </View>
      <View style={styles.View_0_584}>
        <Text style={styles.Text_0_584}>Browse all</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d0/4a45/eab934058fb803164baf6b7d20c5d491"
        }}
        style={styles.ImageBackground_0_84}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecab/5349/7361ee80c4cdaccdc2aac73c3809a6b4"
        }}
        style={styles.ImageBackground_0_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df6/d0bc/0c83a098d92eb6025a55a2f632156366"
        }}
        style={styles.ImageBackground_0_586}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c4/b4f8/880d47c550a3cf2b732a80554c41b33d"
        }}
        style={styles.ImageBackground_0_80}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32be/a68e/674bbc205499d1a53e2fee77cfe5ac41"
        }}
        style={styles.TouchableOpacity_0_82}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_83"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde6/19c8/08da7b34e15db6a3aa25f3d60102a77e"
        }}
        style={styles.ImageBackground_0_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1026/3ddb/537c64fe1616e25dc0a967e0ab471b8c"
        }}
        style={styles.ImageBackground_0_585}
      />
      <View style={styles.View_0_587}>
        <View style={styles.View_I0_587_0_43} />
        <View style={styles.View_I0_587_0_46}>
          <Text style={styles.Text_I0_587_0_46}>see more</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66b3/3778/59dd15340e95407c81c8e96e6d31bbdb"
        }}
        style={styles.ImageBackground_0_87}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33a/c2bc/f7a5a782df7b8efe7028957b4a5b9ee2"
        }}
        style={styles.ImageBackground_0_81}
      />
      <View style={styles.View_0_580}>
        <View style={styles.View_I0_580_0_70}>
          <Text style={styles.Text_I0_580_0_70}>Discover</Text>
        </View>
      </View>
      <View style={styles.View_0_589}>
        <View style={styles.View_0_588}>
          <View style={styles.View_0_590} />
          <View style={styles.View_0_594}>
            <View style={styles.View_0_593}>
              <View style={styles.View_0_595} />
              <View style={styles.View_0_596} />
              <View style={styles.View_0_597} />
              <View style={styles.View_0_598}>
                <View style={styles.View_0_599} />
                <View style={styles.View_0_600} />
              </View>
              <View style={styles.View_0_601} />
              <View style={styles.View_0_602} />
              <View style={styles.View_0_603} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_660}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_90"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090f/82b7/5066efc72a178e121f170ea0ce3291c0"
              }}
              style={styles.ImageBackground_0_662}
            />
          </TouchableOpacity>
          <View style={styles.View_0_671}>
            <View style={styles.View_0_675} />
            <View style={styles.View_0_672}>
              <View style={styles.View_0_673} />
              <View style={styles.View_0_674} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_626}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_627"))
            }
          >
            <View style={styles.View_0_628}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d4f/a9d6/d955463a0eca9cc38e0a7a43f6c05b63"
                }}
                style={styles.ImageBackground_0_630}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_666}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_88"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8885/650b/f11d18342ab80f81dd4cc8b5a3b5ba31"
              }}
              style={styles.ImageBackground_0_747}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_0_591} />
      </View>
      <View style={styles.View_0_677}>
        <View style={styles.View_I0_677_0_49}>
          <View style={styles.View_I0_677_0_51}>
            <View style={styles.View_I0_677_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I0_677_0_53}
            />
            <View style={styles.View_I0_677_0_54} />
          </View>
          <View style={styles.View_I0_677_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I0_677_0_56}
            />
          </View>
          <View style={styles.View_I0_677_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_677_0_61}
            />
          </View>
        </View>
        <View style={styles.View_I0_677_0_66}>
          <View style={styles.View_I0_677_0_67}>
            <Text style={styles.Text_I0_677_0_67}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("309.69945355191254%") },
  View_0_890: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("309.69945355191254%"),
    minHeight: hp("309.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_0_79: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("90.30054644808743%"),
    resizeMode: "cover"
  },
  TouchableOpacity_0_583: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("52.86885245901639%"),
    minHeight: hp("52.86885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_582: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_699: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_699_0_124: {
    flexGrow: 1,
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_699_0_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_699_0_126: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_I0_699_0_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_699_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_700: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.73333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_701: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.73333333333333%"),
    top: hp("49.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_701_0_124: {
    flexGrow: 1,
    width: wp("25.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000009%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_701_0_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_701_0_126: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000009%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_I0_701_0_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_701_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_702: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("191.46666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_703: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("191.46666666666667%"),
    top: hp("49.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_703_0_124: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999966%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_703_0_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_703_0_126: {
    flexGrow: 1,
    width: wp("13.866666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999966%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_I0_703_0_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_703_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_704: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("46.85792349726776%"),
    minHeight: hp("46.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("287.20000000000005%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_705: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("287.20000000000005%"),
    top: hp("49.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_705_0_124: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999966%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_705_0_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_705_0_126: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999966%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "center"
  },
  Text_I0_705_0_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_705_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_581: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("20.21857923497268%"),
    justifyContent: "center"
  },
  Text_0_581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_584: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.97267759562843%"),
    justifyContent: "center"
  },
  Text_0_584: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  ImageBackground_0_84: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("165.30054644808743%"),
    resizeMode: "cover"
  },
  ImageBackground_0_85: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("177.59562841530055%"),
    resizeMode: "cover"
  },
  ImageBackground_0_586: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("252.45901639344262%"),
    resizeMode: "cover"
  },
  ImageBackground_0_80: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("90.30054644808743%"),
    resizeMode: "cover"
  },
  TouchableOpacity_0_82: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("134.01639344262296%"),
    resizeMode: "cover"
  },
  ImageBackground_0_86: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("196.5846994535519%"),
    resizeMode: "cover"
  },
  ImageBackground_0_585: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("240.1639344262295%"),
    resizeMode: "cover"
  },
  View_0_587: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("286.88524590163934%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_587_0_43: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_587_0_46: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.61002604166667%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_I0_587_0_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  ImageBackground_0_87: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("208.87978142076503%"),
    resizeMode: "cover"
  },
  ImageBackground_0_81: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("121.72131147540983%"),
    resizeMode: "cover"
  },
  View_0_580: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_580_0_70: {
    flexGrow: 1,
    width: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_580_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_0_589: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("298.3606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_588: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_590: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_594: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_593: {
    width: wp("4.148359680175781%"),
    minWidth: wp("4.148359680175781%"),
    height: hp("1.9202662295982487%"),
    minHeight: hp("1.9202662295982487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("1.7759562841529828%")
  },
  View_0_595: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47421875000000036%"),
    top: hp("0.8273765689036736%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_0_596: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.407552083333334%"),
    top: hp("0.8273765689036736%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_0_597: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47421875000000036%"),
    top: hp("1.7836607219091434%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_0_598: {
    width: wp("4.148359680175781%"),
    minWidth: wp("4.148359680175781%"),
    height: hp("2.125184262385134%"),
    minHeight: hp("2.125184262385134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_599: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8856770833333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_600: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00003335254439207347%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_0_601: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.2372126344774301%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_0_602: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3408854166666675%"),
    top: hp("1.2372126344774301%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_0_603: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.1006006126195302%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  TouchableOpacity_0_660: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_662: {
    width: wp("4.227614339192709%"),
    minWidth: wp("4.227614339192709%"),
    height: hp("2.165786034422494%"),
    minHeight: hp("2.165786034422494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295026%")
  },
  View_0_671: {
    width: wp("18.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_675: {
    width: wp("18.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_0_672: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.600000000000001%"),
    top: hp("1.8442622950819327%")
  },
  View_0_673: {
    width: wp("0.26666666666666666%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_674: {
    width: wp("3.4666666666666663%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_0_626: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_628: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.639344262295026%")
  },
  ImageBackground_0_630: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_0_666: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_747: {
    width: wp("2.7826087951660154%"),
    minWidth: wp("2.7826087951660154%"),
    height: hp("2.0491817609859946%"),
    minHeight: hp("2.0491817609859946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.639344262295026%")
  },
  View_0_591: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_677: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_677_0_49: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_677_0_51: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666683%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_677_0_52: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.04553873030865763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_677_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I0_677_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_677_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_677_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7110677083333314%")
  },
  View_I0_677_0_60: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_677_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1777343750000142%")
  },
  View_I0_677_0_66: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_677_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08893229166666572%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I0_677_0_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
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
