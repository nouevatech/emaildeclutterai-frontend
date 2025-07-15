export default function InboxOverview() {
  const categories = [
    {
      label: "Priority",
      count: 180,
      details: "122 flagged, 58 unread",
      color: "bg-red-100 text-red-700",
    },
    {
      label: "CC’d",
      count: 45,
      details: "You’re copied in 45 emails",
      color: "bg-green-100 text-green-700",
    },
    {
      label: "Newsletters",
      count: 180,
      details: "122 emails, 58 unread",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      label: "Socials",
      count: 180,
      details: "122 read, 58 unread",
      color: "bg-pink-100 text-pink-700",
    },
    {
      label: "Promotions",
      count: 180,
      details: "122 emails, 58 unread",
      color: "bg-blue-100 text-blue-700",
    },
    {
      label: "Unknown",
      count: 180,
      details: "17 emails from unknown sender",
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <main className="wrapper pt-20">
      <div className="heading mb-10">
        <h2 className="text-3xl font-semibold mb-2">Hello Roseline,</h2>
        <p className="text-2xl font-semibold mb-2">
          Welcome to your inbox overview.
        </p>
        <p className="mt-6 text-gray-700 ">
          Here's a quick summary of your inbox.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className={`p-4 rounded shadow ${cat.color}  lg:w-80 w-full h-60`}
          >
            <h3 className="text-lg font-semibold">{cat.label}</h3>
            <p className="text-xl font-bold">{cat.count} Mails</p>
            <p className="text-sm">{cat.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
