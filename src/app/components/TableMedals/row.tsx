import React from 'react';
import { CountryInterface } from './../../interfaces/country';

interface TableMedalsRowProps {
  id: number,
  country: CountryInterface
}

function TableMedalsRow(props: TableMedalsRowProps) {
  const { id, country } = props;
  const { name, goldMedals, silverMedals, bronzeMedals } = country;
  const totalMedals = goldMedals + silverMedals + bronzeMedals;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{goldMedals}</td>
      <td>{silverMedals}</td>
      <td>{bronzeMedals}</td>
      <td>{totalMedals}</td>
    </tr>
  )
}

export default TableMedalsRow;