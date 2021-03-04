import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
 
  
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
back(){
  this.router.navigateByUrl('/');
}

}
