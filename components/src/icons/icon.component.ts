import { ChangeDetectionStrategy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'ex-icon',
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './icon.component.html',
    styleUrls: ['../../node_modules/energize/sass/components/_icons.scss']
})
export class ExIconComponent {
    constructor() {
        console.log('ex-icon initialized');
    }
}
