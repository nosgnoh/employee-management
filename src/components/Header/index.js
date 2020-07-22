import React from 'react';

import MenuLink from '../MenuLink';
import 'react-flags-select/css/react-flags-select.css';
import styled from 'styled-components';

import { Menu, NavigationBar } from './NavigationBar';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';

const LanguageSelect = styled.div`
    float: right;
    margin-top: 10px;

    .flag-select__option__icon {
        top: 0;
    }
`

export default function Header() {
  const countries = ["US", "CN", "VN"];
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    lng = lng.toUpperCase() === 'CN' ? 'ZH' : lng;
    lng = lng.toUpperCase() === 'EN-US' ? 'US' : lng;
    i18n.changeLanguage(lng);
  };

  const handleSelect = (lng) => {
    changeLanguage(lng)
  }

  let defaultLang = i18n.language.toUpperCase().includes('ZH') ? 'CN' : i18n.language;
  defaultLang = defaultLang.toUpperCase() === 'EN-US' ? 'US' : defaultLang;
  if (!countries.includes(defaultLang.toUpperCase())) defaultLang = 'US';
  return (
    <NavigationBar>
      <Menu>
        <MenuLink to="/">EASY<b>management</b></MenuLink>
        <LanguageSelect>
          <ReactFlagsSelect
            countries = {countries}
            defaultCountry={defaultLang}
            onSelect={handleSelect}
          />
        </LanguageSelect>
      </Menu>
    </NavigationBar>
  )
}