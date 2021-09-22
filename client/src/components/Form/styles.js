import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '2% 7%',
    },
  },
  paper: {
    padding: '5px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));