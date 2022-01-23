import styled from "styled-components";

export const Activity=({data})=>{

    // console.log(data);

    return <Conatainer>
            <Activity>
                {
                    <ChildContainer>
                        {data?.map(e=>(
                            <>
                            <Image>
                                <img src="" alt="" />
                            </Image>
                            <Text>{e?.postTitle}</Text>
                            </>
                        ))}
                    </ChildContainer>
                }
            </Activity>
    </Conatainer>
}

const Conatainer=styled.div`

`;

const ChildContainer=styled.div``;

const Image=styled.div``;

const Text=styled.div``;