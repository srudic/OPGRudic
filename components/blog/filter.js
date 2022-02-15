import { useState } from "react";
import styles from "../../styles/Blog/Filter.module.css";

const Filter = (props) => {
  const [filterOptions, setFilterOptions] = useState([
    { title: "Masline", tag: "masline", selected: true },
    { title: "Bademi", tag: "bademi", selected: true },
  ]);

  const filterHandler = ({ filterBy, index }) => {
    const newArray = filterOptions.slice();
    newArray[index].selected = !newArray[index].selected;
    setFilterOptions(newArray);
    // filterOptions[index].selected = !filterOptions[index].selected;
    const filterTags = newArray.map((tab) => {
      return { tag: tab.tag, selected: tab.selected };
    });
    props.filterSelectedHandler(filterTags);
  };

  return (
    <div className={styles.FilterContainer}>
      <h2 className={styles.filterDescription}>Opcije filtriranja </h2>
      {filterOptions.map((option, i) => (
        <div
          key={option.tag}
          onClick={() => filterHandler({ filterBy: option.tag, index: i })}
          style={{
            backgroundColor: option.selected ? "var(--color-green)" : null,
            color: option.selected ? "white" : null,
          }}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
};

export default Filter;
