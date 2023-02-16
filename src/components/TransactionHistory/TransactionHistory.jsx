import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tHeadRow}>Type</th>
          <th className={css.tHeadRow}>Amount</th>
          <th className={css.tHeadRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.tDateRow}>{item.type}</td>
            <td className={css.tDateRow}>{item.amount}</td>
            <td className={css.tDateRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
