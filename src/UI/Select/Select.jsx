import s from "./Select.module.css";

export const Select = () => {
  return (
    <>
      <select className={s.select} name="houses" id="">
        <option value="">Gryffindor</option>
        <option value="">Hufflepuff</option>
        <option value="">Ravenclaw</option>
        <option value="">Slytherin</option>
      </select>
    </>
  );
};
