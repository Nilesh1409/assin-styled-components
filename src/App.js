import "./styles.css";
import { Button, A } from "./component/Button";

export default function App() {
  return (
    <div className="App">
      <Button background="#42a1f5" border="none">
        Primery Button
      </Button>
      <Button>Default Button</Button>
      <Button border="dashed">Dashe Button</Button>
      <Button border="none">Text Button</Button>
      <Button border="none">
        {" "}
        <A color="black" decoration="none" href="www.google.com">
          Link Button
        </A>
      </Button>
    </div>
  );
}
