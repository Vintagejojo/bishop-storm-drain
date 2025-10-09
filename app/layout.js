import './globals.css';

export const metadata = {
  title: 'Bishop Storm Drain | Coming Soon',
  description: 'Storm Drain Pros is launching soon. Stay tuned!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}