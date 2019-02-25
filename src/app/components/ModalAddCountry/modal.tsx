import React from 'react';

import { CountryInterface } from './../../interfaces/country';

export interface ModalAddCountryProps {
  open: boolean,
  handleModalClose(e: React.MouseEvent<HTMLElement>): void,
  handleAddCountry(e: CountryInterface): void
}

const initialState = {
  country: '',
  goldMedals: 0,
  silverMedals: 0,
  bronzeMedals: 0
};

export class ModalAddCountry extends React.Component<ModalAddCountryProps, CountryInterface> {
  constructor(props: ModalAddCountryProps) {
    super(props);
    this.state = initialState;
  }

  reset() {
    this.setState(initialState);
  }

  handleCountryChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ country: e.currentTarget.value });
  }

  handleGoldMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ goldMedals: parseInt(e.currentTarget.value) });
  }

  handleSilverMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ silverMedals: parseInt(e.currentTarget.value) });
  }

  handleBronzeMedalChanged = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ bronzeMedals: parseInt(e.currentTarget.value) });
  }

  handleSaveChanges = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    this.props.handleAddCountry(this.state);
    this.reset();
  }

  public render() {
    const { open, handleModalClose, handleAddCountry } = this.props;
    const { country, goldMedals, silverMedals, bronzeMedals } = this.state;

    return (
      <div className={"modal modal-add-country" + (open ? ' open' : '')}>
        <div className="modal__content">
          <div className="modal__header">
            <span className="modal__close" onClick={handleModalClose}>&times;</span>
            <h2>Add a Country Medals:</h2>
          </div>
          <div className="modal__body">
            <div className="row">
              <div className="modal-add-country__col-label">
                <label htmlFor="input-country">Country:</label>
              </div>
              <div className="col--75">
                <input type="text" className="form-control" id="input-country" value={country} onChange={this.handleCountryChanged} />
              </div>
            </div>
            <div className="row">
              <div className="modal-add-country__col-label">
                <label htmlFor="input-gold-medals">Gold<span className="modal-add-country__label-mobile"> Medals</span>:</label>
              </div>
              <div className="col--75">
                <input type="number" className="form-control" id="input-gold-medals" value={goldMedals} onChange={this.handleGoldMedalChanged} />
              </div>
            </div>
            <div className="row">
              <div className="modal-add-country__col-label">
                <label htmlFor="input-silver-medals">Silver<span className="modal-add-country__label-mobile"> Medals</span>:</label>
              </div>
              <div className="col--75">
                <input type="number" className="form-control" id="input-silver-medals" value={silverMedals} onChange={this.handleSilverMedalChanged} />
              </div>
            </div>
            <div className="row">
              <div className="modal-add-country__col-label">
                <label htmlFor="input-bronze-medals">Bronze<span className="modal-add-country__label-mobile"> Medals</span>:</label>
              </div>
              <div className="col--75">
                <input type="number" className="form-control" id="input-bronze-medals" value={bronzeMedals} onChange={this.handleBronzeMedalChanged} />
              </div>
            </div>
          </div>
          <div className="modal__footer">
            <button type="button" className="button--gray" onClick={handleModalClose}>Close</button>
            <button type="button" className="button" onClick={this.handleSaveChanges}>Save changes</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalAddCountry;