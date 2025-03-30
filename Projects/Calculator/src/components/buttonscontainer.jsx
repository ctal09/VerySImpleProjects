import styles from "./buttonscontainer.module.css";
import styles1 from "./buttons.module.css";
function ButtonContainer({ onButtonClick }) {
  let buttons = [
    "AC",
    "X",
    "%",
    "C",
    "9",
    "8",
    "7",
    "*",
    "6",
    "5",
    "4",
    "-",
    "3",
    "2",
    "1",
    "+",
    ".",
    "0",
    "00",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonsCon}>
        {buttons.map((buttonName) => (
          <button
            onClick={() => onButtonClick(buttonName)}
            className={styles1.buttons}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}
export default ButtonContainer;
