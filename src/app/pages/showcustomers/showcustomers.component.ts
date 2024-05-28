import { Component } from '@angular/core';
import { CustomercardComponent } from "../../components/customercard/customercard.component";

@Component({
    selector: 'app-showcustomers',
    standalone: true,
    templateUrl: './showcustomers.component.html',
    styleUrl: './showcustomers.component.scss',
    imports: [CustomercardComponent]
})
export class ShowcustomersComponent {

}
