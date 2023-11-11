import React, { useEffect, useState, useRef } from 'react'
import styles from './Header.module.scss'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


const Header = () => {
	const [inputValue, setInputValue] = useState('');
	const [currentCategory, setCurrentCategory] = useState('name')
	const inputRef = useRef(null);

	// control input
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const clearInput = () => {
		setInputValue('');
	}

	const handleCategory = (e) => {
		setCurrentCategory(e.target.value);
	}

	useEffect(() => {
		inputRef.current.focus();
	}, [currentCategory])
	

	return (
		<section className={styles.header}>
			<div className={styles.searchBox}>
				<select name="" id="" className={styles.select} onChange={handleCategory}>
					<option value="name">Name</option>
					<option value="age">Age</option>
					<option value="gender">Gender</option>
					<option value="phone">Phone</option>
					<option value="zip">Zip</option>
					<option value="status">Status</option>
				</select>
				<input type="text" className={styles.search} value={inputValue} onChange={handleChange} placeholder='Search' ref={inputRef}/>
				<button className={styles.searchBtn} style={{ display: inputValue ? 'none' : 'flex' }}><FiSearch/></button>
				<button className={styles.closeBtn} style={{ display: inputValue ? 'flex' : 'none' }} onClick={clearInput}><AiOutlineClose/></button>
			</div>
		</section>
	)
}

export default Header