import { FaChessKnight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
    QdtSelections
} from 'qdt-components';
import QdtComponent from '../components/QdtComponent';
import { useState } from "react";

function AppHeader() {
    
    const [menuId, setMenuId] = useState(1)
    const [menuStyleNotUsed, setMenuStyleNotUsed] = useState("text-gray-300  ursor-not-allowed")
    const [menuStyle, setMenuStyle] = useState("text-gray-500 hover:text-gray-800")
    const [menuStyleSelected, setMenuStyleSelected] = useState("text-green-500 hover:text-green-800 border-b-2 pb-2 border-green-500")

    const CURSOR_NOT_ALLOWED = 0
    const MENU_HOME = 1;
    const MENU_TYLY = 2;
    const MENU_SalesBudget = 3;
    const MENU_SalesMargins = 4;
    const MENU_Performance = 5;
    const MENU_CO2 = 6;
    return (
        <>
            <nav className="flex justify-between border-b-2 pb-2 mb-4">
                <div>
                    <NavLink to="/home" >
                        <FaChessKnight className="text-4xl" />
                    </NavLink>
                </div>
                <div>
                    <ul className="flex text-xl ">
                        <li className="mr-6">
                            {/* <Link to="/dashboard02" className={menuId === MENU_HOME ? menuStyleSelected :menuStyle} >Home</Link> */}
                            <NavLink to="/home" className={menuStyle} activeClassName={menuStyleSelected} >Home </NavLink>
                        </li>
                        <li className="mr-6">
                            <NavLink to="/dashboard01" className={menuStyle} activeClassName={menuStyleSelected} >
                                TY vs LY Sales
                            </NavLink>
                        </li>
                        <li className="mr-6">
                            <NavLink to="/dashboard02" className={menuStyle} activeClassName={menuStyleSelected}  >Sales vs Budget</NavLink>
                        </li>
                    
                        <li className="mr-6">
                            <NavLink to="/dashboard03" className={menuStyle} activeClassName={menuStyleSelected} >Sales and Margin</NavLink>
                        </li>
                        <li className="mr-6">
                            <NavLink to="/dashboard04" className={menuStyle} activeClassName={menuStyleSelected} >Performance</NavLink>
                        </li>
                        <li className="mr-6">
                            <p  className={menuId === MENU_CO2 ? menuStyleNotUsed :menuStyleNotUsed}  >CO2 Emissions</p>
                            {/* <NavLink to="/cO2Emissions" className={menuId === MENU_CO2 ? menuStyleNotUsed :menuStyleNotUsed}  
                                onClick={() => setMenuId(MENU_CO2)}
                            >CO2 Emissions</NavLink> */}
                        </li>
                    
                    </ul>
                </div>
            </nav>
            {/* **** Selection **** */}
            <QdtComponent
                component={QdtSelections}
                properties={{
                    qSelectionObjectDef: {},
                }}
            />
        </>
    )
}

export default AppHeader
