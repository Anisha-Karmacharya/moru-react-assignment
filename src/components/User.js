import React from "react";
import { Row, Col, Card } from "antd";
const User = ({ userData }) => {
  const { Meta } = Card;
  return (
    <div>
      <Row gutter={[16, 16]}>
        {userData &&
          userData.length > 0 &&
          userData.map((user, index) => (
            <div key={index}>
              <Col>
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
                          <p> {user.email}</p>
                          <p>{user.phone}</p>
                          <p> {user.website}</p>
                        </div>,
                      ]}
                    />
                </Card>
              </Col>
            </div>
          ))}
      </Row>
    </div>
  );
};

export default User;
