import React from 'react';
import TableMedalsRow from './row';

export interface TableMedalsProps { }

function TableMedals(props: TableMedalsProps) {
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
        <TableMedalsRow />
      </tbody>
    </table>
  )
}

export default TableMedals;