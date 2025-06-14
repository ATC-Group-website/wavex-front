import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', form.value);
      // Reset the form after submission
      form.reset();
    } else {
      console.log('Form is invalid');
      console.log('Form errors:', form);
    }
  }
}
