import * as React from 'react';
import * as api from './api/index';
import TableMedals from './components/TableMedals/table';
import { CountryInterface } from './interfaces/country';
import { CountriesInterface } from './interfaces/countries';
import { ModalAddCountry } from './components/ModalAddCountry/modal';

interface AppProps { }

interface AppState extends CountriesInterface { modalOpen: boolean, availableCountries: Array<string> }

const initialState = {
    modalOpen: false,
    availableCountries: [],
    countries: []
};

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.fetchCountries();
    }

    handleFetchCountriesError = (err: string) => {
        console.error('FetchCountriesError', err);
        //@todo: add proper error handling here
    }

    async fetchCountries() {
        const availableCountries = await api.get('data/countries.json', this.handleFetchCountriesError);
        this.setState({ availableCountries });
    }

    handleModalOpen = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        this.setState({ modalOpen: true });
    }

    handleModalClose = (): void => {
        this.setState({ modalOpen: false });
    }

    handleAddCountry = (country: CountryInterface): void => {
        let countries = [...this.state.countries, country];
        countries.sort((a, b) => {
            if (b.goldMedals !== a.goldMedals) {
                return b.goldMedals - a.goldMedals;
            } else if (b.silverMedals !== a.silverMedals) {
                return b.silverMedals - a.silverMedals;
            } else {
                return b.bronzeMedals - a.bronzeMedals;
            }
        });
        this.setState({
            modalOpen: false,
            countries: countries
        }, () => console.log('state', this.state));
    }

    public render() {
        const { modalOpen, countries, availableCountries } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button-add-country" onClick={this.handleModalOpen}>Add a country +</button>
                <TableMedals countries={countries} />
                <ModalAddCountry
                    availableCountries={availableCountries}
                    open={modalOpen}
                    handleModalClose={this.handleModalClose}
                    handleAddCountry={this.handleAddCountry}
                />
            </div>
        )
    }
}
