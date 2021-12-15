import { makeAutoObservable, runInAction } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      this.user = decode(token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 20 ~ AuthStore ~ setUser= ~ error",
        error
      );
    }
  };

  signup = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      navigation.replace("Timeline");
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
      toast.show({
        status: "error",
        title: "Invalid Signup",
        description: "The username or password you entered is incorrect",
      });
    }
  };

  signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signin", user);
      this.setUser(res.data.token);
      navigation.replace("Timeline");
    } catch (error) {
      toast.show({
        status: "error",
        title: "Invalid Signin",
        description: "The username or password you entered is incorrect",
      });
    }
  };

  logOut = async (navigation) => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;

      navigation.replace("Signin");
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const user = decode(token);
        const userExp = user.exp;
        if (userExp > Date.now()) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 82 ~ AuthStore ~ error",
        error
      );
    }
  };

  editUser = async (updatedProfileId, updatedProfile, toast) => {
    try {
      const res = await instance.put(`/${updatedProfileId}`, updatedProfile);

      runInAction(() => {
        this.user = res.data;
      });

      toast.show({
        title: "Profile Updated",
        status: "success",
        placement: "top",
      });
    } catch (error) {
      console.error("authStore --> updateProfile", error);
      console.log(updatedProfile);
      toast.show({
        title: "Unauthorized",
        status: "error",
        description: "You can only edit your profile. ",
        placement: "top",
      });
    }
  };

  updateScore = async () => {
    try {
      const res = await instance.put("/score");
      this.user = res.data;
    } catch (error) {
      console.log("authStore --> updateScore", error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
