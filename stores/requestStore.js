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
      this.requests = this.requests.filter(
        (request) => request._id !== requestId
      );
      toast.show({
        title: "Request Deleted",
        status: "success",
        placement: "top",
      });
      navigation.navigate("Timeline");
    } catch (error) {
      console.log(error);
    }
  };
      console.log(error)
    }}
    

  createRequest = async (newRequest, toast) => {
    try {
      const res = await instance.post("/request", newRequest);
      this.requests.push(res.data);
      toast.show({
        title: "Request Created",
        status: "success",
        placement: "top",
      });
    } catch (error) {
      console.log("requestStore --> createRequest", error);
      toast.show({
        title: "Try Again",
        status: "error",
        description:
          "Please try again to create a new request and make sure you are signed in.",
        placement: "top",
      });
    }
  };

  editRequest = async (requestId, updatedRequest, toast, navigation) => {
    try {
      // if (user._id === requestId.owner._id) {
      const res = await instance.put(`/request/${requestId}`, updatedRequest);
      this.requests = this.requests.map((request) =>
        request._id === requestId ? res.data : request
      );
      toast.show({
        title: "Request Updated",
        status: "success",
        placement: "top",
      });
      navigation.navigate("Timeline");
      // } else {
      //   toast.show({
      //     title: "Unauthorized",
      //     status: "error",
      //     description: "You are not the owner of this request",
      //     placement: "top",
      //   });
      // }
    } catch (error) {
      console.log("requestStore --> editRequest", error);
    }
  };
}

const requestStore = new RequestStore();
requestStore.fetchRequests();
export default requestStore;
