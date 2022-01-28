import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, NavigationExtras } from '@angular/router';
import { DriverService } from '../../../services/driver.service';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'driverName', 'contactNo', 'status', 'action'];
  driverTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public router: Router,
    private driverService: DriverService
  ) { }

  ngOnInit(): void {
    this.driverList();
  }

  ngAfterViewInit() {
    this.driverTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.driverTable.filter = filterValue.trim().toLowerCase();
  }

  addDriver(driver){
    console.log(driver);
    let passData: NavigationExtras = {
      queryParams:{
        'brokerAdd': driver,
      }
    }
    this.router.navigate(['/dashboard/vendor/userEntity'], passData);
  }

  driverList(){
    this.driverService.driverList().subscribe(
      (res: any)=>{
        console.log(res);
        this.driverTable = new MatTableDataSource<interfacTableData>(res);
        this.driverTable.sort = this.sort;
        this.driverTable.paginator = this.paginator;
      },(error)=>{
        console.log(error);
        
      }
    )
  }
}
export interface interfacTableData {
  id: number;
  driverName: string;
  contactNo: number;
  status: string;
}
const tableData: interfacTableData[] = [
  // {id: 1, driverName: 'Tanmoy Rudhra', contactNo: 7890740945, status: 'Is active'},
  // {id: 1, driverName: 'Achyut Jana', contactNo: 7890740945, status: 'Is active'},
  // {id: 1, driverName: 'Abhishek Pal', contactNo: 7890740945, status: 'Is active'},
];
