import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { MatSort } from '@angular/material';
import { Observable, of } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { OwnerListService } from '../../../services/owner-list.service';
import { UserEntitiesService } from '../../../services/user-entities.service';
import { map, flatMap, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: "*" })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class OwnerListComponent implements AfterViewInit {
  public userEntiteData: any = [];
  public userEntityId: any;
  public allData: any;

  public sss:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: MatTableDataSource
  ownerListed: any;

  columnsToDisplay = ['id', 'name', 'number', 'status', 'action'];
  dataSource = new MatTableDataSource<tableData>(tableData);


  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;


  constructor(
    public router: Router,
    private ownerListService: OwnerListService,
    private UserEntitiesService: UserEntitiesService
  ) { }

  ngOnInit(): void {
    console.log(this.dataSource);
    this.ownerList();
  }

  addOwner(ownerData) {
    console.log(ownerData);
    let passData: NavigationExtras = {
      queryParams: {
        'brokerAdd': ownerData,
      }
    }
    this.router.navigate(['/dashboard/vendor/userEntity'], passData);
  }
  //  owner list
  // ownerList(){
  //   this.ownerListService.ownerList().pipe(
  //     map(
  //       (success: any)=>{
  //         console.log(success);
  //         return success;
  //       }),
  //     flatMap(param => {
  //       console.log(param);
  //       param.forEach(element => {
  //         console.log(element.userEntityId);
  //         this.userEntityId = element.userEntityId;
  //         this.UserEntitiesService.getUserData(this.userEntityId).pipe(
  //           map( resp =>{
  //             console.log(resp);
  //             return resp;
  //           })
  //         )
  //       });
  //       return param;
  //     })
  //   ).subscribe(
  //     (success)=>{
  //       console.log(success);
  //     }
  //   )
  // }
  ownerList() {
    this.ownerListService.ownerList().subscribe(
      (success: any) => {
        this.allData = success;
        success.forEach(element => {
          this.UserEntitiesService.getUserData(element.userEntityId).subscribe(
            (res) => {
              // console.log(res);
              this.userEntiteData.push(res);
              this.mapped();
            }, (error)=>{
              console.log(error);
              
            }
          )
        });
      },(error)=>{
        console.log(error);
      }
    )
  }
  
  mapped() {
    const mapped = this.allData.map((val, index) => {
      return [val, this.userEntiteData[index]]
    });
    console.log(mapped);
    this.sss = mapped;
    this.dataSource = new MatTableDataSource<tableData>(mapped);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // connect(): Observable<Element[]> {
  //   const rows = [];
  //   tableData.forEach(element => rows.push(element, { detailRow: true, element }));
  //   console.log(rows);
  //   return of(rows);
  // }


  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // delete owner list
  delete(id) {
    console.log(id);
    this.ownerListService.ownerDelete(id).subscribe(
      (success) => {
        console.log(success);
        this.ownerList();
      },
      (error) => {
        console.log(error);
      }
    )

  }
  // view owner
  view(id) {
    console.log(id);
    let passData: NavigationExtras = {
      queryParams: {
        'userId': id,
      }
    }
    this.router.navigate(['./dashboard/vehicle/ownerView'], passData);
  }
}

export interface tableData {
  id: number;
  name: string;
  number: string;
  status: string;
  action: string;
  description: any[];

}

const tableData: tableData[] = [];
