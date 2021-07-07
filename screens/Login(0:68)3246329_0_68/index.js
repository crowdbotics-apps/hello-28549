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
      <View style={styles.View_0_324} />
      <View style={styles.View_0_325}>
        <View style={styles.View_I0_325_0_72} />
        <View style={styles.View_I0_325_0_74}>
          <Text style={styles.Text_I0_325_0_74}>jane@example.com</Text>
        </View>
      </View>
      <View style={styles.View_0_326}>
        <View style={styles.View_I0_326_0_72} />
        <View style={styles.View_I0_326_0_74}>
          <Text style={styles.Text_I0_326_0_74}>••••••••••••</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_327}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_78"))
        }
      >
        <View style={styles.View_I0_327_0_43} />
        <View style={styles.View_I0_327_0_46}>
          <Text style={styles.Text_I0_327_0_46}>Log in</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_328}>
        <View style={styles.View_0_329} />
        <View style={styles.View_0_330}>
          <View style={styles.View_0_331} />
        </View>
        <View style={styles.View_0_332}>
          <View style={styles.View_0_333}>
            <View style={styles.View_0_334}>
              <View style={styles.View_0_335}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc6/5d3b/57bbab99ff4740d744eb32dd6c17106f"
                  }}
                  style={styles.ImageBackground_0_336}
                />
                <View style={styles.View_0_337} />
                <View style={styles.View_0_338} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e1/a02f/b0c70ffd352d2c1b86f610df15fbbcd5"
                }}
                style={styles.ImageBackground_0_339}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e8/df95/f15f5f6171d371391f16aa0c92fcc0dc"
                }}
                style={styles.ImageBackground_0_340}
              />
            </View>
          </View>
          <View style={styles.View_0_341}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da38/e3b1/95cb9164b3a68a04f5818fd70460026c"
              }}
              style={styles.ImageBackground_0_342}
            />
          </View>
          <View style={styles.View_0_349}>
            <View style={styles.View_0_350} />
            <View style={styles.View_0_351}>
              <Text style={styles.Text_0_351}>return</Text>
            </View>
          </View>
          <View style={styles.View_0_352}>
            <View style={styles.View_0_353} />
            <View style={styles.View_0_354}>
              <Text style={styles.Text_0_354}>space</Text>
            </View>
          </View>
          <View style={styles.View_0_355}>
            <View style={styles.View_0_356}>
              <View style={styles.View_0_357}>
                <View style={styles.View_0_358} />
                <View style={styles.View_0_359}>
                  <Text style={styles.Text_0_359}>123</Text>
                </View>
              </View>
              <View style={styles.View_0_360}>
                <View style={styles.View_0_361} />
                <View style={styles.View_0_362}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1af/ca10/64125bc406056e97f19092d33319838c"
                    }}
                    style={styles.ImageBackground_0_363}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fd/6ec4/cf7b22ebb0116bd189e806bab98e9444"
                    }}
                    style={styles.ImageBackground_0_364}
                  />
                </View>
              </View>
              <View style={styles.View_0_367}>
                <View style={styles.View_0_368} />
                <View style={styles.View_0_369}>
                  <View style={styles.View_0_370}>
                    <View style={styles.View_0_371} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e0/f5a6/202149341753d2c4e3a3fc16d3534077"
                      }}
                      style={styles.ImageBackground_0_372}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_0_373}>
                <View style={styles.View_0_374} />
                <View style={styles.View_0_375}>
                  <Text style={styles.Text_0_375}>m</Text>
                </View>
              </View>
              <View style={styles.View_0_376}>
                <View style={styles.View_0_377} />
                <View style={styles.View_0_378}>
                  <Text style={styles.Text_0_378}>n</Text>
                </View>
              </View>
              <View style={styles.View_0_379}>
                <View style={styles.View_0_380} />
                <View style={styles.View_0_381}>
                  <Text style={styles.Text_0_381}>b</Text>
                </View>
              </View>
              <View style={styles.View_0_382}>
                <View style={styles.View_0_383} />
                <View style={styles.View_0_384}>
                  <Text style={styles.Text_0_384}>v</Text>
                </View>
              </View>
              <View style={styles.View_0_385}>
                <View style={styles.View_0_386} />
                <View style={styles.View_0_387}>
                  <Text style={styles.Text_0_387}>c</Text>
                </View>
              </View>
              <View style={styles.View_0_388}>
                <View style={styles.View_0_389} />
                <View style={styles.View_0_390}>
                  <Text style={styles.Text_0_390}>x</Text>
                </View>
              </View>
              <View style={styles.View_0_391}>
                <View style={styles.View_0_392} />
                <View style={styles.View_0_393}>
                  <Text style={styles.Text_0_393}>z</Text>
                </View>
              </View>
              <View style={styles.View_0_394}>
                <View style={styles.View_0_395} />
                <View style={styles.View_0_396}>
                  <Text style={styles.Text_0_396}>l</Text>
                </View>
              </View>
              <View style={styles.View_0_397}>
                <View style={styles.View_0_398} />
                <View style={styles.View_0_399}>
                  <Text style={styles.Text_0_399}>k</Text>
                </View>
              </View>
              <View style={styles.View_0_400}>
                <View style={styles.View_0_401} />
                <View style={styles.View_0_402}>
                  <Text style={styles.Text_0_402}>j</Text>
                </View>
              </View>
              <View style={styles.View_0_403}>
                <View style={styles.View_0_404} />
                <View style={styles.View_0_405}>
                  <Text style={styles.Text_0_405}>h</Text>
                </View>
              </View>
              <View style={styles.View_0_406}>
                <View style={styles.View_0_407} />
                <View style={styles.View_0_408}>
                  <Text style={styles.Text_0_408}>g</Text>
                </View>
              </View>
              <View style={styles.View_0_409}>
                <View style={styles.View_0_410} />
                <View style={styles.View_0_411}>
                  <Text style={styles.Text_0_411}>f</Text>
                </View>
              </View>
              <View style={styles.View_0_412}>
                <View style={styles.View_0_413} />
                <View style={styles.View_0_414}>
                  <Text style={styles.Text_0_414}>d</Text>
                </View>
              </View>
              <View style={styles.View_0_415}>
                <View style={styles.View_0_416} />
                <View style={styles.View_0_417}>
                  <Text style={styles.Text_0_417}>s</Text>
                </View>
              </View>
              <View style={styles.View_0_418}>
                <View style={styles.View_0_419} />
                <View style={styles.View_0_420}>
                  <Text style={styles.Text_0_420}>a</Text>
                </View>
              </View>
              <View style={styles.View_0_421}>
                <View style={styles.View_0_422} />
                <View style={styles.View_0_423}>
                  <Text style={styles.Text_0_423}>p</Text>
                </View>
              </View>
              <View style={styles.View_0_424}>
                <View style={styles.View_0_425} />
                <View style={styles.View_0_426}>
                  <Text style={styles.Text_0_426}>o</Text>
                </View>
              </View>
              <View style={styles.View_0_427}>
                <View style={styles.View_0_428} />
                <View style={styles.View_0_429}>
                  <Text style={styles.Text_0_429}>i</Text>
                </View>
              </View>
              <View style={styles.View_0_430}>
                <View style={styles.View_0_431} />
                <View style={styles.View_0_432}>
                  <Text style={styles.Text_0_432}>u</Text>
                </View>
              </View>
              <View style={styles.View_0_433}>
                <View style={styles.View_0_434} />
                <View style={styles.View_0_435}>
                  <Text style={styles.Text_0_435}>y</Text>
                </View>
              </View>
              <View style={styles.View_0_436}>
                <View style={styles.View_0_437} />
                <View style={styles.View_0_438}>
                  <Text style={styles.Text_0_438}>t</Text>
                </View>
              </View>
              <View style={styles.View_0_439}>
                <View style={styles.View_0_440} />
                <View style={styles.View_0_441}>
                  <Text style={styles.Text_0_441}>r</Text>
                </View>
              </View>
              <View style={styles.View_0_442}>
                <View style={styles.View_0_443} />
                <View style={styles.View_0_444}>
                  <Text style={styles.Text_0_444}>e</Text>
                </View>
              </View>
              <View style={styles.View_0_445}>
                <View style={styles.View_0_446} />
                <View style={styles.View_0_447}>
                  <Text style={styles.Text_0_447}>w</Text>
                </View>
              </View>
              <View style={styles.View_0_448}>
                <View style={styles.View_0_449} />
                <View style={styles.View_0_450}>
                  <Text style={styles.Text_0_450}>q</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_451}>
        <View style={styles.View_I0_451_0_70}>
          <Text style={styles.Text_I0_451_0_70}>Log in</Text>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e2b/3b79/3b131daa6e5004a91fff8dfd86246a7b"
        }}
        style={styles.TouchableOpacity_0_759}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_2"))
        }
      />
      <View style={styles.View_0_676}>
        <View style={styles.View_I0_676_0_49}>
          <View style={styles.View_I0_676_0_51}>
            <View style={styles.View_I0_676_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I0_676_0_53}
            />
            <View style={styles.View_I0_676_0_54} />
          </View>
          <View style={styles.View_I0_676_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I0_676_0_56}
            />
          </View>
          <View style={styles.View_I0_676_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_676_0_61}
            />
          </View>
        </View>
        <View style={styles.View_I0_676_0_66}>
          <View style={styles.View_I0_676_0_67}>
            <Text style={styles.Text_I0_676_0_67}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_324: {
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
  View_0_325: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_325_0_72: {
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
  View_I0_325_0_74: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_I0_325_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_326: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_326_0_72: {
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
  View_I0_326_0_74: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_I0_326_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_327: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_327_0_43: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_327_0_46: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.543359375%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_I0_327_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_328: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_329: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 211, 217, 1)",
    opacity: 0.8999999761581421
  },
  View_0_330: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_331: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_332: {
    width: wp("100%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_333: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("32.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_334: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_335: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.9581056032024444%"),
    minHeight: hp("1.9581056032024444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4571893410604417%")
  },
  ImageBackground_0_336: {
    width: wp("4%"),
    height: hp("1.4116575157707505%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_337: {
    width: wp("0.4444444338480631%"),
    height: hp("0.7741347688143371%"),
    top: hp("1.1839652973445993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7777343749999943%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_338: {
    width: wp("2.577777862548828%"),
    height: hp("0.22768669766806515%"),
    top: hp("1.7304133847762841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7110677083333314%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_0_339: {
    width: wp("1.5111110687255858%"),
    height: hp("2.003643030677337%"),
    top: hp("0.22768114433912956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2444010416666629%")
  },
  ImageBackground_0_340: {
    width: wp("2.4%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_0_341: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_342: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_349: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_350: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_351: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_351: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_352: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_353: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_354: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_355: {
    width: wp("100%"),
    height: hp("28.96174863387978%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_356: {
    width: wp("98.4%"),
    height: hp("27.86885245901639%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_0_357: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_358: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_359: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_0_359: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_360: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_361: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_362: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_0_363: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_364: {
    width: wp("1.900779596964518%"),
    height: hp("0.9737601045702324%"),
    top: hp("0.6968597245346615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7914062500000085%")
  },
  View_0_367: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_368: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_369: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0217447916666664%"),
    top: hp("1.6848788235356835%")
  },
  View_0_370: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_371: {
    width: wp("2.577777862548828%"),
    height: hp("1.0018215153386685%"),
    top: hp("1.3506946667947375%"),
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
  ImageBackground_0_372: {
    width: wp("5.955555725097656%"),
    height: hp("1.5938069651035662%"),
    top: hp("-0.06096011302508941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3571614583333331%")
  },
  View_0_373: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_374: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_375: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_375: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_376: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_377: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_378: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_378: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_379: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.20000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_380: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_381: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_382: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_383: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_384: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_385: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_386: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_387: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_388: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_389: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_390: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_391: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_392: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_393: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_394: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_395: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_396: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_397: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_398: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_399: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_400: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_401: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_402: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_402: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_403: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_404: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_405: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_406: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_407: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_408: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_408: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_409: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_410: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_411: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_411: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_412: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_413: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_414: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_415: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_416: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_417: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_417: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_418: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_419: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_420: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_421: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_422: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_423: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_424: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_425: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_426: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_427: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_428: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_429: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_430: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_431: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_432: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_432: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_433: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_434: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_435: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_436: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_437: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_438: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_439: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_440: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_441: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_442: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_443: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_444: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_445: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_446: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_447: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_447: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_448: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_449: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_450: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_450: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_451: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_451_0_70: {
    flexGrow: 1,
    width: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_451_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  TouchableOpacity_0_759: {
    width: wp("3.255228678385417%"),
    minWidth: wp("3.255228678385417%"),
    height: hp("1.5510325874787212%"),
    minHeight: hp("1.5510325874787212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.19672131147541%")
  },
  View_0_676: {
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
  View_I0_676_0_49: {
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
  View_I0_676_0_51: {
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
  View_I0_676_0_52: {
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
  ImageBackground_I0_676_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I0_676_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_676_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_676_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7110677083333314%")
  },
  View_I0_676_0_60: {
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
  ImageBackground_I0_676_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1777343750000142%")
  },
  View_I0_676_0_66: {
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
  View_I0_676_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08893229166666572%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I0_676_0_67: {
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
