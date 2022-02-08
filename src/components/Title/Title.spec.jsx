import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
// import { fireEvent, render } from '@testing-library/react';
import Title from './index';

describe('<Title />', () => {
  let component;
  const text = 'Prueba del test';

  beforeEach(() => {
    component = render(
      <Title>{text}</Title>,
    );
  });

  test('render content', () => {
    // component.debug();
    expect(component.container).toHaveTextContent(text);
  });
});
