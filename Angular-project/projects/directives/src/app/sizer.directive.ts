import { Directive, HostBinding, HostListener, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit{

  @HostBinding('style.width.px')
  @Input('appSizer')
  wd : number

  constructor(
    private elRf : ElementRef<HTMLElement>,
    private rend : Renderer2
  ) { }

  ngOnInit() {
    // this.elRf.nativeElement.style.border = '1px solid red' // usecured
    this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red') //secured
    this.rend.listen(this.elRf.nativeElement, 'onclick', () => {
      this.rend.setStyle(this.elRf.nativeElement, 'border', '2px solid red') //secured
    })
  }

  //@HostListener('mouseenter')
  onIn(){
     this.wd = 800
  }
  //@HostListener('mouseleave')
  onOut(){
     this.wd = 400
  }
}
