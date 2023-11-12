import React, { useEffect } from 'react'
import Header from './components/Header/Header'

const App = () => {
  const dispatch = useDispatch();
  const globalData = useSelector(state => state.fetchDataReducer.globalData);
  // const filteredData = useSelector(state => state.filteredDataReducer.filteredData)

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [])

  useEffect(() => {
    dispatch(filteredDataAction(globalData))
  }, [globalData])


  return (
    <div className='app'>
      <Header />
      <Table/>
    </div>
  )
}

export default App