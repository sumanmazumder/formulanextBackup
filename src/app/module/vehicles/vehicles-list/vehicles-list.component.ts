import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'vehiclesNo', 'rcNo', 'status', 'action'];
  vehiclesTable = new MatTableDataSource<interfacTableData>(tableData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.vehiclesTable.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vehiclesTable.filter = filterValue.trim().toLowerCase();
  }
  view(){

  }
  delete(){

  }
}
export interface interfacTableData {
  id: number;
  vehiclesNo: string;
  rcNo: string;
  status: string;
}
const tableData: interfacTableData[] = [
  {id: 1, vehiclesNo: 'WB23C6368', rcNo: 'WB23C6368', status: 'is Active'},
  {id: 1, vehiclesNo: 'WB23C6368', rcNo: 'WB23C6368', status: 'is Active'},
  {id: 1, vehiclesNo: 'WB23C6368', rcNo: 'WB23C6368', status: 'is Active'},
  {id: 1, vehiclesNo: 'WB23C6368', rcNo: 'WB23C6368', status: 'is Active'},
  {id: 1, vehiclesNo: 'WB23C6368', rcNo: 'WB23C6368', status: 'is Active'},
];
