import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit{
  
  id:any
  client:any
  constructor(private route:ActivatedRoute, 
    private router: Router,
    private clientService: ClientService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.clientService.getClientById(this.id).subscribe(data=>{
      this.client = data;
    });
      
  }

  navigateToBackToList(){
    this.router.navigate(['produits']);
   }


}
