import { Recepcionista } from './../../../domain/recepcionista';
import { Component, OnInit, HostListener } from '@angular/core';
import { RecepcionistaService } from '../../../services/recepcionista.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-recepcionista-list',
  templateUrl: './recepcionista-list.component.html',
  styleUrls: ['./recepcionista-list.component.css']
})
export class RecepcionistaListComponent implements OnInit {
  public recepcionistas: Array<Recepcionista> = [];
  recepcionistaSearch = new FormControl();
  filteredOptions: Observable<Recepcionista[]>;

  constructor(private recepcionistaService: RecepcionistaService) {
    this.recepcionistaService.findAll().subscribe((recepcionistas => {
      this.recepcionistas = recepcionistas;
      this.filterAll();
    }));
  }

  ngOnInit() {
    this.filterAll();
  }

  atualizarLista(event) {
    this.recepcionistaService.findAll().subscribe((r: any) => {
      this.recepcionistas = r;
      this.filterAll();
    });
  }

  filterAll() {
    this.filteredOptions = this.recepcionistaSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(name: String): Recepcionista[] {
    if (name === undefined) {
      name = '';
    }
    const filterValue = name.toLowerCase();
    return this.recepcionistas.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}
