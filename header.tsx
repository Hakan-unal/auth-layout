import { Layout, Col, Row, Popover, Breadcrumb, Typography } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider/authContext";
import { useContext, useEffect, useState } from "react";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { translator } from "../../languages/translator";
const { Header } = Layout;
const { Text } = Typography;

const Head: React.FC = (...props) => {
   const [navigation, setNavigation] = useState([]);
   const authContext = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const handleLogout = () => {
      authContext.signOut();
   };

   const handleNavigator = (path: string) => {
      const tempArr: any = [];

   

   useEffect(() => {
      if (!authContext.isSignedIn()) {
         navigate("/login");
      }

      handleNavigator(location.pathname);
   }, [location.pathname]);

   if (!authContext.isSignedIn()) return null;

   return (
      <Header style={{ marginTop: 0 }}>
         <Row align="middle" gutter={[12, 36]}>
            
            <Col span={2} offset={12}>
               <Popover content="Sign Out">
                  <AiOutlineLogout
                     className="cursorPointer"
                     onClick={handleLogout}
                     size={20}
                  />
               </Popover>
            </Col>
         </Row>
      </Header>
   );
};

export default Head;
