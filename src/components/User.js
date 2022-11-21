import React from "react";
import { Card } from "antd";
const User = ({ userData }) => {
  const { Meta } = Card;
  return (
    <div>
      {userData &&
        userData.length > 0 &&
        userData.map((user, index) => (
          <div key={index}>
            <Card>
              <div key={index}>
                <Meta
                  title={user.name}
                  description={[
                    <div key={index}>
                      <p> {user.email}</p>
                      <p>{user.phone}</p>
                      <p> {user.website}</p>
                    </div>
                  ]}
                />
              </div>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default User;
