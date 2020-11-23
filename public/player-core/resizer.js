// 
// Resize Event
//  

window.addEventListener('resize', reportWindowSize);

function reportWindowSize(event) {
	console.log('resize!');

  setTimeout(() => {

    try{
      document.querySelector('#playerUI').style.width = null;
      document.querySelector('#playerUI').style.height = null;
  
      const _w = document.querySelector('#playerUI').offsetWidth;
      const _h = document.querySelector('#playerUI').offsetHeight;
  
      if(window.innerWidth > 992){
        if(window.currentRes === 'xs'){
          setRes(1280, 720);
          window.currentRes = 'xl';
        }
      
        console.log(Math.floor(document.querySelector('.player').offsetHeight - 140 - (document.querySelector('.player').offsetHeight/100) * 4));
        if(Math.floor(document.querySelector('.player').offsetHeight - 140 - (document.querySelector('.player').offsetHeight/100) * 4) > Math.floor(_w *  0.5625)){
          document.querySelector('#playerUI').style.height = Math.floor(_w *  0.5625) + 'px';
          console.log('1');
        }else{
          console.log('2');
          document.querySelector('#playerUI').style.width = (Math.floor(document.querySelector('.player').offsetHeight - 140 - (document.querySelector('.player').offsetHeight/100) * 4) * 1.7777) + 'px';
          document.querySelector('#playerUI').style.height = Math.floor(document.querySelector('.player').offsetHeight - 140 - (document.querySelector('.player').offsetHeight/100) * 4) + 'px';
        }
  
      }else{ // XS====================================
        if(window.currentRes === 'xl'){
          
          if(window.prevOrientation === 'not'){
            window.prevOrientation = 'qwe';
          }else{
            setRes(720, 1280);
          }
          window.currentRes = 'xs';

        }else if(window.currentRes === 'xs'){
          if(window.prevOrientation === 'not'){
            setRes(1280, 720);
            window.prevOrientation = 'qwe';
          }else{
            setRes(720, 1280);
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

