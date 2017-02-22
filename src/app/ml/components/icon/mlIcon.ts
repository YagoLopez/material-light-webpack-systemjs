// https://material.io/icons/

// ICON NAMES: http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html
// NOTE: change middle dash (-) for lower dash (_) in icon name for using ICON NAMES from the above url

import {Component} from "@angular/core";

@Component({
selector: 'ml-icon',
template:'<ng-content></ng-content>',
host: {class: 'material-icons'} })
export class MlIcon{}