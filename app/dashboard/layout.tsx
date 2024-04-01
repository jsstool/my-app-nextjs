import { Inter } from "next/font/google";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        DashboardLayout
        {children}
    </section>
  );
}
