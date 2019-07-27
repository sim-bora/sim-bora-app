import styled from 'styled-components/native';
import { metrics, colors } from './index';
import logo from '../assets/logo.png';

export const Container = styled.View`
  flex: 1;
`;
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.primary
})``;

export const Content = styled.View`
  flex: 1;
  align-items: ${props => (props.row ? 'stretch' : 'center')};
  justify-content: ${props => (props.row ? 'space-between' : 'center')};
  background: ${colors.secundary};
  padding: ${metrics.space.base}px;
`;

export const Logo = styled.Image.attrs({
  source: logo
})`
  height: 200px;
  width: 200px;
`;

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true
})``;

export const ContainerModal = styled.View`
  flex: 1;
  background: ${colors.backgroundModal};
  padding: ${metrics.space.large * 4}px ${metrics.space.large}px;
`;

export const ContentModal = styled.View`
  background: ${colors.white};
  flex: 1;
  border-radius: ${metrics.space.base};
  padding: ${metrics.space.medium}px;
`;
export const TitleModal = styled.Text`
  font-size: ${metrics.font.large}px;
  color: ${colors.dark};
  text-align: center;
  font-weight: bold;
  margin-bottom: ${metrics.space.medium}px;
  padding: ${metrics.space.base}px;
`;
