import store from "./store";
import { Provider } from "react-redux";
import Initialize from "./core/initialize";
import Robots from "@src/robots-hostel";

function App() {
  return (
    <Provider store={store}>
      <Initialize>
        <Robots />
      </Initialize>
    </Provider>
  );
}
export default App;
