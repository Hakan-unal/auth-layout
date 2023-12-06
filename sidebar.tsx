// @ts-nocheck
// remember sider switch visible without redux
import { Divider, Layout } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AxisCard from "../core/axisCard";
import { Column } from "@ant-design/charts";
import { AiOutlineClose } from "react-icons/ai";
import { numberFormatter } from "../functions/numberFormatter";
import { useDispatch, useSelector } from "react-redux";
import { COLLAPSED_CHANGED } from "../../redux/constants";

const { Sider } = Layout;

const Sidebar: React.FC = (...props) => {
   const location = useLocation();
   const dispatch = useDispatch();
   const axisReduxState = useSelector((globalState: any) => globalState);
   const [simGraphData, setSimGraphData] = useState<any>([]);
   const [baseGraphData, setBaseGraphData] = useState<any>([]);

   const handleSidebar = () => {
      dispatch({
         type: COLLAPSED_CHANGED,
         collapsed: !axisReduxState?.axis?.collapsed,
      });
   };

   useEffect(() => {
      calculator();
   }, [axisReduxState]);

   if (location.pathname !== "/simulation/create") return null;

   return (
      <Sider
         collapsed={!axisReduxState?.axis?.collapsed}
         style={{ marginTop: 24 }}
         width={300}
         collapsedWidth={0}
         theme="light"
      >
         <AxisCard
            size="small"
            extra={
               <AiOutlineClose
                  size={20}
                  className="cursorPointer"
                  onClick={handleSidebar}
               />
            }
            title={axisReduxState?.axis?.object?.name}
         >
            <Column {...config} data={baseGraphData} />
         </AxisCard>
         <Divider />
      </Sider>
   );
};

export default Sidebar;
