declare module 'lol/raf/raf' {

  export default class RAF {

    /**
     * Register a new subscriber
     *
     * @param {string} id
     * @param {Function} fn
     * @memberof RAF
     */
    public subscribe( id:string, fn:Function ) : void;

    /**
     * Unregister a subcriber
     *
     * @param {string} id
     * @memberof RAF
     */
    public unsubscribe( id:string ) : void;

    /**
     * Start globally the RAF
     *
     * @memberof RAF
     */
    public start() : void;

    /**
     * start alias
     *
     * @memberof RAF
     */
    public resume() : void;

    /**
     * Stop globally the RAF
     *
     * @memberof RAF
     */
    public stop() : void;

  }

}


declare module 'lol/utils/array' {

  /**
   * Shuffle the array
   *
   * @export
   * @param {any[]} arr
   * @returns {any[]}
   */
  export function shuffle(arr:any[]) : any[];

  /**
   * Sort an array of string
   *
   * @export
   * @param {string[]} arr
   * @returns {string[]}
   */
  export function sort(arr:string[]) : string[];

  /**
   * Sort an array of objects by key
   *
   * @export
   * @param {any[]} arr
   * @returns {any[]}
   */
  export function sortObjects(arr:any[], key:string) : any[];

  /**
   * Inverse the array order
   *
   * @export
   * @param {any[]} arr
   * @returns {any[]}
   */
  export function inverse(arr:any[]) : any[];

  /**
   * Remove duplicates
   *
   * @export
   * @param {any[]} arr
   * @returns {any[]}
   */
  export function unique(arr:any[]) : any[];

  /**
   * Split array into chunks
   *
   * @export
   * @param {any[]} arr
   * @returns {any[]}
   */
  export function chunk(arr:any[]) : any[];

}

declare module 'lol/utils/canvas' {

  export function drawEllipse(ctx:CanvasRenderingContext2D, centerX:number, centerY:number, width:number, height:number) : void;

}

declare module 'lol/utils/function' {

  /**
   * Bind a list of key methods to the context
   *
   * @export
   * @param {object} ctx
   * @param {...string} methods
   */
  export function bind(ctx:any, ...methods:string[]) : void;

  /**
   *
   * Scope a function inside another one. Prevent binding.
   *
   * @export
   * @param {Function} fn
   * @param {object} ctx
   */
  export function scope(fn: Function, ctx:object) : Function;

}

declare module 'lol/utils/number' {

  /**
   * Clamp a number
   *
   * @export
   * @param {number} value
   * @param {number} [min]
   * @param {number} [max]
   * @returns {number}
   */
  export function clamp(value:number, min?:number, max?:number) : number;

  /**
   * Radian to Degree
   *
   * @export
   * @param {number} value
   * @returns {number}
   */
  export function toDegree(value:number) : number;

  /**
   * Degree to Radien
   *
   * @export
   * @param {number} value
   * @returns {number}
   */
  export function toRadian(value:number) : number;

  /**
   * Set float precision
   *
   * @export
   * @param {number} num
   * @param {number} precision
   * @returns {number}
   */
  export function precision(num:number, precision:number) : number;

}


declare module 'lol/utils/object.define' {

  export function $readOnly(obj:any, property:PropertyKey) : any;

  export function $private(obj:any, property:PropertyKey) : any;

  export function $define(obj:any, property:PropertyKey, description:PropertyDescriptor) : any;

  export function $enumerable(obj:any, property:PropertyKey, enumerable:boolean) : any;

  export function $configurable(obj:any, property:PropertyKey, configurable:boolean) : any;

  export function $writable(obj:any, property:PropertyKey, writable:boolean) : any;

  export function $setter(obj:any, property:PropertyKey, setter:Function) : any;

  export function $getter(obj:any, property:PropertyKey, getter:Function) : any;

}

declare module 'lol/utils/object' {

  /**
   * Merge objects
   *
   * @export
   * @param {...any[]} objects
   * @returns {*}
   */
  export function merge(...objects:any[]) : any;

  /**
   * Make a copy of the object
   *
   * @export
   * @param {*} obj
   * @returns {*}
   */
  export function clone(obj:any) : any;

  /**
   * Create an object with only property keys
   *
   * @export
   * @param {*} obj
   * @param {string[]} keys
   * @returns {*}
   */
  export function expose(obj:any, keys:string[]) : any;

  /**
   * Create a new object without listed property keys
   *
   * @export
   * @param {*} obj
   * @param {string[]} keys
   * @returns {*}
   */
  export function omit(obj:any, keys:string[]) : any;

  /**
   * Create an object with only property keys
   *
   * @export
   * @param {*} obj
   * @param {string[]} keys
   * @returns {*}
   */
  export function pick(obj:any, keys:string[]) : any;

  /**
   * Flatten object to one level
   *
   * @export
   * @param {*} obj
   * @returns {*}
   */
  export function flatten(obj:any) : any;

  /**
   * Transform a flatten object to a deflatten object
   *
   * @export
   * @param {*} obj
   * @returns {*}
   */
  export function deflat(obj:any) : any;

  /**
   * Freeze object
   *
   * @export
   * @param {*} obj
   * @returns {*}
   */
  export function immutable(obj:any) : any;


}

declare module 'lol/utils/string' {

  export function template(string:string, obj?:any, regex?:RegExp) : string;

  export function template2(string:string, obj?:any, options?:any) : string;

  export function trimWhiteSpace(str:string) : string;

  export function pad(str:string, limit:number, char:string, insertAfter:boolean) : string;

  export function toSlug(str:string) : string;

  export function toCamelCase(str:string) : string;

  export function toUnderscore(str:string) : string;

  export function toCapitalize(str:string) : string;

}

declare module 'lol/utils/guid' {

  export function s4() : string;

  export function guid() : string;

}

declare module 'lol/utils/validators';