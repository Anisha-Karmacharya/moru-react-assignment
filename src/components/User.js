import React , {useState} from "react";
import { Row, Col, Card, Modal, Form, Input, notification  } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";
const User = ({ userData }) => {
  const { Meta } = Card;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
//   EDIT MODAL
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  }
// FAVORITE NOTIFICATION
  const openNotification = () => {
    notification.open({
      message: 'Sucess',
      description:
        'Data added to favorite',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  return (
    <div>
      <Modal
        title="Edit User"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form name="editUser">
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"website"}
            label="Website"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
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
                actions={[
                  <HeartOutlined key="favorite" style={{ color: "red" }} onClick={openNotification}/>,
                  <EditOutlined key="edit" onClick={showModal} />,
                  <DeleteFilled key="delete" />,
                ]}
              >
                <Meta
                  title={user.name}
                  description={[
                    <div key={index}>
                      <p>
                        {" "}
                        <MailOutlined /> {user.email}
                      </p>
                      <p>
                        <PhoneOutlined /> {user.phone}
                      </p>
                      <p>
                        <GlobalOutlined /> {user.website}
                      </p>
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
