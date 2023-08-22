import {
  ButtonLable,
  ButtonStyled,
  InputStyled,
  SearchBarForm,
  SearchbarStyled,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <SearchBarForm
        onSubmit={event => {
          event.preventDefault();

          onSubmit(event.target.elements.values.value);
          event.target.reset();
        }}
      >
        <ButtonStyled type="submit">
          <ButtonLable>Search</ButtonLable>
        </ButtonStyled>

        <InputStyled
          type="text"
          name="values"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchBarForm>
    </SearchbarStyled>
  );
};
