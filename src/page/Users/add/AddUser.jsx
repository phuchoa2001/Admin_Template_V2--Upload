import React, { useEffect, useState } from "react";
import { Form, Button, Spin, Input, Select } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import WrapperMaindash from "../../../components/WrapperMaindash";
import InputForm from "../../../components/form/Input";
import styled from "styled-components";
import Permission from "../../../components/permission/Permission";
import { userApi } from "../../../api/userApi";

import { validatorEmail, validatorPassword, validatorSelect } from "../../../helper/commonValidator";
import { permissionOption } from "../../../constants/permission";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 10px 0px;
`;

function AddUser() {
  const [form] = Form.useForm();
  const history = useHistory();
  const { id } = useParams();
  const [isloading, setIsloading] = useState(false);

  const onFinish = async (values) => {
    const res = id ? await userApi.put({ data: values, id }) : await userApi.add(values);
    const { status } = res.data;

    if (status !== 500 || !status) {
      history.goBack();
      return
    }
    toast.error("Server bị lỗi")
  };
  async function fetchApi(id) {
    const { data } = await userApi.getId(id);
    form.setFieldsValue({ ...data });
    setIsloading(false);
  }
  useEffect(() => {
    setIsloading(true);
    if (id) {
      fetchApi(id);
    } else {
      setIsloading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WrapperMaindash title={id ? "Sửa tài khoản" : "Thêm tài khoản"}>
      {!isloading ? (
        <Form
          name="control-hooks"
          onFinish={onFinish}
          className="form"
          form={form}
        >
          <InputForm
            name="username"
            label="Tài khoản"
            placeholder="Phuchoa00"
            autoFocus
          />
          <Form.Item
            name={"email"}
            label={"Nhập Email"}
            rules={[
              {
                required: false,
                validator(_, value) {
                  return validatorEmail(value);
                }
              }
            ]}
            {...layout}
          >
            <Input
              placeholder={"phuchoa00@gmail.com"}
              bordered={false}
            />
          </Form.Item>
          {!id &&
            <Form.Item
              name={"password"}
              label={"Nhập mật khẩu"}
              rules={[
                {
                  required: false,
                  validator(_, value) {
                    return validatorPassword(value);
                  }
                }
              ]}
              {...layout}
            >
              <Input
                placeholder={"*********"}
                bordered={false}
              />
            </Form.Item>
          }
          <Form.Item
            name={"permission"}
            label={"Quyền"}
            rules={[
              {
                required: false,
                validator(_, value) {
                  return validatorSelect(value, permissionOption.map(item => item.value));
                }
              }
            ]}
            initialValue="CLIENT"
            {...layout}
          >
            <Select
              options={permissionOption}
              style={{
                width: 250,
              }}
            />
          </Form.Item>
          <Permission roles={["ADMIN"]} noAccess={null}>
            <WrapperStyle>
              <Button type="primary" htmlType="submit">
                {id ? "Sửa tài khoản" : "Thêm tài khoản"}
              </Button>
            </WrapperStyle>
          </Permission>
        </Form>
      ) : (
        <Spin />
      )}
    </WrapperMaindash>
  );
}

export default AddUser;
