import { Limelight } from 'next/font/google';

const limelight = Limelight({
  subsets: ['latin'],
  weight: '400',
});

export default function Heading({ children, as = 'h2', variant = 'blue', className = '' }) {
  const Tag = as;
  
  const shadows = {
    blue: 'drop-shadow-[0_2px_4px_rgba(0,0,80,0.9)]',
    black: 'drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]',
    white: 'drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]',
  };
  
  return (
    <Tag className={`${limelight.className} ${shadows[variant]} ${className}`}>
      {children}
    </Tag>
  );
}