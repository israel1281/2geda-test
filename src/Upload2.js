import React, { useEffect, useState } from "react";
import { Createpost } from "./Api/Feed";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import styled from "styled-components";

export const Upload2 = ({}) => {
  const [loading, setLoading] = useState(false);
  const [message_post, setMessage_post] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoURLs, setVideoURLs] = useState([]);

  const access_token = sessionStorage.getItem("access_token");

  const navigate = useNavigate();

  React.useEffect(() => {
    //loop through each image and convert to objecturl
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(images[i]);
      reader.onload = () => {
        setImageURLs((imageURLs) => [...imageURLs, reader.result]);
      };
    }
  }, [images]);

  React.useEffect(() => {
    //loop through each video and convert to objecturl
    for (let i = 0; i < videos.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(videos[i]);
      reader.onload = () => {
        setVideoURLs((videoURLs) => [...videoURLs, reader.result]);
      };
    }
  }, [videos]);

  const onImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i].type.includes("video")) {
        setVideos([...e.target.files]);
      } else if (e.target.files[i].type.includes("image")) {
        setImages([...e.target.files]);
      }
    }
  };

  const fileInput = React.useRef(null);

  const handleChangeInput = (e) => {
    setMessage_post(e.target.value);
  };

  return (
    <UploadRoot>
      <FlexRow>
        <FlexColumn>
          <Text1>Update your feed</Text1>
          <Text2>How are you doing today?</Text2>
        </FlexColumn>
        <X
          onClick={() => {
            navigate("/home");
          }}
          src={"https://file.rendit.io/n/MWlSeGqTqTvqjg8sNIwF.svg"}
        />
      </FlexRow>
      <Element1>
        <Text3>You can write up to 1,000 words</Text3>
        <SilverRectangle
          type="text"
          name="message_post"
          value={message_post}
          onChange={handleChangeInput}
          placeholder="You can write p to 1,000 words"
        />
      </Element1>
      <ManateeFlexRow
        onClick={() => {
          fileInput.current.click();
        }}
      >
        <Text4>Add images or Videos</Text4>
      </ManateeFlexRow>
      <input
        type="file"
        name=""
        multiple={true}
        ref={fileInput}
        accept="image/*, video/*"
        onChange={onImageChange}
        style={{ display: "none" }}
      />
      <FlexRow1>
        {imageURLs.map((image, index) => {
          return (
            <div key={index}>
              <Image1 src={image} />
            </div>
          );
        })}
        {videoURLs.map((video, index) => {
          return (
            <div key={index}>
              <Video1 src={video} controls />
            </div>
          );
        })}
      </FlexRow1>
      {!loading ? (
        <PurpleHeartText
          onClick={() => {
            Createpost(
              images,
              videos,
              message_post,
              access_token,
              setLoading,
              navigate
            );
          }}
        >
          Continue
        </PurpleHeartText>
      ) : (
        <PurpleHeartText>
          <ReactLoading
            type="cylon"
            color="#fff"
            height={40}
            width={40}
            marginTop={20}
          />
        </PurpleHeartText>
      )}
    </UploadRoot>
  );
};
const UploadRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  border-radius: 20px 20px 0px 0px;
`;
const FlexRow = styled.div`
  width: 100%;
  background-image: url("https://file.rendit.io/n/muImiViIGgfv3CfrtLX2.svg");
  background-size: cover;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 27px;
  align-items: flex-start;
  padding: 26px 27px 24px 27px;
  margin: 0px 0px 18px 0px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 25px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
`;
const Text2 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #ffffff;
  margin: 0px 0px 0px 10px;
`;
const X = styled.img`
  width: 32px;
  height: 32px;
  margin: 4px 0px 0px 0px;
`;
const Element1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 148px;
  margin: 0px 0px 13px 0px;
`;
const Text3 = styled.div`
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #bebbbb;
  position: absolute;
  top: 19px;
  left: 33px;
  display: none;
`;
const SilverRectangle = styled.textarea`
  width: 90%;
  height: 148px;
  background-color: rgba(196, 196, 196, 0.21);
  border-radius: 10px;
  margin: 0px auto;
  padding: 5px 0px 0px 10px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  ::focus {
    display: none;
  }
`;
const ManateeFlexRow = styled.div`
  width: 90%;
  background-color: rgba(165, 156, 172, 0.74);
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 18px 97px 18px 79px;
  margin: 0px 0px 24px 0px;
`;
const Text4 = styled.div`
  width: 100%;
  font-size: 11px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
`;
const FlexRow1 = styled.div`
  width: 100%;
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 0px 43px 0px 29px;
  margin: 0px 0px 24px 0px;
  overflow-x: auto;
`;
const UnsplashyPAZYqs = styled.div`
  background-image: url("https://file.rendit.io/n/ethodMDoXztDS8D9bDAy.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 25px 26.52px 24px;
`;
const Image2 = styled.img`
  width: 17px;
  height: 16.48px;
`;
const SilverSquare = styled.div`
  width: 66px;
  height: 66px;
  background-color: rgba(196, 196, 196, 0.1);
  border-radius: 5px;
`;
const Line = styled.img`
  width: 121px;
  height: 1px;
  margin: 0px 0px 11.5px 29.5px;
`;
const Line1 = styled.img`
  width: 121px;
  height: 1px;
  margin: 0px 0px 15.5px 29.5px;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: #ffffff;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 20px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 18px 0px;
  margin-top: 20%;
`;
const Image1 = styled.img`
  width: 100px;
  height: 100px;
`;
const Video1 = styled.video`
  width: 100px;
  height: 100px;
`;
