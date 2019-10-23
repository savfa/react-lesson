import  React, {useState} from 'react';
import styles from './pagination.module.css';
import  cn from 'classnames';

const Pagination = ({totalItemsCount, pageSize, currentPage=1, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize); //Количество страниц (всего пользователей на сервере/размер отображаемых элементов сервером на странице)
    let pages = []; //Массив страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize); //Количество порций (количество страниц/размерстраниц в порции)

    let [portionNumber, setPortionNumber] = useState(1); //Хук состояния, номер порции по дефолту 1 и функция обработчик

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //Номер крайней страницы в порции слева
    let rightPortionPageNumber = portionNumber * portionSize; //Номер крайней страницы в порции справа

    return(
        <div className={styles.pagination}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Pagination;