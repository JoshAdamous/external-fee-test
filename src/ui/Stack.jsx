import styled from 'styled-components';
import { spacingMap } from './consts';

const Stack = styled.div`
  display: grid;
  gap: ${({ gap }) => spacingMap[gap] ?? spacingMap.xs5};
`;

export default Stack;
