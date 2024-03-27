import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import { API_BASE_URL } from "../api/constants/api";
  
  const ResetPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();
    const handleResetPassword = () => {
      if (!email || !password || !confirmPassword) {
        Alert.alert("Invalid Input", "Email and password are required");
        return;
      }
  
      if (password !== confirmPassword) {
        Alert.alert("Invalid Input", "Passwords do not match");
        return;
      }
  
      const user = {
        email: email,
        password: password,
      };
  
      // send a POST  request to the backend API to register the user
      axios
        .post(`${API_BASE_URL}/reset-password`, user)
        .then((response) => {
          console.log(response);
          Alert.alert(
            "Password Reset Successful",
            "Your password has been reset successfully"
          );
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(
            "Password Reset Error",
            "An error occurred while resetting the password"
          );
          console.log("password reset failed", error);
        });
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 10,
          alignItems: "center",
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#ff0000", fontSize: 25, fontWeight: "600" }}>
              Forget Password?
            </Text>
  
            <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>
              Enter your email to reset your password
            </Text>
          </View>
  
          <View style={{ marginTop: 50 }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
                Email
              </Text>
  
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="enter Your Email"
              />
            </View>
  
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
                Password
              </Text>
  
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="Password"
              />
            </View>
  
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
                Confirm Password
              </Text>
  
              <TextInput
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry={true}
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="Confirm Password"
              />
            </View>
  
            <Pressable
              onPress={handleResetPassword}
              style={{
                width: 200,
                backgroundColor: "#ff0000",
                padding: 15,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Reset Password
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "blue", fontSize: 16 }}>
                Back to Sign in
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  };
  
  export default ResetPasswordScreen;
  
  const styles = StyleSheet.create({});
  