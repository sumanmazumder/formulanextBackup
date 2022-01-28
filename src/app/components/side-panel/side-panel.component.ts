import { Component, OnInit } from '@angular/core';
import { UserEntitiesService } from '../../services/user-entities.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor(private userentity: UserEntitiesService, private router: Router) { }

  ngOnInit(): void {
  }

  routeToEntity(callus: string){
    this.userentity.setCurrentCaller(callus);
    this.router.navigateByUrl('/dashboard/vendor')
  }

}
