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
      <View style={styles.View_0_726}>
        <View style={styles.View_I0_726_0_70}>
          <Text style={styles.Text_I0_726_0_70}>Search</Text>
        </View>
      </View>
      <View style={styles.View_0_727}>
        <View style={styles.View_I0_727_0_72} />
        <View style={styles.View_I0_727_0_74}>
          <Text style={styles.Text_I0_727_0_74}>dogs</Text>
        </View>
      </View>
      <View style={styles.View_0_728}>
        <Text style={styles.Text_0_728}>all results</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d95d/a8bb/520e993d0243a37e1f696c3464909d83"
        }}
        style={styles.ImageBackground_0_729}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39f0/17e3/7d7923d676ac47eff631c276e08d1111"
        }}
        style={styles.ImageBackground_0_730}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb3/ca24/4697147d21cebc4969facc876208708b"
        }}
        style={styles.ImageBackground_0_731}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0096/f81e/22c0c70311da31461e193753af11f5ae"
        }}
        style={styles.ImageBackground_0_732}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8cc/2234/0bb11ce61081baa467407afa2aa31fd9"
        }}
        style={styles.ImageBackground_0_733}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/49b0/a5d080845b922084330ff32f15ab2181"
        }}
        style={styles.ImageBackground_0_734}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b1/9e57/d7dda7149db5cf61de4e8c0b3066f08c"
        }}
        style={styles.ImageBackground_0_735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c44/910a/2ac669e0af12004679807e0f3e07061a"
        }}
        style={styles.ImageBackground_0_736}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5958/621b/bcd654ac2824a4399097e45c266bc5d4"
        }}
        style={styles.ImageBackground_0_737}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5869/1e1e/c04490eb2b13bc599e5592131b2f1965"
        }}
        style={styles.ImageBackground_0_738}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbac/8888/89db8ac8377bd2154c26800ad38e2385"
        }}
        style={styles.ImageBackground_0_739}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b3b/4f66/909a114f9f6ebff96cd97ce09d77869d"
        }}
        style={styles.ImageBackground_0_740}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8864/a46d/e81fbb6ff6b507e6ffbeee8796d3ea99"
        }}
        style={styles.ImageBackground_0_741}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/403f/bdda/6bbd57e2f12ade0562f8cf93a9ce7c12"
        }}
        style={styles.ImageBackground_0_742}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/277d/fb0f/a2650e11c46d03a8bd82360c988d637e"
        }}
        style={styles.ImageBackground_0_743}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_0_744}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_745"))
        }
      >
        <View style={styles.View_I0_744_0_43} />
        <View style={styles.View_I0_744_0_46}>
          <Text style={styles.Text_I0_744_0_46}>see more</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_751}>
        <View style={styles.View_I0_751_0_49}>
          <View style={styles.View_I0_751_0_51}>
            <View style={styles.View_I0_751_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I0_751_0_53}
            />
            <View style={styles.View_I0_751_0_54} />
          </View>
          <View style={styles.View_I0_751_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I0_751_0_56}
            />
          </View>
          <View style={styles.View_I0_751_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_751_0_61}
            />
          </View>
        </View>
        <View style={styles.View_I0_751_0_66}>
          <View style={styles.View_I0_751_0_67}>
            <Text style={styles.Text_I0_751_0_67}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_746}>
        <View style={styles.View_I0_746_0_588}>
          <View style={styles.View_I0_746_0_590} />
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_746_0_594}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_78"))
            }
          >
            <View style={styles.View_I0_746_0_593}>
              <View style={styles.View_I0_746_0_595} />
              <View style={styles.View_I0_746_0_596} />
              <View style={styles.View_I0_746_0_597} />
              <View style={styles.View_I0_746_0_598}>
                <View style={styles.View_I0_746_0_599} />
                <View style={styles.View_I0_746_0_600} />
              </View>
              <View style={styles.View_I0_746_0_601} />
              <View style={styles.View_I0_746_0_602} />
              <View style={styles.View_I0_746_0_603} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_746_0_660}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_90"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090f/82b7/5066efc72a178e121f170ea0ce3291c0"
              }}
              style={styles.ImageBackground_I0_746_0_662}
            />
          </TouchableOpacity>
          <View style={styles.View_I0_746_0_671}>
            <View style={styles.View_I0_746_0_675} />
            <View style={styles.View_I0_746_0_672}>
              <View style={styles.View_I0_746_0_673} />
              <View style={styles.View_I0_746_0_674} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_746_0_626}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_627"))
            }
          >
            <View style={styles.View_I0_746_0_628}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d4f/a9d6/d955463a0eca9cc38e0a7a43f6c05b63"
                }}
                style={styles.ImageBackground_I0_746_0_630}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_746_0_666}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_88"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8885/650b/f11d18342ab80f81dd4cc8b5a3b5ba31"
              }}
              style={styles.ImageBackground_I0_746_0_747}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I0_746_0_591} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("143.30601092896177%") },
  View_0_726: {
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
  View_I0_726_0_70: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_726_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_0_727: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_727_0_72: {
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
    borderWidth: 2
  },
  View_I0_727_0_74: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584696%"),
    justifyContent: "center"
  },
  Text_I0_727_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_728: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("31.693989071038253%"),
    justifyContent: "center"
  },
  Text_0_728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  ImageBackground_0_729: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("37.02185792349727%"),
    resizeMode: "cover"
  },
  ImageBackground_0_730: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("37.02185792349727%"),
    resizeMode: "cover"
  },
  ImageBackground_0_731: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("37.02185792349727%"),
    resizeMode: "cover"
  },
  ImageBackground_0_732: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.14207650273224%"),
    resizeMode: "cover"
  },
  ImageBackground_0_733: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("53.14207650273224%"),
    resizeMode: "cover"
  },
  ImageBackground_0_734: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("53.14207650273224%"),
    resizeMode: "cover"
  },
  ImageBackground_0_735: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("69.26229508196722%"),
    resizeMode: "cover"
  },
  ImageBackground_0_736: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("69.26229508196722%"),
    resizeMode: "cover"
  },
  ImageBackground_0_737: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("69.26229508196722%"),
    resizeMode: "cover"
  },
  ImageBackground_0_738: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("85.38251366120218%"),
    resizeMode: "cover"
  },
  ImageBackground_0_739: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("85.38251366120218%"),
    resizeMode: "cover"
  },
  ImageBackground_0_740: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("85.38251366120218%"),
    resizeMode: "cover"
  },
  ImageBackground_0_741: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("101.50273224043715%"),
    resizeMode: "cover"
  },
  ImageBackground_0_742: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("101.50273224043715%"),
    resizeMode: "cover"
  },
  ImageBackground_0_743: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("101.50273224043715%"),
    resizeMode: "cover"
  },
  TouchableOpacity_0_744: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("120.49180327868851%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_744_0_43: {
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
  View_I0_744_0_46: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.61002604166667%"),
    top: hp("2.595628415300567%"),
    justifyContent: "center"
  },
  Text_I0_744_0_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_751: {
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
  View_I0_751_0_49: {
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
  View_I0_751_0_51: {
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
  View_I0_751_0_52: {
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
  ImageBackground_I0_751_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I0_751_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_751_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_751_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111979166666629%")
  },
  View_I0_751_0_60: {
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
  ImageBackground_I0_751_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17786458333333144%")
  },
  View_I0_751_0_66: {
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
  View_I0_751_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08893229166666572%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I0_751_0_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_0_746: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_746_0_588: {
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
  View_I0_746_0_590: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I0_746_0_594: {
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
  View_I0_746_0_593: {
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
  View_I0_746_0_595: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47421875000000036%"),
    top: hp("0.8273765689037305%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_746_0_596: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.407552083333334%"),
    top: hp("0.8273765689037305%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_746_0_597: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47421875000000036%"),
    top: hp("1.7836607219091718%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_746_0_598: {
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
  View_I0_746_0_599: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8856770833333343%"),
    top: hp("0.000016676272224458444%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I0_746_0_600: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I0_746_0_601: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.237212634477487%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_746_0_602: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3408854166666675%"),
    top: hp("1.237212634477487%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_746_0_603: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.1006006126195587%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  TouchableOpacity_I0_746_0_660: {
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
  ImageBackground_I0_746_0_662: {
    width: wp("4.227614339192709%"),
    minWidth: wp("4.227614339192709%"),
    height: hp("2.165786034422494%"),
    minHeight: hp("2.165786034422494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295083%")
  },
  View_I0_746_0_671: {
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
  View_I0_746_0_675: {
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
  View_I0_746_0_672: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.600000000000001%"),
    top: hp("1.8442622950819612%")
  },
  View_I0_746_0_673: {
    width: wp("0.26666666666666666%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_746_0_674: {
    width: wp("3.4666666666666663%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I0_746_0_626: {
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
  View_I0_746_0_628: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_I0_746_0_630: {
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
  TouchableOpacity_I0_746_0_666: {
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
  ImageBackground_I0_746_0_747: {
    width: wp("2.7826087951660154%"),
    minWidth: wp("2.7826087951660154%"),
    height: hp("2.0491817609859946%"),
    minHeight: hp("2.0491817609859946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.639344262295083%")
  },
  View_I0_746_0_591: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("9.56284153005467%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
