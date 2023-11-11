import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<section className={styles.header}>
			<div className={styles.searchBox}>
				<select name="" id="">
					<option value="">Name</option>
					<option value="">Age</option>
					<option value="">Gender</option>
					<option value="">Phone</option>
					<option value="">Zip</option>
					<option value="">Status</option>
				</select>
				<input type="text" />
				<button>Search</button>
			</div>
		</section>
	)
}

export default Header