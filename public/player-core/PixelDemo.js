// Copyright Epic Games, Inc. All Rights Reserved.


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function setVisualization(id) {
    let descriptor = {
        Visualization: id
    };
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function setBandwidthCap(cap) {
    capBpsCmd = 'Encoder.MaxBitrate ' + cap;
    let descriptor = {
        Console: capBpsCmd
    }
    capStr = cap != 0 ? cap : 'Unlimited';
    document.getElementById('bandwidthCapDropdown').innerHTML = 'Bandwidth Cap (' + capStr + ' Mbps)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function setFramerateCap(cap) {
    capFpsCmd = 't.maxFPS ' + cap;
    let descriptor = {
        Console: capFpsCmd
    }
    capStr = cap != 0 ? cap : 'Unlimited';
    document.getElementById('framerateCapDropdown').innerHTML = 'Framerate Cap (' + capStr + ' fps)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function zoom() {
    let descriptor = {
        zoom: 1
    };
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function onCharacterButton(category, item) {
    let descriptor = {
        Category: category,
        Item: item
    };
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function onConfigButton(category, item, event) {
	console.log(event.target);
	document.querySelector('.activeAvatar').classList.remove('activeAvatar');
	event.target.classList.add('activeAvatar');
    let descriptor = {
        Category: category,
        Item: item
    };
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

// function setRes(width, height) {
//     let descriptor = {
//         Console: 'r.' + 'setres ' + width + 'x' + height + 'w'
//     };
//     emitUIInteraction(descriptor);
//     console.log(descriptor);
// }

function onConfigurationOne() {
    let descriptor = {
		Category: 0,
		Item: 3
	};
    emitUIInteraction(descriptor);
    console.log(descriptor);
}

function onConfigurationTwo() {
	let descriptor = {
	    Category: 1,
	    Item: 4
	};
	emitUIInteraction(descriptor);
}

function myHandleResponseFunction(data) {
	if (data.substring("1080p")) {
		// UE4 only supports up to 1080p, not 4K.
		console.log("Disabling 4k button");
		let button4K = document.getElementById("4k");
		button4K.disabled = true;
		button4K.title = "4K is supported only when -NvEncH264ConfigLevel=NV_ENC_LEVEL_H264_52 UE4 is added to UE4 command line";
	}
}

var grabStyle = 'cursor: grab; cursor: -moz-grab; cursor: -webkit-grab';   // We will have a browser side grab cursor.
var isFullscreen = false;

function onParagonLoad() {
	styleAdditional = grabStyle;
	inputOptions.controlScheme = ControlSchemeType.HoveringMouse;
	inputOptions.fakeMouseWithTouches = false;
	styleWidth = 700;
	styleHeight = 394;

	if (document.addEventListener)
	{
	    document.addEventListener('webkitfullscreenchange', onFullscreenChange, false);
	    document.addEventListener('mozfullscreenchange', onFullscreenChange, false);
	    document.addEventListener('fullscreenchange', onFullscreenChange, false);
	    document.addEventListener('MSFullscreenChange', onFullscreenChange, false);
	}

	let fullscreenCheck = document.getElementById('ck-fullscreen');
	if(fullscreenCheck){
		fullscreenCheck.onclick = function(){
			if (!isFullscreen) {
				enterFullscreen();
			} else {
				exitFullscreen();
			}
		};
	}

	// When the data channel is connected we want to ask UE4 if 4K is supported.
	onDataChannelConnected = function() { emitUIInteraction("4K"); };
	addResponseEventListener("handle_responses", myHandleResponseFunction);
}

function onFullscreenChange(data)
{
	var fullscreenDiv    = document.getElementById("player");
	isFullscreen = (document.webkitIsFullScreen 
		|| document.mozFullScreen 
		|| (document.msFullscreenElement && document.msFullscreenElement !== null) 
		|| (document.fullscreenElement && document.fullscreenElement !== null)
		|| (fullscreenDiv && fullscreenDiv.classList.contains("fullscreen")));

	let fullscreenImg = document.getElementById('fullscreen-img');
	if(fullscreenImg){
		fullscreenImg.src = isFullscreen ? 'images/hideFullscreenIcon.svg' : 'images/showFullScreenIcon.svg'
		fullscreenImg.alt = isFullscreen ? 'Shrink to normal size' : 'Maximise to Fullscreen'
		if(isFullscreen){
			document.querySelector('#ck-fullscreen').classList.add('minimizeIt');
		}else{
			document.querySelector('#ck-fullscreen').classList.remove('minimizeIt');
		}
	}

	// 
	// const _p = document.querySelector('#playerUI');
	// const _w = document.querySelector('#playerUI').offsetWidth;
	// const _h = document.querySelector('#playerUI').offsetHeight;

	// if(_w === 0){
	// 	setRes(window.innerWidth,window.innerHeight);
	// }else{
	// 	console.log(document.querySelector('.player').offsetHeight);
	// 	_p.style.height = document.querySelector('.player').offsetHeight + 'px';
	// 	setRes(document.querySelector('#playerUI').offsetWidth,document.querySelector('#playerUI').offsetHeight);
	// }
	// 
}

function enterFullscreen()
{
	var fullscreenDiv    = document.getElementById("player");
	var textDivs    = document.getElementsByClassName("text");
	var headerDiv    = document.getElementById("header-tbl");
	var fullscreenFunc   = fullscreenDiv.requestFullscreen;

	if (!fullscreenFunc) {
	  ['mozRequestFullScreen',
	   'msRequestFullscreen',
	   'webkitRequestFullScreen'].forEach(function (req) {
	     fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
	   });
	}

	// 
	// fullscreenFunc = undefined;
	// 
	if(fullscreenFunc){
		fullscreenFunc.call(fullscreenDiv);
		console.log('Fullscreen api');
		window.FSS = true;
	} else {
		//No Fullscreen api so maximise video to window size
		console.log('No Fullscreen api');
		if(fullscreenDiv){
			fullscreenDiv.classList.add("fullscreen");
			fullscreenDiv.classList.remove("fixed-size");
		}

		if(textDivs){
			for(let i=0; i<textDivs.length; i++){
				textDivs[i].style.display = "none";
			}
		}

		if(headerDiv)
			headerDiv.style.display = "none";

		onFullscreenChange({});
		onInPageFullscreen();
	}
	console.log('FullScreen enabled;');

	try{
		document.querySelector('.header').style.display = 'none';
		document.querySelector('.p-controls').style.display = 'none';
	}catch{
		document.querySelector('.header').style.display = 'none';
		document.querySelector('.p-controls').style.display = 'none';
	}

}

function exitFullscreen()
{
	window.scrollTo(0, 0);
	// setTimeout(() => {

		//
		var fullscreenDiv    = document.getElementById("player");
		var textDivs    = document.getElementsByClassName("text");
		var headerDiv    = document.getElementById("header-tbl");
		var exitFullscreenFunc   = document.exitFullscreen;

		if (!exitFullscreenFunc) {
			['mozCancelFullScreen',
			'msExitFullscreen',
			'webkitExitFullscreen'].forEach(function (req) {
				exitFullscreenFunc = exitFullscreenFunc || document[req];
			});
		}

		//
		// exitFullscreenFunc = undefined; 
		// 

		if(exitFullscreenFunc) {
			exitFullscreenFunc.call(document);
			window.FSS = false;

			if(getOS() === 'Mac Os'){
				console.log('MAC!');
				if(window.x > 1000){
					setRes(720,1280);
				}else{
					setRes(1440,900);
				}
			}else{
				console.log('NOT MAC!');
				if(window.x > 1000){
					setRes(720,1280);
				}else{
					setRes(1280,720);
				}
			}
			
			
			setTimeout(() => {
				setRes(window.x, window.y)
			}, 1650);
		} else {
			//No Fullscreen api so shrink video back from max window size
			if(fullscreenDiv){
				fullscreenDiv.classList.remove("fullscreen");
				fullscreenDiv.classList.add("fixed-size");
				fullscreenDiv.style.left = "";
			}

			if(textDivs){
				for(let i=0; i<textDivs.length; i++){
					textDivs[i].style.display = "block";
				}
			}

			if(headerDiv)
				headerDiv.style.display = "table";

			onFullscreenChange({});
			onInPageFullscreen();
		}
		console.log('FullScreen Disabled!');

		try{
			document.querySelector('.header').style.display = 'flex'; 
			document.querySelector('.p-controls').style.display = 'flex';
		} catch {
			document.querySelector('.header').style.display = 'flex'; 
			document.querySelector('.p-controls').style.display = 'flex';
		}
		
		// 

	// }, 200);
	
}

function onInPageFullscreen(){
	var playerElement = document.getElementById('player');
	let videoElement = playerElement.getElementsByTagName("VIDEO");
	document.documentElement.style.position = isFullscreen ?  "fixed" : "";
	document.body.style.position =  isFullscreen ?  "fixed" : "";

	if(isFullscreen){
		let windowAspectRatio = window.innerHeight / window.innerWidth;
		let playerAspectRatio = playerElement.clientHeight / playerElement.clientWidth;
		// We want to keep the video ratio correct for the video stream
	    let videoAspectRatio = videoElement.videoHeight / videoElement.videoWidth;

	    if(isNaN(videoAspectRatio)){
	    	//Video is not initialised yet so set playerElement to size of window
	    	styleWidth = window.innerWidth;
	    	styleHeight = window.innerHeight;
	    	styleTop = 0;
	        styleLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
	        //Video is now 100% of the playerElement so set the playerElement style
	        playerElement.style.width= styleWidth + "px";
	        playerElement.style.height= styleHeight + "px";
	    } else if (windowAspectRatio < playerAspectRatio) {
	        styleWidth = Math.floor(window.innerHeight / videoAspectRatio);
	        styleHeight = window.innerHeight;
	        styleTop = 0;
	        styleLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
	        //Video is now 100% of the playerElement so set the playerElement style
	        playerElement.style.width= styleWidth + "px";
	        playerElement.style.height= styleHeight + "px";
	    }
	    else {
	        styleWidth = window.innerWidth;
	        styleHeight = Math.floor(window.innerWidth * videoAspectRatio);
	        styleTop = Math.floor((window.innerHeight - styleHeight) * 0.5);
	        styleLeft = 0;
	        //Video is now 100% of the playerElement so set the playerElement style
	        playerElement.style.width= styleWidth + "px";
	        playerElement.style.height= styleHeight + "px";
	    }

	} else {
		playerElement.style.height = "";
		playerElement.style.width = "";
	}
}
