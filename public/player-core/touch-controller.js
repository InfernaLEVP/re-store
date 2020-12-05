class TouchController {
  constructor(webRtcPlayerObj){
    this.playerElement = webRtcPlayerObj;
    this.webRtcPlayerObj = webRtcPlayerObj;
    this.fingers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    this.fingerIds = {};
    
    this.print_inputs = true;

    console.log(resetAfkWarningTimer);
    console.log(MessageType);
    console.log(webRtcPlayerObj);
    this.register();
  }

  // utils Methods
  rememberTouch = (touch) => {
		let finger = this.fingers.pop();
		if (finger === undefined) {
			console.log('exhausted touch indentifiers');
		}
		this.fingerIds[touch.identifier] = finger;
	}

	forgetTouch = (touch) => {
		this.fingers.push(this.fingerIds[touch.identifier]);
		delete this.fingerIds[touch.identifier];
	}

	emitTouchData = (type, touches) => {
		let data = new DataView(new ArrayBuffer(2 + 6 * touches.length));
		data.setUint8(0, type);
		data.setUint8(1, touches.length);
		let byte = 2;
		for (let t = 0; t < touches.length; t++) {
			let touch = touches[t];
			let x = touch.clientX - this.playerElement.getBoundingClientRect().x;
			let y = touch.clientY - this.playerElement.getBoundingClientRect().y;
			if (this.print_inputs) {
				console.log(`F${this.fingerIds[touch.identifier]}=(${x}, ${y})`);
			}
			let coord = normalizeAndQuantizeUnsigned(x, y);
			data.setUint16(byte, coord.x, true);
			byte += 2;
			data.setUint16(byte, coord.y, true);
			byte += 2;
			data.setUint8(byte, this.fingerIds[touch.identifier], true);
			byte += 1;
			data.setUint8(byte, 255 * touch.force, true);   // force is between 0.0 and 1.0 so quantize into byte.
			byte += 1;
		}
		sendInputData(data.buffer);
  }
  sendInputData = (data) => {
    if (this.webRtcPlayerObj) {
      resetAfkWarningTimer();
      this.webRtcPlayerObj.send(data);
    }
  }

  // Event Handlers
  _ontouchstart = (e) => {
    // Assign a unique identifier to each touch.
    for (let t = 0; t < e.changedTouches.length; t++) {
      this.rememberTouch(e.changedTouches[t]);
    }
  
    if (this.print_inputs) {
      console.log('touch start');
    }
    this.emitTouchData(MessageType.TouchStart, e.changedTouches);
    e.preventDefault();
  }

  _ontouchend = (e) => {
    if (this.print_inputs) {
      console.log('touch end');
    }
    this.emitTouchData(MessageType.TouchEnd, e.changedTouches);

    // Re-cycle unique identifiers previously assigned to each touch.
    for (let t = 0; t < e.changedTouches.length; t++) {
      this.forgetTouch(e.changedTouches[t]);
    }
    e.preventDefault();
  }

  _ontouchmove = (e) => {
    if (this.print_inputs) {
      console.log('touch move');
    }
    this.emitTouchData(MessageType.TouchMove, e.touches);
    e.preventDefault();
  }
  
  // Initializer
  register = () => {
    console.log(this);
    this.fingers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    this.fingerIds = {};
    this.playerElement.addEventListener('touchstart', this._ontouchstart, true);
    this.playerElement.addEventListener('touchend', this._ontouchend, true);
    this.playerElement.addEventListener('touchmove', this._ontouchmove, true);
  }

  deRegister = () => {
    this.playerElement.removeEventListener('touchstart', this._ontouchstart, false);
    this.playerElement.removeEventListener('touchend', this._ontouchend, false);
    this.playerElement.removeEventListener('touchmove', this._ontouchmove, false);
  }

}
