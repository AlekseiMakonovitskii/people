import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<section className={styles.header}>
			<div className={styles.searchBox}>
				<select name="" id="" className={styles.select}>
					<option value="">Name</option>
					<option value="">Age</option>
					<option value="">Gender</option>
					<option value="">Phone</option>
					<option value="">Zip</option>
					<option value="">Status</option>
				</select>
				<input type="text" className={styles.search}/>
				<button className={styles.searchBtn}>Search</button>
			</div>
		</section>
	)
}

export default Header