import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Route } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GetDataService } from './get-data.service';
import { SocialMediaData } from './interfaces/SocialMediaData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public socialMediaData: SocialMediaData | undefined;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private dataService: GetDataService) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        let rt = this.getChild(this.activatedRoute)
        rt.data.subscribe(routeData => {
          this.titleService.setTitle(routeData['title'])
        })
      })

    this.dataService.getSocialMediaData().subscribe(
      (data: SocialMediaData) => this.socialMediaData = { ...data }
    )

  }

  //get child component recursively
  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

}