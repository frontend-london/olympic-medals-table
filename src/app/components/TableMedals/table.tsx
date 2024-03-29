import React from 'react';
import TableMedalsRow from './row';
import { CountryInterface } from './../../interfaces/country';
import { CountriesInterface } from './../../interfaces/countries';
import './../../../scss/components/table-medals.scss';

interface TableMedalsProps extends CountriesInterface {
  handleEditCountry(editedCountry: CountryInterface): void
}

function TableMedals(props: TableMedalsProps) {
  const { countries, handleEditCountry } = props;
  return (
    <table className="table-medals">
      <thead>
        <tr>
          <th className="table-medals__no"><span aria-label="No">#</span></th>
          <th className="table-medals__country">Country</th>
          <th className="table-medals__gold"><div className="icon-medal--gold" aria-label="Gold Medals"></div></th>
          <th className="table-medals__silver"><div className="icon-medal--silver" aria-label="Silver Medals"></div></th>
          <th className="table-medals__bronze"><div className="icon-medal--bronze" aria-label="Bronze Medals"></div></th>
          <th className="table-medals__total">Total</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, i) =>
          <TableMedalsRow
            country={country}
            id={i + 1}
            key={country.name}
            handleEditCountry={handleEditCountry}
          />
        )}
        {!countries.length &&
          <tr>
            <td className="table-medals__no-country" colSpan={6}>No countries added</td>
          </tr>
        }
      </tbody>
    </table>
  )
}

export default TableMedals;