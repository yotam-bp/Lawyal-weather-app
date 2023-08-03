import { useState, useEffect } from "react";
import { ReactComponent as Broken } from "../assets/icons/broken-image.svg";

const importSvgAsComponent = (svgFilePath) => {
  const [SvgComponent, setSvgComponent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { ReactComponent } = await import(svgFilePath);
        setSvgComponent(() => ReactComponent);
      } catch (error) {
        console.error("Error importing SVG:", error);
        setError(true);
      }
    };

    importSvg();
  }, [svgFilePath]);

  return SvgComponent ? <SvgComponent fill="#2f2f2f" /> : <Broken />;
};

const LocationCardSvg = ({ weatherIcon }) => {
  const svgName = `../assets/icons/${weatherIcon}.svg`;
  const svgIcon = importSvgAsComponent(svgName);

  return <span>{svgIcon}</span>;
};

export default LocationCardSvg;
