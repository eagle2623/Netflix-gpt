import React from 'react'
import { useSelector } from 'react-redux';
import { languageConfig } from '../utility/Languages';

const GptSearch = () => {
	const language = useSelector((store) => store?.appConfig?.currentLanguage);
	
	
  return (
		<div className="flex justify-center items-end w-full row-span-2 p-8">
			<form action="" className="grid grid-cols-4 gap-4 p-2 w-1/2">
				<input
					type="text"
					placeholder={languageConfig[language]?.placeholder}
					className="col-span-3 p-3 rounded-3xl text-lg text-white "
				/>
				<button
					type="button"
					className="col-span-1 rounded-3xl bg-red-600 text-lg text-white p-3"
				>
					{languageConfig[language]?.search}
				</button>
			</form>
		</div>
  );
}

export default GptSearch