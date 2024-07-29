import { Label } from "../../UI/Label/Label";
import { InputName } from "../../UI/InputName/InputName";
import { Select } from "../../UI/Select/Select";
import { Container } from "../../Layout/Container/Container";

import s from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <Container>
      <div className={s.searchbar_wr}>
        <div className={s.input_wr}>
          <Label>Name</Label>
          <InputName />
        </div>
        <div className={s.input_wr}>
          <Label>School</Label>
          <Select />
        </div>
      </div>
    </Container>
  );
};
