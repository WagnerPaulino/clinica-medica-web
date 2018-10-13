import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecepcionistaService } from '../../../services/recepcionista.service';
import { Recepcionista } from '../../../domain/recepcionista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepcionista-edit',
  templateUrl: './recepcionista-edit.component.html',
  styleUrls: ['./recepcionista-edit.component.css']
})
export class RecepcionistaEditComponent implements OnInit {
  public recepcionista: Recepcionista = new Recepcionista();
  private id;

  @Output()
  public salvouRecepcionista = new EventEmitter();

  constructor(private recepcionistaService: RecepcionistaService,
      private route: ActivatedRoute,
      private router: Router) {
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.recepcionistaService.findOne(this.id).subscribe((r: Recepcionista) => {
            this.recepcionista = r;
          });
        } else {
          this.recepcionista = new Recepcionista;
        }
    });
   }
  ngOnInit() {}
  salvar() {
    if (this.recepcionista.id) {
      this.recepcionistaService.alterar(this.recepcionista).subscribe((r) => {
        this.router.navigateByUrl('/recepcionista-list');
        this.recepcionista = new Recepcionista();
        this.id = '';
        this.salvouRecepcionista.emit();
      });
    } else {
      this.recepcionistaService.inserir(this.recepcionista).subscribe((r) => {
        this.router.navigateByUrl('/recepcionista-list');
        this.recepcionista = new Recepcionista();
        this.id = '';
        this.salvouRecepcionista.emit();
      });
    }
  }
  excluir() {
    this.recepcionistaService.deletar(this.recepcionista).subscribe((r) => {
      this.recepcionista = new Recepcionista();
      this.salvouRecepcionista.emit();
      this.router.navigateByUrl('/recepcionista-list');
    });
  }

}
