import React from "react";
import logo from "../images/png0.png"
import setting from "../images/png1.png"
import question from "../images/png2.png"
function Footer() {
	return (
		<div className="mt-96 ">
			<img src={logo} className="w-1/12 h-6 mb-2 ml-11 " alt="" />
			<div className=" p-2   
	  text-[#6e6e6d]
	   font-bold text-xs flex w-100 h-100 bg-[#f3f2ee] ">

				<div className="text-[#6e6e6d] mt-2 hover:text-[#8344cc99] ml-4 ">
					<div className="text-base text-[#00000099] mt-2 ml-5 hover:text-[#8344cc99] hover:underline">About</div>
					<div className="text-base text-[#00000099] mt-3 ml-5 hover:text-[#8344cc99] hover:underline">Community Guidelines</div>
					<div className="text-base text-[#00000099] mt-3 ml-5 hover:text-[#8344cc99] hover:underline"> Privacy and terms</div>
					<div className="text-base text-[#00000099] mt-3 ml-5 hover:text-[#8344cc99] hover:underline"> Sales solution</div>
					<div className="text-base text-[#00000099] mt-3 ml-5 hover:text-[#8344cc99] hover:underline"> Safety center</div>
				</div>

				<div className="text-base text-[#6e6e6d] mt-2  hover:text-[#8344cc99] ml-10 ">
					<div className="text-base text-[#00000099] mt-2 ml-10 hover:text-[#8344cc99] hover:underline">Accessibility</div>
					<div className="text-base text-[#00000099] mt-3 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Careers</div>
					<div className="text-base text-[#00000099] mt-3 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Ad choices</div>
					<div className="text-base text-[#00000099] mt-3 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Mobile</div>
				</div>

				<div className="text-base text-[#6e6e6d] mt-2 hover:text-[#8344cc99] ml-10 ">
					<div className="text-base text-[#00000099] mt-2 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Talent Solution</div>
					<div className="text-base text-[#00000099] mt-3 ml-10 hover:text-[#8344cc99] hover:underline">Marketing Solution</div>
					<div className="text-base text-[#00000099] mt-3 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Advertising</div>
					<div className="text-base text-[#00000099] mt-3 mb-2 ml-10 hover:text-[#8344cc99] hover:underline">Small Business</div>
				</div>


				<div className="text-base text-[#6e6e6d] mt-2 hover:text-[#000000] ml-10">
					<img src={setting} className="w-1/10 h-6 mt-3 ml-10 basis-1/4" alt="" />
					<img src={question} className="w-1/10 h-6 mt-10 ml-10 basis-1/4" alt="" />
				</div>

				<div className="text-base text-[#00000099] mt-2 -ml-9 hover:text-[#000000] ml-10 ">
					<div className="text-lg text-[#8344cc99] mt-3 ml-10 hover:text-[#8344cc99] hover:underline">Questions?</div>
					<div className="text-base text-[#00000099] mb-2 ml-10">Visit our help center</div>

					<div className="text-lg text-[#00000099] mt-2 ml-10 hover:text-[#8344cc99] hover:underline">Manage your account and privacy</div>
					<div className="text-base text-[#00000099] mb-2 ml-10 ">Go to your setting</div>

				</div>

				<div class="language-picker js-language-picker" className="mt-4 ml-20 -mr-20">
					<form action="" class="language-picker__form">
						<label for="language-picker-select" className="text-base text-[#00000099] ">Select language</label><br />

						<select className="w-90 h-8 text-base" name="language-picker-select" id="language-picker-select">
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


			</div>

		</div>

	);
}

export default Footer