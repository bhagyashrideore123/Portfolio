import {Tab, Tabs, TabList, TabPanel, TabContent} from '@angular/aria/tabs';
import { Component } from '@angular/core';

@Component({
  imports: [Tabs, TabList, Tab, TabPanel, TabContent],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {}
