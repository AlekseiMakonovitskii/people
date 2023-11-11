import React, { useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setValueAction, setCurrentCategoryAction} from '../../store';


const Header = () => {
	const inputValue = useSelector(state => state.inputValueReducer.value);
	const currentCategory = useSelector(state => state.currentCategoryReducer.category);
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	
	// control input
	const handleChange = (e) => {
		dispatch(setValueAction(e.target.value))
	}

	const clearInput = () => {
		dispatch(setValueAction(''))
	}

	const handleCategory = (e) => {
		dispatch(setCurrentCategoryAction(e.target.value))
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