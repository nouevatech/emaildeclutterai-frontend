// import React, { useEffect, useState } from "react";
import Dashboard2 from "./Dashboard2";

export default function InboxOverview() {
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       // 1. Fetch emails from backend
  //       const listRes = await fetch("/gmail/list", {
  //         credentials: "include",
  //       });
  //       const listData = await listRes.json();

  //       // 2. Send emails to categorize endpoint
  //       const catRes = await fetch("/gmail/categorize", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         credentials: "include",
  //         body: JSON.stringify({ emails: listData.emails }),
  //       });
  //       const catData = await catRes.json();

  //       setCategories(catData.categories);
  //     } catch (err) {
  //       console.error("Error loading inbox overview:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   loadData();
  // }, []);

  // if (loading) return <p>Loading inbox overview...</p>;
  // if (categories.length === 0)
  //   return <p className="pt-20 mb-20">No categories found.</p>;

  return (
    <main className="wrapper pt-20">
      {/* <div className="heading mb-10">
        <h2 className="text-3xl font-semibold mb-2">Hello {user.name}</h2>
        <p className="text-2xl font-semibold mb-2">
          Welcome to your inbox overview.
        </p>
        <p className="mt-6 text-gray-700 ">
          Here's a quick summary of your inbox.
        </p>
      </div> */}

      <Dashboard2 />

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div> */}
    </main>
  );
}
