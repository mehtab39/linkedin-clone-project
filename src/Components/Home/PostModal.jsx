import styled from "styled-components"
import {useState} from "react";
import {BsFillChatTextFill} from "react-icons/bs";
import {MdPhotoSizeSelectActual} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { addNewPost } from "../../redux/actions/postActions";


export const PostModal=({handleClick,showModal})=>{
    const [editorText,setEditorText]=useState("");

    const {currentUser, profile} = useAuth()
	const [imageFile, setImageFile] = useState("");
	const [videoFile, setVideoFile] = useState("");
	const [assetArea, setAssetArea] = useState("");

	const Reset = (event) => {
		setEditorText("");
		setImageFile("");
		setVideoFile("");
		setAssetArea("");
		handleClick(event);
	};

	function handleImage(event) {
		let image = event.target.files[0];

		if (image === "" || image === undefined) {
			alert(`Not an image. This file is: ${typeof imageFile}`);
			return;
		}
		setImageFile(image);
	}

	
	function postArticle(event) {
		event.preventDefault();
		if (event.target !== event.currentTarget) {
			return;
		}

		const payload = {
			image: imageFile,
			video: videoFile,
			description: editorText,
			user: currentUser,
            username: profile.username,
            userProfile: profile.id,
            userImage: profile.profile_img,
            userTitle: profile.job_title
		};
		dispatch(addNewPost(payload));
		Reset(event);
	}
    const dispatch = useDispatch()


    const switchAssetArea=(area)=>{
        setImageFile("");
        setVideoFile("");
        setAssetArea(area);
    }

 

    return <>
    { showModal==="open" &&
    <Container>
        <Content>
            <Header>
                <h2>Create a post</h2>
                <button onClick={(event)=>Reset(event)}>
                    <img src="/images/close.png" alt="" />
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                    <img src={(currentUser?.photoURL)?(currentUser?.photoURL):("/images/user.svg")} alt="" />
                    <span>{currentUser.displayName ? currentUser.displayName : "Name"}</span>
                </UserInfo>
                <Editor>
                    <>
                <textarea value={editorText}
                onChange={(e)=>setEditorText(e.target.value)} placeholder="What do you want to talk about?" autoFocus={true}/>

                {
                    assetArea === "image" ?
                (<UploadImage>

                    <input type="file" accept='image/gif, image/jpeg, image/png'
                    name="image" 
                    id="file" style={{display:"none"}}
                    onChange={handleImage}
                    />
                    <p>
                        <label htmlFor="file" >Select an image to share</label>
                    </p>

                    {imageFile && <img src={URL.createObjectURL(imageFile)} alt=""/>}
                </UploadImage>)
                : (
      		assetArea === "video" && (
      			<>
      				<input
      					type="text"
      					name="video"
      					id="videoFile"
      					value={videoFile}
      					placeholder="Enter the video link"
      					onChange={(event) => setVideoFile(event.target.value)}
      				/>
      				{videoFile && <ReactPlayer width={"100%"} url={videoFile} />}
      			</>
      		)
      	)}
          </>

                </Editor>
            </SharedContent>
            <ShareCreation>
                <AttachAsset>
                    <AssetButton  onClick={() => switchAssetArea("image")}>
                        <MdPhotoSizeSelectActual/>
                    </AssetButton>
                    <AssetButton  onClick={() => switchAssetArea("video")}>
                        <AiFillYoutube/>
                    </AssetButton>
                    <ShareComment>
                    <AssetButton>
                        <span>
                        <BsFillChatTextFill/>
                        </span>
                        <span>Anyone</span>
                    </AssetButton>
                    </ShareComment>
                </AttachAsset>
                <PostButton disabled={!editorText ? true : false} onClick={(event) => postArticle(event)}>
                    Post
                </PostButton>   
            </ShareCreation>
        </Content>
    </Container>
    }
    </>
}

const Container=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color:black;
    background-color:rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
  
    width: 100%;
    max-width: 552px; background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative; 
    display: flex;
    flex-direction: column;
    top: 32px;
    margin :0 auto;
`;

const Header=styled.div`
    button>img {
        width:20px;

    }

    display: block;
    padding: 16px 20px; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0 , 0.6);
    font-weight:400;
    display: flex;
    justify-content: space-between;align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto; 
        color: rgba(0, 0, 0, 0.15);

        img{
            pointer-events: none;
        }

    }
`;
const SharedContent=styled.div`

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;

const UserInfo = styled.div`

    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;

    }
    span{
        font-weight: 600;
        font-size:16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding:  12px 24px 12px 16px;

`;


const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height:40px;
    min-width: auto;
    color:rgba(0, 0, 0 , 0.5);
`;

const AttachAsset = styled.div`
    align-items: center;
    display: flex;
    padding-left: 8px;

    ${AssetButton} {
        width: 40px;
        font-size: 20px;
    }

`;

const ShareComment=styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left:1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        width: auto;
        margin-right:5px;
    }
`;

const PostButton = styled.button`
    min-width:60px;
    border-radius: 20px;
    padding-left:16px;
    padding-right:16px;
    background:${(props)=>props.disabled ? "rgba(0,0,0,0.8)":"#0a66c2"};
    color:white;
    &:hover {
        background:#004182;
    }
`;

const Editor=styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input {
        width:100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }

`;

const UploadImage = styled.div`
    text-align:center;
    img {
        width: 100%;
    }
`;


