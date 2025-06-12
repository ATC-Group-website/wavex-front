import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  platformId = inject(PLATFORM_ID);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Bootstrap JavaScript components when needed
      // This ensures Bootstrap dropdowns, collapse, etc. work properly
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = this.elementRef.nativeElement.querySelector('.navbar');
      if (window.scrollY > 50) {
        this.renderer.addClass(navbar, 'scrolled');
      } else {
        this.renderer.removeClass(navbar, 'scrolled');
      }
    }
  }
}
