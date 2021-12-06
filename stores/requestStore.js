import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class RequestStore {
  requests = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRequests = async () => {
    try {
      const res = await instance.get("/request");
      this.requests = res.data;
      this.loading = false;
    } catch (error) {
      console.log("requestStore --> fetchRequests", error);
    }
  };

  deleteRequest = async (requestId, navigation) => {
    try {
      await instance.delete(`/request/${requestId}`);
      this.requests = this.requests.filter((request) => request._id !== requestId);
      navigation.navigate("Timeline");
    } catch (error) {
      console.log(error);
    }
  };
}

const requestStore = new RequestStore();
requestStore.fetchRequests();
export default requestStore;
