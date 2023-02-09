import { useEffect, useState } from 'react';
import './NavBar.scss';
import { Link, useLocation } from "react-router-dom";

const headersData = [
  {
    label: "Landing",
    id: "landing",
    link: ""
  },
  {
    label: "Weather",
    id: "weather",
    link: "weather"
  }
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(pathName);
  }, [])

  const pathName = (): string => {
    return location.pathname;
  }

  return (
    <>
      <ul className="sesamm-app__nav-bar">
        {headersData.map(item => (
          <li key={item.id} className={activeTab === `/${item.link}` ? "sesamm-app__nav-bar__element-active": "sesamm-app__nav-bar__element"} onClick={() => setActiveTab(`/${item.link}`)} >
            <Link to={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavBar;