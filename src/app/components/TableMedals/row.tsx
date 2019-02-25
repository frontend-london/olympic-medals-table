import React from 'react';
import { CountryInterface } from './../../interfaces/country';

interface TableMedalsRowProps {
  id: number,
  country: CountryInterface,
  handleEditCountry(editedCountry: CountryInterface): void
}

function TableMedalsRow(props: TableMedalsRowProps) {
  const { id, country, handleEditCountry } = props;
  const { name, code, goldMedals, silverMedals, bronzeMedals } = country;
  const totalMedals = goldMedals + silverMedals + bronzeMedals;
  return (
    <tr onClick={(e) => handleEditCountry(country)}>
      <td>{id}</td>
      <td><span className={"flag flag__" + code}></span>{name}</td>
      <td>{goldMedals}</td>
      <td>{silverMedals}</td>
      <td>{bronzeMedals}</td>
      <td>{totalMedals}</td>
    </tr>
  )
}

export default TableMedalsRow;