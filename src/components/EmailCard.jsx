export default function EmailCard({ email }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <h3 className="font-bold text-lg">{email.subject || 'No Subject'}</h3>
      <p className="text-sm text-gray-500">From: {email.from}</p>
      <p className="text-sm">Date: {email.date}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {email.isUnread && <span className="bg-red-100 px-2 py-1 text-xs rounded">Unread</span>}
        {email.isNewsletter && <span className="bg-yellow-100 px-2 py-1 text-xs rounded">Newsletter</span>}
        {email.hasCc && <span className="bg-blue-100 px-2 py-1 text-xs rounded">CC’d</span>}
        {email.categories.promotions && <span className="bg-pink-100 px-2 py-1 text-xs rounded">Promotions</span>}
        {email.categories.social && <span className="bg-green-100 px-2 py-1 text-xs rounded">Social</span>}
      </div>
    </div>
  );
}
