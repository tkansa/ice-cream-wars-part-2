import './Ad.css';
interface Props {
    flavor: string;
    darkMode: boolean;
    fontSize: number;
}

function Ad({ flavor, darkMode, fontSize}: Props) {
    let darkModeClass = "";
    if(darkMode){
        darkModeClass = " dark-mode";
    }
    const fontStyles = {
        fontSize: fontSize + "px"
    }
  return (
    <div className={"Ad" + darkModeClass}>
        <p>Vote for:</p>
        <p style={fontStyles}>{flavor}</p>
      
    </div>
  );
}

export default Ad;