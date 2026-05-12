import Link from "next/link";

const PageHeader = ({ title, subtitle }) => (
  <div className="bg-slate-50 pt-32 pb-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600">{subtitle}</p>
    </div>
  </div>
);

export default function PersonalAppPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="A simple guide to our personal tracking solutions."
      />
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg text-slate-600">
            This page is under construction. Check back soon!
          </p>
          <Link
            href="/"
            className="mt-8 inline-block bg-brand-green text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-green-dark transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}
