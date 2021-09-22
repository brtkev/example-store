import styles from '../styles/searchbar.module.scss';
const change = (ev) => {

  console.log(ev.target.value);
}


const Searchbar = (props) => {
  return (
    <div id={styles.container}>
      <input id={styles.searchbar} type="search" name="seachBar" onChange={change} 
        placeholder={props.placeholder ? props.placeholder : ''}
      />
    </div>
  )
}

export default Searchbar
