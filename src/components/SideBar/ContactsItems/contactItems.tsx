import { InstagramSvg } from "../../Contacts/img/instagram";
import { TelegramSvg } from "../../Contacts/img/telegram";
import { YouTub } from "../../Contacts/img/youtube";
import { ContactsList, ContactItem,IconContainer, ContactLink } from "./contactItems.styled";

const ContactItems = () => {
  return (
    <div>
      <ContactsList>
        <ContactItem>
          <IconContainer>
            <InstagramSvg />
          </IconContainer>
          <ContactLink href="https://www.instagram.com/_bgirlalma_/">
            Instagram
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <IconContainer>
            <TelegramSvg />
          </IconContainer>
          <ContactLink href="https://t.me/BgirlAlma99">Telegram</ContactLink>
        </ContactItem>
        <ContactItem>
          <IconContainer>
            <YouTub />
          </IconContainer>
          <ContactLink href="https://www.youtube.com/channel/UClqOaLDxBvA2wM8k1769UIg">
            YouTube
          </ContactLink>
        </ContactItem>
      </ContactsList>
    </div>
  );
};

export default ContactItems;
