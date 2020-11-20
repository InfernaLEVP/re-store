<template>
  <div class="player">
    <!--  -->

		<div class="p-controls">
			<div class="p-controls__title">
				Выбери персонажа
			</div>
			<button class="p-controls__button" onclick="onConfigButton(1,0)">
				<img src="../assets/digita-face.png" alt="avatar image">
			</button>
			<button class="p-controls__button" onclick="onConfigButton(1,1)">
				<img src="../assets/digita-face.png" alt="avatar image">
			</button>
			<button class="p-controls__button" onclick="onConfigButton(1,2)">
				<img src="../assets/digita-face.png" alt="avatar image">
			</button>
		</div>


		<div id="playerUI">
			
			<div id="player">
				<div id="ck-fullscreen">
					<img src="../assets/showFullScreenIcon.svg" alt="Maximise to Fullscreen" id="fullscreen-img" class="fullscreen-btn">
				</div>
				<!-- <div class="regims">
					<button id="720p" type="button" class="btn btn-secondary" onclick="setRes(1920,1080)">
						<span>Landscape</span>
					</button>

					<button id="1080p" type="button" class="btn btn-secondary" onclick="setRes(1080, 1920)">
						<span>Portrait</span>
					</button>
				</div> -->
				
			</div>
			<div id="overlay" class="overlay">
				<div id="overlayButton" onclick="onExpandOverlay_Click()">+</div>
				<div id="overlaySettings" style="display: block">
					<div id="KickOthers">
						<div class="settings-text">Kick all other players</div>
						<label class="btn-overlay">
							<input type="button" id="kick-other-players-button" class="overlay-button btn-flat" value="Kick">
						</label>
					</div>
					<div id="FillWindow">
							<div class="settings-text">Enlarge Display to Fill Window</div>
							<label class="tgl-switch">
									<input type="checkbox" id="enlarge-display-to-fill-window-tgl" class="tgl tgl-flat" checked>
									<div class="tgl-slider"></div>
							</label>
					</div>
					<div id="QualityControlOwnership">
							<div class="settings-text">Quality control ownership</div>
							<label class="tgl-switch">
									<input type="checkbox" id="quality-control-ownership-tgl" class="tgl tgl-flat">
									<div class="tgl-slider"></div>
							</label>
					</div>
					<div id="MatchViewportResolution">
							<div class="settings-text">Match Viewport Resolution</div>
							<label class="tgl-switch">
									<input type="checkbox" id="match-viewport-res-tgl" class="tgl tgl-flat">
									<div class="tgl-slider"></div>
							</label>
					</div>
					<div id="statsSetting"> 
						<div class="settings-text">Show Stats</div>
						<label class="tgl-switch">
							<input type="checkbox" id="show-stats-tgl" class="tgl tgl-flat">
							<div class="tgl-slider"></div>
						</label>
						<div id="statsContainer">
							<div id="stats"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--  -->
  </div>
</template>

<script>
export default {
  name: 'Player',
  mounted(){
    console.log('mounted HELLO!');
		load(); // eslint-disable-line
		onParagonLoad(); // eslint-disable-line 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#player
#playerUI * {
  cursor: auto!important;
}
#gallery{
	/* height: calc(100vh - 130px); */
	height: 98vh;
	position: relative;
}
.player{	
	display: flex;
	align-items: flex-start;
	max-height: 100vh;
	overflow: hidden;
	padding: 140px 4% 4% 4%;
}
@media(max-width: 992px){
	.player{	
		flex-direction: column;
		padding: 80px 4% 4% 4%;
	}
}

/*  */
#playButton{
	/* background-image: url(../assets/play-btn.svg); */
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	width: 104px;
	height: 104px!important;
	display: flex!important;
	font-size: 0px!important;
}

/*  */
.p-controls{
	display: flex;
	flex-direction: column;
	margin-right: 30px;
}
@media(max-width: 992px){
	.p-controls{	
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-right: 0;
	}
}

/*  */
.p-controls__title{
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: #E3E3E3;
	margin-bottom: 27px;
}
@media(max-width: 992px){
	.p-controls__title{
		width: 100%;
		text-align: center;
		justify-content: center;
	}
}

