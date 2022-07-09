import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormData from "form-data";
import { LikePost, DislikePost } from "./Api/Feed";
import { notification, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import axios from "axios";
export const Home3 = ({}) => {
  const initialState = {
    comments: ""
  };

  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState({});
  const [feedsArray, setFeedsArray] = useState([]);
  const [message_post, setMessage_post] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoURLs, setVideoURLs] = useState([]);
  const [isReadMore, setIsReadMore] = useState(true);
  const [files, setFiles] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("380px");
  const [sidebarWidth2, setSidebarWidth2] = useState("0px");
  const [commentData, setCommentData] = useState(initialState);
  const [userImages, setUserImages] = React.useState([]);
  const [userVideos, setUserVideos] = React.useState([]);

  const { comments } = commentData;

  React.useEffect(() => {
    for (let i = 0; i < feedsArray.length; i++) {
      setUserImages(feedsArray[i].video);
      console.log(userImages);
    }
  }, [userImages]);

  const navigate = useNavigate();

  const handleCommentInput = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const alert = (type, message) => {
    notification[type]({
      message: message,
      placement: "topLeft",
      duration: 4
    });
  };

  const sidebarStyle = openProfile
    ? {
        width: sidebarWidth,
        height: "100%",
        position: "fixed",
        Zindex: "1",
        top: "70px",
        right: "0",
        backgroundColor: "white",
        overflowX: "hidden",
        transition: "transform 0.5s ease-in-out"
      }
    : {
        width: sidebarWidth2
      };

  const commentSidebar = openComments
    ? {
        width: sidebarWidth,
        height: "100%",
        position: "fixed",
        Zindex: "1",
        top: "70px",
        right: "0",
        backgroundColor: "white",
        overflowX: "hidden",
        transition: "transform 0.5s ease-in-out"
      }
    : {
        width: sidebarWidth2
      };

  const access_token = sessionStorage.getItem("access_token");

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
    localStorage.setItem(
      "followersId",
      feedsArray.map((feed) => {
        return feed.poster_id;
      })
    );
  };

  const handleOpenComments = () => {
    setOpenComments(!openComments);
  };

  const fileInput = React.useRef(null);

  const handleInput = (e) => {
    setMessage_post(e.target.value);
  };

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
  }, [videoURLs]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const onVideoChange = (e) => {
    setVideos([...e.target.files]);
  };

  const handleReadMore = () => {
    if (isReadMore) {
      setIsReadMore(false);
    } else {
      setIsReadMore(true);
    }
  };

  const userId = sessionStorage.getItem("currentUser");

  const date = (date) => {
    const dateInSeconds = Date.parse(date);
    const currentDate = Date.now();
    const diff = currentDate - dateInSeconds;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    if (years > 0) {
      return `${years} years ago`;
    } else if (weeks > 0) {
      return `${weeks} weeks ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else if (seconds > 0) {
      return `${seconds} seconds ago`;
    }
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.2geda.net/api/feed/${userId}`)
      .then((res) => {
        //convert object data to array
        const feedsArray = Object.values(res.data);
        //set feeds array
        setFeedsArray(feedsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [feedsArray, userId]);

  return (
    <HomeRoot>
      <WhiteFlexColumn>
        <FlexRow>
          <GEDA src={"https://file.rendit.io/n/miW5VyDF9WzqHVrUbSgu.png"} />
          <FlexRow1>
            <Text2 placeholder={"Search names, products or services"} />
            <Search src={"https://file.rendit.io/n/b6pkbYwdUJLGi6eb9fHp.svg"} />
          </FlexRow1>
        </FlexRow>
        <AD src={"https://file.rendit.io/n/TRMmzFoTfjonHYI4tPLD.png"} />
      </WhiteFlexColumn>
      <Element19>
        {feedsArray.map((feed, index) => (
          <FlexColumn key={index}>
            <WhiteFlexColumn1>
              <FlexRow2>
                <Ellipse1 src={feed.profile_pic} alt="avatar" />
                <FlexColumn1>
                  <Element20>
                    <Text8>{feed.name}</Text8>
                    <Text9>{feed.poster_username}</Text9>
                  </Element20>
                  <Text10>Lagos, Nigeria</Text10>
                </FlexColumn1>
                <Text11>{date(feed.date)}</Text11>
              </FlexRow2>
              <Line src={"https://file.rendit.io/n/47tKoP9gay8BjMbTQ8GJ.svg"} />
              <Paragraph onClick={handleReadMore}>
                {isReadMore
                  ? feed.text.substring(0, 100) + "......"
                  : feed.text}
                <br />
                <br />
                <Text12>www.ileifetech.com/freshmen</Text12>
                {/*  <div
                  style={{
                    width: "100%",
                    margin: "0px auto 0px auto"
                  }}
                >
                  <Fade>
                    {userImages.map((img, index) => {
                      return (
                        <div
                          style={{
                            margin: "0px auto 0px auto"
                          }}
                          key={index}
                        >
                          <UnsplashsqPLlXc src={img.img} />
                        </div>
                      );
                    })}
                    {userVideos.map((vid, index) => {
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
                            src={vid}
                            controls
                          />
                        </div>
                      );
                    })}
                  </Fade>
                  </div>*/}
              </Paragraph>
              <Element21>
                <Image5
                  onClick={() => {
                    localStorage.setItem("postId", feed.id);
                    navigate("/post-preview");
                  }}
                  src={"https://file.rendit.io/n/nIkMGORp6lv3mxl5Iggr.svg"}
                />
                <Image6
                  src={"https://file.rendit.io/n/yyebmukVgtI32hSwsjwW.svg"}
                />
                {isLiked ? (
                  <Image7
                    onClick={() => {
                      LikePost(feed.id, access_token);
                    }}
                    src={"https://file.rendit.io/n/vqqnAuwvARHSTyjg0v8Z.svg"}
                  />
                ) : (
                  <Image7
                    src={"https://file.rendit.io/n/vqqnAuwvARHSTyjg0v8Z.svg"}
                  />
                )}
                <Image8
                  onClick={() => {
                    DislikePost(feed.id, access_token, feed.email);
                  }}
                  src={"https://file.rendit.io/n/XSbHmU2wfjJdNDDFALpn.svg"}
                />
                <Options
                  src={"https://file.rendit.io/n/3dp5Rw3BIST3qSWR0TEt.svg"}
                />
              </Element21>
              <FlexRow3>
                <Text14 margin={"0px 36px 0px 0px"}>
                  {feed.total_comments}
                </Text14>
                <Text15>115</Text15>
                <Text16>{feed.likes}</Text16>
                <Text14 margin={"0"}>{feed.dislikes}</Text14>
              </FlexRow3>
            </WhiteFlexColumn1>
            <WhiteFlexColumn2>
              <Text18>Comment</Text18>
              <Element22>
                <FlexRow4 placeholder="your comment goes here" />
                <FlexRow5>
                  <Text20>Post</Text20>
                </FlexRow5>
              </Element22>
              <Text21
                onClick={() => {
                  localStorage.setItem("postId", feed.id);
                  navigate("/post-preview");
                }}
              >
                See all comments
              </Text21>
            </WhiteFlexColumn2>
          </FlexColumn>
        ))}
      </Element19>
      <WhiteFlexRowBottom>
        <Home1
          onClick={() => {
            navigate("/home");
          }}
        >
          <House src={"https://file.rendit.io/n/2DxBpXpZ0DMwRunvChum.svg"} />
          <Text22>Home</Text22>
        </Home1>
        <Marketplace
          onClick={() => {
            navigate("/outlet");
          }}
          margin={"0px 40px 0px 0px"}
        >
          <Storefront
            src={"https://file.rendit.io/n/pQBqsOH6eAoyiE1bCr7W.svg"}
          />
          <Text23>Outlet</Text23>
        </Marketplace>
        <Marketplace margin={"0px 28px 0px 0px"}>
          <Storefront
            src={"https://file.rendit.io/n/1LfPkywGENZrPSIUbsCq.svg"}
          />
          <Text23>Profile</Text23>
        </Marketplace>
        <Messages2>
          <Image9 src={""} />
          <Messages1>
            <Text25>Messages</Text25>
            <FlexRow6>
              {[
                {
                  src: "https://file.rendit.io/n/kYHmIxYGTmfaFSiuXUoT.svg"
                },
                {
                  src: "https://file.rendit.io/n/kYHmIxYGTmfaFSiuXUoT.svg"
                },
                {
                  src: "https://file.rendit.io/n/kYHmIxYGTmfaFSiuXUoT.svg"
                }
              ].map((data) => (
                <Image10 src={data.src} />
              ))}
            </FlexRow6>
          </Messages1>
        </Messages2>
        <Marketplace margin={"0"}>
          <Storefront
            src={"https://file.rendit.io/n/NSfmJiOF3YoNc8z3Nkrr.svg"}
          />
          <Text23>Notification</Text23>
        </Marketplace>
      </WhiteFlexRowBottom>
      <Text13
        onClick={() => {
          navigate("/upload");
        }}
      >
        +
      </Text13>
    </HomeRoot>
  );
};
const HomeRoot = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const WhiteFlexColumn = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  z-index: 1;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 15px 18px 15px 19px;
  margin: 0px 0px 22px 0px;
`;
const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 13px;
  align-items: center;
  margin: 0px 0px 26px 0px;
`;
const GEDA = styled.img`
  width: 49px;
  height: 50px;
`;
const FlexRow1 = styled.div`
  border-width: 1px;
  border-color: rgba(40, 40, 40, 0.4);
  border-style: solid;
  width: 246px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-end;
  gap: 36px;
  align-items: center;
  border-radius: 5px;
  padding: 13px 9px 9px 9px;
  margin: 4px 0px 0px 0px;
`;
const Text2 = styled.input`
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  align-self: flex-start;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  :: placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  display: inline-block;
  outline-width: 0px;
`;
const Search = styled.img`
  width: 15px;
  height: 15px;
`;
const AD = styled.img`
  width: 100%;
  height: 79px;
`;
const Element19 = styled.div`
  width: 100%;
  margin: -8% 0px 18px 0px;
  overflow-y: auto;
`;
const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
`;
const Element21 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0% 0px 8.05px 0px;
`;
const UnsplashsqPLlXc = styled.img`
  width: 90%;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 0px 0px;
`;
const Options = styled.img`
  width: 33px;
  height: 11px;
  top: 204.5px;
  left: 278.5px;
`;
const Image5 = styled.img`
  width: 22px;
  height: 23px;
  top: 205px;
  left: 58px;
`;
const Image6 = styled.img`
  width: 26.95px;
  height: 26.95px;
  top: 203px;
  left: 168px;
`;
const Image7 = styled.img`
  width: 26.19px;
  height: 26.95px;
  top: 203px;
`;
const Image8 = styled.img`
  width: 26.95px;
  height: 26.02px;
  top: 203px;
  left: 112px;
`;
const WhiteFlexRowBottom = styled.div`
  box-shadow: 10px 0px 12px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 90%;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px 40px 26px;
`;
const Home1 = styled.div`
  width: 32px;
  height: 41px;
  align-self: flex-start;
  position: relative;
  margin: 0px 40px 0px 0px;
`;
const House = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
`;
const Text22 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 300;
  color: #4e0ca2;
  position: absolute;
  top: 30px;
  left: 2px;
`;
const Text13 = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  border-width: 0px;
  z-index: 1;
  font-size: 20px;
  color: #fff;
  margin: 150% 0px 0px 80%;
  background-image: url("https://file.rendit.io/n/X7RKaSYp4CPMe3fPfjjQ.svg");
`;
const Messages2 = styled.div`
  width: 44px;
  height: 43px;
  position: relative;
  margin: 0px 28px 0px 0px;
`;
const Image9 = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: -1601px;
  left: -1257px;
`;
const Messages1 = styled.div`
  width: 44px;
  height: 39px;
  position: absolute;
  top: 4px;
`;
const Text25 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(40, 40, 40, 0.5);
  position: absolute;
  top: 28px;
`;
const FlexRow6 = styled.div`
  width: 17.98px;
  background-image: url("https://file.rendit.io/n/WzixUI5zNK57p0mirFL8.svg");
  background-size: cover;
  position: absolute;
  top: -1px;
  left: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3px;
  align-items: center;
  padding: 10px 4px 12.98px 4px;
`;
const FlexRow12 = styled.div`
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 25px;
  align-items: flex-start;
  padding: 0px 8px;
`;
const FlexRow13 = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const Ellipse10 = styled.img`
  width: 50px;
  height: 50px;
`;
const FlexColumn5 = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2px;
  flex-grow: 1;
  align-items: flex-start;
  padding: 3px 0px;
`;
const Image17 = styled.img`
  width: 33px;
  height: 32px;
`;
const Text6 = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(12, 12, 12, 0.4);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.25);
  border-style: solid;
  width: 91px;
  height: 17px;
  position: absolute;
  top: -1px;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  padding: 6px 0px 7px 0px;
  left: ${(props) => props.left};
`;
const WhiteFlexColumn1 = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`;
const FlexRow2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Ellipse1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 4px 0px 0px;
  margin: 0px 8px 0px 0px;
`;
const Verified = styled.img`
  width: 14px;
  height: 14px;
`;
const FlexColumn1 = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
  flex-grow: 1;
  align-items: flex-start;
  padding: 7px 0px;
  margin: 0px 25px 0px 0px;
`;
const Element20 = styled.div`
  align-self: stretch;
  height: 28px;
  position: relative;
  min-width: 180px;
`;
const Text8 = styled.div`
  width: 180px;
  height: 19px;
  font-size: 14px;
  font-family: Ubuntu;
  font-weight: 500;
  position: absolute;
`;
const Text9 = styled.div`
  width: 115px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 400;
  position: absolute;
  top: 18px;
`;
const Text10 = styled.div`
  width: 110px;
  height: 10px;
  font-size: 8px;
  font-family: Ubuntu;
  font-weight: 300;
  margin: 0px 0px 0px 1px;
`;
const Text11 = styled.div`
  width: 37px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 300;
`;
const Line = styled.img`
  width: 100%;
  height: 1px;
  margin: 0px 0px 14px 0px;
  dislay: none;
`;
const Paragraph = styled.div`
  width: 100%;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  align-self: center;
  margin: 0px auto 12px 5%;
  white-space: pre-wrap;
`;
const Text12 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  color: #4e0ca2;
  display: contents;
`;
const Ellipse = styled.div`
  width: 18.88px;
  background-image: url("https://file.rendit.io/n/efIlGcSOwcxeB4wloSJJ.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8.18px 7.06px 7.02px 7.06px;
`;
const FlexRow3 = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20% 0px 0px;
`;
const Text14 = styled.div`
  width: 22px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: ${(props) => props.margin};
`;
const Text15 = styled.div`
  width: 18px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0px 43px 0px 0px;
`;
const Text16 = styled.div`
  width: 7px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0px 41px 0px 0px;
`;
const WhiteFlexColumn2 = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  padding: 10px 23px 8px 11px;
`;
const Text18 = styled.div`
  width: 49px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 4px 3px;
`;
const Element22 = styled.div`
  align-self: stretch;
  height: 38px;
  position: relative;
  min-width: 326px;
  margin: 0px 0px 10px 0px;
`;
const Text19 = styled.div`
  width: 114px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 13px;
  left: 9px;
`;
const FlexRow4 = styled.input`
  width: 90%;
  height: 30px;
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const FlexRow5 = styled.div`
  width: 20%;
  height: 30px;
  background-image: url("https://file.rendit.io/n/X7RKaSYp4CPMe3fPfjjQ.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 0px 0px;
`;
const Text20 = styled.div`
  width: 27px;
  height: 15px;
  font-size: 12px;
  font-family: Ubuntu;
  font-weight: 500;
  color: #ffffff;
`;
const Text21 = styled.div`
  width: 87px;
  height: 12px;
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  align-self: flex-end;
  margin: 0px 4px 0px 0px;
`;
const Marketplace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Storefront = styled.img`
  width: 32px;
  height: 32px;
`;
const Text23 = styled.div`
  font-size: 10px;
  font-family: Ubuntu;
  font-weight: 300;
  color: rgba(40, 40, 40, 0.5);
`;
const Image10 = styled.img`
  width: 3px;
  height: 3px;
`;
