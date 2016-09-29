/**
 * raf.js
 *
 * Global RequestAnimationFrame
 *
 * ----------------------------
 *
 * use example
 *
 * import RAF from 'libs/raf'
 *
 * RAF.subscribe( 'mySubscriberId', mySubscriberFn )
 * RAF.unsubscribe( 'mySubscriberId' )
 * RAF.start()
 * RAF.stop()
 */

const requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


const cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame          ||
    window.webkitCancelRequestAnimationFrame  ||
    window.mozCancelRequestAnimationFrame     ||
    window.oCancelRequestAnimationFrame       ||
    window.msCancelRequestAnimationFrame
} )();

var _raf;
var _now = Date.now();
var _lt = _now;
var _elapsedInterval = 0;



function RAF(){

  this.subscribers = [];

  this.update = this._update.bind(this);

  this.dt = 0;
  this.framerate = 16;

  _raf = requestAnimFrame( this.update );

}

var proto = RAF.prototype;

/**
 * Run all subscribers
 */
proto._update = function(){

  _now = Date.now();

  this.dt = _now - _lt;

  _elapsedInterval += this.dt;

  if ( _elapsedInterval >= this.framerate ) {
    _elapsedInterval = 0;
    this._processUpdate();
  }

  _lt = _now;

  _raf = requestAnimFrame( this.update );

}

proto._processUpdate = function(){

  for ( var i = 0; i < this.subscribers.length; i++ ) {

    const subscriber = this.subscribers[i];

    // execute handler
    subscriber[1]();

  }

}

/**
 * Register a new subscriber
 *
 * @param {String} id
 * @param {Function} fn
 */
proto.subscribe = function( id, fn  ){

  this.subscribers.push( [ id, fn ] );

}

 /**
 * Unregister a subscriber
 *
 * @param {String} id
 */
proto.unsubscribe = function( id ) {

  for ( var i = 0; i < this.subscribers.length; i++ ) {

    // if id matches, removes
    if ( this.subscribers[i][0] === id ) {
      this.subscribers.splice( i, 1 );
    }

  }

}

/**
 * Start globally the RAF
 */
proto.start = function() {

  _raf = requestAnimFrame( this.update );

}

/**
 * Stop globally the RAF
 */
proto.stop = function() {

  cancelRequestAnimFrame( _raf );

}

/**
 * start alias
 */
proto.resume = function() {

  this.start();

}

var _instance = new RAF();

module.exports = _instance;