/*  */
.p-controls__button{
	margin-bottom: 20px;
	background: transparent;
	border: 1px solid #949393;
	border-radius: 8px;
	width: 164px;
	height: 164px;
	cursor: pointer;
}
@media(max-width: 992px){
	.p-controls__button{
		width: 75px;
		height: 75px;
	}
}


/*  */
/*  */
/*  */
#playerUI {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100%;
	max-height: calc(100vh - 140px - 4rem);
	overflow: hidden;
	position: relative;
}
#player{
	width: 1280px;
	height: 720px;
	position: relative;
	background-color: #000;
	max-height: 100%;
	/* max-width: 60%;
	max-height: 60vh; */
	
}
#player .regims{
	position: absolute;
	z-index: 9999;
	top: 0;
	left: 0;
}
@media(max-width: 768px){
	#player{
		width: 1280px;
		height: 720px;
		position: relative;
		background-color: #000;
		/* max-width: 100%;
		max-height: 60vh; */
		
	}
}
#playerUI *{
	cursor: auto!important;
}

#statsContainer{
	background-color: rgba(0,0,0,0.8);
	text-align: left;
	display: none;
}

#stats{
	font-size: 14px;
	font-weight: bold;
	padding: 6px;
	color: lime;
}

canvas{
    image-rendering: crisp-edges;
    position: absolute;
}

video{
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

#overlay{
	-moz-border-radius-bottomright: 5px;
	-moz-border-radius-bottomleft: 5px;
	-webkit-border-bottom-right-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px; /* future proofing */
	border-bottom-left-radius: 5px; /* future proofing */
	-khtml-border-bottom-right-radius: 5px; /* for old Konqueror browsers */
	-khtml-border-bottom-left-radius: 5px; /* for old Konqueror browsers */
	
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
	
	position: absolute;
	padding: 4px;
	top: 140px;
	right: 4%;
	z-index: 100;
	border: 2px solid var(--colour4);
	border-top-width: 0px;
	display: none;
}

.overlay {
	background-color: var(--colour2);
	font-family: var(--buttonFont);
	font-weight: lighter;
	color: var(--colour4);
}

#overlayButton:hover{
	cursor:pointer;
}

#overlayButton{
	text-align: right;
	font-size: 40px;
}

#overlaySettings{
	width: 300px;
	padding: 4px;
	display: none;
}

#videoMessageOverlay{
	z-index: 20;
	color: var(--colour4);;
	font-size: 1.8em;
	position: absolute;
	margin: auto;
	font-family: var(--inputFont);;
	width: 100%;
}

#videoPlayOverlay{
	z-index: 30;
	position: absolute;
	color: var(--colour4);
	font-size: 1.8em;
	font-family: var(--inputFont);
	width: 100%;
	height: 100%;
	/* background-color: rgba(100, 100, 100, 0.7); */
	background-image: url(../assets/player-placeholder.jpg);
	background-position: center;
	background-size: cover;
}

/* State for element to be clickable */
.clickableState{
	align-items: center;
	justify-content: center;
	display: flex;
	cursor: pointer;
}

/* State for element to show text, this is for informational use*/
.textDisplayState{
	display: flex;
}

/* State to hide overlay, WebRTC communication is in progress and or is playing */
.hiddenState{
	display: none;
}

#playButton{
	display: inline-block;
	height: auto;
	cursor: pointer;
}

img#playButton{
	max-width: 241px;
	width: 10%;
}

#UIInteraction{
	position: fixed;
}

#UIInteractionButtonBoundary{
	padding: 2px;
}

#UIInteractionButton{
	cursor: pointer;
}

#hiddenInput{
	position: absolute;
	left: -10%;   /* Although invisible, push off-screen to prevent user interaction. */
	width: 0px;
	opacity: 0;
}

#editTextButton{
	position: absolute;
	height: 40px;
	width: 40px;
}

.settings-text{
	color: var(--colour4);
	vertical-align: middle;
	font-size: 18px;
	font-weight: normal;
	display: inline-block;
}

