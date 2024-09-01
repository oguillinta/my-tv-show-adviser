import React from "react";
import s from "./style.module.css";

export default function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="Logo" />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
