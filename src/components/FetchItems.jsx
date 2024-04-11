import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { itemsActions } from '../store/itemSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const FetchItems = () => {

    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
      if (fetchStatus.fetchDone) return;
  
      const controller = new AbortController();
      const signal = controller.signal;
  
      dispatch(fetchStatusActions.markFetchingStarted())
      fetch("https://ecommercee-65.vercel.app/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(fetchStatusActions.markFetchDone())
          dispatch(fetchStatusActions.markFetchingDone())
          dispatch(itemsActions.addInitialItems(items[0]))
        });
  
      return () => {
        controller.abort();
      };
    }, [fetchStatus]);

  return (
    <> </>
  )
}

export default FetchItems