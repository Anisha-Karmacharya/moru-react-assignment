import React, { useState } from "react";
import { Row, Col, Card, Modal, Form, Input } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import axios from "axios";
const User = ({ userData, handleFavorite, openNotification }) => {
  const { Meta } = Card;
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [form] = Form.useForm();

  // EDIT USER DATA
  const handleEdit = async (e, index) => {
    const getRequest = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${e}`
    );
    const { data } = getRequest;
    setUserInfo({ ...data, index });
    setOpen(true);
    form.setFieldsValue(data);
  };
  const onEdit = async (e) => {
    const { index, ...data } = userInfo;
    const body = {
      ...data,
      ...e,
    };
    userData[index] = { ...body };

    setOpen(false);
  };
  //   EDIT MODAL
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onEdit(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        title="Edit User"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="editUser" form={form} initialValues={userInfo}>
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
                  user.isFavorite === true ? (
                    <HeartFilled
                      key="de-favorite"
                      style={{ color: "red" }}
                      onClick={() => {
                        handleFavorite(user.id);
                        openNotification("Removed from favorite");
                      }}
                    />
                  ) : (
                    <HeartOutlined
                      key="favorite"
                      style={{ color: "red" }}
                      onClick={() => {
                        handleFavorite(user.id);
                        openNotification("Added to favorite");
                      }}
                    />
                  ),
                  <EditOutlined
                    key="edit"
                    onClick={(e) => handleEdit(user.id, index)}
                  />,
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
