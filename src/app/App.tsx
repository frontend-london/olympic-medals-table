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
            </div>
        )
    }
}
