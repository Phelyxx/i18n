import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';


const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {/* Con React intl, mostrar el salario como un FormattedMessage que diga millones en español o millions en ingles*/}
        <FormattedMessage id="salary-job" values={{ salary: props.offer.salary }} />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        {/* Show the number of views with a thousand separator */}
        <FormattedNumber value={props.offer.views} />

      </td>
    </tr>
  );
};

export default Job;
