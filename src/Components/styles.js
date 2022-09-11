import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  scrollableModal: {
    height: 300
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    marginTop: 150
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  }
});
