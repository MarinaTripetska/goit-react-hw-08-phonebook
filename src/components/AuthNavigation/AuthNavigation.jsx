import { StyledNavigationLink } from '../StyledNavigationLink';
export const AuthNavigation = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <StyledNavigationLink toPath="/register" name="Sign up" />
      <StyledNavigationLink toPath="/login" name="Log in" />
    </div>
  );
};
