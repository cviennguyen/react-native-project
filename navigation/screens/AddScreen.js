import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import Ionicons from "react-native-vector-icons/Ionicons";
import GoogleInput from "./GoogleInput";
import uuid from "react-native-uuid";
import * as yup from "yup";

const RestaurantSchema = yup.object({
  name: yup.string().required("Name is required").min(3),
  phone: yup.string().required("Phone is required").min(10),
  tag: yup.string().required("Tag is required"),
  description: yup.string().required("Description is required"),
});

export default function AddScreen({ navigation }) {
  const [address, setAddress] = React.useState("");
  const [restaurant, setRestaurant] = React.useState([]);
  const [error, setError] = React.useState("");
  const onChange = (text) => {
    setAddress(text);
  };

  console.log(restaurant);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.topNav}>
        <Text style={styles.textScreen}>Add</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Add a restaurant</Text>
        <Formik
          style={styles.form}
          validationSchema={RestaurantSchema}
          initialValues={{
            name: "",
            phone: "",
            tag: "",
            description: "",
          }}
          onSubmit={(values, actions) => {
            if (!address || address === "") {
              setError("Adress is required");
              return;
            }
            setRestaurant([
              ...restaurant,
              {
                id: uuid.v4(),
                name: values.name,
                phone: values.phone,
                tag: values.tag,
                description: values.description,
                address: address,
              },
            ]);
            actions.resetForm();
            setAddress("");
            navigation.navigate("Success");
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Name of the restaurant"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <Text style={styles.error}>{props.errors.name}</Text>
              <ScrollView keyboardShouldPersistTaps={"always"}>
                <GoogleInput onChange={onChange} />
              </ScrollView>
              {error && <Text style={styles.error}>{error}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                onChangeText={props.handleChange("phone")}
                value={props.values.phone}
              />
              <Text style={styles.error}>{props.errors.phone}</Text>

              <TextInput
                style={styles.input}
                placeholder="Tag"
                onChangeText={props.handleChange("tag")}
                value={props.values.tag}
              />
              <Text style={styles.error}>{props.errors.tag}</Text>

              <TextInput
                multiline
                style={styles.description}
                placeholder="Description"
                onChangeText={props.handleChange("description")}
                value={props.values.description}
              />
              <Text style={styles.error}>{props.errors.description}</Text>

              <View style={styles.btn}>
                <Ionicons name="add-circle" size={30} color="white" />
                <Button
                  color="white"
                  title="Add"
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "F5F5F5",
    textAlign: "center",
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: "F5F5F5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#554AF0",
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  textScreen: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  topNav: {
    backgroundColor: "#554AF0",
    paddingLeft: 25,
    paddingBottom: 18,
    width: "100%",
  },
  form: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    fontSize: 18,
    borderRadius: 12,
    width: "100%",
    backgroundColor: "#fff",
  },

  description: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    fontSize: 18,
    borderRadius: 12,
    width: "100%",
    backgroundColor: "#fff",
    height: 100,
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#554AF0",
    display: "inline-block",
    padding: 10,
    borderRadius: 12,
  },
  error: {
    color: "red",
    fontSize: 10,
  },
});
