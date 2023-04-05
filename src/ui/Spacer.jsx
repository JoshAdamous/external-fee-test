import styled from 'styled-components';
import { spacingMap } from './consts';

const Spacer = styled.div`
  min-height: ${({ gap }) => spacingMap[gap] ?? spacingMap.xs5};
`;

export default Spacer;
