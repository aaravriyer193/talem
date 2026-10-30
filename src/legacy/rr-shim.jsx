// Compatibility shim so the legacy app code can keep importing
// 'react-router-dom' / 'react-router' unchanged while running on TanStack Router.
import React from 'react';
import {
  Link as TanStackLink,
  useParams as useTanStackParams,
  useNavigate as useTanStackNavigate,
  useLocation as useTanStackLocation,
  useRouter,
} from '@tanstack/react-router';

export function Link({ to, children, ...rest }) {
  return (
    <TanStackLink to={to} {...rest}>
      {children}
    </TanStackLink>
  );
}

export function NavLink({ to, children, className, style, ...rest }) {
  const resolve = (fn, isActive) => (typeof fn === 'function' ? fn({ isActive }) : fn);
  return (
    <TanStackLink to={to} {...rest}>
      {({ isActive }) => (
        <span className={resolve(className, isActive)} style={resolve(style, isActive)}>
          {children}
        </span>
      )}
    </TanStackLink>
  );
}

export function useParams() {
  return useTanStackParams({ strict: false });
}

export function useNavigate() {
  const navigate = useTanStackNavigate();
  const router = useRouter();
  return React.useCallback(
    (to, options = {}) => {
      if (typeof to === 'number') {
        router.history.go(to);
        return;
      }
      navigate({ to, replace: options.replace, state: options.state });
    },
    [navigate, router],
  );
}

export function useLocation() {
  const location = useTanStackLocation();
  return {
    ...location,
    key: location.href,
    state: location.state,
  };
}

export function Navigate({ to }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate(to, { replace: true });
  }, [to, navigate]);
  return null;
}

export function Outlet() {
  return null;
}
