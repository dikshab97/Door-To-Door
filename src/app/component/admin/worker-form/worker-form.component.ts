import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {
  
  

  constructor() { }

 save(worker)
 {
   console.log(worker);
 }
  ngOnInit() {
  }
 }
