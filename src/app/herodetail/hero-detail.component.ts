/**
 * Created by mebener on 31.05.2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})


export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }


  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

}
