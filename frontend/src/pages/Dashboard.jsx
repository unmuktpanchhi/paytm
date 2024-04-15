import { Appbar } from "../components/Appbar";
import { Users } from "../components/Users";
import { Balance } from "../components/balance";
export const Dashboard = () => {
    return <> 
      <Appbar></Appbar>
      <div className="m-8">
        <Balance value={"10,000"}></Balance>
        <Users></Users> 
      </div>
    </>
}