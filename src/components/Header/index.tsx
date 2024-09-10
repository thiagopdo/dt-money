import { Triangle } from "phosphor-react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import * as Dialog from "@radix-ui/react-dialog";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Triangle size={20} weight="fill" color="#00875f" />

        <Dialog.Root>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
