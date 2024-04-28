import React from 'react'
import { updateLanguage } from '../slices/appSlice';
import { useDispatch } from 'react-redux';
import { supportedLanguages } from '../utility/Languages';

const LanguageDropdown = () => {
	const dispatch = useDispatch()

	const languageHandler = (event) => {
		dispatch(updateLanguage(event.target.value))
	};
  return (
		<div className="">
		  <select className="bg-black text-white p-4 rounded-xl font-bold" onChange={languageHandler}>
			  {supportedLanguages.map(lang => (<option value={lang.value} key={lang.value}>{lang.name}</option>))}
			</select>
		</div>
  );
}

export default LanguageDropdown