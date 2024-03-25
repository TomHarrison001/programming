import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mwFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favourite') isFavourite = true;
    @HostBinding('class.is-favourite-hovering') hovering = false;
    @HostListener('mouseenter') OnMouseEnter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') OnMouseLeave() {
        this.hovering = false;
    }
    @Input() set mwFavourite(value: any) {
        this.isFavourite = value;
    }
}