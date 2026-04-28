import { Component } from '@angular/core';
import { PortfollioServiceService } from '../portfollio-service.service';
import { Experience } from '../models/experience';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
 
  experience: Experience[] = [];

  constructor(private service: PortfollioServiceService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.service.getExperienceData().subscribe({
      next: (data) => {
       
        this.experience = data;
      },
      error: (err) => {
        console.error('Error loading JSON data', err);
      }
    }
      
    );
  }

  getSafeHtml(content: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }

}
