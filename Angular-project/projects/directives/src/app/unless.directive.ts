import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  @Input('appUnless')
  cond : boolean

  constructor(
    private tmRf : TemplateRef<any>,
    private vcRf : ViewContainerRef 
  
  ) { }

  ngOnInit(){
    if (!this.cond) {
       this.vcRf.createEmbeddedView(this.tmRf)
    } else {
      this.vcRf.clear()
    }
    console.log(this.tmRf)
    console.log(this.vcRf)
  }
}
