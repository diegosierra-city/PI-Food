import { useNavigate } from "react-router-dom";


export default function FormUser(props) {

 const navigate = useNavigate();

 const logOut = () => {
props.setAcess(false)
navigate('/')
 }

 return (
  <h2>FormUser</h2>
 )
 }