import { Component, OnInit } from '@angular/core';
// import { take } from 'rxjs';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));

    // this.heroService
    //   .getHeroes()
    //   .pipe(take(1)) // TODO view pipe & take
    //   .subscribe((heroes) => (this.heroes = heroes));
  }
}
