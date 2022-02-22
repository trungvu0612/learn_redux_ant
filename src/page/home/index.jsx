import { Carousel, Col, Layout, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MenuMain from "../../component/menuMain";

export default function Home(params) {
  const { Header, Footer, Sider, Content } = Layout;

  const style = { background: "#0092ff", margin: "5px 0", height: "50px" };

  const contentStyle = {
    height: "20vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get("https://621459ae89fad53b1f113907.mockapi.io/api/user")
      .then((response) => {
        setName(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(name.map((name, i) => name.name));
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider>
          <MenuMain />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ margin: "0px 5px" }}>
            <Carousel effect>
              {name.map((name, id) => (
                <div>
                  <h3 key={id} style={contentStyle}>
                    {name.name}
                  </h3>
                </div>
              ))}
            </Carousel>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {name.map((name, id) => (
                <Col className="gutter-row" span={6}>
                  <div style={style}>{name.name}</div>
                </Col>
              ))}
              {/* <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
              </Col> */}
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      <Layout></Layout>
    </>
  );
}
