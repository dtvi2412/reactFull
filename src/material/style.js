import { makeStyles } from "@material-ui/core";

const usestyle = makeStyles((theme) => ({
  content: {
    backgroundColor: "red",
    color: "#ffffff",
    "& span": {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 30,
  },
}));
export default usestyle;
