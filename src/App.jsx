import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

export default () => {
  const { t } = useTranslation();
  return <Typography>{t('happyHolidays I love you')}</Typography>;
};
