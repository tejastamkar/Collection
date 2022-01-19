import React from "react";
import "../Styles/Switcher.scss"
import '../Styles/Nav.css'
import { ToggleButton } from "react-bootstrap";



export function Switcher() {

  const [checked, setChecked] = React.useState(false);
  const [colorTheme, setColortheme] = React.useState("white");
  React.useEffect(() => {
    const currentThemeColor = localStorage.getItem("Color");
    if (currentThemeColor) {
      setColortheme(currentThemeColor);
    }
  }, []);
  const handleClick = ({ checked }) => {
    if (checked) {
      setColortheme("black");
      localStorage.setItem("Color", "black");
    } else {
      setColortheme("white");
      localStorage.setItem("Color", "white");
    }
  };
  function sets({ theme }) {
    return (


      <ToggleButton
        className={`${theme}`}
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => {
          setChecked(e.currentTarget.checked)
          handleClick({ checked })
        }}
      >
        DarkMode
      </ToggleButton>
    );
  }

  return { sets, colorTheme, setColortheme };
}
