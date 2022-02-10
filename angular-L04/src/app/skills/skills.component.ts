import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Abstract Mathematics',
      level: Level.Expert
    },
    {
      id: 1,
      name: 'Philosophy',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'Developing Software',
      level: Level.Expert
    }
  ];

  constructor() {}

  ngOnInit() {}
}