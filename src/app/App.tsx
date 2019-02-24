import * as React from 'react';

export interface AppState {
}
export interface AppProps {
}

export class App extends React.Component<AppProps, AppState> {
    public render() {
        return (
            <div className="container">
                <h1 className="text-center">Olympic Medals Table</h1>
                <button className="button button-add-country">Add a country +</button>
                <table className="table-medals">
                    <thead>
                        <tr>
                            <th className="table-medals__no"><span aria-label="No">#</span></th>
                            <th className="table-medals__country">Country</th>
                            <th className="table-medals__gold"><div className="medal--gold" aria-label="Gold Medals"></div></th>
                            <th className="table-medals__silver"><div className="medal--silver" aria-label="Silver Medals"></div></th>
                            <th className="table-medals__bronze"><div className="medal--bronze" aria-label="Bronze Medals"></div></th>
                            <th className="table-medals__total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Norway</td>
                            <td>14</td>
                            <td>14</td>
                            <td>11</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Norway</td>
                            <td>14</td>
                            <td>14</td>
                            <td>11</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Norway</td>
                            <td>14</td>
                            <td>14</td>
                            <td>11</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Norway</td>
                            <td>14</td>
                            <td>14</td>
                            <td>11</td>
                            <td>39</td>
                        </tr>
                    </tbody>
                </table>

                <div className="modal modal-medals">
                    <div className="modal__content">
                        <div className="modal__header">
                            <span className="modal__close">&times;</span>
                            <h2>Add a Country Medals:</h2>
                        </div>
                        <div className="modal__body">
                            <div className="row">
                                <div className="col--25 modal-medals__col-label">
                                    <label htmlFor="input-country">Country:</label>
                                </div>
                                <div className="col--75">
                                    <input type="text" className="form-control" id="input-country" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col--25 modal-medals__col-label">
                                    <label htmlFor="input-gold-medals">Gold<span className="modal-medals__label-mobile"> Medals</span>:</label>
                                </div>
                                <div className="col--75">
                                    <input type="number" className="form-control" id="input-gold-medals" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col--25 modal-medals__col-label">
                                    <label htmlFor="input-silver-medals">Silver<span className="modal-medals__label-mobile"> Medals</span>:</label>
                                </div>
                                <div className="col--75">
                                    <input type="number" className="form-control" id="input-silver-medals" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col--25 modal-medals__col-label">
                                    <label htmlFor="input-bronze-medals">Bronze<span className="modal-medals__label-mobile"> Medals</span>:</label>
                                </div>
                                <div className="col--75">
                                    <input type="number" className="form-control" id="input-bronze-medals" />
                                </div>
                            </div>
                        </div>
                        <div className="modal__footer">
                            <button type="button" className="button--gray">Close</button>
                            <button type="button" className="button">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
