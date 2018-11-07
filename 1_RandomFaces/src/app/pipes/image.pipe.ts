import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  url:string = 'https://api.adorable.io/avatars/500/';
  endUrl:string = '@adorable.io.png';

  constructor( private domSanitizer:DomSanitizer){
  }

  transform(value: any): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( this.url + value + this.endUrl);
  }

}
