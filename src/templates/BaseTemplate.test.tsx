import messages from '@/locales/en.json';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have pass the test', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate>
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(3);
    });
  });
});
