import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';


import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NavigationExtras, Router } from '@angular/router';
import { BrokerService } from '../../../services/broker.service';
import { UserEntitiesService } from '../../../services/user-entities.service';


@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.scss']
})
export class BrokerListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'brakerName', 'contactNo', 'status', 'action'];
  brokerTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private userEntityId : number;

  constructor(
    private routers: Router,
    private brokerService : BrokerService,
    private userEntitiesService : UserEntitiesService,
  ) { }
  // dataSource = ELEMENT_DATA;
  // clickedRows = new Set<tableData>();

  
  ngOnInit(): void {
    this.brokerList();
  }

  ngAfterViewInit() {
    this.brokerTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.brokerTable.filter = filterValue.trim().toLowerCase();
  }

  brokerList(){
    this.brokerService.brokerList().subscribe(
      (res: any)=>{
        console.log(res);
        this.brokerTable = new MatTableDataSource<interfacTableData>(res);
        this.brokerTable.sort = this.sort;
        this.brokerTable.paginator = this.paginator;
        // user entity call
        res.forEach(element => {
          this.userEntityId = element.userEntityId;
          console.log(this.userEntityId);
          this.userEntitiesService.getUserData(element.userEntityId).subscribe(
            (success)=>{
              console.log(success);
            },(error)=>{
              console.log(error);
            }
          )
        })
        
      }, (error)=>{
        console.log(error);
      }
    )
  }
  added(added){
    let passData: NavigationExtras = {
      queryParams:{
        'brokerAdd': added,
      }
    }
    this.routers.navigate(['/dashboard/vendor/userEntity'], passData)
  }
  
}
export interface interfacTableData {
  id: number;
  brakerName: string;
  contactNo: number;
  status: string;
}
const tableData: interfacTableData[] = [
  // {id: 1, brakerName: 'Tanmoy Rudhra', contactNo: 7890740945, status: 'Is active'},
  // {id: 1, brakerName: 'Achyut Jana', contactNo: 7890740945, status: 'Is active'},
  // {id: 1, brakerName: 'Abhishek Pal', contactNo: 7890740945, status: 'Is active'},
];