.overlay-button{
	line-height: 1.1;
	padding: 1px 6px;
}

.btn-overlay{
	float: right;
	vertical-align: middle;
	display: inline-block;
}

.btn-flat{
	background: var(--colour4);
	border: 2px solid var(--colour5);
	font-weight: bold;
	cursor: pointer;
	font-family: var(--buttonFont);
	font-size: 10px;
	color: var(--colour5);
	border-radius: 5px;
	height: 17px;
}

.btn-flat:disabled{
	background: var(--colour4);
	border-color: var(--colour3);
	color: var(--colour3);
	cursor: default;
}

.btn-flat:active{
	border-color: var(--colour2);
	color: var(--colour2);
}

.btn-flat:focus{
	outline: none;
}
/*** Toggle Switch styles ***/
.tgl-switch {
  float: right;
  vertical-align: middle;
  display: inline-block;
}

.tgl-switch .tgl {
	display:none;
}

.tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl + .tgl-slider {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection, .tgl *::-moz-selection, .tgl *:after::-moz-selection, .tgl *:before::-moz-selection, .tgl + .tgl-slider::-moz-selection {
  background: none;
}
.tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl + .tgl-slider::selection {
  background: none;
}

.tgl + .tgl-slider {
  outline: 0;
  display: block;
  width: 40px;
  height: 18px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.tgl + .tgl-slider:after, .tgl + .tgl-slider:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.tgl + .tgl-slider:after {
  left: 0;
}
.tgl + .tgl-slider:before {
  display: none;
}

.tgl-flat + .tgl-slider {
  padding: 2px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  background: #fff;
  border: 3px solid var(--colour4);
  border-radius: 2em;
}

.tgl-flat + .tgl-slider:after {
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  background: var(--colour4);
  content: "";
  border-radius: 1em;
}

.tgl-flat:checked + .tgl-slider {
  border: 3px solid var(--colour5);
}

.tgl-flat:checked + .tgl-slider:after {
  left: 50%;
  background: var(--colour5);
}
/*** Toggle Switch styles ***/
#ck-fullscreen {
    width: var(--fullscreenButtonWidth);
		height: var(--fullscreenButtonHeight);
    position: absolute;
		z-index: 999;
		top: 150px;
    right: 50px;
		cursor: pointer!important;
}
@media(max-width: 992px){
	#ck-fullscreen {
		top: 135px;
    right: 15px;
	}
}
#ck-fullscreen img{
	cursor: pointer!important;
	transition: all .3s;
}
#ck-fullscreen img:hover{
	transform: scale(1.05);
}
#playButton{
	cursor: pointer!important;
	transition: all .3s;
}
#playButton:hover{
	transform: scale(1.05);
}

#ck-fullscreen:hover {
	/* background-color:#434c53; */
}

.fullscreen-btn{
	width: 100%;
	height: 100%;
}

/************************************************************/
/* Player full screen css (different event for each browser */
/************************************************************/
#player:-webkit-full-screen {
	width: 100%;
	height: 100%;
	left: 0%;
	margin-top: 0px;
	margin-bottom: 0px;
}

#player:-moz-full-screen {
	width: 100%;
	height: 100%;
	left: 0%;
	margin-top: 0px;
	margin-bottom: 0px;
}

#player:-ms-fullscreen {
	width: 100%;
	height: 100%;
	left: 0%;
	margin-top: 0px;
	margin-bottom: 0px;
}

#player:fullscreen {
	width: 100%;
	height: 100%;
	left: 0%;
	margin-top: 0px;
	margin-bottom: 0px;
}

#player.fullscreen {
	width: 100%;
	height: 100%;
	left: 0%;
	margin-top: 0px;
	margin-bottom: 0px;
	position: fixed;
	top: 0px;
	left: 0px;
}

#player.fullscreen #configuration{
	position: fixed;
}

#FillWindow{
	/* display: none; */
}
.minimizeIt{
	width: 75px!important;
	height: 75px!important;
	top: 25px!important;
}
</style>
