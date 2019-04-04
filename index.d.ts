declare module 'lol/raf/raf' {

  class RAF {

    static _update() : void;
    static _processUpdate() : void;

    static subscribe( id:string, fn:Function ) : void;
    static unsubscribe( id:string ) : void;

    static start() : void;
    static stop() : void;
    static resume() : void;

  }

  export default RAF

}