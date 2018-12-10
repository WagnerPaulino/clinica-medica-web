import { SharedService } from './../../../services/shared.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProprietarioService } from '../../../services/proprietario.service';
import { Proprietario } from '../../../domain/proprietario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proprietario-edit',
  templateUrl: './proprietario-edit.component.html',
  styleUrls: ['./proprietario-edit.component.css']
})
export class ProprietarioEditComponent implements OnInit {
  public proprietario: Proprietario = new Proprietario();
  private id;

  @Output()
  public salvouProprietario = new EventEmitter();

  constructor(private proprietarioService: ProprietarioService,
      private route: ActivatedRoute,
      private router: Router,
      private sharedService: SharedService) {
    this.route.queryParams.subscribe((params) => {
        this.id = params['id'];
        if (this.id) {
          this.proprietarioService.findOne(this.id).subscribe((r: Proprietario) => {
            this.proprietario = r;
          });
        } else {
          this.proprietario = new Proprietario;
        }
    });
   }
  ngOnInit() {}

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
      this.sharedService.consultaCEP(cep)
        .subscribe((r) => {
          this.popularDados(r, form);
      });
  }
  popularDados(dados, form) {
    form.form.patchValue({
      rua: dados.logradouro,
      cep: dados.cep,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  salvar(f) {
    if (this.proprietario.id) {
      this.proprietarioService.alterar(this.proprietario).subscribe((r) => {
        this.router.navigateByUrl('/proprietario-list');
        this.proprietario = new Proprietario();
        this.id = '';
        this.salvouProprietario.emit();
      });
    } else {
      this.proprietarioService.inserir(this.proprietario).subscribe((r) => {
        this.router.navigateByUrl('/proprietario-list');
        this.proprietario = new Proprietario();
        this.id = '';
        this.salvouProprietario.emit();
      });
    }
  }
  excluir() {
    this.proprietarioService.deletar(this.proprietario).subscribe((r) => {
      this.proprietario = new Proprietario();
      this.salvouProprietario.emit();
      this.router.navigateByUrl('/proprietario-list');
    });
  }

}
