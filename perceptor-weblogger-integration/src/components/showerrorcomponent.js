import React, {useEffect, useState}  from "react";
import Form from 'react-bootstrap/Form';

export default function ShowErrorComponent (type) {
	//const [isChecked, setIsChecked] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {



			if(document.getElementById("ALL").checked)
			{
				if(document.getElementById("search").value === "")
				{
					const errors = document.getElementsByClassName("errors");
					for (let index = 0; index < errors.length; index++) 
					{
						if(errors[index].style.display !== "block")
							errors[index].style.display = "block";				
					}
				}
				else
				{
					var text = document.getElementById("search").value;
    				const errors = document.getElementsByClassName("errors");
					for (let index = 0; index < errors.length; index++) {
						const lowcase = errors[index].innerHTML.toLowerCase();
       				 	if (!lowcase.includes(text.toLowerCase())) 
						{
							errors[index].style.display = "none";
						}
						else
						{
							if(errors[index].style.display !== "block")
							errors[index].style.display = "block";	
						}
					}
				}
			}
			else
			{
				if(document.getElementById("search").value === "")
				{
					if(document.getElementById(type.type).checked)
					{
						const errors = document.getElementsByClassName(type.type);
						for (let index = 0; index < errors.length; index++) 
						{
							if(errors[index].style.display !== "block")
							errors[index].style.display = "block";				
						}
					}
					else
					{
						const errors = document.getElementsByClassName(type.type);
						for (let index = 0; index < errors.length; index++) 
						{
							if(errors[index].style.display !== "none")
							errors[index].style.display = "none";				
						}
					}
				}
				else
				{
					if(document.getElementById(type.type).checked)
					{
						var text = document.getElementById("search").value;
						const errors = document.getElementsByClassName(type.type);
						for (let index = 0; index < errors.length; index++) {
							const lowcase = errors[index].innerHTML.toLowerCase();
							if (!lowcase.includes(text.toLowerCase())) 
							{
								errors[index].style.display = "none";
							}
							else
							{
								if(errors[index].style.display !== "block")
								errors[index].style.display = "block";	
							}
						}
					}
					else
					{
						const errors = document.getElementsByClassName(type.type);
						for (let index = 0; index < errors.length; index++) 
						{
							if(errors[index].style.display !== "none")
							errors[index].style.display = "none";				
						}
					}
				}
			}


		const checkboxes = document.getElementsByClassName("form-check-input");

		let checksTrue = true;
		for (let index = 0; index < checkboxes.length; index++) {
			if(!checkboxes[index].checked && checkboxes[index].id !== "ALL")
			{checksTrue = false;
			console.log(checkboxes[index].checked);	
			}
		}

	  	if(checksTrue)
	  		document.getElementById("ALL").checked = true;
	  
			
		}, 10);
	  
		return () => clearInterval(interval);
	  });


	useEffect(()=>{

		document.getElementById(type.type).checked = true;
		//setIsChecked(!isChecked);
	}
		,[])


	const handleOnChange = () => {
		//setIsChecked(document.getElementById(type.type).checked);

		if(type.type !== "ALL" && document.getElementById("ALL").checked ){
			document.getElementById("ALL").checked = false;
		}
		
	  	
		const checkboxes = document.getElementsByClassName("form-check-input");
		if(type.type === "ALL"){
			if(document.getElementById("ALL").checked)
			{
				for (let index = 0; index < checkboxes.length; index++) 
				{
					checkboxes[index].checked = true;		
				}
			}
			else	
			{
				for (let index = 0; index < checkboxes.length; index++) 
				{
					checkboxes[index].checked = false;
				}
			}
		
		
		
	}

	  
	}

	

	return <Form.Check 
			inline
			//checked={isChecked}
			onChange={handleOnChange}
            type={"checkbox"}
            id={`${type.type}`}
            label={` ${type.text}`}
          />;


	
};