import React, { useContext } from "react";
import { Col, Layout, Row, theme } from "antd";
import Routers from "../../routers/routers";
import useWindowSize from "../hooks/useWindowSize";
import Header from "./header";
import Sidebar from "./sidebar";

import { AuthContext } from "../../providers/authProvider/authContext";

const { Content } = Layout;

const SiteLayout: React.FC = ({ children }: any) => {
   const authContext = useContext(AuthContext);

   const {
      token: { colorBgContainer },
   } = theme.useToken();

   const size = useWindowSize();

   return (
      <Layout>
         <Header />
         <Layout>
            <Sidebar />
            <Content
               style={{
                  margin: "24px 0px 24px 0px",
                  padding: 0,
                  minHeight:
                     size.height - (authContext.isSignedIn() ? 132 : 72),
                  background: colorBgContainer,
               }}
            >
               <Row justify={"center"}>
                  <Col span={22}>
                     // remember spa only content
                     <Routers />
                  </Col>
               </Row>
            </Content>
         </Layout>
      </Layout>
   );
};

export default SiteLayout;
