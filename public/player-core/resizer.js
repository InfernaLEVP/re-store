// 
// Resize Event
//  

window.addEventListener('resize', reportWindowSize);

function reportWindowSize(event) {
	// console.log('resize!');

  setTimeout(() => {

    try{
      document.querySelector('#playerUI').style.width = null;
      document.querySelector('#playerUI').style.height = null;
  
      const _w = document.querySelector('#playerUI').offsetWidth;
      const _h = document.querySelector('#playerUI').offsetHeight;
  
      if(window.innerWidth > 992){
        if(window.currentRes === 'xs'){
          // setRes(window.res_w, window.res_h);
          // setRes(1280, 720);
          window.currentRes = 'xl';
        }
        
        const availableH = Math.floor(document.querySelector('.player').offsetHeight 
        - 140 
        - (document.querySelector('.player').offsetHeight/100) 
        * 4)
        - (document.querySelector('.p-controls').offsetHeight + 25);

        // console.log(availableH);
        if(availableH > Math.floor(_w *  0.5625)){
          document.querySelector('#playerUI').style.height = Math.floor(_w *  0.5625) + 'px';
          // console.log('1');
        }else{
          // console.log('2');
          document.querySelector('#playerUI').style.width = (availableH * 1.7777) + 'px';
          document.querySelector('#playerUI').style.height = availableH + 'px';
        }
  
      }else{ // XS====================================
        if(window.currentRes === 'xl'){
          
          if(window.prevOrientation === 'not'){
            window.prevOrientation = 'qwe';
          }else{
            // setRes(window.res_w, window.res_h);
            // setRes(720, 1280);
          }
          window.currentRes = 'xs';

        }else if(window.currentRes === 'xs'){
          if(window.prevOrientation === 'not'){
            // setRes(window.res_w, window.res_h);
            window.prevOrientation = 'qwe';
          }else{
            // setRes(window.res_w, window.res_h);
          }
        }
        
        setTimeout(() => {
          if(window.currentOrientation === 'l'){
            document.querySelector('#playerUI').style.height = Math.floor(_w *  0.5625) + 'px';
          }else{
            document.querySelector('#playerUI').style.height = Math.floor(_w *  1.7777) + 'px';
          }
        }, 150);
        // document.querySelector('#playerUI').style.width = Math.floor(_h *  0.5625) + 'px';
        
        
  
      }
    }catch{}

  }, 400);

}

window.addEventListener('resize', function(event) {
  // console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
  
  if(window.innerHeight < window.innerWidth){
    window.prevOrientation = 'not';
    window.currentOrientation = 'l';
    // setRes(1280, 720);
    // document.querySelector('#flag').innerHTML = '1280';
  }else{
    // window.prevOrientation = 'not';
    window.currentOrientation = 'h';
    // document.querySelector('#flag').innerHTML = '720';
    // setRes(720, 1280);
  }
  // event.preventDefault();
});

// =========
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
