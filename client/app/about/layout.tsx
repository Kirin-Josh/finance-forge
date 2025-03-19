export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 md:space-y-[10rem] md:p-0">
      <div>{children}</div>
    </section>
  );
}
