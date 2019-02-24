import React from 'react';

export interface ModalAddCountryProps {
  open: boolean,
  handleModalClose(e: React.MouseEvent<HTMLElement>): void,
  handleAddCountry(e: React.MouseEvent<HTMLElement>): void
}

function ModalAddCountry(props: ModalAddCountryProps) {
  const { open, handleModalClose, handleAddCountry } = props;
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
              <input type="text" className="form-control" id="input-country" />
            </div>
          </div>
          <div className="row">
            <div className="modal-add-country__col-label">
              <label htmlFor="input-gold-medals">Gold<span className="modal-add-country__label-mobile"> Medals</span>:</label>
            </div>
            <div className="col--75">
              <input type="number" className="form-control" id="input-gold-medals" />
            </div>
          </div>
          <div className="row">
            <div className="modal-add-country__col-label">
              <label htmlFor="input-silver-medals">Silver<span className="modal-add-country__label-mobile"> Medals</span>:</label>
            </div>
            <div className="col--75">
              <input type="number" className="form-control" id="input-silver-medals" />
            </div>
          </div>
          <div className="row">
            <div className="modal-add-country__col-label">
              <label htmlFor="input-bronze-medals">Bronze<span className="modal-add-country__label-mobile"> Medals</span>:</label>
            </div>
            <div className="col--75">
              <input type="number" className="form-control" id="input-bronze-medals" />
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <button type="button" className="button--gray" onClick={handleModalClose}>Close</button>
          <button type="button" className="button" onClick={handleAddCountry}>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ModalAddCountry;