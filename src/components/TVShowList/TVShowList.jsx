import React from "react";
import s from "./style.module.css";
import TVShowListItem from "../TVShowListItem/TVShowListItem";

export default function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map(tvShow => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
