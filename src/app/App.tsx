import * as React from 'react';
import * as api from './api/index';
import TableMedals from './components/TableMedals/table';
import { CountryInterface } from './interfaces/country';
import { CountriesInterface } from './interfaces/countries';
import { AvailableCountryInterface } from './interfaces/availableCountry';
import { AvailableCountriesInterface } from './interfaces/availableCountries';
import { ModalAddEditCountry } from './components/ModalAddEditCountry/modal';

interface AppProps { }
interface AppState extends CountriesInterface, AvailableCountriesInterface {
    modalOpen: boolean,
    editedCountry: CountryInterface | null
}

const initialState = {
    modalOpen: false,
    availableCountries: [],
    countries: [],
    editedCountry: null
};

function countriesSort(a: CountryInterface, b: CountryInterface): number {
    if (b.goldMedals !== a.goldMedals) {
        return b.goldMedals - a.goldMedals;
    } else if (b.silverMedals !== a.silverMedals) {
        return b.silverMedals - a.silverMedals;
    } else {
        return b.bronzeMedals - a.bronzeMedals;
    }
}

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
        this.setState({
            modalOpen: false,
            editedCountry: null
        });
    }

    handleSaveNewCountry = (country: CountryInterface): void => {
        let availableCountries = [...this.state.availableCountries];
        let countries = [...this.state.countries, country];
        availableCountries = availableCountries.filter((availableCountry, index, arr) => {
            return availableCountry.name !== country.name;
        });
        countries.sort(countriesSort);
        this.setState({
            availableCountries,
            countries: countries,
            editedCountry: null,
            modalOpen: false
        });
    }

    handleSaveEditedCountry = (editedCountry: CountryInterface): void => {
        const editedIndex = this.state.countries.findIndex((country, index) => {
            return country.code == editedCountry.code;
        });
        let countries = [...this.state.countries];
        countries[editedIndex] = editedCountry;
        countries.sort(countriesSort);
        this.setState({
            countries: countries,
            editedCountry: null,
            modalOpen: false
        });
    }

    handleEditCountry = (editedCountry: CountryInterface): void => {
        this.setState({
            editedCountry,
            modalOpen: true,
        });
    }

    handleRemoveCountry = (removeCountry: CountryInterface): void => {
        let availableCountries = [...this.state.availableCountries, {
            code: removeCountry.code,
            name: removeCountry.name
        }];
        availableCountries.sort((a, b) => {
            return ('' + a.name).localeCompare(b.name);
        });
        const countryIndex = this.state.countries.findIndex((country, index) => {
            return removeCountry.code == country.code;
        });
        const countries = [...this.state.countries.slice(0, countryIndex), ...this.state.countries.slice(countryIndex + 1)];
        this.setState({
            availableCountries,
            countries: countries,
            editedCountry: null,
            modalOpen: false,
        });
    }

    public render() {
        const { modalOpen, countries, availableCountries, editedCountry } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button-add-country" onClick={this.handleModalOpen}>Add a country +</button>
                <TableMedals
                    countries={countries}
                    handleEditCountry={this.handleEditCountry}
                />
                <ModalAddEditCountry
                    availableCountries={availableCountries}
                    open={modalOpen}
                    handleModalClose={this.handleModalClose}
                    handleSaveNewCountry={this.handleSaveNewCountry}
                    handleSaveEditedCountry={this.handleSaveEditedCountry}
                    handleRemoveCountry={this.handleRemoveCountry}
                    editedCountry={editedCountry}
                />
            </div>
        )
    }
}
