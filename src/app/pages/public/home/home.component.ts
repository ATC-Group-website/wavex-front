import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  scrollToSection() {
    const aboutDetails = document.getElementById('about_section');
    if (aboutDetails) {
      aboutDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const yOffset = -100;
      const y =
        aboutDetails.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
