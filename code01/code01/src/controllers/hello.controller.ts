// Uncomment these imports to begin using these cool features!

import { get } from "@loopback/rest";

// import {inject} from '@loopback/core';


export class HelloController {
  @get('/hello')
  hello():string{
    return 'hello world !'
  }

  constructor() {}
}
