import ButtonAtom from "../../../../Components/Atoms/Button";
import useToken from "../../../Security/Hooks/Token";

const DashboardPage = () => {
  const token = useToken();
  console.log(token);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{token}</p>
      <br />
      <ButtonAtom
        className="btn btn-primary"
        text="Consultar el backend"
        onClick={() => {
          window.location.href = "/logout";
        }}
      />
    </div>
  );
};

export default DashboardPage;
