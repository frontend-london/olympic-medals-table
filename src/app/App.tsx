import * as React from 'react';
import TableMedals from './components/TableMedals/table';
import ModalAddCountry from './components/ModalAddCountry/modal';

export interface AppState { }
export interface AppProps { }

export class App extends React.Component<AppProps, AppState> {
    public render() {
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button-add-country">Add a country +</button>
                <TableMedals />
                <ModalAddCountry />
            </div>
        )
    }
}
