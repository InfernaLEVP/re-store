<template>
  <div class="player c-container" id="gallery">
    <div id="playerUI">
      <div id="player">
				<div id="ck-fullscreen">
					<img src="images/MaximiseToFullscreen.png" alt="Maximise to Fullscreen"
						id="fullscreen-img" class="fullscreen-btn">
				</div>
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
#playerUI * {
  cursor: auto!important;
}
body{
    margin: 0px;
}
.player{
	margin: 7rem 0;
}
#ck-fullscreen{
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: 9999;
}
#playerUI {
	margin: 0 auto;
	position: relative;
	z-index: 10;
	height: 60vh!important;
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
}

#player{
	position: relative;
	background-color: #000;
	max-width: 60%!important;
	max-height: 100%!important;
	margin: 0 auto;
}
@media screen and (max-width: 992px){
	#player{
		max-width: 100%!important;
	}
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
	top: 0;
	right: 2%;
	z-index: 100;
	border: 2px solid var(--colour4);
	border-top-width: 0px;
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
	background-color: rgba(100, 100, 100, 0.7);
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

/* iOS FullScreen hack */
body #playerUI .iOS-full-screen{
	width: 100vw!important;
	height: 100vh!important;
	max-width: 100vw!important;
	max-height: 100vh!important;
	position: fixed!important;
	top: 0!important;
	left: 0!important;
}
.iOS-full-screen-body{
	overflow: hidden!important;
}
.iOS-full-screen-header{
	display: none!important;
}
</style>
