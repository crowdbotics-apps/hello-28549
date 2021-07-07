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
      <View style={styles.View_0_3}>
        <View style={styles.View_0_23}>
          <View style={styles.View_0_24}>
            <View style={styles.View_0_25} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_0_26}
            />
            <View style={styles.View_0_27} />
          </View>
          <View style={styles.View_0_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_0_29}
            />
          </View>
          <View style={styles.View_0_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_0_34}
            />
          </View>
        </View>
        <View style={styles.View_0_39}>
          <View style={styles.View_0_40}>
            <Text style={styles.Text_0_40}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_45}>
        <Text style={styles.Text_0_45}>register</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_44}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_68"))
        }
      >
        <View style={styles.View_0_43} />
        <View style={styles.View_0_46}>
          <Text style={styles.Text_0_46}>log in</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_69}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_47"))
        }
      >
        <View style={styles.View_I0_69_0_43} />
        <View style={styles.View_I0_69_0_46}>
          <Text style={styles.Text_I0_69_0_46}>register</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba53/44d7/7390f403f68e0029ec7c9999e842bd0e"
        }}
        style={styles.ImageBackground_0_42}
      />
      <View style={styles.View_0_115} />
      <View style={styles.View_0_119}>
        <View style={styles.View_0_120}>
          <Text style={styles.Text_0_120}>photo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bd8/4834/668cd850f08aecdc6f3a96dc86cb178b"
          }}
          style={styles.ImageBackground_0_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/569b/6769/d5dde804f4066874089ea4c679bba125"
          }}
          style={styles.ImageBackground_0_121}
        />
      </View>
      <View style={styles.View_0_125}>
        <View style={styles.View_0_124}>
          <Text style={styles.Text_0_124}>Pawel Czerwinski</Text>
        </View>
        <View style={styles.View_0_126}>
          <Text style={styles.Text_0_126}>@pawel_czerwinski</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef1/518f/569eb103e6a0cbfba4f1eeeee1068c87"
          }}
          style={styles.ImageBackground_0_127}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_3: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_23: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_24: {
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
  View_0_25: {
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
  ImageBackground_0_26: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_0_27: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_28: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_29: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%")
  },
  View_0_33: {
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
  ImageBackground_0_34: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17779947916666572%")
  },
  View_0_39: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_40: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08886718749999911%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_0_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_0_45: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("99.59016393442623%"),
    justifyContent: "center"
  },
  Text_0_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.195,
    textTransform: "uppercase"
  },
  TouchableOpacity_0_44: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_43: {
    flexGrow: 1,
    width: wp("44.53333333333334%"),
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
  View_0_46: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%"),
    top: hp("2.5956284153005384%"),
    justifyContent: "center"
  },
  Text_0_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  TouchableOpacity_0_69: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_69_0_43: {
    flexGrow: 1,
    width: wp("44.53333333333334%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_69_0_46: {
    flexGrow: 1,
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999994%"),
    top: hp("2.5956284153005384%"),
    justifyContent: "center"
  },
  Text_I0_69_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  ImageBackground_0_42: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.58469945355192%"),
    minHeight: hp("96.58469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_115: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_119: {
    width: wp("54.93333740234375%"),
    minWidth: wp("54.93333740234375%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("41.939890710382514%")
  },
  View_0_120: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666665%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.72,
    textTransform: "none"
  },
  ImageBackground_0_117: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  ImageBackground_0_121: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%")
  },
  View_0_125: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("90.02732240437157%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_124: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_126: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    top: hp("2.049180327868868%"),
    justifyContent: "center"
  },
  Text_0_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_127: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
