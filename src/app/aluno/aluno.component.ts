import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class AlunoComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  matricula = '19102314';
  nome = 'Bianca';
  foto = 'https://f.i.uol.com.br/fotografia/2023/04/18/1681834227643ec0f36677a_1681834227_3x2_md.jpg'; 

}
