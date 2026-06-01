export default function SectionTitle({ title }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <div className="w-24 h-1 bg-cyan-400 mt-3 rounded-full" />
    </div>
  );
}