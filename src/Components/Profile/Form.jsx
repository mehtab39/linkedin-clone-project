import styled from "styled-components";

export const Form=({handleClick})=>{
    return <FormData>
        <Head>
        <div>Enter your details</div>
        <Btn onClick={handleClick}>
        <img src="/images/close.png" alt="" />
        </Btn>
        </Head>
        <form action="">
            <label htmlFor="">First name*</label>
            <input type="text" />
            <label htmlFor="">Last name*</label>
            <input type="text" />
            <label htmlFor="">Location</label>
            <input type="text" />
            <label htmlFor="">About</label>
            <textarea></textarea>
            <label htmlFor="">Education</label>            
            <input type="text" />
            <label htmlFor="">Skills</label>            
            <input type="text" />
            <label htmlFor="">Company</label>            
            <input type="text" />
            <label htmlFor="">Experience</label>            
            <input type="text" />
            <label htmlFor="">Profile Summary</label>            
            <input type="text" />
            <label htmlFor="">Current Position</label>            
            <input type="text" />
            <label htmlFor="">Resume</label>            
            <input type="text" />
        </form>
    </FormData>
}

const Btn= styled.button`
    img {
        width: 100%;
    }
`;


const FormData=styled.div`
    width:40%;
    margin: auto;
    margin-top:4%;
    display: flex;
    overflow: absolute;
    flex-direction: column;
    background-color: white;
    padding: 3%;
    border-radius:4px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    input,label,textarea{
        width:100%;
        height: 30px;
    }
    input,textarea{
        margin-bottom: 15px;
        border: none;
        background-color:rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        outline-color: #0a66c2;
    }

`;

const Head=styled.div`
    display: flex;
    justify-content:space-between;
    
    button{
        width:5%;
    }

`;