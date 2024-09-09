import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
