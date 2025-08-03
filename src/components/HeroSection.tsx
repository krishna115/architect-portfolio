import RoleCard from './RoleCard';

export default function HeroSection() {
  return (
    <section className="flex justify-between items-center px-16 py-12 bg-gray-50 min-h-[80vh]">
      {/* Left Text Section */}
      <div className="flex-1">
        <h2 className="text-xl text-gray-600">Hello, I’m</h2>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">DEEPIKA</h1>
        <p className="text-gray-600 max-w-md mb-6">
          Architect with 12+ years experience designing residential and commercial spaces.
          Passionate about blending aesthetics and functionality.
        </p>

        <div className="flex gap-4">
          <a href="mailto:architect@email.com">
            <img src="/icons/email.png" alt="email" className="h-6 w-6" />
          </a>
          <a href="https://behance.net/architect">
            <img src="/icons/behance.png" alt="behance" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center">
        <img src="/images/deepika3.png" alt="profile" className="h-150 object-contain" />
      </div>

      {/* Roles */}
      <div className="flex flex-col gap-6">
        <RoleCard title="Architect" imageUrl="/roles/architect.png" />
        <RoleCard title="3D Designer" imageUrl="/roles/3d.png" />
        <RoleCard title="Interior Consultant" imageUrl="/roles/interior.png" />
      </div>
    </section>
  );
}
