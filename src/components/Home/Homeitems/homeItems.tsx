import {
    Container,
    FlexContainer,
    MainTitleHomeItems,
  MainListItems,
  Items,
    ItemsListTitle,
  ItemsStudio,
  CityTitle,
  ListTitleStudio,
  ListDescStudio,
  ItemsListDesc,
} from "./homeItems.styled";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const HomeItems = () => {
  return (
    <Container>
      <FlexContainer>
        <MainTitleHomeItems>Akulina Alina</MainTitleHomeItems>
        <img src="#" alt="photo Alina" />
      </FlexContainer>
      <MainListItems>
        <Items>
          <ItemsListTitle>NickName</ItemsListTitle>
          <ItemsListDesc>B.girl Alma</ItemsListDesc>
        </Items>
        <Items>
          <ItemsListTitle>Teaching Experience</ItemsListTitle>
          <ItemsListDesc>7 years</ItemsListDesc>
        </Items>
        <Items>
          <ItemsListTitle>Styles</ItemsListTitle>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Breaking
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Hip-Hop
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Acrobatics
          </ItemsListDesc>
        </Items>
        <Items>
          <ItemsListTitle>Introduction to other styles</ItemsListTitle>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Locking
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            House
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            High Heels
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Jazz Funk
          </ItemsListDesc>
        </Items>
        <Items>
          <ItemsListTitle>Own Dance Experience</ItemsListTitle>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Breaking: 16 years
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Hip-Hop: 4 years
          </ItemsListDesc>
          <ItemsListDesc>
            <VscDebugBreakpointLog />
            Acrobatics: 2 years
          </ItemsListDesc>
        </Items>
        <Items>
          <ItemsListTitle>Job</ItemsListTitle>
          <ul>
            <CityTitle>The city of Kryvyi Rih</CityTitle>
            <ItemsStudio>
              <ListTitleStudio>
                Power Dance studio <ListDescStudio>2013-2014</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
            <ItemsStudio>
              <ListTitleStudio>
                White on Black <ListDescStudio>2018-2020</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
            <ItemsStudio>
              <ListTitleStudio>
                Цдют "Сонях" <ListDescStudio>2020-2021</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
          </ul>
          <ul>
            <CityTitle>The city of Kyiv</CityTitle>
            <ItemsStudio>
              <ListTitleStudio>
                D.side dance studio <ListDescStudio>from 2021</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
            <ItemsStudio>
              <ListTitleStudio>
                Yunia <ListDescStudio>from 2021</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
            <ItemsStudio>
              <ListTitleStudio>
                ЦРДММП "Бригантина" <ListDescStudio>from 2022</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
            <ItemsStudio>
              <ListTitleStudio>
                Ace School <ListDescStudio>from 2022</ListDescStudio>
              </ListTitleStudio>
            </ItemsStudio>
          </ul>
        </Items>
      </MainListItems>
    </Container>
  );
}

export default HomeItems