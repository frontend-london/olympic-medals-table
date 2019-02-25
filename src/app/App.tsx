import * as React from 'react';
import TableMedals from './components/TableMedals/table';
import { ModalAddCountry, ModalAddCountryState } from './components/ModalAddCountry/modal';

export interface AppProps { }
export interface AppState {
    modalOpen: boolean
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { modalOpen: false };
    }

    handleModalOpen = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        this.setState({ modalOpen: true });
    }

    handleModalClose = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        this.setState({ modalOpen: false });
    }

    handleAddCountry = (props: ModalAddCountryState): void => {
        // debugger;
        this.setState({ modalOpen: false });
    }

    public render() {
        const { modalOpen } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button-add-country" onClick={this.handleModalOpen}>Add a country +</button>
                <TableMedals />
                <ModalAddCountry
                    open={modalOpen}
                    handleModalClose={this.handleModalClose}
                    handleAddCountry={this.handleAddCountry}
                />
            </div>
        )
    }
}
