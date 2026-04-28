import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  details: any = { name: "", bio: "", linkedInUrl: "", email: "", github: "" };

  constructor(private service: PortfollioServiceService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.service.getProfileData().subscribe((response) => {
      this.details = response[0];
    });
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
