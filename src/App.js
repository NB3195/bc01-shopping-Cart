import StateLessComponent from "./demo-components/StateLessComponent";
import StateFullComponent from "./demo-components/StateFullComponent";
import ExampleDivComponent from "./example-div-component/index";
import DemoDataBinding from "./data-binding/DemoDataBinding";
import DemoHandleEvents from "./handle-events/DemoHandleEvents";
import DemoLogin from "./demo-login/DemoLogin";
import AppShowRoomCar from "./show-room-car/AppShowRoomCar";
import Parent from "./demo-props/Parent";
import DemoListsAndKeys from "./list-and-key/DemoListsAndKeys";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import xucxacApp from "./xuc-xac-app/xucxacApp";
import "./App.css";

function App() {
  return (
    <div>
      {/* gọi component */}
      {/* <StateLessComponent />
      <StateFullComponent /> */}
      {/* <ExampleDivComponent /> */}
      {/* <DemoDataBinding></DemoDataBinding> */}
      {/* <DemoHandleEvents></DemoHandleEvents> */}
      {/* <DemoLogin /> */}
      {/* <AppShowRoomCar /> */}
      {/* <Parent /> */}
      {/* <DemoListsAndKeys /> */}
      {/* <ShoppingCart /> */}
      <xucxacApp />
    </div>
  );
}

export default App;
