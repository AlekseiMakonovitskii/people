import React from 'react';
import styles from './Table.module.scss';

const Table = () => {
  return (
    <section className={styles.tableSection}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
						<th>Phone</th>
						<th>Zip</th>
						<th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1-1</td>
            <td>Data 1-2</td>
            <td>Data 1-3</td>
						<td>Data 1-4</td>
            <td>Data 1-5</td>
            <td>Data 1-6</td>
          </tr>
        </tbody>
      </table>

			<nav className={styles.nav}>
				<div className={styles.navElements}></div>
			</nav>
    </section>
  );
};

export default Table;
