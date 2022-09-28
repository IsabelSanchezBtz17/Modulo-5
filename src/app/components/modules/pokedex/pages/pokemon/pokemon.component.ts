import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  id: number | undefined ;
  name: string | undefined ;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        this.id=params['id'];
        console.log(this.id);
      }
    )

    this.activatedRoute.data.subscribe(
      response => {
        this.name= response['data'].name;
       // this.name=response['pokemon'].name;
       console.log(response['data'].name);
        //console.log(response);
      }
    )
  }

}
