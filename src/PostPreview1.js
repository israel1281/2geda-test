import React from "react";
import { useNavigate } from "react-router-dom";
import { ShowPost, CommentOnPost } from "./Api/Feed";
import ReactLoading from "react-loading";
import { LikePost, DislikePost } from "./Api/Feed";
import { Carousel } from "antd";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

export const PostPreview1 = ({}) => {
  const [loading, setLoading] = React.useState(false);
  const [userPost, setUserPost] = React.useState([]);
  const [userImages, setUserImages] = React.useState([]);
  const [postComments, setPostComments] = React.useState([]);
  const [comments, setComments] = React.useState("");
  const [userVideos, setUserVideos] = React.useState([]);
  const [content, setContent] = React.useState(false);

  const postId = localStorage.getItem("postId");
  const access_token = sessionStorage.getItem("access_token");

  React.useEffect(() => {
    ShowPost(
      postId,
      access_token,
      setUserPost,
      setPostComments,
      setUserImages,
      setUserVideos
    );
    console.log(userImages);
    console.log(postComments);
    if (userImages.img === null || userVideos.video === null) {
      setContent(false);
    } else {
      setContent(true);
    }
  }, [userPost]);

  const handleChangeInput = (e) => {
    setComments(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <PostPreviewRoot>
      <WhiteFlexRow></WhiteFlexRow>
      <FlexRow>
        <Text2>Post</Text2>
        <X
          onClick={() => {
            localStorage.removeItem("postId");
            navigate("/home");
          }}
          src={"https://file.rendit.io/n/FbRyDn2ZAz7fZrm5v7SS.svg"}
        />
      </FlexRow>
      <FlexRow1>
        <Ellipse src={userPost.profile_pic} />
        <FlexColumn>
          <Element5>
            <Text3>{userPost.name}</Text3>
            <Text4>@{userPost.poster_username}</Text4>
          </Element5>
          <Text5>Lagos, Nigeria</Text5>
        </FlexColumn>
      </FlexRow1>
      <Paragraph>
        {userPost.post}
        <br />
        <br />
        <Text11>www.ileifetech.com/freshmen</Text11>
      </Paragraph>
      {setContent ? (
        <div
          style={{
            width: "100%",
            margin: "0px auto 0px auto"
          }}
        >
          <Fade>
            {userImages.map((image, index) => {
              return (
                <div
                  style={{
                    margin: "0px auto 0px auto"
                  }}
                  key={index}
                >
                  <UnsplashsqPLlXc src={image.img} />
                </div>
              );
            })}
            {userVideos.map((video, index) => {
              return (
                <div
                  style={{
                    margin: "0px auto 0px 3%",
                    alignSelf: "center"
                  }}
                  key={index}
                >
                  <video
                    style={{
                      width: "95%",
                      margin: "0px auto 0px auto"
                    }}
                    src={video}
                    controls
                  />
                </div>
              );
            })}
          </Fade>
        </div>
      ) : null}
      <FlexRow2>
        <FlexRow3>
          <FlexColumn1>
            <Image6 src={"https://file.rendit.io/n/Cra5KuDS55BoNEosvUDQ.svg"} />
            <Text6>{userPost.likes}</Text6>
          </FlexColumn1>
          <FlexColumn2>
            <Image7 src={"https://file.rendit.io/n/HZCuVNrGfwZpTvLLBvtK.svg"} />
            <Text7>{userPost.total_comments}</Text7>
          </FlexColumn2>
          <FlexColumn3>
            <Element6>
              <Image8
                src={"https://file.rendit.io/n/Bpm67gJ5DCoHw0G9Jx7M.svg"}
              />
              <Image9
                src={"https://file.rendit.io/n/NdOi4ZZjrXlWWcBM2BZJ.svg"}
              />
              <Image10
                src={"https://file.rendit.io/n/8PnfcdhNaQcp440WLBlC.svg"}
              />
              <Image11
                src={"https://file.rendit.io/n/H98r8iUuGApkX39a3HpX.svg"}
              />
            </Element6>
            <Element7>
              <Text8>1.3K</Text8>
              <Text9>5</Text9>
            </Element7>
          </FlexColumn3>
        </FlexRow3>
        {/*<Text10>1hr ago</Text10>*/}
      </FlexRow2>
      <Line4 src={"https://file.rendit.io/n/csyQ97WPwwHSSwapigB5.svg"} />
      <PurpleHeartText>Comments</PurpleHeartText>
      {postComments.map((comment, index) => {
        return (
          <>
            <FlexColumn4 key={index} margin={"0px 0px 9.8px 10px"}>
              <FlexRow4>
                <Ellipse1 src={comment.profile_pic} />
                <FlexColumn5>
                  <Text12>{comment.name}</Text12>
                  <Text13>{comment.commenter_username}</Text13>
                  <AbujaNigeria>Abuja,{"  "}Nigeria</AbujaNigeria>
                </FlexColumn5>
              </FlexRow4>
              <Paragraph1>{comment.comment}</Paragraph1>
            </FlexColumn4>
            <Line src={"https://file.rendit.io/n/5kOEUCmfaDYk8mWEpLzJ.svg"} />
          </>
        );
      })}
      <Text20>Next</Text20>
      <FlexColumn12>
        <Text21>Comment</Text21>
        <Element8
          type="text"
          name="comments"
          value={comments}
          onChange={handleChangeInput}
          placeholder="Your comment goes here"
        />
        {!loading ? (
          <FlexRow9
            onClick={() => {
              CommentOnPost(comments, userPost.id, access_token, setLoading);
            }}
          >
            <Text23>Post</Text23>
          </FlexRow9>
        ) : (
          <FlexRow9>
            <ReactLoading
              type="cylon"
              color="#fff"
              height={20}
              width={20}
              marginTop={20}
            />
          </FlexRow9>
        )}
      </FlexColumn12>
    </PostPreviewRoot>
  );
};
const PostPreviewRoot = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: flex-start;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const WhiteFlexRow = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px 13px 0px;
  margin: 0px 0px 24px 0px;
`;
const FlexRow = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 27px 0px 20px;
  margin: 0px 0px 6px 0px;
`;
const Text2 = styled.div`
  font-size: 23px;
  font-family: Ubuntu;
  font-weight: 700;
  color: #4e0ca2;
`;
const X = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-end;
`;
const FlexRow1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin: 0px 0px 16px 20px;
`;
const Ellipse = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const FlexColumn = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2px;
  flex-grow: 1;
  align-items: flex-start;
  padding: 3px 0px;
`;
const Element5 = styled.div`
  align-self: stretch;
  height: 28px;
  position: relative;
  min-width: 180px;
`;
const Text3 = styled.div`
  width: 180px;
  height: 19px;
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 500;
  position: absolute;
`;
const Text4 = styled.div`
  width: 115px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 400;
  position: absolute;
  top: 18px;
`;
const Text5 = styled.div`
  width: 110px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 300;
  margin: 0px 0px 0px 1px;
`;
const UnsplashsqPLlXc = styled.img`
  width: 100%;
  background-size: cover;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 0px;
  margin: 0px auto 0px auto;
`;
const Image5 = styled.img`
  width: 41px;
  height: 39.76px;
`;
const FlexRow2 = styled.div`
  align-self: stretch;
  height: 40.4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 19px;
  margin: 10px 0px 16.1px 0px;
`;
const FlexRow3 = styled.div`
  width: 184px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px 0px 0.1px 0px;
`;
const FlexColumn1 = styled.div`
  width: 24.75px;
  display: flex;
  flex-direction: column;
  gap: 4.75px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0px 30.25px 0px 0px;
`;
const Image6 = styled.img`
  width: 24.75px;
  height: 24.25px;
`;
const Text6 = styled.div`
  width: 20.8px;
  height: 10.3px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
`;
const FlexColumn2 = styled.div`
  width: 20.79px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6.3px;
  flex-grow: 1;
  align-items: center;
  margin: 0px 30.21px 0px 0px;
`;
const Image7 = styled.img`
  width: 20.79px;
  height: 20.7px;
`;
const Text7 = styled.div`
  width: 17px;
  height: 10.3px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 1.79px 0px 0px;
`;
const FlexColumn3 = styled.div`
  width: 25.46px;
  display: flex;
  flex-direction: column;
  gap: 5.22px;
  justify-content: center;
  flex-grow: 1;
`;
const Element6 = styled.div`
  height: 23.78px;
  position: relative;
  min-width: 25.46px;
`;
const Image8 = styled.img`
  width: 7.43px;
  height: 17.27px;
  position: absolute;
  top: 4px;
  left: 71px;
`;
const Image9 = styled.img`
  width: 17.37px;
  height: 8.78px;
  position: absolute;
  top: 15px;
  left: 53px;
`;
const Image10 = styled.img`
  width: 14.46px;
  height: 13.05px;
  position: absolute;
  left: 54px;
`;
const Image11 = styled.img`
  width: 25.46px;
  height: 23.42px;
  position: absolute;
`;
const Element7 = styled.div`
  height: 10.3px;
  position: relative;
  min-width: 25.46px;
`;
const Text8 = styled.div`
  width: 20.8px;
  height: 10.3px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  position: absolute;
  left: 54px;
`;
const Text9 = styled.div`
  width: 6.61px;
  height: 10.3px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  position: absolute;
  left: 10px;
`;
const Text10 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
`;
const Line4 = styled.img`
  width: 373.5px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 14.5px 0px;
`;
const Paragraph = styled.div`
  height: 59px;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px 0px 35px 19px;
  white-space: pre-wrap;
`;
const Text11 = styled.div`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #4e0ca2;
  display: contents;
`;
const PurpleHeartText = styled.div`
  display: flex;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
  align-self: center;
  width: 134px;
  height: 30px;
  background-color: #4e0ca2;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  padding: 9px 0px 8px 0px;
  margin: 0px 0px 27px 0px;
`;
const Line = styled.img`
  width: 323px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 10px 0px;
`;
const Line3 = styled.img`
  width: 323px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 23.5px 29px 0px;
`;
const Text20 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 23px 24px 0px;
`;
const FlexColumn12 = styled.div`
  width: 90%;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  height: 140px;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  padding: 9px 10px 100px 10px;
  margin: 0px auto 10% auto;
`;
const Text21 = styled.div`
  width: 49px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 4px 3px;
`;
const Element8 = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  margin: 0px auto 10px auto;
  border-radius: 10px;
`;
const Text22 = styled.div`
  width: 114px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 13px;
  left: 9px;
`;
const FlexRow8 = styled.div`
  width: 326px;
  background-image: url("https://file.rendit.io/n/aVzrMdMtSU9IOf6MnPRh.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const FlexRow9 = styled.button`
  width: 30%;
  background-image: url("https://file.rendit.io/n/LD1SZKHm878BKZB3YYOI.svg");
  background-size: cover;
  display: flex;
  border-radius: 10px;
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 18px 10px;
  margin: 2px;
`;
const Text23 = styled.div`
  width: 27px;
  height: 15px;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
`;
const Text24 = styled.div`
  width: 87px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-end;
  margin: 0px 4px 0px 0px;
`;
const FlexColumn4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7.2px;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5.33px;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 0px 0.13px 0px;
`;
const Ellipse1 = styled.img`
  width: 30.67px;
  height: 30.67px;
`;
const FlexColumn5 = styled.div`
  align-self: stretch;
  width: 74px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
`;
const Text12 = styled.div`
  font-size: 11px;
  font-family: Ubuntu;
  font-weight: 500;
  align-self: center;
  margin: 0px 0px 1px 0px;
`;
const Text13 = styled.div`
  width: 70.5px;
  height: 6.13px;
  font-size: 7px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0px 0px 3.87px 1px;
`;
const AbujaNigeria = styled.div`
  width: 67.5px;
  height: 6.13px;
  font-size: 6px;
  font-family: Ubuntu;
  font-weight: 300;
  margin: 0px 0px 0px 1px;
  white-space: pre-wrap;
`;
const Paragraph1 = styled.div`
  font-size: 10px;
  width: 90%;
  font-family: Ubuntu;
  font-weight: 300;
  margin: 0px 0px 0px 10%;
`;
const Line1 = styled.img`
  width: 323px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 23.5px 16px 0px;
`;
