import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  currentYear: number = new Date().getFullYear();
  email: string = '';

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Footer-specific browser-only code if needed
    }
  }

  subscribe() {
    console.log(this.email);
  }
}
