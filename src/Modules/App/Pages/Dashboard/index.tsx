import ButtonAtom from "../../../../Components/Atoms/Button";
import useToken from "../../../Security/Hooks/Token";

const DashboardPage = () => {
  const token = useToken();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{token}</p>
      <br />
      <ButtonAtom
        className="btn btn-primary"
        text="Consultar el backend"
        onClick={() => {
          fetch("http://localhost:3000/protected", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      />
    </div>
  );
};

export default DashboardPage;
