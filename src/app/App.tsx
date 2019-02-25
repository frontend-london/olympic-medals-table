import * as React from 'react';
import TableMedals from './components/TableMedals/table';
import { CountryInterface } from './interfaces/country';
import { CountriesInterface } from './interfaces/countries';
import { ModalAddCountry } from './components/ModalAddCountry/modal';

export interface AppProps { }

export interface AppState extends CountriesInterface { modalOpen: boolean }

const initialState = {
    modalOpen: false,
    countries: []
};

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = initialState;
    }

    handleModalOpen = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        this.setState({ modalOpen: true });
    }

    handleModalClose = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        this.setState({ modalOpen: false });
    }

    handleAddCountry = (country: CountryInterface): void => {
        this.setState({
            modalOpen: false,
            countries: [...this.state.countries, country]
        }, () => console.log('state', this.state));
    }

    public render() {
        const { modalOpen, countries } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button-add-country" onClick={this.handleModalOpen}>Add a country +</button>
                <TableMedals countries={countries} />
                <ModalAddCountry
                    open={modalOpen}
                    handleModalClose={this.handleModalClose}
                    handleAddCountry={this.handleAddCountry}
                />
            </div>
        )
    }
}
