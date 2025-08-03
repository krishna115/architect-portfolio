type RoleCardProps = {
  title: string;
  imageUrl: string;
};

export default function RoleCard({ title, imageUrl }: RoleCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-44">
      <img src={imageUrl} alt={title} className="h-20 w-20 object-contain mb-2" />
      <span className="text-sm font-semibold text-gray-800">{title}</span>
    </div>
  );
}
