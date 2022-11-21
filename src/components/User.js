import React from "react";
import { Row, Col, Card } from "antd";
import {MailOutlined, PhoneOutlined, GlobalOutlined} from '@ant-design/icons';
const User = ({ userData }) => {
  const { Meta } = Card;
  return (
    <div>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        {userData &&
          userData.length > 0 &&
          userData.map((user, index) => (
            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              key={index}
            >
              <Card
                cover={
                  <img
                    alt="user-image"
                    src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
                  />
                }
              >
                <Meta
                  title={user.name}
                  description={[
                    <div key={index}>
                      <p> <MailOutlined /> {user.email}</p>
                      <p><PhoneOutlined /> {user.phone}</p>
                      <p><GlobalOutlined /> {user.website}</p>
                    </div>,
                  ]}
                />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default User;
