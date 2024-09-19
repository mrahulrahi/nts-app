import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IG - Tour & Travels",
  description: "More about tour & travels",
};

export default function TourTravelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}