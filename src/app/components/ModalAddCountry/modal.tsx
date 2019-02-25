import React from 'react';
import { CountryInterface } from './../../interfaces/country';
import { AvailableCountriesInterface } from './../../interfaces/availableCountries';
import './../../../scss/components/modal-add-country.scss';

interface ModalAddCountryState {
  name: string,
  nameError: boolean,
  goldMedals: number,
  silverMedals: number,
  bronzeMedals: number
}

interface ModalAddCountryProps extends AvailableCountriesInterface {
  open: boolean,
  handleModalClose(): void,
  handleAddCountry(e: CountryInterface): void
}

const initialState = {
  name: '',
  nameError: false,
  goldMedals: 0,
  silverMedals: 0,
  bronzeMedals: 0
};

export class ModalAddCountry extends React.Component<ModalAddCountryProps, ModalAddCountryState> {
  constructor(props: ModalAddCountryProps) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) this.handleModalClose(); // on escape close modal window
    });
  }

  // @todo: make it work with typescipt
  // this can help:
  // https://stackoverflow.com/questions/47166369/argument-of-type-e-customevent-void-is-not-assignable-to-parameter-of-ty?rq=1
  // componentWillUnmount() {
  //   document.removeEventListener("keyup", this.escFunction, false);
  // }

  reset() {
    this.setState(initialState);
  }

  handleNameChanged = (e: React.FormEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    const name = e.currentTarget.value;
    this.setState({
      name,
      nameError: name === ''
    });
  }

  handleGoldMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ goldMedals: parseInt(e.currentTarget.value) || 0 });
  }

  handleSilverMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ silverMedals: parseInt(e.currentTarget.value) || 0 });
  }

  handleBronzeMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ bronzeMedals: parseInt(e.currentTarget.value) || 0 });
  }

  handleSaveChanges = (e: React.SyntheticEvent<HTMLElement>): void => {
    e.preventDefault();
    if (this.state.name !== '') {
      this.props.handleAddCountry({
        name: this.state.name.substr(2), // option value is combination of code (first 2 characters) and name. I could use Array.find() instead but it would be slower
        code: this.state.name.substr(0, 2),
        goldMedals: this.state.goldMedals,
        silverMedals: this.state.silverMedals,
        bronzeMedals: this.state.bronzeMedals
      });
      this.reset();
    } else {
      this.setState({ nameError: true });
    }
  }

  handleModalClose = (): void => {
    this.props.handleModalClose();
    this.reset();
  }

  public render() {
    const { open, handleAddCountry, availableCountries } = this.props;
    const { name, nameError, goldMedals, silverMedals, bronzeMedals } = this.state;

    return (
      <div className={"modal modal-add-country" + (open ? ' open' : '')}>
        <div className="modal__content">
          <form onSubmit={this.handleSaveChanges}>
            <div className="modal__header">
              <span className="modal__close" onClick={this.handleModalClose}>&times;</span>
              <h2>Add a Country Medals:</h2>
            </div>
            <div className="modal__body">
              <div className="row">
                <div className="modal-add-country__col-label">
                  <label htmlFor="select-name">Country:</label>
                </div>
                <div className="col--75">
                  <select id="select-name" value={name} onChange={this.handleNameChanged}>
                    <option value="" disabled>Select country</option>
                    {availableCountries.map((availableCountry, i) =>
                      <option value={availableCountry.code + availableCountry.name} key={availableCountry.code}>{availableCountry.name}</option>
                    )}
                  </select>
                  <div className={"error" + (nameError ? '' : ' hidden')}>Name can't be empty</div>
                </div>
              </div>
              <div className="row">
                <div className="modal-add-country__col-label">
                  <label htmlFor="input-gold-medals">Gold<span className="modal-add-country__label-mobile"> Medals</span>:</label>
                </div>
                <div className="col--75">
                  <input type="number" min="0" id="input-gold-medals" value={goldMedals} onChange={this.handleGoldMedalChanged} />
                </div>
              </div>
              <div className="row">
                <div className="modal-add-country__col-label">
                  <label htmlFor="input-silver-medals">Silver<span className="modal-add-country__label-mobile"> Medals</span>:</label>
                </div>
                <div className="col--75">
                  <input type="number" min="0" id="input-silver-medals" value={silverMedals} onChange={this.handleSilverMedalChanged} />
                </div>
              </div>
              <div className="row">
                <div className="modal-add-country__col-label">
                  <label htmlFor="input-bronze-medals">Bronze<span className="modal-add-country__label-mobile"> Medals</span>:</label>
                </div>
                <div className="col--75">
                  <input type="number" min="0" id="input-bronze-medals" value={bronzeMedals} onChange={this.handleBronzeMedalChanged} />
                </div>
              </div>
            </div>
            <div className="modal__footer">
              <button type="button" className="button--gray" onClick={this.handleModalClose}>Close</button>
              <button type="submit" className="button" onClick={this.handleSaveChanges}>Save changes</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ModalAddCountry;