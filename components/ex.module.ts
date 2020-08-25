import { ModuleWithProviders, NgModule } from '@angular/core';
import { ExIconModule } from './src/icons';

export * from './src/icons';

@NgModule({
    exports: [ExIconModule]
})
export class ExModule {
    static forRoot(): ModuleWithProviders<ExModule> {
        return {
            ngModule: ExModule
        };
    }
}
