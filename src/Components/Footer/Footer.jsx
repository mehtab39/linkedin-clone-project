import React from "react";
import logo from "./images/png0.png"
import setting from "./images/png1.png"
import question from "./images/png2.png"
import styled from "styled-components"
export const Footer = () => {
	return (
		<FooterBox>
			<Image src={logo} alt="" />
			<Main>

				<div>
					<div style={{marginBottom:"5px"  }}>About</div>
					<div style={{marginBottom:"5px"}}>Community Guidelines</div>
					<div style={{marginBottom:"5px"}}> Privacy and terms</div>
					<div style={{marginBottom:"5px"}}> Sales solution</div>
					<div > Safety center</div>
				</div>

				<div>
					<div style={{marginBottom:"5px"}}>Accessibility</div>
					<div style={{marginBottom:"5px"}}>Careers</div>
					<div style={{marginBottom:"5px"}}>Ad choices</div>
					<div>Mobile</div>
				</div>

				<div>
					<div style={{marginBottom:"5px", hover:{color:"green"}}}>Talent Solution</div>
					<div style={{marginBottom:"5px"}}>Marketing Solution</div>
					<div style={{marginBottom:"5px"}}>Advertising</div>
					<div >Small Business</div>
				</div>

				<div style={{marginRight:"10px"}}>
					<div><img style={{height:"30px"}} src={question} alt="" /></div>
					<div style={{marginTop:"17px"}}><img style={{height:"30px"}}src={setting} alt="" /></div>
				</div>

				<div>
					<div style={{color:"blue", fontSize:"20px"} }>Questions?</div>
					<div style={   {marginBottom:"5px", color:"#00000099"} }>Visit our help center</div>

					<div style={{fontSize:"20px"}}>Manage your account and privacy</div>
					<div style={   {marginBottom:"5px", color:"#00000099"} }>Go to your setting</div>

				</div>

				<div>
					<form>
						<label style={{color:"#00000099", fontSize:"15px"}}>Select language</label><br />

						<select style={{width:"250px", height:"30px", fontSize:"15px"}}>
							<option lang="de" value="Deutsch(German)">Deutsch(German)</option>
							<option lang="en" value="english" selected>English(English)</option>
							<option lang="fr" value="francais">Bahasa Indonesia(Bahasa Indonesia)</option>
							<option lang="it" value="italiano">Italiano(Italian)</option>

							<option lang="hna" value="Hindi">Hindi(Hindi)</option>
							<option lang="spa" value="Spanish">Nederlands(Dutch)</option>
							<option lang="it" value="italiano">Norsk(Norwegian)</option>
							<option lang="it" value="italiano">Polski(Polish)</option>
							<option lang="it" value="italiano">Romano(Romanian)</option>
							<option lang="po" value="Portugues">Portugues(Portuguese)</option>

						</select>
					</form>
				</div>


			</Main>

		</FooterBox>

	);
}

const FooterBox=styled.div `

padding: 10px;
margin-top: 40px;

`
;
const Image= styled.img`
width:150px;
height: 40px;
margin-left: 50px;
`
;

const Main= styled.div`
display:flex;
background-color: #E0E0E0;
margin-left: 50px;
padding: 40px;


// @media (max-width: 700px) {
//     flex-direction: column;
//   }

& >div{
	margin-right:60px;
	
}

& >div >div{
	
	&:hover{
		text-decoration: underline;
		color:#536DFE;
		}
}
`
