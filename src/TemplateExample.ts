import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as template from './TemplateExample.rt';

export interface TemplateExample extends RouteComponentProps<any> {}

export class TemplateExample extends React.Component<TemplateExample, any> {

    getWorld(): string {
        return 'World!';
    }

    render() {
        const f:Function = <any>template
        return f.apply(this);
    }
}