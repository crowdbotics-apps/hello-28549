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
      <View style={styles.View_0_782} />
      <View style={styles.View_0_825}>
        <View style={styles.View_0_826}>
          <View style={styles.View_0_827} />
        </View>
        <View style={styles.View_0_828}>
          <View style={styles.View_0_829}>
            <Text style={styles.Text_0_829}>Chats</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_830} />
      <View style={styles.View_0_831} />
      <View style={styles.View_0_832} />
      <View style={styles.View_0_833} />
      <TouchableOpacity
        style={styles.TouchableOpacity_0_835}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_94"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfbd/3de2/31ca2e40994a9d0198f8e05a3843b4d6"
          }}
          style={styles.ImageBackground_0_834}
        />
        <View style={styles.View_0_839}>
          <Text style={styles.Text_0_839}>
            Thank you! That was very helpful!
          </Text>
        </View>
        <View style={styles.View_0_840}>
          <Text style={styles.Text_0_840}>James</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_841}>
        <Text style={styles.Text_0_841}>
          I know... I’m trying to get the funds.
        </Text>
      </View>
      <View style={styles.View_0_842}>
        <Text style={styles.Text_0_842}>Will Kenny</Text>
      </View>
      <View style={styles.View_0_843}>
        <Text style={styles.Text_0_843}>
          I’m looking for tips around capturing the milky way. I have a 6D with
          a 24-100mm...
        </Text>
      </View>
      <View style={styles.View_0_844}>
        <Text style={styles.Text_0_844}>Beth Williams</Text>
      </View>
      <View style={styles.View_0_845}>
        <Text style={styles.Text_0_845}>
          Wanted to ask if you’re available for a portrait shoot next week.
        </Text>
      </View>
      <View style={styles.View_0_846}>
        <Text style={styles.Text_0_846}>Rev Shawn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/309f/e7d3/33f69951acfe838da5aea180da54e489"
        }}
        style={styles.ImageBackground_0_836}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b07a/25ae/8e9f2d57135eb026b2df2cd318a83890"
        }}
        style={styles.ImageBackground_0_837}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61b7/8bf3/97a41f303fc1c2d9f6a90fc392fdc424"
        }}
        style={styles.ImageBackground_0_838}
      />
      <View style={styles.View_0_784}>
        <View style={styles.View_I0_784_0_588}>
          <View style={styles.View_I0_784_0_590} />
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_784_0_594}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_78"))
            }
          >
            <View style={styles.View_I0_784_0_593}>
              <View style={styles.View_I0_784_0_595} />
              <View style={styles.View_I0_784_0_596} />
              <View style={styles.View_I0_784_0_597} />
              <View style={styles.View_I0_784_0_598}>
                <View style={styles.View_I0_784_0_599} />
                <View style={styles.View_I0_784_0_600} />
              </View>
              <View style={styles.View_I0_784_0_601} />
              <View style={styles.View_I0_784_0_602} />
              <View style={styles.View_I0_784_0_603} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_784_0_660}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_90"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/090f/82b7/5066efc72a178e121f170ea0ce3291c0"
              }}
              style={styles.ImageBackground_I0_784_0_662}
            />
          </TouchableOpacity>
          <View style={styles.View_I0_784_0_671}>
            <View style={styles.View_I0_784_0_675} />
            <View style={styles.View_I0_784_0_672}>
              <View style={styles.View_I0_784_0_673} />
              <View style={styles.View_I0_784_0_674} />
            </View>
          </View>
          <View style={styles.View_I0_784_0_626}>
            <View style={styles.View_I0_784_0_628}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d4f/a9d6/d955463a0eca9cc38e0a7a43f6c05b63"
                }}
                style={styles.ImageBackground_I0_784_0_630}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I0_784_0_666}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_88"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8885/650b/f11d18342ab80f81dd4cc8b5a3b5ba31"
              }}
              style={styles.ImageBackground_I0_784_0_747}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_I0_784_0_591} />
      </View>
      <View style={styles.View_0_783}>
        <View style={styles.View_I0_783_0_49}>
          <View style={styles.View_I0_783_0_51}>
            <View style={styles.View_I0_783_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I0_783_0_53}
            />
            <View style={styles.View_I0_783_0_54} />
          </View>
          <View style={styles.View_I0_783_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I0_783_0_56}
            />
          </View>
          <View style={styles.View_I0_783_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_783_0_61}
            />
          </View>
        </View>
        <View style={styles.View_I0_783_0_66}>
          <View style={styles.View_I0_783_0_67}>
            <Text style={styles.Text_I0_783_0_67}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_782: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_825: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_826: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_827: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_828: {
    width: wp("46.666666666666664%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_829: {
    flexGrow: 1,
    width: wp("12.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.799999999999994%"),
    top: hp("1.502732240437159%"),
    justifyContent: "flex-start"
  },
  Text_0_829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_0_830: {
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_0_831: {
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    top: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_0_832: {
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    top: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_0_833: {
    width: wp("100%"),
    height: hp("0.06830601092896176%"),
    top: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  TouchableOpacity_0_835: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.207650273224044%")
  },
  ImageBackground_0_834: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_839: {
    width: wp("70.13333333333334%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    justifyContent: "flex-start"
  },
  Text_0_839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_840: {
    width: wp("70.13333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    justifyContent: "flex-start"
  },
  Text_0_840: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_841: {
    width: wp("70.13333333333334%"),
    top: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_842: {
    width: wp("70.13333333333334%"),
    top: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_843: {
    width: wp("70.13333333333334%"),
    top: hp("44.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_844: {
    width: wp("70.13333333333334%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_845: {
    width: wp("70.13333333333334%"),
    top: hp("58.606557377049185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_846: {
    width: wp("70.13333333333334%"),
    top: hp("55.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    justifyContent: "flex-start"
  },
  Text_0_846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_836: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("28.005464480874316%")
  },
  ImageBackground_0_837: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("41.66666666666667%")
  },
  ImageBackground_0_838: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("55.32786885245902%")
  },
  View_0_784: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_784_0_588: {
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
  View_I0_784_0_590: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I0_784_0_594: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_784_0_593: {
    width: wp("4.148359680175781%"),
    minWidth: wp("4.148359680175781%"),
    height: hp("1.9202662295982487%"),
    minHeight: hp("1.9202662295982487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("1.7759562841530112%")
  },
  View_I0_784_0_595: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47421875000000036%"),
    top: hp("0.8273765689036878%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_784_0_596: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.407552083333334%"),
    top: hp("0.8273765689036878%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_784_0_597: {
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
  View_I0_784_0_598: {
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
  View_I0_784_0_599: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8856770833333343%"),
    top: hp("0.00001667627221024759%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I0_784_0_600: {
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
  View_I0_784_0_601: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.2372126344774728%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_784_0_602: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3408854166666675%"),
    top: hp("1.2372126344774728%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  View_I0_784_0_603: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5408854166666677%"),
    top: hp("1.1006006126195444%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.800000011920929
  },
  TouchableOpacity_I0_784_0_660: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I0_784_0_662: {
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
  View_I0_784_0_671: {
    width: wp("18.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_784_0_675: {
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
  View_I0_784_0_672: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.600000000000001%"),
    top: hp("1.8442622950819754%")
  },
  View_I0_784_0_673: {
    width: wp("0.26666666666666666%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_784_0_674: {
    width: wp("3.4666666666666663%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_784_0_626: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_784_0_628: {
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
  ImageBackground_I0_784_0_630: {
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
  TouchableOpacity_I0_784_0_666: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I0_784_0_747: {
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
  View_I0_784_0_591: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("9.562841530054655%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_783: {
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
  View_I0_783_0_49: {
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
  View_I0_783_0_51: {
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
  View_I0_783_0_52: {
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
  ImageBackground_I0_783_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I0_783_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_783_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_783_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111979166666629%")
  },
  View_I0_783_0_60: {
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
  ImageBackground_I0_783_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17786458333333144%")
  },
  View_I0_783_0_66: {
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
  View_I0_783_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0888020833333325%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I0_783_0_67: {
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
