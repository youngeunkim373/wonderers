import React from 'react';
import './button.css';

interface TestProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Test contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Test = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TestProps) => {
  const mode = primary ? 'storybook-test--primary' : 'storybook-test--secondary';
  return (
    <button
      type="button"
      className={['storybook-test', `storybook-test--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          /* background-color: ${backgroundColor}; */
          background-color: blue;
        }
      `}</style>
    </button>
  );
};
