// get the div
var g = $('.district-search');

//start interval at every 9sec
var myInterval = setInterval(function(){ 

	try{
		index = 0;
        //bring all vaccine box div
		array = document.querySelectorAll(".vaccine-box");
		if(array.length != 0){
			while (index < array.length) {
                //check for availability
				if(parseInt(array[index].getElementsByTagName("a")[0].text,10) > 0){
                    //if available then play a sound
					console.log(array[index]);
					const audio = new Audio("https://freesound.org/data/previews/337/337049_3232293-lq.mp3");
					audio.play();
					break;
				}
				index++;
			}
		}
    //refresh the availability div
	g.click();	
    }
	catch(err){
        //if something goes wrong
		console.log(err);
	}

}, 9000);
