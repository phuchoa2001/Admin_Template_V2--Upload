import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { Image } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const UploadStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UploadStyle = styled(Upload)`
  .BoxImage {
    height: 400px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    cursor: pointer;
  }
`;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadForm = ({ value, onChange, aspect , accept }) => {
  const [base64, setBase64] = useState(value);
  const beforeUpload = async (file) => {
    const Image = await getBase64(file);
    onChange(file);
    setBase64(Image);
  };

  return (
    <UploadStyles>
      <ImgCrop modalWidth={500} aspect={aspect}>
        <UploadStyle beforeUpload={beforeUpload} maxCount={1}>
          {base64 ? (
            <Image width={400} src={base64} preview={false} />
          ) : (
            <div className="BoxImage">
              <PlusOutlined />
            </div>
          )}
        </UploadStyle>
      </ImgCrop>
    </UploadStyles>
  );
};

export default UploadForm;
