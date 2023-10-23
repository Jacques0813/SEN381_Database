import BlueButton from "../components/general/BlueButton";
import getTC from "../functions/DBOperations";

function TestingDB() {

    return (
        <BlueButton buttonText="Test DB" onClickFunction={getTC} height="5" width="10"/>
    )
}

export default TestingDB;