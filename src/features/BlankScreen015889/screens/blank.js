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
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_3: "" }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <View style={styles.View_4}>
        <View />
        <View />
        <View />
        <View />
        <View />
        <View>
          <Text>Sample text content</Text>
        </View>
        <View>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
        </View>
        <View>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
          <Text>Sample text content</Text>
        </View>
      </View>
      <View style={styles.View_11}>
        <View>
          <Text>Sample text content</Text>
        </View>
        <View />
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Text>Sample text content</Text>
        </View>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  TextInput_3: { height: 100 },
  View_4: { flexDirection: "row" },
  View_5: {},
  View_6: {},
  View_7: {},
  View_8: {},
  View_9: {},
  View_10: {},
  Text_110: {},
  View_113: {},
  Text_110: {},
  Text_111: {},
  Text_112: {},
  View_114: {},
  Text_110: {},
  Text_111: {},
  Text_112: {},
  View_11: { flexDirection: "row" },
  View_5: {},
  Text_111: {},
  View_6: {},
  View_7: {},
  Button_93: {},
  View_8: {},
  Text_112: {},
  View_9: {},
  View_10: {}
})
